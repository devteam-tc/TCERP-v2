// import ProductPage from './ProductPage'; // Adjust the path as needed
// import { productData } from '../../utils/constants';

// export function generateStaticParams() {
//   return Object.keys(productData).map((slug) => ({ slug }));
// }

// export default function ProductPageWrapper({ params }) {
//   return <ProductPage slug={params.slug} />;
// }


import ProductPage from './ProductPage'; // Adjust the path as needed
import { productData } from '../../utils/constants';
import metaInfo from '../../utils/metaInfo.json';

export function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}
  
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  // Find metadata from metaInfo.json
  const metadata = metaInfo.products[slug];

  return metadata
    ? {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
      }
    : {
        title: "Default Title",
        description: "Default Description",
        keywords: "default, keywords",
      };
}

export default function ProductPageWrapper({ params }) {
  return <ProductPage slug={params.slug} />;
}
