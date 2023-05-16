<<<<<<< HEAD
import '@/shared/config/i18n'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { appStarted } from '@/entities/session'
import { Pages } from '@/pages'
import { darkTheme, styled } from '@/shared/config/stitches/stitches.config'
import { globalStyles } from './global-styles'
import { Provider } from './providers'
=======
import { useUnit } from "effector-react";
import { useEffect } from "react";

import { Pages } from "@/pages";

import { appStarted } from "@/entities/session";

import "@/shared/config/i18n";
import { styled } from "@/shared/config/stitches/stitches.config";

import { globalStyles } from "./global-styles";
import { Provider } from "./providers";
>>>>>>> main

export const App = () => {
  globalStyles();

  const startApp = useUnit(appStarted);

  useEffect(() => {
    startApp();
  }, [startApp]);

  return (
    <Provider>
      <Root className={darkTheme}>
        <Pages />
      </Root>
    </Provider>
  );
};

<<<<<<< HEAD
const Root = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
  backgroundColor: '$canvasDefault',
})
=======
const Root = styled("div", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
});
>>>>>>> main
