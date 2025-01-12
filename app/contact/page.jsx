"use client"; // Marks this file as a client component

import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
// import Form from "@/components/Form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, ArrowRightIcon, MessagesSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Show success message in alert
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        const errorResult = await response.json();
        alert(result.message || "Something went wrong."); // Show error message in aler
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
    }
  };
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustrations  */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text  */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {/* illustrations  */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form  */}
        {/* Contact Form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text  */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail  */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>bakaraniyadivyesh94@gmail.com</div>
            </div>
            {/* address  */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>
                94,harivilla row house,nansad
                road,Kamrej,Surat,Gujarat,India-394185
              </div>
            </div>
            {/* phone  */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 7487831144</div>
            </div>
          </div>
          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            {/* input  */}
            <div className="relative flex items-center">
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <User className="absolute right-6" size={20} />
            </div>
            {/* input  */}
            <div className="relative flex items-center">
              <Input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* textarea  */}
            <div className="relative flex items-center">
              <Textarea
                type="message"
                id="message"
                placeholder="Message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <MessagesSquare className="absolute right-6 top-4" size={20} />
            </div>
            <Button className="flex items-center gap-x-1 max-w-[166px]" type="submit">
              Let's Talk
              <ArrowRightIcon size={20} className="ml-2" />
            </Button>
          </form>
        </div>
        
      </div>
     
    </section>
  );
};

export default Contact;
