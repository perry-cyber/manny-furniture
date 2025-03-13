import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
  <script
            dangerouslySetInnerHTML={{
              __html: `
                MomentCRM('init', {
                  'teamVanityId': 'manny-livechat',
                  'doChat': true,
                  'doTimeTravel': true,
                  'quadClickForFeedback': true,
                });
              `,
            }}
          />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script defer src="https://www.momentcrm.com/embed" />
      </body>
    </html>
  );
}
