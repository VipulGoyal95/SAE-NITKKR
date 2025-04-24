'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Rahul Verma",
    designation: "Alumnus, Batch of 2021",
    image: "/testimonials/rahul.jpg",
    feedback:
      "Being a part of SAE helped me build a solid foundation in engineering and teamwork. I’m proud to support the next generation through this initiative.",
  },
  {
    name: "Sneha Kapoor",
    designation: "Senior, Mechanical Dept",
    image: "/testimonials/sneha.jpg",
    feedback:
      "SAE society has shaped my college experience. The dedication and innovation of our teams deserve every bit of support.",
  },
  {
    name: "Aman Singh",
    designation: "Alumnus, R&D Engineer, Maruti Suzuki",
    image: "/testimonials/aman.jpg",
    feedback:
      "SAE taught me real-world engineering skills. Supporting this cause is my way of giving back to a society that gave me so much.",
  },
  {
    name: "Neha Chauhan",
    designation: "Alumnus, Design Engineer, Tata Motors",
    image: "/testimonials/neha.jpg",
    feedback:
      "From design to track, SAE molded us into creators and innovators. Proud to see the legacy continue through this crowdfunding.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">
        What Our Alumni & Seniors Say
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="max-w-5xl mx-auto"
      >
        {testimonials.map((person, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 h-full mx-2">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-14 h-14 rounded-full border border-purple-400"
                />
                <div>
                  <h3 className="font-semibold text-lg text-purple-300">{person.name}</h3>
                  <p className="text-sm text-gray-400">{person.designation}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{person.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
