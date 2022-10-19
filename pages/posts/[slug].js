import fs from 'fs';
import matter from 'gray-matter';
import markdownit from 'markdown-it';
// import Image from 'next/image';
import {NextSeo} from 'next-seo';

import { createElement, Fragment, useEffect, useState } from 'react';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
// remark-parseの後ろにハイライトの設置
import remarkPrism from 'remark-prism';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

import Link from 'next/link';


//こっちは事前fetchによるpropsの取得
export async function getStaticProps({params}) {
    const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
    const {data,content} = matter(file);

    const result = await unified()
        .use(remarkParse)
        .use(remarkPrism,{
            /* options */
        })
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content);

    return { props: { frontMatter: data, content: result.toString(), slug: params.slug }};
}


// 動的ルーティングに対応するためのfetch
export async function getStaticPaths(){
    const files = fs.readdirSync('posts');
    const paths = files.map( (fileName) => ({
        params: {
            slug : fileName.replace(/\.md/, ''),
        },
    }));
    return {
        paths,
        fallback: false, // 存在しないページへのアクセス時に404を返す
    }
}


const useToReactNode = (content) => {
    const [Content, setContent] = useState(Fragment);
    useEffect( () => {
        const processor = unified()
        .use(rehypeParse,{
            fragment: true,
        })
        .use(rehypeReact, {
            createElement,
            Fragment,
            // 
            components: {
                a: MyLink,
                img: MyImage,
            },
        })
        .processSync(content);
        setContent(processor.result);
    },[content]);
    return Content;
}



const MyLink = ({children, href}) => {
    // 他サイトの場合
    if(href=='') href='/';
    return href.startsWith('/') || href.startsWith('#') ? (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

const MyImage = ({src, alt}) => {
    return <img src={src} alt={alt} width="1200" height="700" />;
}


const Post = ({frontMatter,content,slug}) => {

    return (
        <>
            <NextSeo
                title={frontMatter.title}
                description={frontMatter.description}
                openGraph={{
                    type: 'website',
                    url: `http:localhost:3000/posts/${slug}`,
                    title: frontMatter.title,
                    description: frontMatter.description,
                    images: [
                        {
                            url: `https://locahost:3000/${frontMatter.image}`,
                            width:1200,
                            height:700,
                            alt: frontMatter.title,
                        },
                    ],
                }}
            />
            
            <div className='prose prose-lg max-w-none text-emerald-400'>

                <h1 className='mt-12'>{frontMatter.title}</h1>
                <span>{frontMatter.date}</span>
                <div className='space-x-2'>
                    {frontMatter.categories.map((category) => (
                        <span key={category}>
                            <Link href={`/categories/${category}`}>
                                <a className='text-emerald-300'>{category}</a>
                            </Link>
                        </span>
                    ))}
                </div>
                {useToReactNode(content)}
            </div>
        </>
    );
}
export default Post;