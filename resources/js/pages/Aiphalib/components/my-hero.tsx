import React from "react";
import ReadMoreButton from "./read-more-button";

const MyHero = () => {
  return (
    <section className="relative mt-10 overflow-hidden px-4 md:px-20 lg:mt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left: Image Section */}
        <div className="relative flex w-full justify-center">
          <div className="relative aspect-square w-3/4 overflow-hidden rounded-full sm:w-2/3 md:w-3/4 ">
            <img
              src="/assets/demo-images/banner3.jpg"
              alt="Teamwork"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Decorative Circles */}
          <div className="absolute bottom-4 -left-4 h-12 w-12 rounded-full bg-blue-100 opacity-40 sm:h-16 sm:w-16"></div>
          <div className="absolute -left-6 bottom-10 h-10 w-10 rounded-full bg-blue-200 opacity-50 sm:h-14 sm:w-14"></div>
          <div className="absolute right-4 h-12 w-12 rounded-full bg-blue-100 opacity-30 sm:h-16 sm:w-16"></div>
          <div className="absolute right-2 top-8 h-10 w-10 rounded-full bg-blue-200 opacity-40 sm:h-14 sm:w-14"></div>
        </div>
        {/* Right: Content Section */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-two">
            About Us
          </p>
          <h2 className="mb-4 text-2xl font-extrabold leading-snug text-primary-tree lg:text-4xl">
            Transforming Your Business <br /> With Expertise
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-tree">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Services */}
          <div className="space-y-6">
            {/* Service Item 1 */}
            <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
              <div className="rounded-xl bg-teal-100 p-3 text-teal-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 17a4 4 0 100-8 4 4 0 000 8zm-2-8V7a2 2 0 114 0v2a2 2 0 01-4 0zM4 12h1m14 0h1M6.34 6.34l.7.7m10.92 10.92l.7.7M6.34 17.66l.7-.7m10.92-10.92l.7-.7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Business Consulting
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Service Item 2 */}
            <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
              <div className="rounded-xl bg-teal-100 p-3 text-teal-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5h18M9 3v2m6-2v2M4 21h16a2 2 0 002-2V7H2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  24/7 Customer Support
                </h3>
                <p className="text-sm text-gray-600">
                  Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <ReadMoreButton link={'about'} id={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyHero;
