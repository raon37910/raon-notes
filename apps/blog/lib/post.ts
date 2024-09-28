import fs from 'fs'
import path from 'path'

import dayjs from 'dayjs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'

import { CategoryDetail, HeadingItem, Post, PostMatter } from '~/config/types'

const BASE_PATH = '/public/posts'
const POSTS_PATH = path.join(process.cwd(), BASE_PATH)

// 모든 MDX 파일 경로 조회
export const getPostPaths = (category?: string) => {
  const folder = category || '**'
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`)
  return paths
}

// 모든 포스트 목록 조회
export const getPostList = async (category?: string) => {
  const paths: string[] = getPostPaths(category)
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)))
  return posts
}

export const getSortedPostList = async (category?: string) => {
  const postList = await getPostList(category)
  return sortPostList(postList)
}

// category folder name을 public name으로 변경 : dir_name -> Dir Name
export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map(
      (
        token, // TODO 개선 필요
      ) => (token[0] as string).toUpperCase() + token.slice(1, token.length),
    )
    .join(' ')

// post를 날짜 최신순으로 정렬
const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1))
}

const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath)
  const postDetail = await parsePostDetail(postPath)
  return { ...postAbstract, ...postDetail }
}

// MDX의 개요 파싱
// url, cg path, cg name, slug
export const parsePostAbstract = (postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '')

  const [categoryPath, slug] = filePath.split('/')

  if (categoryPath === undefined || slug === undefined) {
    throw new Error('categoryPath or slug is undefined')
  }

  const url = `/blog/${categoryPath}/${slug}`
  const categoryPublicName = getCategoryPublicName(categoryPath)
  return { url, categoryPath, categoryPublicName, slug }
}

// MDX Detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(file)
  const grayMatter = data as PostMatter
  const readingMinutes = Math.ceil(readingTime(content).minutes)
  const dateString = dayjs(grayMatter.date)
    .locale('ko')
    .format('YYYY년 MM월 DD일')
  return { ...grayMatter, dateString, content, readingMinutes }
}

export const getCategoryDetailList = async () => {
  const postList = await getPostList()
  const result: { [key: string]: number } = {}
  for (const post of postList) {
    const category = post.categoryPath
    if (result[category]) {
      result[category] += 1
    } else {
      result[category] = 1
    }
  }
  const detailList: CategoryDetail[] = Object.entries(result).map(
    ([category, count]) => ({
      dirName: category,
      publicName: getCategoryPublicName(category),
      count,
    }),
  )

  return detailList
}

export const getAllPostCount = async (category?: string) =>
  (await getPostList(category)).length

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}/content.mdx`
  const detail = await parsePost(filePath)
  return detail
}

// TODO 코드 분석 필요
export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(##|###) (.*$)/gim
  const headingList = content.match(regex)
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace('##', '').replace('#', ''),
      link:
        '#' +
        heading
          .replace('# ', '')
          .replace('#', '')
          .replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
          .replace('?', ''),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  )
}
