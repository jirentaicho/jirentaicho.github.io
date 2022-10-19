import Link from 'next/link';

const Header = () => {
    return (
        <header className='sticky top-0 border-b border-zinc-400 z-10 bg-zinc-900 text-slate-400'>
            <div className='max-w-4xl mx-auto flex justify-between items-center h-12'>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="https://github.com/jirentaicho">
                    <a target="_blank">Github</a>
                </Link>
                <Link href="https://zenn.dev/misaka">
                    <a target="_blank">Zenn</a>
                </Link>
            </div>
        </header>
    );
}

export default Header;