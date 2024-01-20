function FrontPage() {
  return (
    <>
      <div className="h-full w-full mx-auto p-2 m-0">
        <section className="bg-gray-800">
          <header className="flex justify-center items-center text-black p-3 text-white">
            <div className="flex-1 font-bold tracking-wide">AGENCY</div>
            <nav className="flex-1">
              <ul className="flex justify-center font-bold text-white">
                <li>
                  <a href="#" className="inline-block p-3 font-bold text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block p-3 font-bold text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block p-3 font-bold text-white">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block p-3 font-bold text-white">
                    Testimonial
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex-1">
              <button className="border-2 border-white px-7 py-2 bg-transparent font-bold">
                Contact Us
              </button>
            </div>
          </header>
          <div
            aria-aria-label="hero"
            className="py-32 justify-center items-center"
          >
            <div className="text-center">
              <h1 className="text-7xl mb-10">
                Make your <br />
                Platform Perfect
              </h1>
              <p className="mb-6 lg:w-2/5 mx-auto text-xl">
                we are a design studio that has completed a various projects in
                the field of technology to perfection.
              </p>
              <button>Get Started</button>
            </div>
          </div>
        </section>

        <section className="bg-gray-700 py-24">
          <div className="lg:w-5/6 lg:mx-auto flex justify-center items-center flex-col lg:flex-row">
            <div className="w-1/2 pb-16">
              <h2 className="text-4xl">Why should choose us?</h2>
            </div>
            <div className="w-1/2 lg:text-left pb-16">
              <p>
                Let's see what makes you have to choose us, it's all in this
                video
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-5/6">
              <img src="https://fakeimg.pl/1400x720" alt="" />
            </div>
          </div>
        </section>

        <section className="bg-gray-800 py-24">
          <div className="lg:w-5/6 lg:mx-auto flex justify-center items-start flex-col lg:flex-row">
            <div className="lg:w-1/2 flex-items p-10 text-left">
              <h2 className="text-4xl mb-10">What services do we offer?</h2>
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
                <img className="mb-5" src="https://fakeimg.pl/50x50" alt="" />
                <h3 className="mb-4">Content Strategry</h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-16  lg:pl-10">
                <img className="mb-5" src="https://fakeimg.pl/50x50" alt="" />
                <h3 className="mb-4">Content Strategry</h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-16  lg:pl-10">
                <img className="mb-5" src="https://fakeimg.pl/50x50" alt="" />
                <h3 className="mb-4">Content Strategry</h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-16  lg:pl-10">
                <img className="mb-5" src="https://fakeimg.pl/50x50" alt="" />
                <h3 className="mb-4">Content Strategry</h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-10 py-24">
          <div className="pb-12">
            <p className="mb-10">Testimonials</p>
            <h3 className="text-3xl">Our Client Reviews</h3>
          </div>
          <div className="lg:w-5/6 mx-auto flex flex-wrap">
            <div className="lg:w-1/3 md:w-1/3 mb-6 items-center justify-center">
              <div className="p-8 text-center mx-2 bg-gray-700">
                <img
                  className="rounded-full text-center inline-block mb-4"
                  src="https://fakeimg.pl/40x40"
                  alt=""
                />
                <p className="font-bold">Mr. Mostar</p>
                <p className="text-sm mb-6">Retail Company</p>
                <p className="text-gray-600">
                  "Than you for realizing the idea and highly recommended it for
                  those of you who want to create a system."
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/3 mb-6 items-center justify-center">
              <div className="p-8 text-center mx-2 bg-gray-700">
                <img
                  className="rounded-full text-center inline-block mb-4"
                  src="https://fakeimg.pl/40x40"
                  alt=""
                />
                <p className="font-bold">Mr. Mostar</p>
                <p className="text-sm mb-6">Retail Company</p>
                <p className="text-gray-600">
                  "Than you for realizing the idea and highly recommended it for
                  those of you who want to create a system."
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/3 mb-6 items-center justify-center">
              <div className="p-8 text-center mx-2 bg-gray-700">
                <img
                  className="rounded-full text-center inline-block mb-4"
                  src="https://fakeimg.pl/40x40"
                  alt=""
                />
                <p className="font-bold">Mr. Mostar</p>
                <p className="text-sm mb-6">Retail Company</p>
                <p className="text-gray-600">
                  "Than you for realizing the idea and highly recommended it for
                  those of you who want to create a system."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center py-48 bg-gray-700">
          <div className="flex-item">
            <h3 className="text-4xl mb-7">
              Subscribe to get information, latest news and other interesting
              offers about the agency
            </h3>
          </div>
          <div className="flex flex-item flex-col lg:flex-row">
            <div className="flex-item">
              <input
                type="text"
                className="p-3 px-5"
                placeholder="Your Email"
              />
            </div>
            <div className="flex-item">
              <button className="p-3 px-5">Subscribe</button>
            </div>
          </div>
        </section>

        <footer className="flex justify-center bg-gray-700 flex-col lg:flex-row text-center lg:text-left">
          <div className="flex-item p-4 px-6">Agency</div>
          <div className="flex flex-item items-center justify-center">
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
          <div className="flex-item p-4 px-6">
            2020 Agency, All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

export default FrontPage;
