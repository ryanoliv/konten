import Link from "next/link";
import OpacityParagraph from "../OpacityParagraph/OpacityParagraph";

export default function Development() {
  const paragraphText =
    "Crafted for you. As leading Next.js website developers in Cape Town, every line of code we write is purpose-driven, aimed at building established websites that not only look spectacular, but perform optimally.";
  return (
    <div className="container">
      <div className="flex flex-col gap-10 py-18 md:py-32 items-center">
        <Link href="/web-development-cape-town">
          <h2 className="page-title">Web development</h2>
        </Link>
        <OpacityParagraph paragraphText={paragraphText} />
      </div>
    </div>
  );
}
