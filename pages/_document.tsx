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
    document.documentElement.setAttribute("data-theme", "dark");
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
      <Head />
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
