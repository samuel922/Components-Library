import Banner from "./components/Banner";
import Button from "./components/Button";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiTwotoneWarning } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiFillRocket } from "react-icons/ai";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <h2 className="heading">Button Components with variants</h2>
        <div className="btns-sq">
          {/* Square */}
          <Button shape="square" variant="gray">Badge</Button>
          <Button shape="square" variant="red">Badge</Button>
          <Button shape="square" variant="yellow">Badge</Button>
          <Button shape="square" variant="green">Badge</Button>
          <Button shape="square" variant="blue">Badge</Button>
          <Button shape="square" variant="indigo">Badge</Button>
          <Button shape="square" variant="purple">Badge</Button>
          <Button shape="square" variant="pink">Badge</Button>

          {/* Pills */}
          <Button shape="pill" variant="gray">Badge</Button>
          <Button shape="pill" variant="red">Badge</Button>
          <Button shape="pill" variant="yellow">Badge</Button>
          <Button shape="pill" variant="green">Badge</Button>
          <Button shape="pill" variant="blue">Badge</Button>
          <Button shape="pill" variant="indigo">Badge</Button>
          <Button shape="pill" variant="purple">Badge</Button>
          <Button shape="pill" variant="pink">Badge</Button>
          
        </div>

        <h2 className="heading">Banners</h2>
        <div className="banners">
          {/* Multiline */}
          <h3>Multiline</h3>
          <Banner 
            title="Congratulations!" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." icon={<AiFillCheckCircle />}
            variant="success"
            multiline={true} 
          />

          <Banner 
            title="Attention" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." 
            icon={<AiTwotoneWarning />}
            variant="warning"
            multiline={true} 
          />

          <Banner 
            title="There is a problem with your application" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." 
            icon={<AiFillCloseCircle />}
            variant="error"
            multiline={true} 
          />

          <Banner 
            title="Update available" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." icon={<AiFillInfoCircle />}
            variant="neutral"
            multiline={true} 
          />


          {/* Singleline */}
          <h3>Singleline</h3>
          <Banner 
            title="Congratulations!" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." icon={<AiFillCheckCircle />}
            variant="success"
            multiline={false} 
          />

          <Banner 
            title="Attention" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." 
            icon={<AiTwotoneWarning />}
            variant="warning"
            multiline={false} 
          />

          <Banner 
            title="There is a problem with your application" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." 
            icon={<AiFillCloseCircle />}
            variant="error"
            multiline={false} 
          />

          <Banner 
            title="Update available" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." icon={<AiFillInfoCircle />}
            variant="neutral"
            multiline={false} 
          />
        </div>

        {/* Card */}
        <h2 className="heading">Cards</h2>
        <div className="cards">
          <Card 
            title="Easy Deployment" 
            description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
            icon={<AiOutlineCloudDownload />}
            iconBg="#4F80FF"
          />

          <Card 
            title="Blazing Fast" 
            description="Optimized pipelines that cut your build times in half. Ship features at the speed of thought."
            icon={<AiFillRocket />}
            iconBg="#10B981"
          />

          <Card 
            title="Secure by Default" 
            description="End-to-end encryption and zero-trust architecture keep your data safe without the hassle."
            icon={<AiFillSafetyCertificate />}
            iconBg="#F59E0B"
          />

          
        </div>
      
    </>
  )
}