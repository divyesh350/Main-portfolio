import { GanttChartSquare,Blocks,Gem } from "lucide-react"
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"


const servicesData=[
  {
    icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
    title:"Full Stack Web Apps (MERN & Next.js)",
    description:"I build robust and scalable web applications using modern technologies like React.js, Next.js, Node.js, Express, and MongoDB. By leveraging TypeScript, I ensure your codebase is clean, maintainable, and less prone to bugs. For smooth state management, I use Zustand, and for styling, I combine Tailwind CSS with Chakra UI to create responsive, visually appealing interfaces that support both dark and light modes. Whether you want client-side rendering or server-side rendering with Next.js, I can deliver SEO-friendly, fast-loading applications. Additionally, I provide Dockerized local development setups so your development environment is consistent and easy to manage.",
  },
  {
    icon:<Blocks size={72} strokeWidth={0.8}/>,
    title:"E-Commerce & Dashboards",
    description:"I develop custom e-commerce platforms tailored to your business needs, including product variants like size, color, and stock tracking. The order processing system supports popular payment methods such as Razorpay and Cash on Delivery (COD). To help you manage your business efficiently, I build admin dashboards featuring real-time analytics on sales, revenue, and users. The backend is secured using Express.js, MongoDB, and JWT for authentication. I also integrate automated receipt generation in PDF format and email confirmations via Nodemailer. For deployment, I use Docker and prepare your project for continuous integration workflows, with optional hosting and storage support on AWS EC2 and S3.",
  },
  {
    icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
    title:"Cloud Uploads & Email Automation",
    description:"To efficiently manage your media files, I implement secure and optimized file upload systems using Multer and Cloudinary, with optional AWS S3 integration for scalable cloud storage. Your backend services will be Dockerized for easy portability and deployment. For automated communication, I build transactional email systems with Nodemailer, including custom HTML templates for a professional look. Additionally, I offer newsletter systems that support custom email templates and PDF attachments to help you engage with your audience effectively. The entire setup is designed to be serverless-ready, using Next.js API routes or Express, making your application highly scalable.",
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