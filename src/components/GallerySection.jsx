/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 sm:-left-12 top-1/2 transform -translate-y-1/2 z-10 bg-[#8AA22B] p-2 rounded-full text-white hover:bg-[#6F8623] transition"
    >
      <ChevronLeft size={24} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 sm:-right-12 top-1/2 transform -translate-y-1/2 z-10 bg-[#8AA22B] p-2 rounded-full text-white hover:bg-[#6F8623] transition"
    >
      <ChevronRight size={24} />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(1).JPG?alt=media&token=d3a39e8a-5d4f-4e3e-8f3a-f88e944e39ba", alt: "Gallery Image 1" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(2).JPG?alt=media&token=5a82b698-8c09-43e7-a3a0-555ee8ee5cde", alt: "Gallery Image 2" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(3).JPG?alt=media&token=2f3ff06f-909c-4a12-8689-f92cb2d906c4", alt: "Gallery Image 3" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(4).JPG?alt=media&token=b1bb7cd4-f6c5-42cd-bbf2-4370e82a6ce9", alt: "Gallery Image 4" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(5).JPG?alt=media&token=e55c4c02-4e5b-47c8-87b5-a7b1dbb8d569", alt: "Gallery Image 5" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(6).JPG?alt=media&token=a424e696-fc65-4220-82d4-d58ea5a35310", alt: "Gallery Image 6" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(7).JPG?alt=media&token=ac7c6009-91bf-4a39-b4ad-b32df8cc226e", alt: "Gallery Image 7" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(8).JPG?alt=media&token=5d11bea0-156b-4cd6-ab6a-b16fa240c439", alt: "Gallery Image 8" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(9).JPG?alt=media&token=acc668e1-20c0-45fb-b576-8ffbcdab6a9e", alt: "Gallery Image 9" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(10).JPG?alt=media&token=2c80e356-1980-4207-9788-b47a6124b945", alt: "Gallery Image 10" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(11).JPG?alt=media&token=82f5e3f0-e788-4479-b625-70ca02d55d18", alt: "Gallery Image 11" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(12).JPG?alt=media&token=09efc4b9-cb4c-47a2-b39b-02ff19311e2f", alt: "Gallery Image 12" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(13).JPG?alt=media&token=6f4775b3-7dcc-4949-94d7-ec6e99e94d92", alt: "Gallery Image 13" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(14).JPG?alt=media&token=4dd48e65-8847-4bb9-a0f5-b7d7cd221141", alt: "Gallery Image 14" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(15).JPG?alt=media&token=95a2baa0-9887-4b29-8028-2a735e95ed24", alt: "Gallery Image 15" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(16).JPG?alt=media&token=4eb519f4-162a-41a9-81d0-95a0a47926c6", alt: "Gallery Image 16" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(17).JPG?alt=media&token=45a622f2-f25a-41f5-93aa-9ce006f56c07", alt: "Gallery Image 17" },
    { src: "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(18).JPG?alt=media&token=096e2f73-df9b-461d-9c9e-4ca8965caebb", alt: "Gallery Image 18" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
        <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Inspiring clients through exceptional events. We are dedicated to making
          every convention, trade show, exhibition, and your special events a grand success.
        </p>
      </div>

      <div className="max-w-5xl px-4 mx-auto relative">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GallerySection;
