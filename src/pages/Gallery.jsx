import { useEffect, useState } from "react";
import BannerSection from "../components/BannerSection";
import SEO from "../components/SEO";

const projects = [
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(1).JPG?alt=media&token=d3a39e8a-5d4f-4e3e-8f3a-f88e944e39ba",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(2).JPG?alt=media&token=5a82b698-8c09-43e7-a3a0-555ee8ee5cde",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(3).JPG?alt=media&token=2f3ff06f-909c-4a12-8689-f92cb2d906c4",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(4).JPG?alt=media&token=b1bb7cd4-f6c5-42cd-bbf2-4370e82a6ce9",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(5).JPG?alt=media&token=e55c4c02-4e5b-47c8-87b5-a7b1dbb8d569",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(6).JPG?alt=media&token=a424e696-fc65-4220-82d4-d58ea5a35310",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(7).JPG?alt=media&token=ac7c6009-91bf-4a39-b4ad-b32df8cc226e",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(8).JPG?alt=media&token=5d11bea0-156b-4cd6-ab6a-b16fa240c439",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(9).JPG?alt=media&token=acc668e1-20c0-45fb-b576-8ffbcdab6a9e",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(10).JPG?alt=media&token=2c80e356-1980-4207-9788-b47a6124b945",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(11).JPG?alt=media&token=82f5e3f0-e788-4479-b625-70ca02d55d18",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(12).JPG?alt=media&token=09efc4b9-cb4c-47a2-b39b-02ff19311e2f",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(13).JPG?alt=media&token=6f4775b3-7dcc-4949-94d7-ec6e99e94d92",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(14).JPG?alt=media&token=4dd48e65-8847-4bb9-a0f5-b7d7cd221141",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(15).JPG?alt=media&token=95a2baa0-9887-4b29-8028-2a735e95ed24",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(16).JPG?alt=media&token=4eb519f4-162a-41a9-81d0-95a0a47926c6",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(17).JPG?alt=media&token=45a622f2-f25a-41f5-93aa-9ce006f56c07",
  "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery%20(18).JPG?alt=media&token=096e2f73-df9b-461d-9c9e-4ca8965caebb",
];

const Gallery = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex < projects.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <SEO title="Hilltop" description=".." />

      <main className="pt-16 lg:pt-24 bg-white">
        <BannerSection
          title="GALLERY"
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fgallery_banner.jpg?alt=media&token=162d7101-7855-4cfa-b50a-638d0e0d8401"
          breadcrumbs={[{ to: "/", label: "Home" }, { label: "Gallery" }]}
        />
        <div className="container mx-auto py-20 px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Image */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
            <div className="relative w-full max-w-4xl">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute -top-10 right-0 text-white text-4xl font-bold bg-transparent"
              >
                &times;
              </button>
              <div className="flex justify-between items-center">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="text-white text-3xl sm:text-5xl font-semibold p-2"
                  disabled={selectedImageIndex === 0}
                >
                  &#8249;
                </button>
                {/* Image Container */}
                <div className="flex-grow mx-2">
                  <img
                    src={projects[selectedImageIndex]}
                    alt={`Gallery image ${selectedImageIndex + 1}`}
                    className="max-w-full h-auto object-contain mx-auto"
                  />
                </div>
                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="text-white text-3xl sm:text-5xl font-semibold p-2"
                  disabled={selectedImageIndex === projects.length - 1}
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Gallery;
