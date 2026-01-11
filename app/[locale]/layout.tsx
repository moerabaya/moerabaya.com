import "@/styles/app.scss";

import { Montserrat, Vazirmatn } from "next/font/google";
import Layout from "@/templates/Layout";
import ThemeProvider from "@/templates/ThemeProvider";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  // Conditionally load Vazirmatn only for Arabic locale
  const isArabic = locale === "ar";
  const bodyClassName = clsx({
    [montserrat.variable]: !isArabic,
    [vazirmatn.variable]: isArabic,
  });

  return (
    <html lang={locale}>
      <body
        className={bodyClassName}
        lang={locale}
        dir={isArabic ? "rtl" : "ltr"}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
