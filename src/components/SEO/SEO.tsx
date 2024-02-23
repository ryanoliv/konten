import OpacityParagraph from "../OpacityParagraph/OpacityParagraph";

export default function SEO() {
  const paragraphText =
    "Stand out from the crowd. Propel your brand to the forefront of search engines with analytics-driven strategies.";
  return (
    <div className="container">
      <div className="flex flex-col gap-10 py-18 md:py-32 items-center">
        <h2 className="page-title">SEO</h2>
        <OpacityParagraph paragraphText={paragraphText} />
      </div>
    </div>
  );
}
