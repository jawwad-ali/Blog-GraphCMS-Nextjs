import Head from 'next/head'
import { Categories, PostCard, PostWidgets } from "../components"
import { getPosts } from "../services"

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>Next Js Blog Application</Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any) => <PostCard post={post.node} />)}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidgets categories={posts.categories} slug={posts.slug} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
// 1.36.15

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts
    }
  }
}
