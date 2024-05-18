import iconReviewArrow from "../assets/images/icon-arrow.svg";
import Cards from "./Cards";

function CardWrapper() {
  const handleNext = () => {
    console.log("Next btn");
  };

  const handlePrevious = () => {
    console.log("Prev btn");
  };
  return (
    <>
      <div data-name="CardWrapper" className="lg:w-5/6 mx-auto flex relative">
        <div className="flex justify-center items-center">
          <div
            className="w-[50px] h-[50px] cursor-pointer top-4 relative"
            onClick={handleNext}
          >
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
          <div
            className="w-[50px] h-[50px] cursor-pointer top-4 relative"
            onClick={handlePrevious}
          >
            <img
              className="rounded-full bg-white p-2 relative rotate-180"
              width="40"
              src={iconReviewArrow}
              alt="Next"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardWrapper;
