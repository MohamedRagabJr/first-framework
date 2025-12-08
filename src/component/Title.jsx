import { FaStar } from "react-icons/fa";


export default function Title({ titles }) {
  return (
    <>
    <div className="head-title text-center w-full">
        {titles.map((title, index) => (
            <h2 className="uppercase m-auto relative font-bold w-max text-[40px]" key={index}>{title.head}</h2>
        ))}
        <FaStar />

    </div>
      
    </>
  )
}
