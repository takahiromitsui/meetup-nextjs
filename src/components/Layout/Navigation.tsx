import Link from 'next/link';

const Navigation = () => (
  <header className='flex h-20 w-full items-center justify-between bg-cyan-500 py-0 px-4'>
    <div className='text-3xl font-bold text-white'>Meetups</div>
    <nav>
      <ul className='m-0 flex list-none items-baseline p-0'>
        <li className='ml-12'>
          <Link href='/'>
            <a className='text-2xl font-bold text-white'>All Meetups</a>
          </Link>
        </li>
        <li className='ml-12'>
          <Link href='/new-meetup'>
            <a className='text-2xl font-bold text-white'>Add New Meetup</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
