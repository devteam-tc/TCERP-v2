
  
import Link from "next/link";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import Navigation from "./components/Header/navigation";
import Footer from "./components/Footer";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <Container className="d-flex flex-column align-items-center justify-content-center text-center vh-75">
        <Image
          src="/errorImg.png"
          alt="Error 404"
          width={500}
          height={500}
          className="img-fluid"
          style={{ maxWidth: "80%", height: "auto" }} // Ensures proper responsiveness
        />
        <Link href="/" passHref>
          <Button
            style={{ backgroundColor: "#EF5226", borderColor: "#EF5226" }}
            className="mt-3 mb-5 px-4 py-2"
          >
            Go to Home Page
          </Button>
        </Link>
      </Container>
      <Footer />
    </>
  );
}
