/* eslint-disable prettier/prettier */
import React from 'react';

import CloseIcon from '../../../svgs/CloseIcon';

const Hero = () => {
  return <div>

<div className='container max-w-full bg-dp-wintergreen-dream pb-28'>
        <h1 className='pt-28 text-base text-center font-alternative text-white font-extralight'>Spørgsmål og Svar</h1>
        <h2 className='text-center text-3xl lg:text-5xl mx-5 md:mx-48 lg:mx-60 xl:mx-96 font-alternative font-extrabold text-white'>Hej, hvordan kan vi hjælp dig?</h2>
      </div>
      
      <section className='container max-md:mx-auto'>
        <div className='container px-4  lg:pl-16 py-28 flex flex-col md:flex-row'>
          <div className='pb-16 lg:pr-40'>
            <h1 className='text-xl xl:text-3xl font-alternative font-semibold pb-4'>Generelt</h1>
            <p className='text-md font-sans lg:max-3xl:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='text-md font-sans max-lg:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.</p>
          </div>
          
          <div>
            <h1 className='text-xl xl:text-3xl font-alternative font-semibold pb-4'>Anvendelse</h1>
            <p className='text-md font-sans lg:max-3xl:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='text-md font-sans max-lg:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.</p>
          
          </div>
        </div>
      </section>

      <section className='px-10 pb-24 lg:pl-16'>
        <h1 className='text-2xl xl:text-3xl font-alternative font-semibold pb-4 xl:pb-1'>Grundlæggende</h1>
          <div className=''>
            <CloseIcon width={25} height={26}/>
            <details className='pb-4'>
                <summary className='text-lg font-alternative font-medium pb-1'>Hvordan får jeg adgang til min Dreamplan Profil?</summary>
                <p className='py-2 xl:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.</p>
            </details>
      
            <details>
              <summary className='text-lg font-alternative font-medium'>Hvornår begynder mit abonnement</summary>
                <p className='py-2 xl:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.
                </p>
            </details>
          </div>
      </section>

  </div>;
};
export default Hero;
