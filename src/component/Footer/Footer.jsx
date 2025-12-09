import { FaFacebook, FaGlobe } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const fcontents = [
    {
      head: "LOCATION",
      desc: "215 John Daniel Drive",
      subdesc: "Clark, MO 65243",
    },
    {
      head: "AROUND THE WEB",
      icons: [FaFacebook, FaXTwitter, FaLinkedinIn, FaGlobe],
    },
    {
      head: "ABOUT FREELANCER",
      desc: "Freelance is a free to use, licensed Bootstrap theme created by Route",
    },
  ];

  return (
    <footer className="footer bg-secondary zsm:footer-horizontal place-items-center bg-neutral text-neutral-content pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center">

        {fcontents.map((item, index) => (
          <div key={index} className="mx-auto">
            <h3 className="text-3xl mb-3 font-bold">{item.head}</h3>

            {item.desc && <p className="text-lg">{item.desc}</p>}
            {item.subdesc && <p className="text-lg">{item.subdesc}</p>}

            {item.icons && (
              <div className="flex justify-center gap-4 mt-3">
                {item.icons.map((Icon, i) => (
                  <Icon key={i} className="text-2xl cursor-pointer hover:opacity-70 transition" />
                ))}
              </div>
            )}
          </div>
        ))}

      </div>

      <aside className="py-4 w-full place-items-center">
        <p className="text-center">
          All Rights Reserved React Assignment, Developed and Designed by Mohamed Ragab © {new Date().getFullYear()}
        </p>
      </aside>
    </footer>
  );
}
