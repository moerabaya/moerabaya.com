import "@/styles/app.scss";
import Script from "next/script";
import Layout from "@/templates/Layout";
import ThemeProvider from "@/templates/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            <Layout>
              {children}
            </Layout>
          </ThemeProvider >
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
