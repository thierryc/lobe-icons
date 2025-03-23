'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 58 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M19.942 13.032H5.434c.14 4.128 3.014 6.121 5.817 6.121 2.803 0 4.345-1.281 5.151-3.167h3.294C18.82 19.296 15.842 22 11.251 22 5.294 22 2 17.66 2 12c0-6.05 3.995-9.929 9.146-9.929 5.747 0 9.216 4.911 8.796 10.961zm-8.796-8.185c-2.838 0-5.396 1.566-5.677 5.41h11.108c-.07-2.705-2.067-5.41-5.431-5.41zM38.035 2.392l-6.413 9.145 7.044 10h-3.82l-5.116-7.295-5.081 7.296h-3.645l6.939-9.858-6.518-9.288h3.82l4.59 6.583 4.626-6.583h3.574zM52.887 13.53v-1.21c-5.782.605-9.461 1.46-9.461 4.093 0 1.815 1.366 3.025 3.644 3.025 2.978 0 5.817-1.388 5.817-5.908zM46.369 22c-3.54 0-6.483-1.993-6.483-5.516 0-4.52 5.011-5.836 12.755-6.726v-.463c0-3.487-1.927-4.662-4.274-4.662-2.629 0-4.17 1.46-4.311 3.808h-3.294C41.078 4.313 44.652 2 48.332 2c5.186 0 7.533 2.527 7.498 7.9l-.035 4.413c-.035 3.203.14 5.41.49 7.224h-3.223a21.038 21.038 0 01-.245-2.633C51.66 20.86 49.697 22 46.369 22z" />
    </svg>
  );
});

export default Icon;
