/* eslint-disable prettier/prettier */
import React from 'react';

import CvrIcon from '../../../svgs/CvrIcon';
import EmailIcon from '../../../svgs/EmailIcon';
import FacebookIcon from '../../../svgs/FacebookIcon';
import LinkedinIcon from '../../../svgs/LinkedinIcon';
import LocationIcon from '../../../svgs/LocationIcon';
import LogoIcon from '../../../svgs/LogoIcon';
import PhoneIcon from '../../../svgs/PhoneIcon';

const Footer = () => {
  return <div>

    <section id='info' className='mx-10 lg:mx-20 mt-20 pb-20'>
    <LogoIcon width={50} height={50} className=""/>
    <div className='lg:flex lg:flex-row lg:justify-between'>

    
      <ul className='flex flex-col pt-4 pb-16'>
        <li id='Adresse' className='flex flex-row pb-2'>
          <LocationIcon width={20} height={20}/>
          <address className='text-md font-sans pl-1'>Applebys Pl. 7, 1411 København, DK</address>
        </li>

        <li id='Email' className='flex flex-row pb-2'>
          <EmailIcon width={20} height={20}/>
          <address className='text-md font-sans pl-1'>kundeservice@dreamplan.io</address>
        </li>

        <li id='Phone' className='flex flex-row pb-2'>
          <PhoneIcon width={20} height={20}/>
          <address className='text-md font-sans pl-1'>+ 45 4096 5874</address>
        </li>

        <li id='CVR' className='flex flex-row pb-2'>
          <CvrIcon width={20} height={20}/>
          <address className='text-md font-sans pl-1'>CVR 40965874</address>
        </li>
      </ul>

      <div className='pb-10'>
          <h1>
            Følg os på sociale medier:
          </h1>
          <div className='flex'>
            <LinkedinIcon width={50} height={50} className="mt-3"/>
            <FacebookIcon width={50} height={50} className="m-3"/>
          </div>
      </div>
    </div>
      <p className='text-center text-base font-thin'>© Copyright Dreamplan.io</p>

    </section>

  </div>;
};
export default Footer;
