import { createRef, useEffect, useState } from "react";

import reviewData from "../data/user-reviews.json";

function Cards() {
  const cardsWrapperRef = createRef<HTMLDivElement>();
  const itemCardWrapperRef = createRef<HTMLDivElement>();

  const [cardWidth, setCardWidth] = useState(350);
  const [cardWrapperWidth, setCardWrapperWidth] = useState(1400);

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

      console.log("set items wrapper", setItemsWrapper(itemCardWidth));
    };

    const setItemsWrapper = (itemCardWidth: any) => {
      return itemCard.length * itemCardWidth;
    };

    console.log("itemCard", itemCard);

    cardsWrapper.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        // className="flex flex-1 flex-col lg:flex-row flex-wrap"
        className="flex flex-1 flex-row"
        style={{ width: cardWrapperWidth }}
        ref={cardsWrapperRef}
        data-name="Cards"
      >
        {reviewData.length &&
          reviewData.map((item, indx) => (
            <div
              className="lg:w-1/3 mb-2 lg:mb-6 items-center justify-center relative"
              // className="mb-2 lg:mb-6 items-center justify-center relative"
              data-style={{ width: cardWidth }}
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
