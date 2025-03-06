import { servicesData } from '../../utils/constants';
import metaInfo from '../../utils/metaInfo.json';
import ServicePage from './ServicePage';
import { notFound } from 'next/navigation'; // Ensure this is properly imported

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
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
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) {
    return notFound();
  }

  return <ServicePage service={service} />;
}
