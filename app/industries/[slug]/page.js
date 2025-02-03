// import { menuData } from "../../utils/menuData"; // Import menu data
// import { notFound } from "next/navigation";

// export default function IndustryPage({ params }) {
//   const { slug } = params;

//   // Find matching industry in menuData
//   const industry = menuData
//     .find((item) => item.label === "Industries")?.children
//     ?.flatMap((group) => group.submenu)
//     ?.find((item) => item.href.endsWith(slug));

//   // If industry not found, return 404
//   if (!industry) return notFound();

//   return (
//     <div>
//       <h1>{industry.label}</h1>
//       <p>Details about {industry.label} industry.</p>
//     </div>
//   );
// }


// import Navigation from "../../components/Header/navigation";
// import { menuData } from "../../utils/menuData"; // Import menu data
// import { notFound } from "next/navigation";

// // Function to generate static paths for dynamic pages
// export function generateStaticParams() {
//   const industries = menuData.find((item) => item.label === "Industries")?.children?.flatMap((group) => group.submenu) || [];
//   const products = menuData.find((item) => item.label === "Products")?.children?.flatMap((group) => group.submenu) || [];
//   const services = menuData.find((item) => item.label === "Services")?.children?.flatMap((group) => group.submenu) || [];

//   // Combine all items (industries, products, services)
//   const allItems = [...industries, ...products, ...services];

//   // Map over the items and return their slugs as params
//   return allItems.map((item) => ({
//     slug: item.href.split('/').pop(),  // Assuming href is always in the form "/industries/slug"
//   }));
// }

// export default function IndustryPage({ params }) {
//   const { slug } = params;

//   // Find matching industry in menuData
//   const industry = menuData
//     .find((item) => item.label === "Industries")?.children
//     ?.flatMap((group) => group.submenu)
//     ?.find((item) => item.href.endsWith(slug));

//   // If industry not found, return 404
//   if (!industry) return notFound();

//   return (
//     <div>
//       <Navigation/>
//       <h1>{industry.label}</h1>
//       <p>Details about {industry.label} industry.</p>
//     </div>
//   );
// }


// import { menuData } from "../../utils/menuData"; // Import menu data
// import { notFound } from "next/navigation";

// // ✅ Function to generate static paths for all industry pages
// export function generateStaticParams() {
//   const industries = menuData.find((item) => item.label === "Industries")?.children
//     ?.flatMap((group) => group.submenu) || [];

//   return industries.map((item) => ({
//     slug: item.href.split("/").pop(), // Extracting slug from URL
//   }));
// }

// // ✅ Function to generate dynamic metadata
// export async function generateMetadata({ params }) {
//   const { slug } = params;

//   const industry = menuData
//     .find((item) => item.label === "Industries")?.children
//     ?.flatMap((group) => group.submenu)
//     ?.find((item) => item.href.endsWith(slug));

//   if (!industry) {
//     return {
//       title: "Page Not Found - Industries",
//       description: "The industry page you are looking for does not exist.",
//       keywords: "not found, industries, missing page",
//     };
//   }

//   return {
//     title: `${industry.label} - Industry Information`,
//     description: `Explore details about the ${industry.label}, its features, and its significance.`,
//     keywords: `${industry.label}, ${industry.label} details, ${industry.label} industry`,
//   };
// }

// // ✅ Industry Page Component
// export default function IndustryPage({ params }) {
//   const { slug } = params;

//   const industry = menuData
//     .find((item) => item.label === "Industries")?.children
//     ?.flatMap((group) => group.submenu)
//     ?.find((item) => item.href.endsWith(slug));

//   if (!industry) return notFound();

//   return (
//     <div>
//       <h1>{industry.label}</h1>
//       <p>Details about {industry.label} industry.</p>
//     </div>
//   );
// }


import { menuData } from "../../utils/menuData";
import metaInfo from "../../utils/metaInfo.json"; // Import metadata from JSON
import { notFound } from "next/navigation";

// ✅ Generate static paths
export function generateStaticParams() {
  const industries = menuData.find((item) => item.label === "Industries")?.children
    ?.flatMap((group) => group.submenu) || [];

  return industries.map((item) => ({
    slug: item.href.split("/").pop(), // Extract slug from href
  }));
}

// ✅ Generate unique metadata for each industry
export async function generateMetadata({ params }) {
  const { slug } = params;

  // Debugging: Log slug and available metadata keys
  console.log("Requested Slug:", slug);
  console.log("Available Metadata Keys:", Object.keys(metaInfo.industries));

  // Get metadata from metaInfo.json (case insensitive match)
  const metadata = metaInfo.industries[slug];

  if (!metadata) {
    return {
      title: "Industry Not Found",
      description: "This industry page does not exist.",
      keywords: "not found, industry, missing page",
    };
  }

  return metadata; // ✅ Return metadata from JSON
}

// ✅ Industry Page Component
export default function IndustryPage({ params }) {
  const { slug } = params;

  // Find matching industry in menuData
  const industry = menuData
    .find((item) => item.label === "Industries")?.children
    ?.flatMap((group) => group.submenu)
    ?.find((item) => item.href.endsWith(slug));

  if (!industry) return notFound();

  return (
    <div>
      <h1>{industry.label}</h1>
      <p>{metaInfo.industries[slug]?.description || `Explore insights and trends in the ${industry.label} industry.`}</p>
    </div>
  );
}
