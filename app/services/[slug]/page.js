import { servicesData } from '../../utils/constants';
import metaInfo from '../../utils/metaInfo.json';
import ServicePage from './ServicePage'
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}
  
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  // Find metadata from metaInfo.json
  const metadata = metaInfo.services[slug];

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

export default function ServicePageWrapper({ params }) {
  return <ServicePage  slug={params.slug} />;
}