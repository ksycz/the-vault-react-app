import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../theme/GlobalStyle';
import Heading from '../../components/atoms/Heading/Heading';
import Button from '../../components/atoms/Button/Button';
import { theme } from '../../theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <>
        <Heading>Testik</Heading>
        <Button note>Note</Button>
        <Button twitter>Twitter</Button>
        <Button article>Article</Button>
        <Button primary>Login</Button>
        <Button secondary>Cancel</Button>
        <Button secondary small>
          Cancel
        </Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
