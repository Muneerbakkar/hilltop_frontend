/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const BannerSection = ({ title, backgroundImage, breadcrumbs }) => {
  return (
    <section
      className="relative w-full h-[20vh] sm:h-[30vh] lg:h-[40vh] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${backgroundImage})`,
      }}
    >
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              {breadcrumb.to ? (
                <Link
                  to={breadcrumb.to}
                  className="text-[#8AA22B] font-semibold hover:text-[#6F8623] text-base sm:text-lg lg:text-xl"
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span className="text-[#8AA22B] font-semibold text-base sm:text-lg lg:text-xl">
                  {breadcrumb.label}
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="mx-1 sm:mx-2 text-[#8AA22B]">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
