


import { servicesContent } from "../utils/constants";
import ServiceContentSection from "./ServiceContentSection";

export async function generateStaticParams() {
  return servicesContent.map((service) => ({
    slug: service.title.replace(/\s+/g, "-").toLowerCase(),
  }));
}

export const metadata = {
  title: "Our Services - Tech Cloud ERP",
  description: "Explore the wide range of services offered by Tech Cloud ERP. We provide expert solutions tailored to your needs.",
};

export default function Page() {
  return <ServiceContentSection />;
}