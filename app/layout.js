
// import { Geist, Geist_Mono } from "next/font/google";
// import { Poppins } from "next/font/google";
// import WhatsappButton from './components/WhatsappButton';
// import ScrollToTopButton  from './components/ScrollToTopButton'
// import GTM from "./components/GTM";
// import GoogleAnalytics from "./components/GoogleAnalytics";
// import "./globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from "react-redux";
// import store from "./redux/store";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// // Metadata for SEO and Social Media
// export const metadata = {
//   title: "Cloud Based ERP Software | Best ERP Software in India",
//   description: "Tech Cloud ERP offers scalable, user-friendly cloud ERP solutions to streamline business processes in India.",
//   keywords: [
//     "Tech Cloud ERP",
//     "Manufacturing ERP Software",
//     "techcloud",
//     "techclouderp",
//     "Cloud based ERP software",
//     "ERP solutions",
//     "ERP Software Services",
//     "Production ERP software",
//     "ERP Software Management",
//     "ERP Solution Management",
//     "ERP",
//     "billing software",
//     "Cloud based accounting software",
//     "best cloud based software in india"
//   ],
//   viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
//   robots: "index, follow",
//   canonical: "https://www.techclouderp.com/",
//   alternates: {
//     canonical: "https://www.techclouderp.com/",
//   },
//   openGraph: {
//     title: "Cloud Based ERP Software | Best ERP Software in India",
//     siteName: "Tech Cloud ERP",
//     url: "https://www.techclouderp.com/",
//     description: "Tech Cloud ERP offers scalable, user-friendly cloud ERP solutions to streamline business processes in India.",
//     type: "website",
//     images: [
//       {
//         url: "https://www.techclouderp.com/",
//         width: 1200,
//         height: 630,
//         alt: "Tech Cloud ERP",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@techclouderp",
//     title: "Cloud Based ERP Software | Best ERP Software in India",
//     description: "Tech Cloud ERP offers scalable, user-friendly cloud ERP solutions to streamline business processes in India.",
//     images: ["https://www.techclouderp.com/"],
//   },
//   verification: {
//     google: "tYN1pLqI0Tr2O39pXENnpPijDUfufS4bOQM0sne-r38",
//   },
// };

// // Organization Schema Markup
// const organizationSchema = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "Tech Cloud ERP (Solutions Unlimited)",
//   "url": "https://techclouderp.com/",
//   "logo": "https://techclouderp.com/logo.webp",
//   "description": "Tech Cloud ERP is a leading provider of cloud-based enterprise resource planning (ERP) solutions, helping businesses streamline operations and improve efficiency.",
//   "contactPoint": {
//     "@type": "ContactPoint",
//     "telephone": "+91 8919439603",
//     "contactType": "customer service",
//     "email": "info@techclouderp.com",
//     "availableLanguage": ["English", "Hindi"]
//   },
//   "address": {
//     "@type": "PostalAddress",
//     "streetAddress": "Office Unit No. 705, Jain Sadguru Capital Park",
//     "addressLocality": " Madhapur",
//     "addressRegion": "Hyderabad",
//     "postalCode": "500081",
//     "addressCountry": "IND"
//   },
//   "sameAs": [
//     "https://www.facebook.com/TechCloudERPSoftwareSolutions/",
//     "https://x.com/TechCloudERP",
//     "https://www.linkedin.com/company/tech-cloud-erp/?viewAsMember=true"
//   ]
// }

// // Review Schema Markup
// const reviewSchema = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   "name": "TechCloud ERP",
//   "image": "https://techclouderp.com/logo.webp",
//   "description": "TechCloud ERP is a cloud-based enterprise resource planning solution designed to streamline business operations.",
//   "brand": {
//     "@type": "Brand",
//     "name": "TechCloud ERP"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.8",
//     "reviewCount": "955"
//   }
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Search Console Site Verification */}
//         <meta name="google-site-verification" content="tYN1pLqI0Tr2O39pXENnpPijDUfufS4bOQM0sne-r38" />

//         {/* Organization Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//         />

//         {/* Google Review Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
//         />

//         {/* Google Tag Manager & Google Analytics */}
//         <GTM />
//         <GoogleAnalytics />
//       </head>
//       <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`} style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
//         <Provider store={store}>
//         {children}
//       </Provider>
//         <WhatsappButton />
//         <ScrollToTopButton />
//         <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=e3ca5133-37b8-460b-bdc3-25e8d82513ff" />
//       </body>
//     </html>
//   );
// }



import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import Providers from "./providers"; // Import Redux Provider
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import GTM from "./components/GTM";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is correctly imported

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

// ✅ Metadata (must stay in this file because it’s a server component)
export const metadata = {
  title: "Cloud Based ERP Software | Best ERP Software in India",
  description:
    "Tech Cloud ERP offers scalable, user-friendly cloud ERP solutions to streamline business processes in India.",
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
    "best cloud based software in india",
  ],
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  robots: "index, follow",
  canonical: "https://www.techclouderp.com/",
  openGraph: {
    title: "Cloud Based ERP Software | Best ERP Software in India",
    siteName: "Tech Cloud ERP",
    url: "https://www.techclouderp.com/",
    description:
      "Tech Cloud ERP offers scalable, user-friendly cloud ERP solutions to streamline business processes in India.",
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
    description:
      "Tech Cloud ERP offers scalable, user-friendly cloud ERP solutions to streamline business processes in India.",
    images: ["https://www.techclouderp.com/"],
  },
  verification: {
    google: "tYN1pLqI0Tr2O39pXENnpPijDUfufS4bOQM0sne-r38",
  },
};

// Organization Schema Markup
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tech Cloud ERP (Solutions Unlimited)",
  "url": "https://techclouderp.com/",
  "logo": "https://techclouderp.com/logo.webp",
  "description": "Tech Cloud ERP is a leading provider of cloud-based enterprise resource planning (ERP) solutions, helping businesses streamline operations and improve efficiency.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 8919439603",
    "contactType": "customer service",
    "email": "info@techclouderp.com",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office Unit No. 705, Jain Sadguru Capital Park",
    "addressLocality": " Madhapur",
    "addressRegion": "Hyderabad",
    "postalCode": "500081",
    "addressCountry": "IND"
  },
  "sameAs": [
    "https://www.facebook.com/TechCloudERPSoftwareSolutions/",
    "https://x.com/TechCloudERP",
    "https://www.linkedin.com/company/tech-cloud-erp/?viewAsMember=true"
  ]
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Site Verification */}
        <meta name="google-site-verification" content="tYN1pLqI0Tr2O39pXENnpPijDUfufS4bOQM0sne-r38" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

      
        {/* Google Tag Manager & Google Analytics */}
        <GTM />
        <GoogleAnalytics />
      </head>
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        {/* ✅ Wrap children with Providers */}
        <Providers>
          {children}
          <GTM />
          <GoogleAnalytics />
          <WhatsappButton />
          <ScrollToTopButton />
        </Providers>

        {/* Zendesk Chat Script */}
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=e3ca5133-37b8-460b-bdc3-25e8d82513ff"
        />
      </body>
    </html>
  );
}
