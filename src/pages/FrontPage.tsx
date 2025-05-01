import { useRef } from "react";
import { Logo, SectionReview } from "../components";

import iconSquare from "../assets/images/icon-square.png";
import iconGlass from "../assets/images/icon-glass.png";
import iconPyramid from "../assets/images/icon-pyramid.png";
import iconWoolBall from "../assets/images/icon-wool-ball.png";

import iconSend from "../assets/images/icon-send.png";
import iconFooterRing from "../assets/images/icon-footer-ring.png";
import iconFooterRing1 from "../assets/images/icon-footer-ring-1.png";
import iconFooterRing2 from "../assets/images/icon-footer-ring-2.png";
import iconPlus from "../assets/images/icon-plus.png";
import videoThumb from "../assets/images/video-1-thumb.png";
import videoNature from "../assets/videos/video-nature.mp4";

import iconHeroZigzag from "../assets/images/icon-hero-zigzag.png";
import iconHeroRing from "../assets/images/icon-hero-ring.png";
import iconHeroPyramid from "../assets/images/icon-hero-pyramid.png";
import iconHeroAdd from "../assets/images/icon-hero-add.png";

import iconHeroHamburgerMenu from "../assets/images/icon-hamburger-menu.svg";
import iconSubscritEnvelope from "../assets/images/icon-envelope.svg";

function FrontPage() {
  const videoRef = useRef(null);

  return (
    <>
      <div className="h-full w-full mx-auto p-2 m-0 overflow-x-hidden overflow-y-auto">
        <section className="bg-black-900">
          <div className="lg:w-5/6 mx-auto">
            <header className="flex justify-center items-center text-black p-3 text-white">
              <div className="flex flex-1 justify-start">
                <Logo />
              </div>
              <nav className="flex-1 hidden lg:block">
                <ul className="flex justify-center font-bold text-white">
                  <li>
                    <a
                      href="#"
                      className="inline-block p-3 font-bold text-white hover:text-white hover:opacity-70"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block p-3 font-bold text-white hover:text-white hover:opacity-70"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block p-3 font-bold text-white hover:text-white hover:opacity-70"
                    >
                      Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block p-3 font-bold text-white hover:text-white hover:opacity-70"
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
                <a href="#" className="lg:hidden">
                  <img
                    width="50"
                    className="text-black"
                    src={iconHeroHamburgerMenu}
                    alt="Menu"
                  />
                </a>
              </div>
            </header>
            <div
              aria-label="hero"
              className="py-32 justify-center items-center relative"
            >
              <div className="text-center relative">
                <h1 className="text-5xl lg:text-7xl font-bold mb-10 text-white">
                  Make your <br />
                  <span style={{ color: "#96ceb4" }}>Platform</span> Perfect
                </h1>
                <p className="mb-6 lg:w-1/2 mx-auto text-2xl mb-14 text-white">
                  we are a design studio that has completed a various projects
                  in the field of technology to perfection.
                </p>
                <button
                  style={{ backgroundColor: "#4c40f7", color: "#fff" }}
                  className="px-7 py-2 font-bold"
                >
                  Get Started
                </button>

                <div className="absolute z-10 left-2 lg:left-16 -top-2 max-w-[65px] lg:max-w-[95px]">
                  <img src={iconHeroZigzag} alt="Icon" />
                </div>
                <div className="absolute z-10 -right-2 -top-12 lg:-top-2 max-w-[65px] lg:max-w-[105px]">
                  <img src={iconHeroPyramid} alt="Icon" />
                </div>
                <div className="absolute z-10 left-16 md:left-24 lg:left-48 -bottom-2 max-w-[30px] lg:max-w-[51px]">
                  <img src={iconHeroRing} alt="Icon" />
                </div>
                <div className="absolute z-10 right-12 lg:-right-2 md:bottom-4 lg:-bottom-2 max-w-[55px] lg:max-w-[105px]">
                  <img src={iconHeroAdd} alt="Icon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black-900 py-12">
          <div className="lg:w-5/6 lg:mx-auto flex justify-center items-center flex-col lg:flex-row">
            <div className="lg:w-1/2 pb-16">
              <h2 className="text-5xl lg:text-left font-bold relative">
                Why should choose us?
                <div
                  className="absolute"
                  style={{
                    // background: "rgb(77,58,41)",
                    background:
                      "radial-gradient(circle, rgba(77,60,43,1) 0%, rgba(37,37,37,0) 70%)",
                    height: "1000px",
                    width: "1000px",
                    zIndex: "-1",
                    left: "-600px",
                    top: "-450px",
                  }}
                ></div>
              </h2>
            </div>
            <div className="lg:w-1/2 lg:text-left pb-16">
              <p className="lg:w-1/2 ml-auto text-xl">
                Let's see what makes you have to choose us, it's all in this
                video
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-5/6 video-container">
              <video
                ref={videoRef}
                src={videoNature}
                controls
                width="100%"
                poster={videoThumb}
              >
                <source src={videoNature} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section className="bg-black-900 py-6">
          <div className="lg:w-5/6 lg:mx-auto flex justify-center items-start flex-col lg:flex-row">
            <div className="lg:w-1/2 flex-items p-10 text-left">
              <h2 className="text-5xl font-bold mb-10 lg:text-left text-white relative">
                What services do we offer?
              </h2>
              <p className="mb-10 text-xl">
                These are some of the services that you will get if you
                cooperate with us, of course ther are many more.
              </p>
              <a className="text-2xl" href="#">
                Sell More
              </a>
            </div>
            <div className="lg:w-1/2 flex flex-items p-10 flex-wrap relative">
              <div className="text-left w-1/2 mb-16 lg:pl-5 xl:pl-10">
                <img className="mb-5" src={iconSquare} alt="Content Strategy" />
                <h3
                  style={{ color: "#FFAD60" }}
                  className="mb-4 font-bold text-xl"
                >
                  Content Strategy
                </h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-16 lg:pl-5 xl:pl-10">
                <img
                  className="mb-5"
                  src={iconPyramid}
                  alt="Content Development"
                />
                <h3
                  style={{ color: "#FFAD60" }}
                  className="mb-4 font-bold  text-xl"
                >
                  Content Development
                </h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-16 lg:pl-5 xl:pl-10">
                <img
                  className="mb-5"
                  src={iconWoolBall}
                  alt="Content Creation"
                />
                <h3
                  style={{ color: "#FFAD60" }}
                  className="mb-4 font-bold  text-xl"
                >
                  Content Creation
                </h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-16 lg:pl-5 xl:pl-10">
                <img
                  className="mb-5"
                  src={iconGlass}
                  alt="Content Optimization"
                />
                <h3
                  style={{ color: "#FFAD60" }}
                  className="mb-4 font-bold text-xl"
                >
                  Content Optimization
                </h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>

              <div
                className="absolute"
                style={{
                  // background: "rgb(77,58,41)",
                  background:
                    "radial-gradient(circle, rgba(40,34,74,1) 0%, rgba(37,37,37,0) 55%)",
                  height: "1000px",
                  width: "1000px",
                  zIndex: "-1",
                  left: "-230px",
                  top: "-260px",
                }}
              ></div>
            </div>
          </div>
        </section>

        <SectionReview />

        <section className="bg-black-900 flex flex-col items-center py-24">
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
            <div className="-top-2 -right-2 absolute z-20">
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
                <div className="relative mb-4 lg:mb-0 inline-block">
                  <input
                    type="text"
                    className="p-4 pl-14 px-5 border-2 border-slate-600 bg-white rounded-md z-10 relative w-[400px] text-xl plaholder:opacity-70"
                    placeholder="Your Email"
                  />
                  <img
                    src={iconSubscritEnvelope}
                    className="w-[26px] top-5 left-4 absolute z-20 opacity-60"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-item lg:pl-6">
                <button
                  style={{
                    color: "#fff",
                    backgroundColor: "#ffad61",
                  }}
                  className="px-12 py-4 bg-transparent font-bold"
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
              <Logo />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <ul className="flex m-0 p-0 text-center">
                <li className="flex-item">
                  <a
                    href="#"
                    className="inline-block p-4 px-6 text-white hover:text-white hover:opacity-60"
                  >
                    Home
                  </a>
                </li>
                <li className="flex-item">
                  <a
                    href="#"
                    className="inline-block p-4 px-6 text-white hover:text-white hover:opacity-60"
                  >
                    About
                  </a>
                </li>
                <li className="flex-item">
                  <a
                    href="#"
                    className="inline-block p-4 px-6 text-white hover:text-white hover:opacity-60"
                  >
                    Service
                  </a>
                </li>
                <li className="flex-item">
                  <a
                    href="#"
                    className="inline-block p-4 px-6 text-white hover:text-white hover:opacity-60"
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 p-4 px-6 lg:text-right text-center">
              © {new Date().getFullYear()} Agency, All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FrontPage;
