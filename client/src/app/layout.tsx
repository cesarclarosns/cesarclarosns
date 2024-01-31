import "~/styles/globals.css";

// import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const metadata = {
  title: "César Claros",
  description: "Full-Stack Developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
