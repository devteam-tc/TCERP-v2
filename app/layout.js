
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import WhatsappButton from './components/WhatsappButton';
import ScrollToTopButton  from './components/ScrollToTopButton'
import GTM from "./components/GTM";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsappButton from './components/WhatsappButton';
import ScrollToTopButton  from './components/ScrollToTopButton'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Metadata for SEO and Social Media
export const metadata = {
  title: "Cloud Based ERP Software | Best ERP Software in India",
  description: "Tech Cloud ERP offers scalable, user-friendly cloud ERP solutions to streamline business processes in India.",
  keywords: [
    "Tech Cloud ERP",
    "Manufacturing ERP Software",
    "techcloud",
    "techclouderp",
    "Cloud based ERP software",
    "ERP solutions",
    "ERP Software Services",
    "Production ERP software",
    "ERP Software Management",
    "ERP Solution Management",
    "ERP",
    "billing software",
    "Cloud based accounting software",
    "best cloud based software in india"
  ],
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  robots: "index, follow",
  canonical: "https://www.techclouderp.com/",
  alternates: {
    canonical: "https://www.techclouderp.com/",
  },
  openGraph: {
    title: "Cloud Based ERP Software | Best ERP Software in India",
    siteName: "Tech Cloud ERP",
    url: "https://www.techclouderp.com/",
    description: "Tech Cloud ERP offers scalable, user-friendly cloud ERP solutions to streamline business processes in India.",
    type: "website",
    images: [
      {
        url: "https://www.techclouderp.com/",
        width: 1200,
        height: 630,
        alt: "Tech Cloud ERP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@techclouderp",
    title: "Cloud Based ERP Software | Best ERP Software in India",
    description: "Tech Cloud ERP offers scalable, user-friendly cloud ERP solutions to streamline business processes in India.",
    images: ["https://www.techclouderp.com/"],
  },
  verification: {
    google: "tYN1pLqI0Tr2O39pXENnpPijDUfufS4bOQM0sne-r38",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`} style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        {children}
        <WhatsappButton />
        <ScrollToTopButton />
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=e3ca5133-37b8-460b-bdc3-25e8d82513ff" /> 
      </body>
    </html>
  );
}

