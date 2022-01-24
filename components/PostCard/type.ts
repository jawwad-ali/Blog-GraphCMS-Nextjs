type PostType = {
  featuredImage: { url: string };
  title: string;
  slug: string;
  author: {
    author: string;
    photo: {
      url: string;
    }; 
  };
  createdAt: string;
  excerpt: string;
};

export interface Post {
  post: PostType;
}
