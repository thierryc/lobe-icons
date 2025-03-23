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
      viewBox="0 0 123 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2.66 15.28c1.725.527 3.494.79 5.307.79.915 0 1.699-.052 2.35-.158v-2.266l-2.403-.21c-1.425-.123-2.548-.365-3.366-.725-.819-.36-1.408-.878-1.77-1.554-.36-.676-.54-1.585-.54-2.727 0-1.422.198-2.546.594-3.372.396-.825 1.043-1.422 1.94-1.791.898-.37 2.121-.554 3.67-.554 2.042 0 4.04.238 5.994.712l-.58 3.714a32.589 32.589 0 00-2.338-.382 17.44 17.44 0 00-2.072-.118c-.898 0-1.637.044-2.218.132v2.265l2.165.185c2.112.193 3.626.698 4.541 1.514.916.817 1.373 2.077 1.373 3.78 0 1.915-.532 3.303-1.597 4.163-1.065.861-2.795 1.291-5.188 1.291-2.341 0-4.515-.29-6.522-.87l.66-3.82zm21.44 1.238c1.496 0 3.054-.228 4.673-.685l.58 3.24c-1.742.58-3.66.87-5.755.87-2.323 0-3.996-.54-5.017-1.62-1.02-1.08-1.531-2.859-1.531-5.335 0-2.459.524-4.233 1.57-5.322 1.048-1.089 2.742-1.633 5.084-1.633 1.566 0 2.776.132 3.63.395.854.264 1.461.703 1.822 1.317.36.615.541 1.493.541 2.635 0 1.124-.229 1.993-.686 2.608-.458.615-1.232 1.054-2.324 1.317-1.091.264-2.64.395-4.647.395v1.66c.493.105 1.18.158 2.06.158zm-.159-7.06c-.721 0-1.219.079-1.492.237-.272.158-.409.457-.409.896v1.686h1.558c.722 0 1.219-.084 1.492-.25.273-.167.409-.48.409-.936V9.458h-1.558zM38.49 6.033c2.024 0 3.493.347 4.409 1.04.915.694 1.373 1.814 1.373 3.36v9.141h-2.297l-1.162-1.317c-1.338 1.124-2.852 1.686-4.541 1.686-1.567 0-2.707-.347-3.42-1.04-.713-.694-1.069-1.796-1.069-3.307 0-1.124.216-1.993.647-2.608.431-.615 1.157-1.054 2.178-1.317 1.021-.264 2.465-.396 4.33-.396h.687v-1.66c-.37-.105-.916-.157-1.637-.157-1.584 0-3.265.228-5.043.685l-.555-3.24c1.83-.58 3.864-.87 6.1-.87zm-.74 10.722c.722 0 1.215-.079 1.479-.237.264-.158.396-.457.396-.896V13.7H37.96c-.721 0-1.219.084-1.491.25-.273.167-.41.48-.41.936v1.87h1.69zM49.605 6.402l1.32 1.818c1.18-1.142 2.465-1.88 3.855-2.213l.29 4.505c-.457.07-1.011.232-1.663.487-.65.255-1.135.496-1.452.724v7.851h-4.647V6.402h2.297zm12.33 13.54c-1.355 0-2.45-.232-3.287-.697-.836-.466-1.447-1.208-1.835-2.226-.387-1.019-.58-2.363-.58-4.031 0-1.669.193-3.012.58-4.03.388-1.02.995-1.762 1.822-2.227.828-.465 1.928-.698 3.3-.698.775 0 1.602.053 2.483.158.88.105 1.54.228 1.98.369l-.396 3.267c-.863-.246-1.822-.37-2.878-.37-.704 0-1.202.154-1.492.462-.29.307-.436.82-.436 1.54v4.901c.423.105.986.158 1.69.158 1.127 0 2.253-.228 3.38-.685l.422 3.24c-1.425.58-3.01.87-4.752.87zm6.786-.368V2.397l4.542-.342V6.98c1.144-.632 2.517-.948 4.119-.948 1.232 0 2.191.25 2.878.75.686.501 1.03 1.2 1.03 2.095v10.696h-4.648V9.853h-1.346c-.74 0-1.246.088-1.518.263-.273.176-.41.492-.41.949v8.51h-4.647zm25.506 0l-.766-2.872h-5.148l-.766 2.872H82.9L87.283 3.11h7.208l4.383 16.465h-4.647zm-4.99-6.27h3.3l-1.531-5.77h-.238l-1.531 5.77zm18.931-7.271c1.32 0 2.376.233 3.168.698.792.465 1.373 1.203 1.743 2.213.37 1.01.554 2.358.554 4.044 0 1.686-.184 3.038-.554 4.057-.37 1.019-.951 1.76-1.743 2.226-.792.466-1.848.698-3.168.698-1.179 0-2.139-.167-2.878-.5v4.162l-4.647.369V6.402h2.297l.871 1.264c.44-.562 1.021-.974 1.743-1.238.722-.263 1.593-.395 2.614-.395zm.475 9.695V9.563h-2.27c-.423 0-.709.048-.859.145-.149.097-.224.277-.224.54v6.191h2.297c.405 0 .682-.048.832-.145.149-.096.224-.285.224-.566zm7.552-8.773l4.647-.606v13.225h-4.647V6.955zm2.297-1.95c-.669 0-1.18-.07-1.532-.21a1.319 1.319 0 01-.752-.738c-.15-.351-.225-.86-.225-1.528 0-.966.176-1.629.528-1.989.352-.36 1.013-.54 1.981-.54.968 0 1.628.18 1.98.54.352.36.528 1.023.528 1.99 0 .965-.176 1.62-.528 1.962-.352.342-1.012.513-1.98.513z" />
    </svg>
  );
});

export default Icon;
