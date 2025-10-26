import { Metadata, Viewport } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, setRequestLocale } from "next-intl/server";

import "./globals.css";

import { APP_DEFAULT_DESCRIPTION, APP_DEFAULT_TITLE } from "@/config/config";
import { icons, startupImages } from "@/config/icons";

import { Providers } from "@/components/global/providers";
import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: APP_DEFAULT_TITLE,
  description: APP_DEFAULT_DESCRIPTION,
  icons: icons,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    startupImage: startupImages,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  userScalable: false,
  themeColor: [{ color: "#171717" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({
    locale,
  });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale} suppressHydrationWarning className="scroll-smooth">
        <head>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#171717" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </head>
        <body>
          <Providers>
            <Header />
            <div>{children}</div>
            <Toaster />
          </Providers>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
