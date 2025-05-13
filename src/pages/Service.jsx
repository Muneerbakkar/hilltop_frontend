import BannerSection from "../components/BannerSection";
import { useEffect } from "react";
import SEO from "../components/SEO";



const services = [
  {
    step: "01",
    name: "Pre-Wedding Events",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fpre_wedding_events.jpg?alt=media&token=5ef70a3f-94c4-428a-86d8-e54e22f0b297",
    description:
      "Celebrate pre-wedding events like Haldi, Mehandi, Sangeet, and engagements with style and grace at our versatile venues.",
  },
  {
    step: "02",
    name: "Wedding Ceremony",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fwedding_ceremony.jpg?alt=media&token=e336650b-099d-4920-8e12-7dbb69fa94c8",
    description:
      "Host your dream wedding ceremony, complete with our exclusive Maduram Veppu combo offer, and create memories to cherish forever.",
  },
  {
    step: "03",
    name: "Wedding Reception",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fwedding_reception.jpeg?alt=media&token=3755e8b6-7be8-40ff-a533-e3445c0a0f48",
    description:
      "Celebrate grand wedding receptions in our elegantly designed spaces, ensuring a perfect start to your journey together.",
  },
  {
    step: "04",
    name: "Baby Shower",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fbaby_shower.jpg?alt=media&token=5c615714-e084-43d3-bd1c-aceb0d08480b",
    description:
      "Welcome your little one with a heartwarming baby shower, tailored to make every moment special and memorable.",
  },
  {
    step: "05",
    name: "Baptism",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fbaptism.jpg?alt=media&token=249144cc-5961-48a6-9d52-9b43695e9d9b",
    description:
      "Host meaningful baptism ceremonies in serene settings, offering comfort and elegance for your family and guests.",
  },
  {
    step: "06",
    name: "Birthday Party",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fbirthday_party.png?alt=media&token=442bd22d-f888-4b73-a044-9f647562569e",
    description:
      "Celebrate birthdays with joy and excitement in our vibrant and customizable venues designed for all ages.",
  },
  {
    step: "07",
    name: "Farewell Party",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Ffarewell_party.jpg?alt=media&token=c8db9d15-ac1c-426d-b20d-e37db5db29f1",
    description:
      "Say goodbye in style with memorable farewell parties, perfect for colleagues, friends, and loved ones.",
  },
  {
    step: "08",
    name: "Convention",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fconvention.jpeg?alt=media&token=8b49e048-5bf0-48ec-9f05-a9bfaa0043b7",
    description:
      "Host professional conventions with state-of-the-art facilities, spacious venues, and impeccable service.",
  },
  {
    step: "09",
    name: "Exhibition",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fexhibition.jpeg?alt=media&token=e2c74aef-66e6-4695-b69a-7c91262d577e",
    description:
      "Showcase your products or ideas in our versatile exhibition spaces, tailored to meet industry standards.",
  },
  {
    step: "10",
    name: "Corporate Party",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fcorporate_party.jpeg?alt=media&token=d51a08a0-4cbc-461b-88da-28c1abffb2b0",
    description:
      "Organize sophisticated corporate parties with a blend of professionalism and celebration.",
  },
  {
    step: "11",
    name: "Conference/Seminar/Workshop",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fconference.jpeg?alt=media&token=dbf8270b-72d6-4bca-abc3-825d098a5d4d",
    description:
      "Conduct conferences, seminars, or workshops in our technologically advanced and comfortable meeting spaces.",
  },
  {
    step: "12",
    name: "Outdoor Events",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Foutdoor_events.webp?alt=media&token=3b56eb06-b471-44cd-a35f-77ef75032a2a",
    description:
      "Enjoy outdoor events in our expansive open-air spaces, perfect for celebrations under the sky.",
  },
];

const Service = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <SEO title="Hilltop" description=".." />

      <main className="pt-16 lg:pt-24 overflow-x-hidden">
        {/* About Section */}
        <BannerSection
          title="OUR FACILITIES"
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Ffacilities_banner.jpg?alt=media&token=8800a697-4582-4a0a-b536-3bbd3e12b177"
          breadcrumbs={[{ to: "/", label: "Home" }, { label: "Facilities" }]}
        />
        <section className="py-20 mx-auto bg-[#212529] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex justify-center flex-col gap-12 sm:gap-16 lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="group max-w-sm mx-auto h-96 w-full [perspective:1000px]"
                >
                  <div className="relative h-full w-full shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                      {service.imageUrl && (
                        <div className="relative h-full w-full">
                          <img
                            className="object-cover cursor-pointer h-full w-full"
                            src={service.imageUrl}
                            alt={service.name}
                          />
                          {/* Black Shade Overlay */}
                          <div className="absolute inset-0" />
                          <p className="absolute bottom-4 left-0 right-0 text-lg font-bold text-white text-center z-10">
                            {service.name}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 h-full w-full bg-black/80 px-6 py-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex h-full flex-col items-center justify-center">
                        <h2 className="text-lg font-bold mb-2">
                          {service.name}
                        </h2>
                        <p className="text-sm text-slate-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Service;
