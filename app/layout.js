import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
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
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Load multiple weights
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`} style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        {children}
        <WhatsappButton />
        <ScrollToTopButton />
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=e3ca5133-37b8-460b-bdc3-25e8d82513ff"> </script>
      </body>
    </html>
  );
}
