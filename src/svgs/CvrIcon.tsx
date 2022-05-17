import React from 'react';

import { IconType } from '../types/commonTypes';

const CvrIcon = (props: IconType) => {
  const { width, height, className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 21"
      width={width}
      height={height}
      className={className}
    >
      <path d="M18.05 1a2 2 0 0 0-1.46-.65H2.42A2 2 0 0 0 1 1a2 2 0 0 0-.65 1.42V18A2 2 0 0 0 1 19.47a2.06 2.06 0 0 0 1.46.61h14.13A2.08 2.08 0 0 0 18.66 18V2.42A2.06 2.06 0 0 0 18.05 1ZM1.88 18.55a.74.74 0 0 1-.23-.55V2.42a.76.76 0 0 1 .23-.55.76.76 0 0 1 .54-.22H4.6v17.13H2.42a.73.73 0 0 1-.54-.23ZM17.36 18a.74.74 0 0 1-.23.54.73.73 0 0 1-.54.23H5.9V1.65h10.69a.76.76 0 0 1 .54.22.76.76 0 0 1 .23.55Z" />
      <path d="M13.05 5.31h-2.84a.65.65 0 0 0 0 1.3h2.84a.65.65 0 1 0 0-1.3Z" />
    </svg>
  );
};

export default CvrIcon;
