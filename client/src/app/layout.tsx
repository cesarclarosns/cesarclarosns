import Layout from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
// import local from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const monaSans = local({
//   src: [
//     { path: "../fonts/Mona-Sans-Light.woff2", weight: "300" },
//     { path: "../fonts/Mona-Sans-Regular.woff2", weight: "400" },
//     { path: "../fonts/Mona-Sans-Medium.woff2", weight: "500" },
//     { path: "../fonts/Mona-Sans-Bold.woff2", weight: "700" },
//     { path: "../fonts/Mona-Sans-ExtraBold.woff2", weight: "800" },
//   ],
//   variable: "--font-sans",
//   fallback: ["Inter"],
// });

// const nohemi = local({
//   src: [
//     { path: "../fonts/Nohemi-Light.woff", weight: "300" },
//     { path: "../fonts/Nohemi-Regular.woff", weight: "400" },
//     { path: "../fonts/Nohemi-Medium.woff", weight: "500" },
//     { path: "../fonts/Nohemi-Bold.woff", weight: "700" },
//     { path: "../fonts/Nohemi-ExtraBold.woff", weight: "800" },
//   ],
//   variable: "--font-sans",
//   fallback: ["Inter"],
// });

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
      <body className={`font-sans ${inter.variable}`}>
        <Layout>{children}</Layout>
        <Toaster></Toaster>
      </body>
    </html>
  );
}
