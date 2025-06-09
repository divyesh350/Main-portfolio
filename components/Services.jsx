import { GanttChartSquare,Blocks,Gem } from "lucide-react"
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"


const servicesData=[
  {
    icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
    title:"Full Stack Web Apps (MERN & Next.js)",
    description:"Build scalable web apps with React, Next.js, Node.js, and MongoDB. I use TypeScript, Zustand, and modern UI libraries like Tailwind or Chakra UI. Apps are responsive, SEO-ready, support dark/light mode, and Dockerized for smooth local development.",
  },
  {
    icon:<Blocks size={72} strokeWidth={0.8}/>,
    title:"E-Commerce & Dashboards",
    description:"Custom eCommerce platforms with product variants, Razorpay & COD support, and admin dashboards featuring real-time analytics. Includes secure JWT auth, PDF receipts, email confirmations, and deployment with Docker & CI tools. AWS hosting and storage optional.",
  },
  {
    icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
    title:"Cloud Uploads & Email Automation",
    description:"Secure file uploads with Multer, Sharp, Cloudinary, and optional AWS S3. I also set up transactional emails with Nodemailer, custom HTML templates, and PDF support. Newsletter-ready and serverless-friendly via Express or Next.js APIs.",
  },
]
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto ">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
        {/* grid items  */}
        <div className="grid  gap-y-12 xl:grid-cols-3 xl:gap-y-24 justify-center xl:gap-x-8">
          {servicesData.map((item,index)=>{
            return(
              <Card key={index} className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">{item.icon}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services