import OpacityParagraph from "../OpacityParagraph/OpacityParagraph";

export default function UX() {
  const paragraphText =
    "We put your user at the centre of our design process and make every interaction meaningful.";
  return (
    <div className="container">
      <div className="flex flex-col gap-10 py-32 items-center">
        <h2 className="page-title">User Experience Design</h2>
        <OpacityParagraph paragraphText={paragraphText} />
      </div>
    </div>
  );
}
