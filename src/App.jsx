import Banner from "./components/Banner";
import Button from "./components/Button";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiTwotoneWarning } from "react-icons/ai";

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
      
    </>
  )
}