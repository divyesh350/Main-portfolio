"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "The website created for my restaurant is visually stunning and easy for my customers to use. It has truly elevated my business!",
  },
  {
    avatar: "/assets/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review:
      "The portfolio site perfectly showcases my design projects. The elegant layout and smooth navigation help me attract more clients.",
  },
  {
    avatar: "/assets/reviews/avatar-3.png",
    name: "John doe",
    job: "Game developer",
    review:
      "My game development portfolio looks fantastic! The interactive features and modern design really highlight my skills and projects.",
  },
  {
    avatar: "/assets/reviews/avatar-4.png",
    name: "Emily smith",
    job: "Therapist",
    review:
      "The website for my therapy practice is warm and welcoming. Clients find it easy to book sessions and learn about my services.",
  },
  {
    avatar: "/assets/reviews/avatar-5.png",
    name: "oliver taylor",
    job: "Engineer",
    review:
      "The professional website built for me clearly presents my engineering projects and expertise. It’s helped me connect with new opportunities.",
  },
  {
    avatar: "/assets/reviews/avatar-6.png",
    name: "Mason Wilson",
    job: "Video Editor",
    review:
      "My video editing portfolio is now sleek and engaging. The site makes it easy to showcase my work and attract new clients.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider  */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                        {/* image  */}
                        <Image
                            src={person.avatar}
                            width={70}
                            height={70}
                            alt="avatar"
                            priority
                        />
                        {/* name  */}
                        <div className="flex flex-col">
                            <CardTitle>{person.name}</CardTitle>
                            <p>{person.job}</p>
                        </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">{person.review}</CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
