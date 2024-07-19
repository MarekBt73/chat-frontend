
import { Link } from '@remix-run/react';

const Nav = () => {
  return (
    <nav className='w-full'>
      <ul className='flex justify-center py-16'>
        <li className='text-white hover:text-red-700 px-5'><Link to="/">Home</Link></li>
        <li className='text-white hover:text-red-700 px-5'><Link to="/chat">Chat</Link></li>
        <li className='text-white hover:text-red-700 px-5'><Link to="/about">About</Link></li>
        <li className='text-white hover:text-red-700 px-5'><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
