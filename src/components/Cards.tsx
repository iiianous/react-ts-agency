import { createRef, useEffect } from "react";

function Cards() {
  const reviewData = [
    {
      id: 111,
      fullname: "Mr. Mostar",
      imgUrl: "https://fakeimg.pl/40x40",
      company: "Retail Company",
      review:
        "Than you for realizing the idea and highly recommended it for those of you who want to create a system.",
    },
    {
      id: 115,
      fullname: "Mr. Mostar",
      imgUrl: "https://fakeimg.pl/40x40",
      company: "Retail Company",
      review:
        "Than you for realizing the idea and highly recommended it for those of you who want to create a system.",
    },
    {
      id: 116,
      fullname: "Mr. Mostar",
      imgUrl: "https://fakeimg.pl/40x40",
      company: "Retail Company",
      review:
        "Than you for realizing the idea and highly recommended it for those of you who want to create a system.",
    },
  ];

  const cardsWrapperRef = createRef<HTMLDivElement>();
  const itemCardWrapperRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const cardsWrapper: any = cardsWrapperRef.current;
    const itemCard: any = itemCardWrapperRef.current;

    const handleScroll = () => {
      console.log("Scroll!");
    };

    const handleResize = () => {
      console.log("Resized!");
      const width = cardsWrapper.clientWidth;
      const height = cardsWrapper.clientHeight;

      const itemCardWidth = itemCard.clientWidth;
      const itemCardHeight = itemCard.clientHeight;
      console.log("wrapper", { width, height });
      console.log("item card", { itemCardWidth, itemCardHeight });
    };

    cardsWrapper.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="flex flex-1 flex-col lg:flex-row flex-wrap"
        ref={cardsWrapperRef}
      >
        {reviewData.length &&
          reviewData.map((item, indx) => (
            <div
              className="lg:w-1/3 mb-2 lg:mb-6 items-center justify-center relative"
              ref={itemCardWrapperRef}
              key={indx}
            >
              <div className="rounded-full bg-white inline-block p-2 relative -bottom-7 z-10">
                <img
                  className="rounded-full text-center inline-block"
                  src={item.imgUrl}
                  alt="`${item.fullname}` Profile"
                />
              </div>
              <div
                style={{ borderRadius: "15px" }}
                className="p-8 text-center mx-2 bg-white mx-6 relative"
              >
                <p className="font-bold text-gray-900">{item.fullname}</p>
                <p className="text-sm mb-6 text-gray-400">{item.company}</p>
                <p className="text-gray-700">"{item.review}"</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Cards;
