import Layout from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from "geist/font";
import "@/styles/globals.css";

export const metadata = {
  title: "César Claros",
  description: "Full-Stack Developer and Engineer.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable}`}>
        <Layout>{children}</Layout>
        <Toaster></Toaster>
      </body>
    </html>
  );
}
