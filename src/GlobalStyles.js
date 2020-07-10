import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  --denim: #3b6993;
  --lightblue: #9db3c6;
  --salmon-pink: #ff6d76;
  --white: #fffcf9;
  --grey-1: #272525;
  --grey-2: #3a3839;
  --grey-3: #615f5f;
  --grey-4: #b0aeac;
  --grey-5: #e5e2df;
  --fontheader: 'Dosis';
  --fontbody: 'Open Sans';
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  background-color: var(--white);
  font-family: var(--fontbody), sans-serif;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: var(--grey-2);
}

h1, h2, h3, h4, h5{
  margin: 6px 0 ;
  font-family: var(--fontheader);
  font-weight: normal;
  color: var(--grey-1);
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 24px;
  color: var(--grey-2);
}

h4 {
  font-size: 20px;
  color: var(--grey-2);
}

.text-light {
  color: var(--grey-4);
}

.description {
  font-size: 10px;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 2;
  letter-spacing: 1.5px;
  color: var(--grey-4);
}
`
