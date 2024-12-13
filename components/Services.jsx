import { GanttChartSquare,Blocks,Gem } from "lucide-react"
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"


const servicesData=[
  {
    icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
    title:"Web Design",
    description:"Professional web design services to create custom, responsive, and SEO-friendly websites that captivate your audience and drive results. Lets elevate your online presence together!",
  },
  {
    icon:<Blocks size={72} strokeWidth={0.8}/>,
    title:"Web Devlopment",
    description:"We create responsive websites that are easy to navigate and use. We use the latest technologies to create websites that are fast, secure, and user-friendly.",
  },
  {
    icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
    title:"Digital Marketing",
    description:"Expert digital marketing services to amplify your online presence and drive targeted traffic to your business. Elevate your brand with tailored strategies that deliver measurable results.",
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