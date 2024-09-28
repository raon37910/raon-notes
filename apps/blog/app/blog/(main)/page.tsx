import Link from 'next/link'
import { useState } from 'react'
import Header from '~/components/Header'
import PostCard from '~/components/PostCard'
import Sidebar from '~/components/Sidebar'
import {
  getAllPostCount,
  getCategoryDetailList,
  getSortedPostList,
} from '~/lib/post'

// Raon Notes🐯

const Blog = async () => {
  const postList = await getSortedPostList()
  const categoryList = await getCategoryDetailList()
  const allPostCount = await getAllPostCount()

  return (
    <div>
      <Header />
      <section className="flex w-full max-w-[1024px] relative justify-center mx-auto gap-4 p-4 pt-36">
        <div className="w-64 h-fit sticky top-24 hidden lg:flex shrink-0">
          <Sidebar categoryList={categoryList} postList={postList} />
        </div>
        <main className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            All <span className="text-sm ">({allPostCount})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {postList.map((post) => (
              <Link href={`/blog/${post.categoryPath}/${post.slug}`}>
                <PostCard key={post.slug} post={post} />
              </Link>
            ))}
          </div>
        </main>
      </section>
    </div>
  )
}

export default Blog
