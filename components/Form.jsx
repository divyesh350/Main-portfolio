'use client';

import {Button} from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User,MailIcon,ArrowRightIcon,MessagesSquare } from "lucide-react";

const Form = () => {
  return (
    <form action="" className="flex flex-col gap-y-4">
        {/* input  */}
        <div className="relative flex items-center"> 
            <Input type="name" id="name" placeholder="Name"/>
            <User className="absolute right-6" size={20}/>
        </div>
        {/* input  */}
        <div className="relative flex items-center"> 
            <Input type="email" id="email" placeholder="Email"/>
            <MailIcon className="absolute right-6" size={20}/>
        </div>
        {/* textarea  */}
        <div className="relative flex items-center"> 
            <Textarea type="message" id="message" placeholder="Message"/>
            <MessagesSquare className="absolute right-6 top-4" size={20}/>
        </div>
        <Button className="flex items-center gap-x-1 max-w-[166px]">Let's Talk
            <ArrowRightIcon size={20} className="ml-2"/>
        </Button>
    </form>
  )
}

export default Form