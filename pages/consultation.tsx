import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>

      <Navbar textColor='white' />

      <div className="flex flex-col items-center pb-10 bg-white">
        <div className="flex overflow-hidden relative flex-col items-start self-stretch px-12 pt-4 pb-20 w-full font-bold text-white min-h-[676px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b1d8737b44ea79f08347d044e21000703706ee5fc2c4f37f581f27851408e718?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1d8737b44ea79f08347d044e21000703706ee5fc2c4f37f581f27851408e718?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1d8737b44ea79f08347d044e21000703706ee5fc2c4f37f581f27851408e718?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1d8737b44ea79f08347d044e21000703706ee5fc2c4f37f581f27851408e718?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1d8737b44ea79f08347d044e21000703706ee5fc2c4f37f581f27851408e718?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1d8737b44ea79f08347d044e21000703706ee5fc2c4f37f581f27851408e718?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1d8737b44ea79f08347d044e21000703706ee5fc2c4f37f581f27851408e718?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1d8737b44ea79f08347d044e21000703706ee5fc2c4f37f581f27851408e718?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="object-cover absolute inset-0 size-full"
          />
          
          <div className="relative mt-32 xl:ml-48 text-6xl tracking-tighter leading-[65px] w-[589px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Get help from the expert consultants.
          </div>
          <div className="relative mt-9 xl:ml-48 text-xl tracking-normal leading-8 w-[487px] max-md:max-w-full">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </div>
          <div className="flex relative gap-5 px-5 py-2 mt-11 mb-9 xl:ml-48 text-lg tracking-tight leading-8 bg-indigo-600 rounded-lg max-md:pl-5 max-md:mt-10 max-md:ml-2.5">
            <div className="flex-auto">Get started now</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6c27fdc5ecfce6225529c79f1079e4cb662afc7db8699c38269539f090a03fa?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className=" aspect-[1.18] w-[13px]"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between px-5 mt-24 max-w-full text-gray-900 w-[990px] max-md:flex-wrap max-md:mt-10">
          <div className="flex gap-5 justify-between">
            <div className="text-5xl font-bold tracking-tighter leading-[58.08px] max-md:text-4xl">
              1M+
            </div>
            <div className="text-lg tracking-normal leading-7">
              Customers visit Albino every months
            </div>
          </div>
          <div className="flex gap-5 justify-between self-start">
            <div className="my-auto text-5xl font-bold tracking-tighter leading-[58.08px] max-md:text-4xl">
              93%
            </div>
            <div className="text-lg tracking-normal leading-7">
              Satisfaction rate from our customers.
            </div>
          </div>
          <div className="flex gap-5 justify-between">
            <div className="text-5xl font-bold tracking-tighter leading-[58.08px] max-md:text-4xl">
              4.9
            </div>
            <div className="text-lg tracking-normal leading-7">
              Average customer ratings out of 5.00!
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e017651f76b9dec5cdefeffbbca87b674d711c47a5eafef13285a1430d81bfa?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="self-stretch mt-20 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
        />
        <div className="mt-24 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-900 max-md:mt-10">
          Services we offer for you
        </div>
        <div className="mt-8 text-xl tracking-normal leading-8 text-center text-gray-900 w-[589px] max-md:max-w-full">
          With lots of unique blocks, you can easily build a page without coding.
          Build your next landing page.
        </div>
        <div className="px-5 mt-24 w-full max-w-[1109px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-5 mx-auto w-full text-lg tracking-normal leading-7 text-gray-900 bg-white rounded-xl border border-gray-200 border-solid max-md:mt-7">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/011b3a86f60248a99c928b4f073c3d716264c027ec427222ced70acb9a7b877f?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/011b3a86f60248a99c928b4f073c3d716264c027ec427222ced70acb9a7b877f?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/011b3a86f60248a99c928b4f073c3d716264c027ec427222ced70acb9a7b877f?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/011b3a86f60248a99c928b4f073c3d716264c027ec427222ced70acb9a7b877f?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/011b3a86f60248a99c928b4f073c3d716264c027ec427222ced70acb9a7b877f?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/011b3a86f60248a99c928b4f073c3d716264c027ec427222ced70acb9a7b877f?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/011b3a86f60248a99c928b4f073c3d716264c027ec427222ced70acb9a7b877f?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/011b3a86f60248a99c928b4f073c3d716264c027ec427222ced70acb9a7b877f?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="w-full border border-gray-200 border-solid aspect-[1.52]"
                />
                <div className="flex gap-5 mt-6 mr-5 ml-5 max-md:mx-2.5">
                  <div className="flex-auto">Digital Marketing</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ae301bdab8afcedf8f2db69e2022b8101701949b789b40a3b2b4f321544146?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="shrink-0 my-auto aspect-[1.49] w-[15px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-5 mx-auto w-full text-lg tracking-normal leading-7 text-gray-900 bg-white rounded-xl border border-gray-200 border-solid shadow-2xl max-md:mt-7">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6dcdeb5537639e803a34bb7e91f29c55134b6f93fbca1c43d4d09696b974db42?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dcdeb5537639e803a34bb7e91f29c55134b6f93fbca1c43d4d09696b974db42?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dcdeb5537639e803a34bb7e91f29c55134b6f93fbca1c43d4d09696b974db42?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dcdeb5537639e803a34bb7e91f29c55134b6f93fbca1c43d4d09696b974db42?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dcdeb5537639e803a34bb7e91f29c55134b6f93fbca1c43d4d09696b974db42?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dcdeb5537639e803a34bb7e91f29c55134b6f93fbca1c43d4d09696b974db42?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dcdeb5537639e803a34bb7e91f29c55134b6f93fbca1c43d4d09696b974db42?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dcdeb5537639e803a34bb7e91f29c55134b6f93fbca1c43d4d09696b974db42?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="w-full border border-gray-200 border-solid aspect-[1.52]"
                />
                <div className="flex gap-5 mt-6 mr-5 ml-5 max-md:mx-2.5">
                  <div className="flex-auto">Content Writing</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ae301bdab8afcedf8f2db69e2022b8101701949b789b40a3b2b4f321544146?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="shrink-0 my-auto aspect-[1.49] w-[15px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-5 mx-auto w-full text-lg tracking-normal leading-7 text-gray-900 bg-white rounded-xl border border-gray-200 border-solid max-md:mt-7">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c6152ee1a7aa47d118c86f604e0b356131a308a8a27258987a6a4c6c627f58?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1c6152ee1a7aa47d118c86f604e0b356131a308a8a27258987a6a4c6c627f58?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1c6152ee1a7aa47d118c86f604e0b356131a308a8a27258987a6a4c6c627f58?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1c6152ee1a7aa47d118c86f604e0b356131a308a8a27258987a6a4c6c627f58?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1c6152ee1a7aa47d118c86f604e0b356131a308a8a27258987a6a4c6c627f58?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1c6152ee1a7aa47d118c86f604e0b356131a308a8a27258987a6a4c6c627f58?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1c6152ee1a7aa47d118c86f604e0b356131a308a8a27258987a6a4c6c627f58?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1c6152ee1a7aa47d118c86f604e0b356131a308a8a27258987a6a4c6c627f58?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="w-full border border-gray-200 border-solid aspect-[1.52]"
                />
                <div className="flex gap-5 mt-6 mr-5 ml-5 max-md:mx-2.5">
                  <div className="flex-auto">Graphic Design</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ae301bdab8afcedf8f2db69e2022b8101701949b789b40a3b2b4f321544146?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="shrink-0 my-auto aspect-[1.49] w-[15px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 mx-auto w-full text-lg tracking-normal leading-7 text-gray-900 bg-white rounded-xl border border-gray-200 border-solid max-md:mt-7">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8634df35ea2c6fb58d597fa773b46df286038a19b36de662b3c76fe7dd660e9a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8634df35ea2c6fb58d597fa773b46df286038a19b36de662b3c76fe7dd660e9a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8634df35ea2c6fb58d597fa773b46df286038a19b36de662b3c76fe7dd660e9a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8634df35ea2c6fb58d597fa773b46df286038a19b36de662b3c76fe7dd660e9a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8634df35ea2c6fb58d597fa773b46df286038a19b36de662b3c76fe7dd660e9a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8634df35ea2c6fb58d597fa773b46df286038a19b36de662b3c76fe7dd660e9a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8634df35ea2c6fb58d597fa773b46df286038a19b36de662b3c76fe7dd660e9a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8634df35ea2c6fb58d597fa773b46df286038a19b36de662b3c76fe7dd660e9a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="w-full border border-gray-200 border-solid aspect-[1.52]"
                />
                <div className="flex gap-5 mt-6 mr-5 ml-5 max-md:mx-2.5">
                  <div className="flex-auto">SEO for Business</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ae301bdab8afcedf8f2db69e2022b8101701949b789b40a3b2b4f321544146?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="shrink-0 self-start aspect-[1.49] w-[15px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch px-16 py-20 mt-32 w-full bg-slate-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center mt-6 mb-7 max-w-full w-[1008px]">
            <div className="ml-12 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-900 max-md:max-w-full">
              Why you should choose us?
            </div>
            <div className="mt-8 ml-14 text-xl tracking-normal leading-8 text-center text-gray-900 w-[589px] max-md:max-w-full">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </div>
            <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5bff75c3b5805327e806950b812f10c9d6f993087ff29617a165ba803c9c6c4?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bff75c3b5805327e806950b812f10c9d6f993087ff29617a165ba803c9c6c4?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bff75c3b5805327e806950b812f10c9d6f993087ff29617a165ba803c9c6c4?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bff75c3b5805327e806950b812f10c9d6f993087ff29617a165ba803c9c6c4?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bff75c3b5805327e806950b812f10c9d6f993087ff29617a165ba803c9c6c4?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bff75c3b5805327e806950b812f10c9d6f993087ff29617a165ba803c9c6c4?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bff75c3b5805327e806950b812f10c9d6f993087ff29617a165ba803c9c6c4?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bff75c3b5805327e806950b812f10c9d6f993087ff29617a165ba803c9c6c4?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="grow w-full aspect-[1.3] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                    <div className="flex gap-5 items-start">
                      <div className="justify-center items-center px-5 text-lg tracking-normal leading-8 text-indigo-600 whitespace-nowrap bg-indigo-600 rounded-full h-[43px] w-[43px]">
                        1
                      </div>
                      <div className="flex flex-col grow shrink-0 text-gray-900 basis-0 w-fit">
                        <div className="text-xl font-bold tracking-tight leading-8">
                          Easy Booking
                        </div>
                        <div className="mt-6 text-lg tracking-normal leading-7">
                          With lots of unique blocks, you can easily build a page
                          without coding.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 mt-10 max-md:mt-10">
                      <div className="justify-center items-center px-5 text-lg tracking-normal leading-8 text-center text-indigo-600 whitespace-nowrap bg-indigo-600 rounded-full h-[43px] w-[43px]">
                        2
                      </div>
                      <div className="flex-auto self-start text-xl font-bold tracking-tight leading-8 text-gray-900">
                        Free Expert Opinion
                      </div>
                    </div>
                    <div className="self-end text-lg tracking-normal leading-7 text-gray-900">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </div>
                    <div className="flex gap-5 items-start mt-10 max-md:mt-10">
                      <div className="justify-center items-center px-5 text-lg tracking-normal leading-8 text-center text-indigo-600 whitespace-nowrap bg-indigo-600 rounded-full h-[43px] w-[43px]">
                        3
                      </div>
                      <div className="flex flex-col grow shrink-0 text-gray-900 basis-0 w-fit">
                        <div className="text-xl font-bold tracking-tight leading-8">
                          Get Your Results
                        </div>
                        <div className="mt-7 text-lg tracking-normal leading-7">
                          With lots of unique blocks, you can easily build a page
                          without coding.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-stretch pt-9 w-full bg-indigo-600 max-md:max-w-full">
          <div className="flex gap-2.5 self-center max-md:flex-wrap">
            <div className="justify-center px-3.5 py-2.5 text-sm font-bold tracking-widest text-center text-indigo-600 uppercase whitespace-nowrap bg-white rounded-xl">
              New
            </div>
            <div className="flex-auto my-auto text-lg tracking-normal leading-7 text-white underline max-md:max-w-full">
              We’ve added a new exciting feature in v3.0.{" "}
              <span className="underline">Get it now for $49</span>.
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e017651f76b9dec5cdefeffbbca87b674d711c47a5eafef13285a1430d81bfa?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="mt-8 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:max-w-full"
          />
        </div>
        <div className="px-5 mt-24 max-w-full w-[1054px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-2xl font-bold tracking-tight leading-9 text-center text-gray-900 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="self-center max-w-full aspect-[2.94] w-[104px]"
                />
                <div className="mt-14 max-md:mt-10">
                  “You made it so simple. My new site is so much faster & easier
                  to work with Albino.”
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-bold tracking-tight leading-9 text-center text-gray-900 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e261c2d2b7575b36e2431dff3dcb0bb6c30186afa798e09bc602017770a0a36d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e261c2d2b7575b36e2431dff3dcb0bb6c30186afa798e09bc602017770a0a36d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e261c2d2b7575b36e2431dff3dcb0bb6c30186afa798e09bc602017770a0a36d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e261c2d2b7575b36e2431dff3dcb0bb6c30186afa798e09bc602017770a0a36d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e261c2d2b7575b36e2431dff3dcb0bb6c30186afa798e09bc602017770a0a36d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e261c2d2b7575b36e2431dff3dcb0bb6c30186afa798e09bc602017770a0a36d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e261c2d2b7575b36e2431dff3dcb0bb6c30186afa798e09bc602017770a0a36d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e261c2d2b7575b36e2431dff3dcb0bb6c30186afa798e09bc602017770a0a36d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="self-center max-w-full aspect-[2.94] w-[104px]"
                />
                <div className="mt-16 max-md:mt-10">
                  “Must have book for students, who want to be a great Product
                  Designer.”
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-2xl font-bold tracking-tight leading-9 text-center text-gray-900 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ef70e762d898f24c97a438d9fe0e0a6e9eaefaa3b22983d44a55297ebbc0ecd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="self-center max-w-full aspect-[2.94] w-[104px]"
                />
                <div className="mt-14 max-md:mt-10">
                  “You made it so simple. My new site is so much faster & easier
                  to work with Albino.”
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 px-5 mt-14 max-w-full text-gray-900 w-[952px] max-md:flex-wrap max-md:mt-10">
          <div className="flex max-sm:flex-col flex-1  gap-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/608d15529831bc30142001a7316419edf5a9d9cacfb6c4f0dda58c6fcf704428?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/608d15529831bc30142001a7316419edf5a9d9cacfb6c4f0dda58c6fcf704428?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/608d15529831bc30142001a7316419edf5a9d9cacfb6c4f0dda58c6fcf704428?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/608d15529831bc30142001a7316419edf5a9d9cacfb6c4f0dda58c6fcf704428?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/608d15529831bc30142001a7316419edf5a9d9cacfb6c4f0dda58c6fcf704428?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/608d15529831bc30142001a7316419edf5a9d9cacfb6c4f0dda58c6fcf704428?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/608d15529831bc30142001a7316419edf5a9d9cacfb6c4f0dda58c6fcf704428?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/608d15529831bc30142001a7316419edf5a9d9cacfb6c4f0dda58c6fcf704428?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="shrink-0 rounded-full aspect-[1.39] w-[65px]"
            />
            <div className="flex flex-col my-auto">
              <div className="text-lg font-bold tracking-normal leading-7">
                Ilya Vasin
              </div>
              <div className="mt-2.5 text-base tracking-normal leading-6">
                Software Engineer
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col flex-1 gap-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1815f06c8a0de8b88b11e48d2d0692a2cec6e33a78acccf83d3b192acb036e03?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1815f06c8a0de8b88b11e48d2d0692a2cec6e33a78acccf83d3b192acb036e03?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1815f06c8a0de8b88b11e48d2d0692a2cec6e33a78acccf83d3b192acb036e03?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1815f06c8a0de8b88b11e48d2d0692a2cec6e33a78acccf83d3b192acb036e03?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1815f06c8a0de8b88b11e48d2d0692a2cec6e33a78acccf83d3b192acb036e03?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1815f06c8a0de8b88b11e48d2d0692a2cec6e33a78acccf83d3b192acb036e03?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1815f06c8a0de8b88b11e48d2d0692a2cec6e33a78acccf83d3b192acb036e03?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1815f06c8a0de8b88b11e48d2d0692a2cec6e33a78acccf83d3b192acb036e03?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="shrink-0 rounded-full aspect-[1.43] w-[67px]"
            />
            <div className="flex flex-col my-auto">
              <div className="text-lg font-bold tracking-normal leading-7">
                Mariano Rasgado
              </div>
              <div className="mt-2.5 text-base tracking-normal leading-6">
                Software Engineer
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col flex-1 gap-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8173df576cf3f85deb7ff45fb6c5caca1fc283d4b7cbddd271a7c2f5b4273114?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8173df576cf3f85deb7ff45fb6c5caca1fc283d4b7cbddd271a7c2f5b4273114?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8173df576cf3f85deb7ff45fb6c5caca1fc283d4b7cbddd271a7c2f5b4273114?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8173df576cf3f85deb7ff45fb6c5caca1fc283d4b7cbddd271a7c2f5b4273114?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8173df576cf3f85deb7ff45fb6c5caca1fc283d4b7cbddd271a7c2f5b4273114?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8173df576cf3f85deb7ff45fb6c5caca1fc283d4b7cbddd271a7c2f5b4273114?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8173df576cf3f85deb7ff45fb6c5caca1fc283d4b7cbddd271a7c2f5b4273114?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8173df576cf3f85deb7ff45fb6c5caca1fc283d4b7cbddd271a7c2f5b4273114?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="shrink-0 rounded-full aspect-[1.39] w-[65px]"
            />
            <div className="flex flex-col my-auto">
              <div className="text-lg font-bold tracking-normal leading-7">
                Oka Tomoaki
              </div>
              <div className="mt-3.5 text-base tracking-normal leading-6">
                Software Engineer
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 mt-28 w-full bg-blend-multiply min-h-[745px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b402a53a033ecc22224381ab7e5cae431cd8c46be6c4b7a34832ef39543dd1e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b402a53a033ecc22224381ab7e5cae431cd8c46be6c4b7a34832ef39543dd1e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b402a53a033ecc22224381ab7e5cae431cd8c46be6c4b7a34832ef39543dd1e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b402a53a033ecc22224381ab7e5cae431cd8c46be6c4b7a34832ef39543dd1e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b402a53a033ecc22224381ab7e5cae431cd8c46be6c4b7a34832ef39543dd1e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b402a53a033ecc22224381ab7e5cae431cd8c46be6c4b7a34832ef39543dd1e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b402a53a033ecc22224381ab7e5cae431cd8c46be6c4b7a34832ef39543dd1e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b402a53a033ecc22224381ab7e5cae431cd8c46be6c4b7a34832ef39543dd1e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-5 justify-between mt-11 mb-5 w-full max-w-[1110px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col my-auto text-zwhite max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/77ed407f41ed8db03af189df6f5c0191acc0dcd5c68c2d6814124e6349627ca1?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                className="aspect-square w-[87px]"
              />
              <div className="mt-14 text-4xl font-bold tracking-tighter leading-10 max-md:mt-10 max-md:max-w-full">
                Get a free consultancy from our expert right now!
              </div>
              <div className="mt-8 text-xl tracking-normal leading-8 max-md:max-w-full">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page so quickly with Albino.
              </div>
            </div>
            <div className="flex flex-col px-6 py-8 text-base font-bold tracking-normal leading-6 text-gray-900 bg-white rounded-xl border border-gray-200 border-solid shadow-2xl max-md:px-5">
              <div>Name</div>
              <div className="flex flex-col justify-center mt-4 bg-white rounded-lg">
                <input type="text" className="justify-center items-start px-5 py-5 rounded-lg border border-gray-200 border-solid max-md:pr-5" placeholder='i.e. John Doe' />
              </div>
              <div className="mt-4">Email</div>
              <div className="flex flex-col justify-center mt-4 bg-white rounded-lg">
                <input type="email" className="justify-center items-start px-5 py-5 rounded-lg border border-gray-200 border-solid max-md:pr-5" placeholder=' i.e. john@mail.com' />
              </div>
              <div className="mt-5">Phone</div>
              <div className="flex flex-col justify-center mt-4 bg-white rounded-lg">
                <input type="number" className="justify-center items-start px-5 py-5 rounded-lg border border-gray-200 border-solid max-md:pr-5" placeholder='i.e. 123-456-7890' />
              </div>
              <div className="mt-6">Which service do you need?</div>
              <div className="flex flex-col justify-center mt-3 w-full bg-white rounded-lg">
                <div className="flex gap-5 p-4 rounded-lg border border-gray-200 border-solid">
                  <div className="flex-auto my-auto">Select a service</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf0ad686f33eb7c14109ca61bf4093b9ca306bbc982b4c4a95962cbc220f3b7d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="shrink-0 aspect-[1.22] w-[22px]"
                  />
                </div>
              </div>
              <div className="justify-center items-center px-16 py-6 mt-5 text-lg tracking-tight leading-8 text-center text-white bg-indigo-600 rounded-lg max-md:px-5">
                Get Free Consultancy
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 px-5 mt-20 w-full max-w-[1110px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto text-3xl font-bold tracking-tighter leading-10 text-gray-900 max-md:max-w-full">
            Subscribe to our newsletter to get latest news on your inbox.
          </div>
          <div className="flex gap-5 self-start mt-1 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col grow shrink-0 justify-center text-base tracking-normal text-gray-900 bg-white rounded-lg basis-0 w-fit">
              <div className="justify-center items-start px-5 py-6 rounded-lg border border-gray-200 border-solid max-md:pr-5">
                Enter your email
              </div>
            </div>
            <div className="flex gap-5 justify-between px-5 py-6 text-lg font-bold tracking-tight leading-8 text-white whitespace-nowrap bg-indigo-600 rounded-lg max-md:pl-5">
              <div>Subscribe</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b53e037a22c43d5f6e93cbe6ef1d99d813ec5ef8d0ca21d0c57ea53330ae4e5c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                className="shrink-0 self-start aspect-[1.18] w-[13px]"
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dc0e02d0f4f1b04274d023c4fe1d524a19ea81650adf08bf919baef4603f955?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="self-stretch mt-20 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex gap-5 justify-between items-start px-5 mt-32 max-w-full w-[998px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col text-gray-900">
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
          <div className="flex flex-col self-stretch text-gray-900">
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
          <div className="flex flex-col text-gray-900">
            <div className="text-base tracking-normal leading-6">Services</div>
            <div className="mt-11 text-lg tracking-normal leading-10 max-md:mt-10">
              Digital Marketing
              <br />
              Content Writing
              <br />
              SEO for Business
              <br />
              UI Design
            </div>
          </div>
          <div className="flex flex-col text-gray-900">
            <div className="text-base tracking-normal leading-6">Legal</div>
            <div className="mt-10 text-lg tracking-normal leading-10">
              Privacy Policy
              <br />
              Terms & Conditions
              <br />
              Return Policy
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-base tracking-normal leading-6 text-gray-900">
              Contact us
            </div>
            <div className="mt-11 text-lg font-bold tracking-normal leading-10 text-indigo-600 max-md:mt-10">
              support@brainwave.io
              <br />
              +133-394-3439-1435
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad2a86dd0bbcf35b863289b181013f57838577620bbca90d01e4ebc1d9e8d0a1?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="mt-32 w-full border border-gray-200 border-solid max-w-[1111px] stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex gap-5 justify-between mt-9 w-full text-base tracking-normal leading-6 text-gray-900 max-w-[1110px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2.5 px-5 my-auto max-md:flex-wrap">
            <div className="flex-auto">
              © 2024 Copyright, All Right Reserved, Made by Seju_ui_ux with
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c23426e149913b9fbb4986437bee1925c33131876254328ae55a50ff70e0e96?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="shrink-0 self-start w-3.5 aspect-[1.08]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d35248cce15dc8a528da404116604fe551fec036daac096c56db71078dc8a7e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="shrink-0 max-w-full aspect-[9.09] w-[166px]"
          />
        </div>
      </div>
    </>
  )
}

export default page
