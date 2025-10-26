import { ThemeProvider } from "@/providers/theme-provider";
import PageNotFound from "@/components/error/404";

export default function NotFound() {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageNotFound />
        </ThemeProvider>
      </body>
    </html>
  );
}
