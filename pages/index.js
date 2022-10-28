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

import { useRouter } from 'next/router'
import { useEffect } from 'react'

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

  const router = useRouter();
  const post_id = router.asPath;
  // パスによってリダイレクトさせる
  const params = post_id.slice(4,post_id.length);
  useEffect(() => {
    if(params === String(116)){
      router.replace("/posts/p116/");
    }
    if(params === String(2691)){
      router.replace("/posts/p2691/");
    }
    if(params === String(1460)){
      router.replace("/posts/p1460/");
    }
    if(params === String(535)){
      router.replace("/posts/p535/");
    }
    if(params === String(2727)){
      router.replace("/posts/2727/");
    }
    if(params === String(1720)){
      router.replace("/posts/p1720/");
    }
    if(params === String(511)){
      router.replace("/posts/p511/");
    }
    if(params === String(64)){
      router.replace("/posts/p64/");
    }
    if(params === String(1254)){
      router.replace("/posts/p1254/");
    }
    if(params === String(679)){
      router.replace("/posts/p679/");
    }
    if(params === String(2101)){
      router.replace("/posts/p2101/");
    }
    if(params === String(2761)){
      router.replace("/posts/p2761/");
    }
    if(params === String(3424)){
      router.replace("/posts/p3424/");
    }
    if(params === String(904)){
      router.replace("/posts/p904/");
    }
    if(params === String(3521)){
      router.replace("/posts/p3521/");
    }
    if(params === String(2817)){
      router.replace("/posts/p2817/");
    }
    if(params === String(665)){
      router.replace("/posts/p665/");
    }
    if(params === String(3448)){
      router.replace("/posts/p3448/");
    }
    if(params === String(986)){
      router.replace("/posts/p986/");
    }
    if(params === String(3398)){
      router.replace("/posts/p3398/");
    }
    if(params === String(1369)){
      router.replace("/posts/p1369/");
    }
  },[]);

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
