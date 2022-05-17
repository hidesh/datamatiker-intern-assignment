import React from 'react';

import { IconType } from '../types/commonTypes';

const FacebookIcon = (props: IconType) => {
  const { width, height, className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 55"
      width={width}
      height={height}
      className={className}
    >
      <path d="M27.16 54.75A27.25 27.25 0 0 1 7.9 8.22a27.23 27.23 0 0 1 19.26-8 27.25 27.25 0 0 1 19.28 46.54 27.09 27.09 0 0 1-19.24 8Zm0-53a25.75 25.75 0 1 0 0 51.5A25.75 25.75 0 0 0 45.38 9.3a25.59 25.59 0 0 0-18.19-7.55Z" />
      <path d="M23.58 41.7h5.7V27.39h4l.45-4.85H29.3v-2.68c0-1.14.23-1.58 1.32-1.58h3.1v-5h-4c-4.25 0-6.18 1.88-6.18 5.46v3.78h-3v4.9h3Z" />
    </svg>
  );
};

export default FacebookIcon;
