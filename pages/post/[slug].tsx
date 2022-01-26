import { getPosts, getPostDetails } from "../../services"
import { PostDetail, Categories, PostWidgets, Author, Comments, CommentForm, Loader } from "../../components"
import { Post } from "../../components/PostCard/type"

const PostDetails = ({ post }: Post) => {
    console.log("postsSlug", post)
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    {/* <PostDetail post={post} />
                    <Author author={post.author} />
                    <CommentForm slug={post.slug} />
                    <Comments slug={post.slug} /> */}
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="lg:sticky top-8 relative">
                        <PostWidgets slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div >
    )
};

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)

    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}
export default PostDetails;