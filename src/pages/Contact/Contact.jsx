import Title from "../../component/Title";
import PageTitle from "../../component/PageTitle";
export default function Contact() {
    const titles = [
    { head: "conatct section" },
  ];
  return (
    <>
    <PageTitle title="Contact Page" />
    <div className="section-bg-white px-[8%] py-[70px]">
        <Title titles={titles} />
        <form className="max-w-[750px] m-auto">
            <input type="text" placeholder="User Name" className="input bg-white text-[var(--main-color2)] mt-[50px] block border-b-[#ccc] w-full text-base font-medium"  />
            <input type="number" placeholder="User Age" className="input bg-white text-[var(--main-color2)]  mt-[50px] block border-b-[#ccc] w-full text-base font-medium" />
            <input type="email" placeholder="User Email" className="input bg-white text-[var(--main-color2)] mt-[50px] block border-b-[#ccc] w-full text-base font-medium" />
            <input type="password" placeholder="User Password" className="input bg-white text-[var(--main-color2)] mt-[50px] block border-b-[#ccc] w-full text-base font-medium" />
            <button className="btn px-[15px] py-[8px] bg-main text-white leading-none block btn-soft mt-[30px]">Send Message</button>
        </form>
    </div>
    
    </>
  )
} 
