
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
    id: string;
    newsTitle: string;
    newsContent: string;
    url: string;
    newsCategory: string[];
  }
  
const gqlProductByIdQuery = `query GetPostById($postID: String!) {
  newsArticle(id: $postID) {
    newsTitle
    newsContent
    newsImage {
      url
    }
    newsCategory
  }
  }

`;


const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllPosts = async (): Promise<NewsArticle[]> => {
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

    const blogs: NewsArticle[] = body.newsArticleCollection.items.map((item: any) => ({
        id: item.sys.id,
        newsTitle: item.newsTitle,
        newsContent: item.newsContent,
        url: item.newsImage.url,
        category: item.category,
      }));
      return blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
};

const getPostId = async (
  ids: string
): Promise<NewsArticle | null> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      cache: 'no-store',
      body: JSON.stringify({
        query: gqlProductByIdQuery,
        variables: { postID: ids },
      }),
    });

    
    const responseBody = await response.json();
    

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
    const body = responseBody.data.newsArticle;

    const blog: NewsArticle = {
        id: ids,
        newsTitle: body.newsTitle,
        newsContent: body.newsContent,
        url: body.newsImage.url,
        newsCategory: body.category,
      };
    return blog;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const contentfulService = {
  getAllPosts,
  getPostId,
};

export default contentfulService;