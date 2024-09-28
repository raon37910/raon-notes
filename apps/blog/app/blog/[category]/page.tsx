import Link from 'next/link'
import Header from '~/components/Header'
import PostCard from '~/components/PostCard'
import Sidebar from '~/components/Sidebar'
import {
  getAllPostCount,
  getCategoryDetailList,
  getSortedPostList,
} from '~/lib/post'

async function Page({ params }: { params: { category: string } }) {
  const category = params.category
  const postList = await getSortedPostList(category)
  const allPostList = await getSortedPostList()
  const categoryList = await getCategoryDetailList()
  const allPostCount = await getAllPostCount(category)

  return (
    <div>
      <Header />
      <section className="flex w-full max-w-[1024px] relative justify-center mx-auto gap-4 p-4 pt-36">
        <div className="w-64 h-fit sticky top-24 hidden lg:flex shrink-0">
          <Sidebar categoryList={categoryList} postList={allPostList} />
        </div>
        <main className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            {category} <span className="text-sm ">({allPostCount})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {postList.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.categoryPath}/${post.slug}`}
              >
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        </main>
      </section>
    </div>
  )
}

export default Page
