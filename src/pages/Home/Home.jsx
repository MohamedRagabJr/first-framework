import Title from "../../component/Title";
import avatar from "../../assets/avataaars.svg"; 
import PageTitle from "../../component/PageTitle";
export default function Home() {
  const titles = [
    { head: "start Framework" },
  ];

  const descs = [
    { descption: "Graphic Artist - Web Designer - Illustrator" }
  ];

  return (
    <>
      <PageTitle title="Home Page" />
      <div className="bg-main text-center py-[120px]">
        <img src={avatar} alt="avatar" className="w-60 mx-auto mb-4" />

        <Title titles={titles} />

        {descs.map((desc, i) => (
          <p key={i} className="mt-4 font-semibold">
            {desc.descption}
          </p>
        ))}
      </div>
    </>
  );
}
