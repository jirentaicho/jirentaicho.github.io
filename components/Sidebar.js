import Link from 'next/link';
import { CommonValue } from '../core/ValueConst';

const Sidebar = () => {
    return (
        <>
        <h1 className='text-emerald-500 mt-5 text-xl font-bold'>カテゴリー</h1>
        {CommonValue.categories.map((category) => (
        <div key={category}>
            <ul className="list-none ml-3 mt-1">
            <li>
                <Link href={`/categories/${category}`}>
                <a className='text-emerald-500 mt-5'>{category}</a>
                </Link>
            </li>
            </ul>
        </div>
        ))}
        </>
    );
}

export default Sidebar;