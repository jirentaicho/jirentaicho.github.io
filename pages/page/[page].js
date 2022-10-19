import fs from 'fs';
import matter from 'gray-matter';
import Pagination from '../../components/Pagination';
import PostCard from '../../components/PostCard';
import { CommonValue } from '../../core/ValueConst';
import Sidebar from '../../components/Sidebar';

const PAGE_SIZE = 5;

const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const count = files.length;

  const paths = range(1, Math.ceil(count / CommonValue.PAGENATION_COUNT)).map((i) => ({
    params: { page: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    const current_page = params.page;
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data } = matter(fileContent);
  
      return {
        frontMatter: data,
        slug,
      };
    });
  
    const pages = range(1, Math.ceil(posts.length / CommonValue.PAGENATION_COUNT));
  
    const sortedPosts = posts.sort((postA, postB) =>
      new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
    );
  
    const slicedPosts = sortedPosts.slice(
      CommonValue.PAGENATION_COUNT * (current_page - 1),
      CommonValue.PAGENATION_COUNT * current_page
    );
  
    return {
      props: {
        posts: slicedPosts,
        pages,
        current_page,
      },
    };
  }

  const Page = ({ posts, pages, current_page }) => {
    return (
      <div className='my-8 grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
          <Pagination pages={pages} current_page={current_page} />
        </div>
        
        <div className='col-span-1'>
          <Sidebar />
        </div>

      </div>
    );
  };

  
export default Page;