import Socials from "./Socials";

const Footer = () => {
  return <footer className="bg-secondary py-12 mt-2 ">
    <div className="container mx-auto ">
      <div className="flex flex-col items-center justify-between">
        {/* socials  */}
        <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4" iconsStyles='text-primary hover:text-white text-[20px] dark:text-white/70  dark:hover:text-primary transition-all'/>
        {/* copyright  */}
        <div className="text-muted-foreground">
          Copyright &copy; Divyesh Bakaraniya. All rights reserved.
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
