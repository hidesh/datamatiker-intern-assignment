import React from 'react';

import { IconType } from '../types/commonTypes';

const EmailIcon = (props: IconType) => {
  const { width, height, className } = props;
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 17"
      width={width}
      height={height}
      className={className}
    >
      <path d="M19.42.35H1A.65.65 0 0 0 .35 1v14.88a.65.65 0 0 0 .65.65h18.42a.66.66 0 0 0 .66-.65V1a.66.66 0 0 0-.66-.65Zm-.65 1.3v.84L10.71 9.3a.8.8 0 0 1-1 0L1.65 2.49v-.84ZM1.65 15.23v-11l7.23 6.1a2 2 0 0 0 1.33.49 2.07 2.07 0 0 0 1.34-.49l7.22-6.1v11Z" />
    </svg>
  );
};

export default EmailIcon;
