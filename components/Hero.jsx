import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send, send } from "lucide-react"

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine
} from 'react-icons/ri'
import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"


const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[90vh] xl:pt-28  bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text  */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Wev Developer</div>
            <h1 className="h1 mb-3">Hello, my name is Divyesh Bakaraniya</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself, my vocational journey, and what i engage in professionally.</p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">

              <Link href={"/contact"}>
                <Button className="gap-x-2">Contact me <Send size={18} /></Button>
              </Link>

              <Button
                variant="secondary"
                className="gap-x-2">Download CV <Download size={18} /></Button>
            </div>
            {/* socials  */}
            <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconsStyles="text-foreground text-[23px] hover:text-primary transition-all" />
           
          </div>

             {/* image  */}
             <div className="hidden xl:flex relative">
              {/* badge 1  */}
              <Badge icon={<RiBriefcase4Fill/>} endCountNum={1} badgeText={"Years of Experience"} containerStyles="absolute top-[24%] -left-[5rem]"/>
              {/* badge 2  */}
              <Badge icon={<RiTodoFill/>} endCountNum={10} badgeText={"Finished Projects"} 
              endCountText={''}
              containerStyles="absolute top-[80%] -left-[1rem]"/>
              {/* badge 3  */}
              <Badge icon={<RiTeamFill/>} endCountNum={5} badgeText={"Happy Clients"} 
              endCountText={''}
              containerStyles="absolute top-[55%] -right-8"/>
              <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] absolute bg-no-repeat  -top-[4.25rem] right-2">
             
              </div>
             <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative -top-[3.10rem] right-1" imgSrc={'/assets/hero/developer.png'}/>
            </div>
        </div>
        {/* icon  */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
} 

export default Hero