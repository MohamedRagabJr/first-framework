import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
    <div className="bg-main text-center py-[200px]">
        <h2 className="text-[40px] mb-[10px] font-bold">
            Page Not Found 
        </h2>
        <p className="mb-[30px] text-[20px]">
            This Page doesn't exist
        </p>
        <Link to="/" className="text-white bg-secondary py-[10px] px-[20px] rounded-lg m-auto uppercase mx-[5px] text-lg font-bold">
        Back Home</Link>
    </div>
    </>
  )
}
