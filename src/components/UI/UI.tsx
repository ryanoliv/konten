import OpacityParagraph from "../OpacityParagraph/OpacityParagraph";

export default function UI() {
  const paragraphText =
    "Where form meets function. Immerse your audience in out-of-this-world experiences tailored to your brand.";
  return (
    <div className="container">
      <div className="flex flex-col gap-10 py-18 md:py-32 items-center">
        <h2 className="page-title">User interface design</h2>
        <OpacityParagraph paragraphText={paragraphText} />
      </div>
    </div>
  );
}
