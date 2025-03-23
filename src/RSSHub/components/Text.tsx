'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="nonzero"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 106 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M90.256 21.706V2.266h3.436v7.27h.142c.178-.354.428-.73.75-1.129.323-.405.76-.75 1.31-1.035.55-.29 1.253-.436 2.107-.436 1.127 0 2.143.288 3.047.864.912.57 1.633 1.414 2.165 2.534.538 1.114.807 2.48.807 4.1 0 1.602-.263 2.962-.788 4.082-.526 1.12-1.241 1.975-2.146 2.563-.904.589-1.93.883-3.075.883-.835 0-1.528-.14-2.079-.418-.55-.278-.993-.614-1.329-1.006a6.512 6.512 0 01-.769-1.13h-.199v2.298h-3.38zm3.37-7.29c0 .942.132 1.768.398 2.477.272.709.662 1.262 1.168 1.661.512.393 1.133.589 1.86.589.76 0 1.396-.203 1.908-.608.513-.411.899-.971 1.158-1.68.266-.715.399-1.528.399-2.44 0-.904-.13-1.708-.389-2.41-.26-.703-.646-1.253-1.158-1.652-.513-.399-1.152-.598-1.918-.598-.734 0-1.357.193-1.87.579-.512.386-.901.927-1.167 1.623-.26.696-.39 1.516-.39 2.459zM83.134 15.574V7.126h3.436v14.58H83.24v-2.591h-.152a4.384 4.384 0 01-1.624 2.002c-.746.52-1.667.779-2.762.779-.955 0-1.8-.212-2.534-.636-.728-.43-1.297-1.054-1.709-1.87-.411-.823-.617-1.816-.617-2.98V7.125h3.437v8.752c0 .924.253 1.658.759 2.202s1.17.816 1.993.816c.506 0 .997-.123 1.471-.37a2.992 2.992 0 001.168-1.101c.31-.494.465-1.11.465-1.851zM54.102 21.706V2.266h3.522v8.23h9.008v-8.23h3.531v19.44h-3.53v-8.259h-9.009v8.259h-3.522zM47.309 7.61c-.089-.83-.462-1.475-1.12-1.937-.652-.461-1.5-.692-2.544-.692-.735 0-1.364.11-1.89.332-.525.221-.926.522-1.205.902-.278.38-.42.813-.427 1.3 0 .405.092.756.275 1.054.19.297.446.55.77.759.322.202.68.373 1.072.513.392.139.788.256 1.186.35l1.823.456c.734.171 1.44.402 2.116.693a7.458 7.458 0 011.832 1.101c.545.443.975.978 1.291 1.605.317.626.475 1.36.475 2.202 0 1.139-.291 2.142-.873 3.009-.582.86-1.424 1.534-2.525 2.022-1.095.48-2.42.721-3.977.721-1.513 0-2.826-.234-3.94-.702-1.107-.469-1.974-1.152-2.6-2.05-.62-.9-.956-1.994-1.007-3.285h3.465c.05.677.26 1.24.627 1.69.366.449.844.784 1.433 1.006.595.221 1.26.332 1.993.332.766 0 1.437-.114 2.013-.342.582-.234 1.037-.557 1.366-.968.33-.418.497-.905.503-1.462-.006-.506-.155-.924-.446-1.253-.29-.335-.699-.614-1.224-.835a11.802 11.802 0 00-1.823-.607l-2.211-.57c-1.601-.411-2.867-1.035-3.797-1.87-.924-.842-1.386-1.959-1.386-3.35 0-1.146.31-2.15.93-3.01.627-.86 1.478-1.528 2.554-2.003C41.113 2.241 42.332 2 43.692 2c1.38 0 2.588.24 3.626.721 1.044.475 1.864 1.136 2.459 1.984.594.842.901 1.81.92 2.905H47.31zM29.95 7.61c-.089-.83-.462-1.475-1.12-1.937-.652-.461-1.5-.692-2.544-.692-.734 0-1.364.11-1.89.332-.524.221-.926.522-1.205.902-.278.38-.42.813-.427 1.3 0 .405.092.756.276 1.054.19.297.446.55.768.759.323.202.68.373 1.073.513.392.139.788.256 1.186.35l1.823.456c.734.171 1.44.402 2.117.693a7.46 7.46 0 011.832 1.101c.544.443.974.978 1.29 1.605.317.626.475 1.36.475 2.202 0 1.139-.29 2.142-.873 3.009-.582.86-1.424 1.534-2.525 2.022-1.095.48-2.42.721-3.977.721-1.512 0-2.826-.234-3.94-.702-1.107-.469-1.974-1.152-2.6-2.05-.62-.9-.956-1.994-1.006-3.285h3.464c.05.677.26 1.24.627 1.69.367.449.845.784 1.433 1.006.595.221 1.26.332 1.993.332.766 0 1.437-.114 2.013-.342.582-.234 1.038-.557 1.367-.968.329-.418.496-.905.503-1.462-.007-.506-.155-.924-.446-1.253-.291-.335-.7-.614-1.225-.835a11.802 11.802 0 00-1.822-.607l-2.212-.57c-1.601-.411-2.867-1.035-3.797-1.87-.924-.842-1.386-1.959-1.386-3.35 0-1.146.31-2.15.93-3.01.627-.86 1.478-1.528 2.554-2.003C23.755 2.241 24.973 2 26.333 2c1.38 0 2.589.24 3.626.721 1.044.475 1.864 1.136 2.459 1.984.595.842.901 1.81.92 2.905H29.95zM2 21.706V2.266h7.29c1.493 0 2.746.26 3.759.778 1.019.519 1.788 1.247 2.306 2.183.526.93.788 2.016.788 3.256 0 1.247-.265 2.329-.797 3.246-.525.912-1.3 1.617-2.326 2.117-1.025.494-2.284.74-3.777.74H4.05v-2.923h4.718c.873 0 1.588-.12 2.145-.36.557-.248.968-.605 1.234-1.073.272-.475.408-1.057.408-1.747 0-.69-.136-1.278-.408-1.766-.272-.493-.687-.866-1.243-1.12-.557-.26-1.275-.389-2.155-.389H5.522v16.498H2zm10.043-8.81l4.812 8.81h-3.93l-4.727-8.81h3.845z" />
    </svg>
  );
});

export default Icon;
