import { Routing } from "@/pages";
import { Header } from "@/widgets/header";
import { Suspense } from "react";
import "@/shared/config/i18n";
import { Footer } from "@/widgets/footer";
import { globalStyles } from "@/app/globalStyles";
import { styled } from "@/shared/config/stitches/stitches.config";
import { Provider } from "@/app/providers/provider";

export const App = () => {
  globalStyles();

  return <Provider>
    <Root>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <Main>
          <Routing />
        </Main>
      </Suspense>
      <Footer />
    </Root>
  </Provider>;
};

const Root = styled("div", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden"
});

const Main = styled("main", {
  flex: "1",
  paddingBottom: "48px",
  paddingTop: "32px"
});
