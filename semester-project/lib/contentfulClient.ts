
const gqlAllBlogPostsQuery = `query GetNewsArticles {
    newsArticleCollection {
      items {
        sys {
          id
        }
        newsTitle
        newsContent
        newsImage {
          url
        }
        newsCategory
      }
    }
  }`;

  interface NewsArticle {
    sys: {
      id: string;
    };
    newsTitle: string;
    newsContent: string;
    newsImage: {
      url: string;
    };
    newsCategory: string[];
  }

  interface NewsArticle2 {
    id: string;
    newsTitle: string;
    newsContent: string;
    url: string;
    newsCategory: string[];
  }
  
  interface NewsArticlesData {
    newsArticleCollection: {
      items: NewsArticle[];
    };
  }
  
//   export { NewsArticle, NewsArticlesData };

// const gqlProductByIdQuery = `query GetPostById($postID: String!) {
//   blogPost(id: $postID) {
//     title
//     text
//     label
//     image {
//       title
//       url
//     }
//   }
// }`;


const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllPosts = async (): Promise<NewsArticle2[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      cache: 'no-store',
      body: JSON.stringify({ query: gqlAllBlogPostsQuery }),
    });

    const responseBody = await response.json();

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
    const body = responseBody.data;

    const blogs: NewsArticle2[] = body.newsArticleCollection.items.map((item: any) => ({
        id: item.sys.id,
        newsTitle: item.newsTitle,
        newsContent: item.newsContent,
        url: item.newsImage.url,
        category: item.category,
      }));
      console.log(body.newsArticleCollection.items)
      return blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
};

// const getPostId = async (
//   ids: string
// ): Promise<TypeBlogDetailItem | null> => {
//   try {
//     const response = await fetch(baseUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
//       },
//       cache: 'no-store',
//       body: JSON.stringify({
//         query: gqlProductByIdQuery,
//         variables: { postID: ids },
//       }),
//     });

//     const body = (await response.json()) as {
//       data: BlogPostDetail;
//     };
//     const responseProduct = body.data.blogPost;
//     const product: TypeBlogDetailItem ={
//       id: ids, 
//       name: responseProduct.title,
//       description: responseProduct.text,
//       image: responseProduct.image?.url,
//       categories: responseProduct.label,
//     };
//     return product;
//   } catch (error) {
//     console.log(error);

//     return null;
//   }
// };

const contentfulService = {
  getAllPosts,
//   getPostId,
};

export default contentfulService;