import Link from 'next/link';
//import Image from 'next/image';

// 記事一覧に表示させる投稿カード
const PostCard = ({post}) => {
    return (
        <Link href={`/posts/${post.slug}`}>
            <a>
                <div className='px-2 py-4 text-slate-300'>
                    <h1 className='font-bold text-lg text-emerald-400'>{post.frontMatter.title}</h1>
                    <span className='text-emerald-500'>{post.frontMatter.date}</span>
                </div>
            </a>

        </Link>
    );
}

export default PostCard;