import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination';

import { CommonValue } from '../core/ValueConst';
import Sidebar from '../components/Sidebar';

// 実行時に処理される？
// 例えば記事情報を取得する・・・？
// 事前にfetchする処理
// これはpropsに値を渡す処理
export const getStaticProps = () => {
  const files = fs.readdirSync('posts');
  const posts = files.map( fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}` , 'utf-8');
    const {data} = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const sortedPosts = posts.sort((postA,postB) => 
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  const pages = CommonValue.range(1, Math.ceil(posts.length / CommonValue.PAGENATION_COUNT));


  return {
    props:{
      posts: sortedPosts.slice(0, CommonValue.PAGENATION_COUNT),
      pages,
    }
  }
}

export default function Home({posts,pages}) {
  return ( 
    <div className='my-8 grid grid-cols-1 md:grid-cols-3'>
      <div className='col-span-2'>
        {posts.map( (post) => (
          <div key={post.slug}>
            <PostCard key={post.slug} post={post} /> 
          </div>
        ))}
      <Pagination pages={pages} />  
      </div>

      <div className='col-span-1'>
        <Sidebar />
      </div>
      
    </div>
  )
}
