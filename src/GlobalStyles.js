import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
        box-sizing: border-box;
    }

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
}

body {
  background-color: var(--white);
  font-family: 'Open Sans',  sans-serif;
  margin: 0;
  max-width: 375px;
}

h1 {
  font-family: Dosis;
  font-size: 48px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--grey-1);
}

h2 {
  font-family: Dosis;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--grey-1);
}

`
