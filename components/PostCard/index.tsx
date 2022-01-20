type PostType = {
  title: string
  excerpt: string
}

interface Post {
  post: PostType
}

function PostCard({ post }: Post) {
  return <div>
    {post.title}
    {post.excerpt}
  </div>;
}

export default PostCard;
