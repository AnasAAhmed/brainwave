import Navbar from "@/components/Navbar";
import { allSeoData } from "@/lib/utils";
import Head from "next/head";


const Home = () => {
  const seoData = allSeoData['homepage']
  return (
    <>
      <Head>
        {/* Standard SEO */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={[
          "Borcelle",
          "digital solutions",
          "web development",
          "app development",
          "ecommerce",
          "SaaS",
          "consulting",
          "B2B",
          "subscription platforms",
          "job portals",
          "co-working solutions",
          "modern websites",
          "product development"
        ].join(", ")} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:site_name" content="Brainwave.io Next.js by Anas Ahmed" />

        {/* Twitter (extra but recommended) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
      </Head>
      <Navbar textColor="black" />

      <div className="flex flex-col items-center bg-white">
        <div className="flex overflow-hidden relative bg-slate-100 flex-col items-center self-stretch px-16 md:px-8 pt-4 pb-20 w-full min-h-[801px] max-md:px-5 max-md:max-w-full">
          <div className="flex relative flex-col mb-7 w-full max-w-[1159px] max-md:max-w-full">

            <div className="self-center mt-24 w-full max-w-[1111px]  max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto font-bold text-gray-900 max-md:mt-10 max-md:max-w-full">
                    <div className="text-sm tracking-widest text-red-500 uppercase max-md:max-w-full">
                      Let’s shift your business
                    </div>
                    <div className="mt-10 text-6xl tracking-tighter leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                      Shift your business fast with Shade Pro.
                    </div>
                    <div className="mt-11 mr-10 text-xl tracking-normal leading-8 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next consultancy website within
                      few minutes.
                    </div>
                    <div className="justify-center self-start px-8 py-6 mt-11 text-lg tracking-tight leading-8 text-center text-white bg-indigo-600 rounded-lg max-md:px-5 max-md:mt-10">
                      Get started a project
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="/home/home-hero.png"
                    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aae594cda40b3a76564f8af73ea7c2dd9bb4fb8968481d78851311c8bcce95e8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aae594cda40b3a76564f8af73ea7c2dd9bb4fb8968481d78851311c8bcce95e8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aae594cda40b3a76564f8af73ea7c2dd9bb4fb8968481d78851311c8bcce95e8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aae594cda40b3a76564f8af73ea7c2dd9bb4fb8968481d78851311c8bcce95e8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aae594cda40b3a76564f8af73ea7c2dd9bb4fb8968481d78851311c8bcce95e8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aae594cda40b3a76564f8af73ea7c2dd9bb4fb8968481d78851311c8bcce95e8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aae594cda40b3a76564f8af73ea7c2dd9bb4fb8968481d78851311c8bcce95e8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aae594cda40b3a76564f8af73ea7c2dd9bb4fb8968481d78851311c8bcce95e8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="grow w-full aspect-[0.92] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-5 mt-32 w-full max-w-[1112px] max-md:mt-10 max-md:max-w-full">
          <div className="self-center text-sm font-bold tracking-widest text-center text-red-500 uppercase">
            Our services
          </div>
          <div className="self-center mt-9 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-900 w-[521px] max-md:max-w-full">
            We provide great services for our customers based on needs
          </div>
          <div className="mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow rounded-xl items-center px-11 py-14 text-lg font-bold bg-blue-500 text-white aspect-[0.72] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="/home/content-hero.svg"
                    className="max-w-full aspect-[0.81] w-[115px]"
                  />
                  <div className="relative mt-12 text-2xl tracking-tight leading-9 text-center max-md:mt-10">
                    Graphic Design
                  </div>
                  <div className="relative self-stretch mt-7 tracking-normal leading-7 text-center">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </div>
                  <div className="flex relative gap-5 justify-between mt-14 tracking-tight leading-[188%] max-md:mt-10">
                    <div>Learn more</div>
                    <img
                      loading="lazy"
                      src="/subs/arrow.svg"
                      className=" w-3 aspect-[1.2]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow items-center px-11 py-12 text-lg font-bold rounded-xl bg-green-500 text-white aspect-[0.72] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="/home/content-hero.svg"
                    className="max-w-full aspect-[0.81] w-[115px]"
                  />
                  <div className="relative mt-14 text-2xl tracking-tight leading-9 text-center max-md:mt-10">
                    Web Development
                  </div>
                  <div className="relative self-stretch mt-7 tracking-normal leading-7 text-center">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </div>
                  <div className="flex relative gap-5 justify-between mt-14 tracking-tight leading-[188%] max-md:mt-10">
                    <div>Learn more</div>
                    <img
                      loading="lazy"
                      src="/subs/arrow.svg"
                      className=" w-3 aspect-[1.2]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-11 py-12 mx-auto w-full text-lg font-bold text-white bg-red-500 rounded-xl max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="/home/content-hero.svg"
                    className="max-w-full aspect-[0.81] w-[115px]"
                  />
                  <div className="mt-12 text-2xl tracking-tight leading-9 text-center max-md:mt-10">
                    Content Writing
                  </div>
                  <div className="self-stretch mt-7 tracking-normal leading-7 text-center">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </div>
                  <div className="flex gap-5 justify-between mt-14 tracking-tight leading-[188%] max-md:mt-10">
                    <div>Learn more</div>
                    <img
                      loading="lazy"
                      src="/subs/arrow.svg"
                      className=" w-3 aspect-[1.2]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center mt-36 max-w-full w-[942px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="/home/testimo-1.png"
                  className="shrink-0 mt-2.5 max-w-full rounded-full aspect-square w-[164px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start text-gray-900 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="/home/stars.svg"
                    className="max-w-full aspect-[6.67] w-[123px]"
                  />
                  <div className="self-stretch mt-11 text-2xl font-bold tracking-tight leading-9 max-md:mt-10 max-md:max-w-full">
                    “OMG! I cannot believe that I have got a brand new landing
                    page after getting Albino. It was super easy to edit and
                    publish.”
                  </div>
                  <div className="mt-9 ml-24 text-lg tracking-normal leading-7 max-md:ml-2.5">
                    Web Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="/home/divider.svg"
            className="mt-32 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
          />
          <div className="mt-32 text-sm font-bold tracking-widest text-red-500 uppercase max-md:mt-10 max-md:max-w-full">
            Our Story
          </div>
          <div className="mt-14 text-4xl font-bold tracking-tighter leading-10 text-gray-900 max-md:mt-10 max-md:max-w-full">
            We know how everything works and why your business is failing over and
            over again.
          </div>
          <div className="mt-3 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="/home/story-1.png"
                  className="grow mt-28 w-full aspect-[0.79] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                  <div className="px-px max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="/home/story-2.png"
                          className="grow w-full aspect-[0.98] max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="/home/story-3.png"
                          className="shrink-0 mt-40 w-40 max-w-full aspect-[0.96] max-md:mt-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-28 text-lg tracking-normal leading-7 text-gray-900 max-md:mt-10 max-md:max-w-full">
                    We share common trends and strategies for improving your
                    rental income and making sure you stay in high demand. With
                    lots of unique blocks, you can easily build a page without
                    coding. Build your next landing page.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center mt-32 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-1 text-center text-gray-900 max-md:mt-10">
                  <div className="self-center text-5xl font-bold tracking-tighter leading-[58.08px] max-md:text-4xl">
                    1M+
                  </div>
                  <div className="mt-10 text-xl tracking-normal leading-8">
                    Customers visit Omega every month to get their service done.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-center text-gray-900 max-md:mt-10">
                  <div className="self-center text-5xl font-bold tracking-tighter leading-[58.08px] max-md:text-4xl">
                    92%
                  </div>
                  <div className="mt-10 text-xl tracking-normal leading-8">
                    Satisfaction rate comes from our awesome customers.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-center text-gray-900 max-md:mt-10">
                  <div className="self-center text-5xl font-bold tracking-tighter leading-[58.08px] max-md:text-4xl">
                    4.9/5.0
                  </div>
                  <div className="mt-9 text-xl tracking-normal leading-8">
                    Average customer ratings we have got all over internet.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-stretch py-20 pr-20 mt-32 w-full bg-slate-100 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start mt-10 max-w-full font-bold text-center w-[1033px] max-md:flex-wrap max-md:mt-10">
            <img
              loading="lazy"
              src="/home/dots.svg"
              className="shrink-0 self-end mt-12 aspect-[0.79] w-[89px] max-md:mt-10"
            />
            <div className="flex flex-col self-start max-md:max-w-full">
              <div className="self-center text-sm tracking-widest text-red-500 uppercase">
                Why choose us
              </div>
              <div className="mt-9 text-4xl tracking-tighter leading-10 text-gray-900 max-md:max-w-full">
                People choose us because we serve the best for everyone
              </div>
            </div>
          </div>
          <div className="flex flex-col self-center px-px mt-20 mb-3.5 w-full max-w-[1111px] max-md:mt-10 max-md:max-w-full">
            <div className="flex z-10 gap-5 self-start ml-28 text-gray-900 max-md:ml-2.5">
              <img
                loading="lazy"
                src="/home/choose-icon1.svg"
                className="shrink-0 self-start aspect-square w-[79px]"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                <div className="text-xl font-bold tracking-tight leading-8">
                  Dedicated project manager
                </div>
                <div className="mt-7 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
              </div>
            </div>
            <div className="flex gap-5 self-end mt-0 mr-40 text-gray-900 max-md:mr-2.5">
              <img
                loading="lazy"
                src="/home/choose-icon2.svg"
                className="shrink-0 self-start aspect-square w-[79px]"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                <div className="text-xl font-bold tracking-tight leading-8">
                  Organized tasks
                </div>
                <div className="mt-7 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
              </div>
            </div>
            <div className="flex z-10 gap-5 self-start mt-24 ml-28 text-gray-900 max-md:mt-10 max-md:ml-2.5">
              <img
                loading="lazy"
                src="/home/choose-icon3.svg"
                className="shrink-0 self-start aspect-square w-[79px]"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                <div className="text-xl font-bold tracking-tight leading-8">
                  Easy feedback sharing
                </div>
                <div className="mt-7 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
              </div>
            </div>
            <div className="flex gap-5 self-end mt-0 mr-40 text-gray-900 max-md:mr-2.5">
              <img
                loading="lazy"
                src="/home/choose-icon-4.svg"
                className="shrink-0 self-start aspect-square w-[79px]"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                <div className="text-xl font-bold tracking-tight leading-8">
                  Never miss deadline
                </div>
                <div className="mt-8 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="/home/divider.svg"
                className="w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:max-w-full"
              />
              <div className="flex gap-5 justify-between px-px mt-24 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col text-gray-900 max-md:max-w-full">
                  <div className="text-3xl font-bold tracking-tighter leading-10 max-md:max-w-full">
                    Ready to launch your next project?
                  </div>
                  <div className="mt-8 text-xl tracking-normal leading-8 max-md:max-w-full">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </div>
                </div>
                <div className="justify-center px-9 py-6 my-auto text-lg font-bold tracking-tight leading-8 text-center text-white bg-indigo-600 rounded-lg max-md:px-5">
                  Get started a project
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 text-sm font-bold tracking-widest text-center text-red-500 uppercase max-md:mt-10">
          Case studies
        </div>
        <div className="mt-9 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-900 w-[521px] max-md:max-w-full">
          Our works describe why we are the best in the business
        </div>
        <div className="mt-24 max-w-full w-[1070px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-gray-900 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/home/case-1.png"
                  className="w-full aspect-[0.93] max-md:max-w-full"
                />
                <div className="flex flex-col self-start mt-10 ml-7 max-md:mt-10 max-md:ml-2.5">
                  <div className="text-base tracking-normal leading-6">
                    Graphic Design
                  </div>
                  <div className="mt-5 text-2xl font-bold tracking-tight leading-9">
                    Aura Branding Design
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="/home/case-3.png"
                  className="mt-16 w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
                />
                <div className="flex flex-col self-start mt-10 ml-7 max-md:ml-2.5">
                  <div className="text-base tracking-normal leading-6">
                    Web Development
                  </div>
                  <div className="mt-5 text-2xl font-bold tracking-tight leading-9">
                    Gradient Website Development
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-gray-900 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/home/casee-2.png"
                  className="w-full aspect-[1.47] max-md:max-w-full"
                />
                <div className="flex flex-col self-start mt-12 ml-7 max-md:mt-10 max-md:ml-2.5">
                  <div className="text-base tracking-normal leading-6">
                    Graphic Design
                  </div>
                  <div className="mt-5 text-2xl font-bold tracking-tight leading-9">
                    AB.S Snack Packaging
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="/home/case-4.png"
                  className="mt-16 w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                />
                <div className="flex flex-col self-start mt-10 ml-7 max-md:mt-10 max-md:ml-2.5">
                  <div className="text-base tracking-normal leading-6">
                    Content Writing
                  </div>
                  <div className="mt-5 text-2xl font-bold tracking-tight leading-9">
                    Magazine Content Writing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between px-5 mt-24 text-xl font-bold tracking-tighter leading-8 text-indigo-600 max-md:mt-10">
          <div>See all works</div>
          <img
            loading="lazy"
            src="/home/arrow.svg"
            className="shrink-0 my-auto aspect-[1.18] w-[13px]"
          />
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 mt-32 w-full font-bold text-center text-white min-h-[635px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="/home/testimo-bg.svg"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col items-center mt-14 mb-7 max-w-full w-[584px] max-md:mt-10">
            <div className="text-sm tracking-widest text-green-400 uppercase">
              Testimonial
            </div>
            <div className="self-stretch mt-12 text-3xl tracking-tighter leading-10 max-md:mt-10 max-md:max-w-full">
              “Simply the best. Better than all the rest. I’d recommend this
              product to beginners and advanced users.”
            </div>
            <img
              loading="lazy"
              srcSet="/home/testimo-2.png"
              className="mt-14 rounded-full aspect-square w-[76px] max-md:mt-10"
            />
            <div className="mt-6 text-lg tracking-normal leading-7">
              Ian Klein
            </div>
            <div className="mt-3.5 text-base tracking-normal leading-6">
              Digital Marketer
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch px-16 py-20 w-full text-white bg-gray-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-5 mb-4 w-full max-w-[1111px] max-md:max-w-full">
            <div className="flex gap-5 justify-between px-px max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-3xl font-bold tracking-tighter leading-10 max-md:max-w-full">
                  Ready to launch your next project?
                </div>
                <div className="mt-8 text-xl tracking-normal leading-8 max-md:max-w-full">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
              </div>
              <div className="justify-center px-9 py-6 my-auto text-lg font-bold tracking-tight leading-8 text-center bg-indigo-600 rounded-lg max-md:px-5">
                Get started a project
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f86b518780c396ee84d6f00d88c1e1fd3b830a26b9e01812805bd8eb7711766?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="mt-20 w-full border border-gray-800 border-solid stroke-[1px] stroke-gray-800 max-md:mt-10 max-md:max-w-full"
            />
            <div className="flex gap-5 justify-between items-start mt-32 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-3xl font-bold tracking-normal">
                  Brainwave.io
                </div>
                <div className="mt-12 text-base tracking-normal leading-7 max-md:mt-10">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6537dd8b958fc17cb312d9efcf2b7254cc2655975093b3dd2b7790124afc2c8c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="mt-12 max-w-full aspect-[7.69] w-[142px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-base tracking-normal leading-6">Company</div>
                <div className="mt-10 text-lg tracking-normal leading-10">
                  About us
                  <br />
                  Contact us
                  <br />
                  Careers
                  <br />
                  Press
                </div>
              </div>
              <div className="flex flex-col self-stretch">
                <div className="text-base tracking-normal leading-6">Product</div>
                <div className="mt-11 text-lg tracking-normal leading-10 max-md:mt-10">
                  Features
                  <br />
                  Pricing
                  <br />
                  News
                  <br />
                  Help desk
                  <br />
                  Support
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-base tracking-normal leading-6">
                  Services
                </div>
                <div className="mt-10 text-lg tracking-normal leading-10 max-md:mt-10">
                  Digital Marketing
                  <br />
                  Content Writing
                  <br />
                  SEO for Business
                  <br />
                  UI Design
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-base tracking-normal leading-6">Legal</div>
                <div className="mt-10 text-lg tracking-normal leading-10">
                  Privacy Policy
                  <br />
                  Terms & Conditions
                  <br />
                  Return Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
