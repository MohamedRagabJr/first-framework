import Title from "../../component/Title";
import PageTitle from "../../component/PageTitle";
import ScrollStack, { ScrollStackItem } from '../../component/ScrollStack.jsx'

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
      
        {aboutStrucs.map((aboutStruc , index) => 
        <div className="grid grid-cols-2 gap-4 mt-[30px]" key={index}> 
          <p className="text-start font-semibold">{aboutStruc.desc}</p>
          <p className="text-start font-semibold">{aboutStruc.subdesc}</p>
        </div>
        )}

        <ScrollStack>
          <ScrollStackItem>
            <h2>Card 1</h2>
            <p>This is the first card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 2</h2>
            <p>This is the second card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 3</h2>
            <p>This is the third card in the stack</p>
          </ScrollStackItem>
        </ScrollStack>
          
        
    </div>
      
    </>
  )
}
