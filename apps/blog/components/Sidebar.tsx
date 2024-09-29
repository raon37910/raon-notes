'use client'

import { useParams, useRouter } from 'next/navigation'

import { Github, Page } from 'iconoir-react'
import { CategoryDetail, Post } from '~/config/types'
import Profile from './Profile'
import Search from './Search'

interface SidebarProps {
  categoryList: CategoryDetail[]
  postList: Post[]
}

// 사이드바 컴포넌트 생성
function Sidebar({ categoryList, postList }: SidebarProps) {
  const params = useParams()
  const router = useRouter()

  const handleCategoryClick = (category?: string) => async () => {
    if (category) {
      router.push(`/blog/${category}`)
    } else {
      router.push('/blog')
    }
  }

  return (
    <aside className="bg-white flex flex-col justify-between gap-16 relative rounded-lg py-4 px-6 overscroll-none overflow-y-auto shrink-0 z-10 max-w-64 dark:bg-black">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-cente mb-2">
            <Profile />
          </div>
          {/* 닉네임 */}
          <p className="text-center text-lg font-bold">♻️ Raon </p>
          {/* TODO 컴포넌트 분리 */}
          <div className="flex gap-2 justify-center">
            <span className="bg-green-600 text-primary-foreground px-2 py-1 rounded-full text-sm dark:bg-black dark:text-green-600 dark:border-green-600 dark:border">
              Enginner
            </span>
            <span className="bg-green-600 text-primary-foreground px-2 py-1 rounded-full text-sm dark:bg-black dark:text-green-600 dark:border-green-600 dark:border">
              Product Maker
            </span>
          </div>
          <Search postList={postList} />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        {/* TODO 카테고리 컴포넌트화 */}
        <span className="font-light text-[0.8rem]">Categories</span>
        <ul>
          <button
            onClick={handleCategoryClick()}
            className={`text-slate-800 flex w-full items-center rounded-md p-3 transition-all dark:text-white ${
              params.category === '' || params.category === undefined
                ? 'bg-green-600 text-white'
                : 'hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer dark:hover:bg-slate-900 dark:focus:bg-slate-900 dark:active:bg-slate-900'
            }`}
          >
            <li>
              <span>All</span>
            </li>
          </button>
          {categoryList.map((category) => (
            <button
              key={category.dirName}
              onClick={handleCategoryClick(category.dirName)}
              className={`text-slate-800 flex w-full items-center rounded-md p-3 transition-all dark:text-white ${
                params.category === category.dirName
                  ? 'bg-green-600 text-white'
                  : 'hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer dark:hover:bg-slate-900 dark:focus:bg-slate-900 dark:active:bg-slate-900'
              }`}
            >
              <li>
                <span>{category.publicName}</span>
              </li>
            </button>
          ))}
        </ul>
      </div>
      {/* Github, Resume 링크 */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center gap-8">
          <a
            href="https://github.com/raon37910"
            target="_blank"
            rel="noreferrer"
            className="flex text-xs hover:text-green-600 transition-colors gap-1 items-center"
            aria-label={`go to raon37910's github`}
          >
            <Github />
            Github
          </a>
          {/* TODO 이력서 링크 변경 필요 */}
          <a
            href="https://github.com/raon37910"
            target="_blank"
            rel="noreferrer"
            className="flex text-xs hover:text-green-600 transition-colors gap-1 items-center"
            aria-label={`go to raon37910's resume`}
          >
            <Page />
            Resume
          </a>
        </div>

        <div className="flex flex-col items-center text-[10px] text-textColor/30">
          <span className="whitespace-pre-wrap text-center">{`Copyright 2024. raon37910 All rights reserved.`}</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
