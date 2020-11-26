import React from 'react';

import { IconProps } from './index';

export default ({ isColour, ...props }: IconProps) => (
  <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" {...props}>
    <path
      fill={isColour ? '#FFF' : 'transparent'}
      d="M95.716 31.3156C80.2008 32.0245 70.0907 41.0338 67.9188 56.0863C67.544 58.6817 67.5517 58.4339 67.5224 69.5245L67.4946 79.9641H57.3404H47.1865V91.5467V103.129H57.344H67.5019V131.085V159.041L67.9706 159.121C72.9459 159.978 80.4603 160.24 86.3931 159.765C88.733 159.577 92.2612 159.144 92.4616 159.021C92.5163 158.987 92.5404 150.471 92.5404 131.051V103.129H101.83H111.12L111.163 102.923C111.234 102.581 114.655 80.2075 114.655 80.0814C114.655 79.9753 113.576 79.9641 103.597 79.9641H92.5404V71.7962C92.5404 62.9279 92.546 62.7837 92.9629 61.0719C93.995 56.8345 96.9044 54.0046 101.274 52.988C102.965 52.5944 103.259 52.5787 109.651 52.5458L115.629 52.5149V42.6617C115.629 37.2427 115.616 32.8085 115.599 32.8085C115.582 32.8085 114.629 32.6752 113.481 32.5117C108.726 31.8361 104.471 31.4546 100.074 31.31C97.6281 31.2297 97.5992 31.2297 95.716 31.3156Z"
    />
    <path
      fill={isColour ? '#1877F2' : 'currentColor'}
      d="M75.4858 0.129502C30.2251 2.70365 -3.78606 42.2067 0.339029 87.4107C3.60544 123.204 30.54 152.501 65.9657 158.793C66.781 158.938 67.4597 159.057 67.475 159.057C67.4899 159.057 67.5019 146.473 67.5019 131.093V103.13H57.344H47.1865V91.5472V79.9646H57.3404H67.4947L67.5224 69.525C67.5517 58.4344 67.5441 58.6822 67.9188 56.0867C69.9727 41.852 79.0378 33.0672 93.2898 31.4996C97.888 30.9935 105.475 31.3743 113.481 32.5122C114.629 32.6756 115.582 32.809 115.599 32.809C115.616 32.809 115.629 37.2431 115.629 42.6621V52.5153L109.651 52.5462C103.259 52.5792 102.965 52.5948 101.274 52.9884C96.9044 54.005 93.9951 56.835 92.9629 61.0724C92.546 62.7842 92.5404 62.9284 92.5404 71.7967V79.9646H103.598C113.576 79.9646 114.655 79.9758 114.655 80.0818C114.655 80.208 111.234 102.581 111.163 102.924L111.12 103.13H101.83H92.5408L92.5215 131.095L92.5026 159.06L92.6902 159.022C92.7934 159.002 93.2971 158.915 93.8099 158.829C113.049 155.616 131.036 144.758 143.298 128.956C162.153 104.658 165.322 71.3111 151.385 43.8671C136.969 15.4812 107.199 -1.67389 75.4858 0.129502Z"
    />
  </svg>
);
