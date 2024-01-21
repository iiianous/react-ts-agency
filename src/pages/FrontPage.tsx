import iconSquare from "../assets/images/icon-square.png";
import iconGlass from "../assets/images/icon-glass.png";
import iconPyramid from "../assets/images/icon-pyramid.png";
import iconWoolBall from "../assets/images/icon-wool-ball.png";

import iconSend from "../assets/images/icon-send.png";
import iconFooterRing from "../assets/images/icon-footer-ring.png";
import iconFooterRing1 from "../assets/images/icon-footer-ring-1.png";
import iconFooterRing2 from "../assets/images/icon-footer-ring-2.png";
import iconPlus from "../assets/images/icon-plus.png";

function FrontPage() {
  return (
    <>
      <div className="h-full w-full mx-auto p-2 m-0">
        <section className="bg-black-900">
          <div className="lg:w-5/6 mx-auto">
            <header className="flex justify-center items-center text-black p-3 text-white">
              <div className="flex flex-1 justify-start font-bold tracking-wide">
                AGENCY
              </div>
              <nav className="flex-1">
                <ul className="flex justify-center font-bold text-white">
                  <li>
                    <a
                      href="#"
                      className="inline-block p-3 font-bold text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block p-3 font-bold text-white"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block p-3 font-bold text-white"
                    >
                      Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block p-3 font-bold text-white"
                    >
                      Testimonial
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex flex-1 justify-end">
                <button
                  style={{ border: "2px solid #8e643e", color: "#8e643e" }}
                  className="px-7 py-2 bg-transparent font-bold hidden lg:block"
                >
                  Contact Us
                </button>
              </div>
            </header>
            <div
              aria-aria-label="hero"
              className="py-32 justify-center items-center"
            >
              <div className="text-center">
                <h1 className="text-7xl font-bold mb-10 text-white">
                  Make your <br />
                  <span style={{ color: "#96ceb4" }}>Platform</span> Perfect
                </h1>
                <p className="mb-6 lg:w-2/5 mx-auto text-2xl mb-14">
                  we are a design studio that has completed a various projects
                  in the field of technology to perfection.
                </p>
                <button
                  style={{ backgroundColor: "#4c40f7", color: "#fff" }}
                  className="px-7 py-2 font-bold"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black-900 py-12">
          <div className="lg:w-5/6 lg:mx-auto flex justify-center items-center flex-col lg:flex-row">
            <div className="w-1/2 pb-16">
              <h2 className="text-4xl lg:text-left font-bold">
                Why should choose us?
              </h2>
            </div>
            <div className="w-1/2 lg:text-left pb-16">
              <p className="lg:w-1/2 ml-auto">
                Let's see what makes you have to choose us, it's all in this
                video
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-5/6">
              <img
                className="inline-block rounded-md"
                src="https://fakeimg.pl/1400x720"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="bg-black-900 py-12">
          <div className="lg:w-5/6 lg:mx-auto flex justify-center items-start flex-col lg:flex-row">
            <div className="lg:w-1/2 flex-items p-10 text-left">
              <h2 className="text-4xl font-bold mb-10 lg:text-left text-white">
                What services do we offer?
              </h2>
              <p className="mb-10">
                These are some of the services that you will get if you
                cooperate with us, of course ther are many more.
              </p>
              <a className="text-2xl" href="#">
                Sell More
              </a>
            </div>
            <div className="lg:w-1/2 flex flex-items p-10 flex-wrap">
              <div className="text-left w-1/2 mb-16  lg:pl-10">
                <img className="mb-5" src={iconSquare} alt="" />
                <h3 style={{ color: "#FFAD60" }} className="mb-4 font-bold">
                  Content Strategry
                </h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-16  lg:pl-10">
                <img className="mb-5" src={iconPyramid} alt="" />
                <h3 style={{ color: "#FFAD60" }} className="mb-4 font-bold">
                  Content Strategry
                </h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-16  lg:pl-10">
                <img className="mb-5" src={iconWoolBall} alt="" />
                <h3 style={{ color: "#FFAD60" }} className="mb-4 font-bold">
                  Content Strategry
                </h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-16  lg:pl-10">
                <img className="mb-5" src={iconGlass} alt="" />
                <h3 style={{ color: "#FFAD60" }} className="mb-4 font-bold">
                  Content Strategry
                </h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black-900 py-12">
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
          <div className="lg:w-5/6 mx-auto flex flex-wrap">
            <div className="lg:w-1/3 md:w-1/3 mb-6 items-center justify-center relative">
              <div className="rounded-full bg-white inline-block p-2 relative -bottom-7 z-10">
                <img
                  className="rounded-full text-center inline-block"
                  src="https://fakeimg.pl/40x40"
                  alt=""
                />
              </div>
              <div
                style={{ borderRadius: "15px" }}
                className="p-8 text-center mx-2 bg-white mx-6 relative"
              >
                <p className="font-bold text-gray-900">Mr. Mostar</p>
                <p className="text-sm mb-6 text-gray-400">Retail Company</p>
                <p className="text-gray-700">
                  "Than you for realizing the idea and highly recommended it for
                  those of you who want to create a system."
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/3 mb-6 items-center justify-center relative">
              <div className="rounded-full bg-white inline-block p-2 relative -bottom-7 z-10">
                <img
                  className="rounded-full text-center inline-block"
                  src="https://fakeimg.pl/40x40"
                  alt=""
                />
              </div>
              <div
                style={{ borderRadius: "15px" }}
                className="p-8 text-center mx-2 bg-white mx-6 relative"
              >
                <p className="font-bold text-gray-900">Mr. Mostar</p>
                <p className="text-sm mb-6 text-gray-400">Retail Company</p>
                <p className="text-gray-700">
                  "Than you for realizing the idea and highly recommended it for
                  those of you who want to create a system."
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/3 mb-6 items-center justify-center relative">
              <div className="rounded-full bg-white inline-block p-2 relative -bottom-7 z-10">
                <img
                  className="rounded-full text-center inline-block"
                  src="https://fakeimg.pl/40x40"
                  alt=""
                />
              </div>
              <div
                style={{ borderRadius: "15px" }}
                className="p-8 text-center mx-2 bg-white mx-6 relative"
              >
                <p className="font-bold text-gray-900">Mr. Mostar</p>
                <p className="text-sm mb-6 text-gray-400">Retail Company</p>
                <p className="text-gray-700">
                  "Than you for realizing the idea and highly recommended it for
                  those of you who want to create a system."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black-900 flex flex-col items-center py-12">
          <div
            style={{ borderTopLeftRadius: "105px" }}
            className="lg:w-5/6 lg:mx-auto bg-white text-black py-24 rounded-lg relative"
          >
            <div
              style={{
                width: "62",
              }}
              className="-top-4 -left-10 absolute"
            >
              <img width="62" src={iconFooterRing} alt="Icon" />
            </div>
            <div className="-top-2 -right-2 absolute">
              <img width="45" src={iconSend} alt="Icon" />
            </div>
            <div
              style={{
                width: "288px",
              }}
              className="absolute -top-4 -right-24 opacity-20 z-10"
            >
              <img src={iconFooterRing2} alt="Icon" />
            </div>
            <div
              style={{
                width: "153px",
              }}
              className="absolute z-10 -right-24 -bottom-16"
            >
              <img src={iconPlus} alt="Icon" />
            </div>
            <div className="flex-item">
              <h3 className="text-3xl mb-10 w-1/2 mx-auto font-bold">
                Subscribe to get information, latest news and other interesting
                offers about the agency
              </h3>
            </div>
            <div className="relative z-10 flex flex-item flex-col lg:flex-row lg:justify-center lg:items-center">
              <div className="flex-item relative">
                <div
                  style={{
                    width: "389px",
                  }}
                  className="absolute -bottom-24 -left-72 opacity-20 -z-10"
                >
                  <img src={iconFooterRing1} alt="Icon" />
                </div>
                <input
                  type="text"
                  className="p-4 px-5 border-2 border-slate-600 bg-white rounded-md z-10 relative w-80"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex-item lg:pl-6">
                <button
                  style={{
                    color: "#fff",
                    backgroundColor: "#ffad61",
                  }}
                  className="px-7 py-4 bg-transparent font-bold"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-black-900">
          <div className=" flex flex-col lg:w-5/6 lg:mx-auto lg:flex-row py-12">
            <div className="flex-1 p-4 px-6 lg:text-left text-center">
              Agency
            </div>
            <div className="flex-1 flex items-center justify-center">
              <ul className="flex m-0 p-0 text-center">
                <li className="flex-item">
                  <a href="#" className="inline-block p-4 px-6">
                    Home
                  </a>
                </li>
                <li className="flex-item">
                  <a href="#" className="inline-block p-4 px-6">
                    About
                  </a>
                </li>
                <li className="flex-item">
                  <a href="#" className="inline-block p-4 px-6">
                    Service
                  </a>
                </li>
                <li className="flex-item">
                  <a href="#" className="inline-block p-4 px-6">
                    Testimonial
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 p-4 px-6 lg:text-right text-center">
              © 2020 Agency, All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FrontPage;
