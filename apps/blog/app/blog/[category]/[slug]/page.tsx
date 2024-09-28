import Gicius from '~/components/Gicius'
import Header from '~/components/Header'
import PostBody from '~/components/PostBody'
import { PostHeader } from '~/components/PostHeader'
import TableOfContentSideBar from '~/components/TOCSideBar'
import TableOfContentTop from '~/components/TOCTop'
import { getPostDetail, parseToc } from '~/lib/post'

/**
 * url '/blog/category/제목'
 * categoryPath category
 * categoryPublicName category
 * slug title
 * title 제목
 * desc 설명
 * thumbnail 썸네일
 * dateString 2024년 2월 26일
 * readingMinutes 4분 읽기
 */
export default async function Page({
  params: { category, slug },
}: {
  params: { category: string; slug: string }
}) {
  const post = await getPostDetail(category, slug)
  const toc = parseToc(post.content)

  return (
    <>
      <Header />
      <div className="mt-24 prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6">
        <PostHeader post={post} />
        <TableOfContentTop toc={toc} />

        <article className="relative">
          <TableOfContentSideBar toc={toc} />
          <PostBody post={post} />
        </article>
        <hr />
        <Gicius />
      </div>
    </>
  )
}
