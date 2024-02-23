import OpacityParagraph from "../OpacityParagraph/OpacityParagraph";

export default function Development() {
  const paragraphText =
    "Crafted for you. As leading website developers in Cape Town, every line of code we write is purpose-driven, aimed at building established websites and apps that not only look spectacular, but perform optimally.";
  return (
    <div className="container">
      <div className="flex flex-col gap-10 py-18 md:py-32 items-center">
        <h2 className="page-title">Web and App development</h2>
        <OpacityParagraph paragraphText={paragraphText} />
      </div>
    </div>
  );
}
