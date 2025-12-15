import Title from "../../component/Title";
import PageTitle from "../../component/PageTitle";
import { TiPlus } from "react-icons/ti";
import useFancybox from '../../useFancybox';
import img1 from "../../assets/port3.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import img4 from "../../assets/port3.png";
import img5 from "../../assets/port2.png";
import img6 from "../../assets/port3.png";
export default function Portfolio() {
    const titles = [
    { head: "Portfolio Component" },
  ];
  const [fancyboxRef] = useFancybox({
    // Your custom options
  });
    const images = [img1, img2, img3 ,img4, img5, img6];
  return (
    <>
    <PageTitle title="Portfolio Page" />
    <div className="section-bg-white px-[5%] py-[70px] gallery-secion">
        <Title titles={titles} />
        
        <div ref={fancyboxRef}>
            <div className="grid grid-cols-3 gap-10 mt-[30px]">
                {images.map((image , index) => 
                <a key={index} data-fancybox="gallery" href={image}>
                    <img src={image}  alt="Sample image #1 " className="rounded-lg" />
                    <TiPlus key={index}/>
                </a>
                )}
                
            </div>
        </div>
    </div>
      
    </>
  )
}
