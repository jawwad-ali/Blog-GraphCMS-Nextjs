import Head from 'next/head'
import { Categories, PostCard, PostWidgets } from "../components"

const posts = [
  { title: "Learn React", excerpt: "Learn React With Us" },
  { title: "Learn Amazon Web Service", excerpt: "Learn AWS with us" },
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>Next Js Blog Application</Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, idx) => <PostCard post={post} key={post.title} />)}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidgets />
            <Categories />
          </div>
        </div>

      </div>
    </div>
  )
}
// 36.40
