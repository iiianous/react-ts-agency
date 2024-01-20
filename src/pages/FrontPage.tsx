function FrontPage() {
  return (
    <>
      <div className="h-full w-5/6 mx-auto p-2 m-0">
        <section className="bg-gray-800">
          <header className="flex justify-center items-center text-black p-3">
            <div className="flex-1">AGENCY</div>
            <div className="flex-1">Links</div>
            <div className="flex-1">CTA</div>
          </header>
          <div
            aria-aria-label="hero"
            className="py-24 justify-center items-center"
          >
            <div className="text-center">
              <h1 className="text-6xl mb-10">
                Make your <br />
                Platform Perfect
              </h1>
              <p className="mb-6">
                we are a design studio that has completed a various projects in
                the field of technology to perfection.
              </p>
              <button>Get Started</button>
            </div>
          </div>
        </section>

        <section className="bg-gray-700">
          <div className="flex justify-center items-center">
            <div className="flex-items p-10">
              <h2 className="text-4xl">Why should choose us?</h2>
            </div>
            <div className="flex-items p-10">
              <p>
                Let's see what makes you have to choose us, it's all in this
                video
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="https://fakeimg.pl/1400x600" alt="" />
          </div>
        </section>

        <section className="bg-gray-800">
          <div className="flex justify-center items-center">
            <div className="w-1/2 flex-items p-10 text-left">
              <h2 className="text-4xl mb-10">What services do we offer?</h2>
              <p className="mb-10">
                These are some of the services that you will get if you
                cooperate with us, of course ther are many more.
              </p>
              <a className="text-2xl" href="#">
                Sell More
              </a>
            </div>
            <div className="w-1/2 flex flex-items p-10 flex-wrap">
              <div className="text-left w-1/2 mb-10">
                <img className="mb-5" src="https://fakeimg.pl/50x50" alt="" />
                <h3 className="mb-4">Content Strategry</h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-10">
                <img className="mb-5" src="https://fakeimg.pl/50x50" alt="" />
                <h3 className="mb-4">Content Strategry</h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-10">
                <img className="mb-5" src="https://fakeimg.pl/50x50" alt="" />
                <h3 className="mb-4">Content Strategry</h3>
                <p>
                  All our content marketing service packages include a custom
                  content strategy.
                </p>
              </div>
              <div className="text-left w-1/2 mb-10">
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

        <section className="my-10">
          <div className="py-12">
            <p className="mb-10">Testimonials</p>
            <h3 className="text-3xl">Our Client Reviews</h3>
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/3 items-center justify-center">
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
            <div className="w-1/3 items-center justify-center">
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
            <div className="w-1/3 items-center justify-center">
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
          <div className="flex flex-item">
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

        <footer className="flex justify-center bg-gray-700">
          <div className=" p-4 px-6">Agency</div>
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
