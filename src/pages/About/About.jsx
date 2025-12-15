import Title from "../../component/Title";
import PageTitle from "../../component/PageTitle";
export default function About() {
  const titles = [
    { head: "about component" },
  ];
  const aboutStrucs = [
    {desc: 'Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.' , subdesc: 'Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.'}
  ]
  return (
    <>
    <PageTitle title="About Page" />
    <div className="bg-main text-center py-10 px-[8%] py-[200px]">
      <Title titles={titles} />
      
        {aboutStrucs.map((aboutStruc) => 
        <div className="grid grid-cols-2 gap-4 mt-[30px]">
          <p className="text-start font-semibold">{aboutStruc.desc}</p>
          <p className="text-start font-semibold">{aboutStruc.subdesc}</p>
        </div>
        )}
          
        
    </div>
      
    </>
  )
}
