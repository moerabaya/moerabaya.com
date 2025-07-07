import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

function setInitialColorMode() {
  const getMediaQueryPreference = function () {
    const mediaQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === "boolean";

    if (hasPreference) {
      return mql.matches ? "dark" : "light";
    }
    // return default
    return "light";
  };

  function getInitialColorMode() {
    const media = getMediaQueryPreference();
    const preference = window.localStorage.getItem("theme");
    const hasExplicitPreference = typeof preference === "string";
    if (hasExplicitPreference) {
      return preference;
    } else {
      return media;
    }
  }

  const colorMode = getInitialColorMode();

  const root = document.documentElement;
  root.style.setProperty("--initial-color-mode", colorMode);

  if (colorMode === "dark")
    document.documentElement.setAttribute("class", "dark");
}
// our function needs to be a string
const blockingSetInitialColorMode = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render = () => (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: blockingSetInitialColorMode,
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
