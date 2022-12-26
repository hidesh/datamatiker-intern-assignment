/* eslint-disable prettier/prettier */
import React from 'react';

import Link from 'next/link';

import Footer from '../components/Header/Footer/footer';
import Header from '../components/Header/Header/header';



const Overblik = () => {
  return (
    <div>
     <Header/>

    <section>
        <div className='container max-w-full bg-dp-Green-moon pb-28'>
          <h1 className='pt-28 text-base text-center font-alternative text-white font-extralight'>Spørgsmål og Svar</h1>
          <h2 className='text-center text-3xl lg:text-5xl mx-5 md:mx-48 lg:mx-60 xl:mx-96 font-alternative font-extrabold text-white'>Hej, her kan du få et overblik</h2>
        </div>
    </section>
     
    <section className='px-10 md:px-16'>
      <h1 className='text-xl xl:text-3xl font-alternative font-semibold mt-28 pb-4'>Generelt</h1>
      <p className='text-md font-sans pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.
      <br/> <br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.</p>
    </section>
    
    <div className='justify-start mx-10 pb-7 md:flex md:justify-center md:mx-0'>
      <button className='bg-dp-Blue-button hover:bg-blue-700 text-white font-bold py-2 px-14 md:py-4 md:px-20 rounded-full'>
        <Link href="/">
          <a className='text-sm font-sans font-medium'>Læs mere på Q&A siden</a>
          </Link>
      </button>
    </div>
    
    <Footer/>
      
    </div>
  );
};

export default Overblik;
