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
  width: 100vw
}

main {
  padding: 0 20px;
}

h1, h2, h3, h4, h5, p {
  margin: 0
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

h3 {
  font-family: Dosis;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--grey-2);
  margin-top: 6px;
}

h4 {
  font-family: Dosis;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: var(--grey-2);
  margin-top: 6px;
}

p {
  font-family: Open Sans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: 0.3px;
  color: var(--grey-2);
}
.text-light {
  color: var(--grey-4);
}

link {
  font-family: Open Sans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--denim);
}

caption {
  font-family: OpenSans;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--grey-3);
}

.description {
  font-family: OpenSans;
  font-size: 9px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.5px;
  color: var(--grey-4);
}

`
