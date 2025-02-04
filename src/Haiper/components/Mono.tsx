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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M17.693 10.613a4.307 4.307 0 110-8.613 4.307 4.307 0 010 8.613zm4.304 6.928a4.394 4.394 0 00-2.724-4.064c-.535-.222-1.104-.3-1.722-.333-.878-.047-1.865-.195-2.684-.444-.84-.254-1.557-.805-2.176-1.423-.62-.618-1.144-1.343-1.428-2.17-.285-.83-.382-1.843-.443-2.711-.06-.86-.26-1.72-.746-2.444a4.417 4.417 0 00-6.786-.66 4.394 4.394 0 00.677 6.77c.7.464 1.582.682 2.452.737.913.058 1.86.18 2.72.438.839.254 1.555.806 2.175 1.424.62.618 1.143 1.343 1.428 2.17.282.819.416 1.838.439 2.711.017.663.1 1.161.319 1.701a4.421 4.421 0 005.793 2.416 4.392 4.392 0 001.438-.969 4.383 4.383 0 001.27-3.148h-.002v-.001zM2 17.693a4.307 4.307 0 108.613 0 4.307 4.307 0 00-8.613 0z"
      />
    </svg>
  );
});

export default Icon;
