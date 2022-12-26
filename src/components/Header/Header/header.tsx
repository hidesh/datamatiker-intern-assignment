/* eslint-disable prettier/prettier */
import React from 'react';

import Link from 'next/link';

import LogoIcon from '../../../svgs/LogoIcon';

const Header = () => {
  return <div>
     <nav className='bg-white max-w-full py-8'>
        <div className='container mx-auto'>
            <Link href="/">
              <a>
                <LogoIcon width={50} height={50} className="absolute top-4 left-4"/>
              </a>
            </Link>
            
            <ul className="flex flex-row justify-center items-center grow">
              <li>
                <Link href="/">
                  <a className="block px-4 text-black text-md">QA</a>
                </Link>
              </li>
              <li>
                <Link href="/overblik">
                  <a className="block px-4 text-black text-md">Overblik</a>
                </Link>
              </li>
            </ul>
            
        </div>

     </nav>
  </div>;
};
export default Header;
