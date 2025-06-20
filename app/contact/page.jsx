"use client"; // Marks this file as a client component

import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
// import Form from "@/components/Form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, ArrowRightIcon, MessagesSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
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
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
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
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
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
              <div>bakaraniyadivyesh94@outlook.com</div>
            </div>
            {/* address  */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>India
              </div>
            </div>
            {/* phone  */}
            {/* <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 7487831144</div>
            </div> */}
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
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
              <MessagesSquare className="absolute right-6 top-4" size={20} />
            </div>
            <Button 
              className="flex items-center gap-x-1 max-w-[166px]" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Let's Talk"}
              {!isLoading && <ArrowRightIcon size={20} className="ml-2" />}
            </Button>
          </form>
        </div>
        
      </div>
     
    </section>
  );
};

export default Contact;
