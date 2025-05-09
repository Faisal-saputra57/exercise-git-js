import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageGrid from "./components/ImageGrid";
import Navbar from "./components/Navbar";
import RecentWork from "./components/RecentWork";
import Testimonial from "./components/Testimonial";

export default function App() {
  const images = [
    "/images/image-1.png",
    "/images/image-2.png",
    "/images/image-3.png",
    "/images/image-7.png",
  ];
  const images2 = [
    "/images/image-4.png",
    "/images/image-5.png",
    "/images/image-6.png",
    "/images/image-7.png",
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <RecentWork />
      <ImageGrid images={images} direction="left" />
      <ImageGrid images={images2} direction="right" />
      <Testimonial />
      <Footer />
    </>
  );
}
