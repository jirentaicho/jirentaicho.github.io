import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../../components/PostCard';
import Sidebar from '../../components/Sidebar';
import { CommonValue } from '../../core/ValueConst';

export const getStaticProps = ({params}) => {
    const files = fs.readdirSync('posts');
    const posts = files.map( (fileName) => {
        const slug = fileName.replace(/\.md$/,'');
        const fileContent = fs.readFileSync(`posts/${fileName}`,'utf-8');
        const {data} = matter(fileContent);
        return {
            frontMatter: data,
            slug,
        };
    });

    const category = params.category;

    const filteredPosts = posts.filter( (post) => {
        // カテゴリにundefinedが混在しているものが出てる
        return post.frontMatter.categories?.includes(category);
    });

    const sortedPosts = filteredPosts.sort( (postA, postB) => 
        new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
    );

    return {
        props: {
            posts: sortedPosts,
        }
    }

}


export const getStaticPaths = () => {
    const categories = CommonValue.categories;
    const paths = categories.map( (category) => ({params: { category}}));
    return {
        paths,
        fallback: false,
    }
}


const Category = ({posts}) => {
    return (
        <div className='my-8 grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-2'>
                {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
            <div className='col-span-1'>
                <Sidebar />
            </div>
      </div>
    );
}


export default Category;