import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";

export const getPosts = async () => {
  const query = gql`
    query MyQuery { 
      postsConnection { 
        edges {
          node {
            excerpt
            slug
            title
            createdAt
            author {
              bio
              author
              id
              photo {
                url
              }
            }
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
