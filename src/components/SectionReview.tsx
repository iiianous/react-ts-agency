import iconSquareDots from "../assets/images/icon-square-dots.png";
import iconCurly from "../assets/images/icon-curly.png";

import CardWrapper from "./CardWrapper";

function SectionReview() {
  return (
    <section className="bg-black-900 py-6 relative">
      <div className="pb-6">
        <p
          style={{ color: "#FFAD60", letterSpacing: "3px" }}
          className="mb-10 uppercase tracking-widest"
        >
          Testimonials
        </p>
        <h3 className="text-5xl text-white font-bold mb-6">
          Our Client Reviews
        </h3>
        <div className="absolute z-10 -right-12 lg:-right-2 md:top-4 lg:max-w-[123px]">
          <img src={iconSquareDots} alt="Icon" />
        </div>
        <div className="absolute z-10 -left-3 lg:-left-2 top-0 sm:-top-16 md:-top-24 lg:-top-44  max-w-[100px] lg:max-w-[165px]">
          <img src={iconCurly} alt="Icon" />
        </div>
      </div>
      <CardWrapper />
    </section>
  );
}

export default SectionReview;
