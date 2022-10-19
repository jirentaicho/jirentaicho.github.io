import Link from 'next/link';

const Pagination = ({ pages, current_page = 1 }) => {
  return (
    <div className='flex items-center space-x-1 mt-8'>
      {pages.map((page) => (
        <Link href={`/page/${page}`} key={page}>
          <a
            className={`px-4 py-2 border border-emerald-400 hover:bg-black hover:text-emerald-200 ${
              current_page == page && 'bg-black text-emerald-300'
            }`}
          >
            {page}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;