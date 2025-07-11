"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";
const projectData = [
  {
    image: "/assets/work/lush-lilac.png",
    category: "full stack",
    name: "Ecommerce App for POD business",
    description: "A website for selling POD products in ecommerce",
    link: "https://lush-lilac-web.vercel.app/",
    github: "https://github.com/divyesh350/lush-lilac-web",
  },
  {
    image: "/assets/work/chatapp.png",
    category: "full stack",
    name: "Real Time Chat App",
    description: "A website for real time chat app",
    link: "https://chat-app-frzi.onrender.com",
    github: "https://github.com/divyesh350/chat-app",
  },
  // {
  //   image: "/assets/work/mernecommerce.png",
  //   category: "full stack",
  //   name: "Ecommerce Website",
  //   description: "A website for ecommerce store with admin panel",
  //   link: "https://mern-ecommercestore-jsow.onrender.com",
  //   github: "https://github.com/divyesh350/Mern-EcommerceStore",
  // },

  {
    image: "/assets/work/animewebsite.png",
    category: "HTML,CSS ",
    name: "Anime Website",
    description: "A website to download anime",
    link: "https://meek-genie-620cb0.netlify.app",
    github: "https://github.com/divyesh350/Anime_Website",
  },
  {
    image: "/assets/work/xypo.png",
    category: "HTML,CSS ",
    name: "xypo learning Website",
    description: "A website for online education or course ",
    link: "https://playful-lamington-835f5a.netlify.app/",
    github: "https://github.com/divyesh350/learning-website-xypo",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col items-center xl:items-start justify-center">
          <h2 className="section-title mb-4 ">Latest Projects</h2>
          <p className="subtitle mb-8">My Recent Projects</p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider  */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            autoplay={{ delay: 3000 }}
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for slides  */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
