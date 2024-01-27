import iconReviewArrow from "../assets/images/icon-arrow.svg";

import Cards from "./Cards";

function SectionReview() {
  return (
    <section className="bg-black-900 py-6">
      <div className="pb-6">
        <p
          style={{ color: "#FFAD60", letterSpacing: "3px" }}
          className="mb-10 uppercase tracking-widest"
        >
          Testimonials
        </p>
        <h3 className="text-3xl text-white font-bold mb-6">
          Our Client Reviews
        </h3>
      </div>
      <div className="lg:w-5/6 mx-auto flex">
        <div className="flex justify-center items-center">
          <div className="w-[50px] h-[50px] cursor-pointer top-4 relative">
            <img
              className="rounded-full bg-white p-2"
              width="40"
              src={iconReviewArrow}
              alt="Previous"
            />
          </div>
        </div>
        <Cards />
        <div className="flex justify-center items-center">
          <div className="w-[50px] h-[50px] cursor-pointer top-4 relative">
            <img
              className="rounded-full bg-white p-2 relative rotate-180"
              width="40"
              src={iconReviewArrow}
              alt="Next"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionReview;
