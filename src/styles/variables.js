import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #01050a;
    /* homeBackground */
    --navy: background-image: -webkit-gradient(linear,left top,left bottom,from(#0d1465),to(#1a27c9));
            background-image: linear-gradient(180deg,#0d1465,#1a27c9);;
    /* cardBackground */
    --light-navy: #171515;
    /* lineColor */
    --lightest-navy: #e6f1ff;
    /* navBar */
    --navy-shadow: rgba(2, 12, 18, 0.7);
    /* scrollBar */
    --dark-slate: #1a1826;
    /* header description */
    --slate: #8892b0;
    /* jobDecriptopn + sideBar */
    --light-slate: #a8b2d1;
    /* titlesColor */
    --lightest-slate: #ccd6f6;

    --white: #e6f1ff;
    /* majorColor */
    --green: #FFF7DB;
    --green-tint: #050303;
    /* old --green: #ff6467; */
    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
