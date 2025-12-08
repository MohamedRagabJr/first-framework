import { FaFacebook, FaGlobe} from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn  } from "react-icons/fa6";



export default function Footer() {
  const fcontents = [
    { head: "LOCATION", desc: "215 John Daniel Drive" , subdesc: "Clark, MO 65243" },
    { head: "AROUND THE WEB" , icons: [
      <FaFacebook />,
      <FaXTwitter />,
      <FaLinkedinIn />,
      <FaGlobe />

    ]},
    { head: "ABOUT FREELANCER", desc: "Freelance is a free to use, licensed Bootstrap theme created by Route" },]
  return (
    <>
      <footer className="footer bg-secondary zsm:footer-horizontal place-items-center bg-neutral text-neutral-content pt-10">
        <div class="grid grid-cols-3 gap-4 w-full">
            
            {fcontents?.map((fcontent ,index) => 
            <div class="mx-auto" key={index}>
                <h3 className='text-3xl mb-3 font-bold'>{fcontent.head}</h3>
                <p className="text-lg">{fcontent.desc}</p>
                <p className="text-lg">{fcontent.subdesc}</p>
                <p className='flex justify-center gap-3 icons'>{fcontent.icons}</p>
            </div>
            )}
        </div>
        <aside className="py-4 w-full place-items-center">
          <p className='text-center'>
            All Rights Reserved React Assignment , Developed and Designed by Mohamed Ragab © {new Date().getFullYear()}
          </p>
        </aside>
      </footer>
    </>
  )
}
