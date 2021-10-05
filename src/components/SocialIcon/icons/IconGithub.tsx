import React from 'react';

import { IconProps } from './index';

const Icon = ({ isColour, ...props }: IconProps) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M22.3901 6.27021C21.3171 4.43164 19.8615 2.97604 18.0231 1.90308C16.1844 0.83007 14.1771 0.293701 11.9998 0.293701C9.82276 0.293701 7.81481 0.830234 5.97651 1.90308C4.13794 2.97598 2.68245 4.43164 1.60938 6.27021C0.536478 8.10873 0 10.1164 0 12.2932C0 14.908 0.762879 17.2593 2.28902 19.3477C3.815 21.4362 5.78634 22.8814 8.20287 23.6835C8.48416 23.7357 8.69239 23.6989 8.82778 23.5742C8.96323 23.4493 9.03087 23.2929 9.03087 23.1057C9.03087 23.0744 9.02819 22.7933 9.02299 22.2619C9.01763 21.7306 9.01511 21.2671 9.01511 20.8716L8.65573 20.9337C8.42659 20.9757 8.13753 20.9935 7.78854 20.9885C7.43972 20.9836 7.07759 20.947 6.70267 20.8791C6.32758 20.8117 5.9787 20.6555 5.65576 20.4107C5.33299 20.1659 5.10385 19.8455 4.9684 19.4499L4.81216 19.0904C4.70802 18.851 4.54406 18.5851 4.32006 18.2936C4.09607 18.0019 3.86956 17.8041 3.64042 17.6999L3.53103 17.6216C3.45813 17.5696 3.39049 17.5068 3.32794 17.434C3.26544 17.3611 3.21865 17.2882 3.1874 17.2152C3.1561 17.1422 3.18204 17.0822 3.2655 17.0352C3.34895 16.9882 3.49978 16.9654 3.71863 16.9654L4.031 17.0121C4.23934 17.0538 4.49705 17.1786 4.80444 17.387C5.11167 17.5953 5.36423 17.8661 5.56218 18.1993C5.80188 18.6264 6.09067 18.952 6.42937 19.176C6.76779 19.3999 7.10901 19.5117 7.45269 19.5117C7.79636 19.5117 8.0932 19.4857 8.3433 19.4339C8.59312 19.3818 8.82751 19.3035 9.04636 19.1994C9.1401 18.5012 9.39535 17.9648 9.81187 17.5899C9.2182 17.5275 8.68446 17.4335 8.21037 17.3086C7.73655 17.1835 7.24692 16.9805 6.7418 16.6989C6.2364 16.4178 5.81715 16.0687 5.48392 15.6523C5.15064 15.2356 4.87712 14.6885 4.66374 14.0116C4.45026 13.3345 4.34349 12.5533 4.34349 11.6679C4.34349 10.4073 4.75503 9.33459 5.57794 8.44912C5.19245 7.50138 5.22884 6.43893 5.68723 5.26188C5.98931 5.16803 6.4373 5.23846 7.03097 5.47274C7.62474 5.70713 8.05949 5.90792 8.33563 6.0744C8.61178 6.24082 8.83304 6.38185 8.99973 6.49623C9.96866 6.2255 10.9686 6.09011 11.9997 6.09011C13.0308 6.09011 14.031 6.2255 14.9999 6.49623L15.5937 6.12141C15.9997 5.87131 16.4791 5.64212 17.0309 5.43378C17.5829 5.22555 18.0051 5.16819 18.2969 5.26205C18.7655 6.43915 18.8072 7.50154 18.4216 8.44929C19.2445 9.33475 19.6562 10.4078 19.6562 11.6681C19.6562 12.5535 19.549 13.3371 19.3359 14.0195C19.1224 14.7019 18.8466 15.2484 18.5081 15.6601C18.1693 16.0717 17.7474 16.418 17.2423 16.6991C16.737 16.9804 16.2473 17.1834 15.7734 17.3085C15.2994 17.4336 14.7657 17.5277 14.172 17.5902C14.7134 18.0587 14.9842 18.7983 14.9842 19.8087V23.1052C14.9842 23.2925 15.0494 23.4488 15.1797 23.5738C15.3099 23.6985 15.5155 23.7352 15.7968 23.683C18.2137 22.8811 20.185 21.4358 21.7109 19.3472C23.2367 17.2588 23.9998 14.9075 23.9998 12.2927C23.9993 10.1162 23.4625 8.10873 22.3901 6.27021Z"
      fill={isColour ? '#000' : 'currentColor'}
    />
  </svg>
);

export default Icon;
