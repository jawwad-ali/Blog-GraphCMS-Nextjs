type Author = {
  author: string;
  photo: {
    url: string;
  };
};

export interface Post { 
  featuredImage: { url: string };
  title: string;
  slug: string;
  createdAt: string;
  excerpt: string;
  author: Author;
}

/**** POST WIDGET ******/
export interface PostWidget {
  categories: string[];
  slug: string;
}

// Related Post
export interface RelatedPost {
  title: string;
  featuredImage: { url: string };
  createdAt: string;
  slug: string;
}

// Category
export interface Category {
  name: string;
  slug: string;
}
