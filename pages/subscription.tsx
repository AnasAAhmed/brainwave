import Navbar from '@/components/Navbar'
import { allSeoData } from '@/lib/utils'
import Head from 'next/head'
import React from 'react'

const page = () => {
  const seoData = allSeoData['subscription']
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
      <Navbar textColor='black' />

      <div className="flex flex-col items-center pt-6 pb-20 bg-white">
        
        <div className="mt-20 text-5xl font-bold tracking-tighter text-center text-gray-900 leading-[58px] w-[619px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Get things done by awesome remote team
        </div>
        <div className="mt-10 text-xl tracking-normal leading-8 text-center text-gray-900 w-[553px] max-md:max-w-full">
          We share common trends and strategies for improving your rental income
          and making sure you stay in high demand.
        </div>
        <div className="flex gap-5 justify-between mt-12 max-w-full text-lg font-bold tracking-tight leading-8 w-[373px] max-md:mt-10">
          <div className="flex gap-5 px-5 py-2 text-white bg-indigo-600 rounded-lg max-md:pl-5">
            <div className="flex-auto">Get started for free</div>
            <img
              loading="lazy"
              src="/subs/arrow.svg"
              className="aspect-[1.18] w-[13px]"
            />
          </div>
          <div className="my-auto text-center text-gray-900">Learn more</div>
        </div>
        <img
          loading="lazy"
          srcSet="/subs/startup.png"
          className="mt-28 max-w-full aspect-[1.52] w-[844px] max-md:mt-10"
        />
        <div className="px-5 mt-28 max-w-full w-[1025px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-gray-900 max-md:mt-10">
                <img
                  loading="lazy"
                  src="/subs/code.svg"
                  className="w-11 aspect-[1.16]"
                />
                <div className="mt-10 text-xl font-bold tracking-tight leading-8 max-md:mt-10">
                  Project management
                </div>
                <div className="mt-8 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-gray-900 max-md:mt-10">
                <img
                  loading="lazy"
                  src="/subs/compass.svg"
                  className="aspect-square w-[37px]"
                />
                <div className="mt-10 text-xl font-bold tracking-tight leading-8 max-md:mt-10">
                  Time tracking
                </div>
                <div className="mt-8 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-gray-900 max-md:mt-10">
                <img
                  loading="lazy"
                  src="/subs/phone.svg"
                  className="aspect-[0.68] w-[26px]"
                />
                <div className="mt-10 text-xl font-bold tracking-tight leading-8 max-md:mt-10">
                  Beautiful mobile app
                </div>
                <div className="mt-8 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch px-16 py-20 mt-24 w-full bg-slate-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mt-5 mb-1.5 w-full max-w-[1110px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto font-bold text-gray-900 max-md:mt-10">
                  <div className="text-4xl tracking-tighter leading-10">
                    Getting started with Albino is easier than ever
                  </div>
                  <div className="mt-12 text-xl tracking-normal leading-8 max-md:mt-10">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page so quickly with
                    Albino.
                  </div>
                  <div className="flex gap-5 py-6 pr-20 pl-9 mt-12 text-lg tracking-tight leading-8 text-white bg-indigo-600 rounded-lg max-md:px-5 max-md:mt-10">
                    <div>Get started for free</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f087adaa8ead07b8fe670baf1a426680a91d81e3bfdce0b46c2dd2a7c54cac52?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 self-start aspect-[1.18] w-[13px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/subs/startup2.png"
                  className="grow w-full aspect-[1.05] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
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
          src="/subs/divider.svg"
          className="self-stretch mt-20 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
        />
        <div className="mt-24 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-900 max-md:mt-10">
          Manage your projects fast
        </div>
        <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900 w-[589px] max-md:max-w-full">
          With lots of unique blocks, you can easily build a page without coding.
          Build your next landing page.
        </div>
        <div className="mt-24 max-w-full w-[957px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/subs/startup3.png"
                className="grow w-full aspect-[1.28] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-7 max-md:mt-10">
                <div className="flex gap-5 items-start">
                  <div className="justify-center items-center px-5 text-lg tracking-normal leading-8 text-indigo-600 whitespace-nowrap bg-indigo-600 rounded-full h-[43px] w-[43px]">
                    1
                  </div>
                  <div className="flex flex-col grow shrink-0 px-5 text-gray-900 basis-0 w-fit">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Create a project
                    </div>
                    <div className="mt-6 text-lg tracking-normal leading-7">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-start mt-10 max-md:mt-10">
                  <div className="justify-center items-center px-5 text-lg tracking-normal leading-8 text-center text-indigo-600 whitespace-nowrap bg-indigo-600 rounded-full h-[43px] w-[43px]">
                    2
                  </div>
                  <div className="flex flex-col grow shrink-0 px-5 text-gray-900 basis-0 w-fit">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Assign related people
                    </div>
                    <div className="mt-6 text-lg tracking-normal leading-7">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-start mt-10 max-md:mt-10">
                  <div className="justify-center items-center px-5 text-lg tracking-normal leading-8 text-center text-indigo-600 whitespace-nowrap bg-indigo-600 rounded-full h-[43px] w-[43px]">
                    3
                  </div>
                  <div className="flex flex-col grow shrink-0 px-5 text-gray-900 basis-0 w-fit">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Make it done on-time
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
        <div className="flex flex-col self-stretch py-20 mt-28 w-full text-center text-gray-900 bg-slate-100 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start self-center px-5 mt-8 max-w-full w-[897px] max-md:flex-wrap">
            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                srcSet="/subs/testimo1.png"
                className="rounded-full aspect-square w-[72px]"
              />
              <div className="mt-14 text-2xl font-bold tracking-tight leading-9 max-md:mt-10">
                “You made it so simple”
              </div>
              <div className="self-stretch mt-9 text-xl tracking-normal leading-8">
                My new site is so much faster and easier to work with than my old
                site.
              </div>
            </div>
            <img
              loading="lazy"
              src="/subs/v-divider.svg"
              className="shrink-0 self-end mt-16 w-px border border-gray-200 border-solid aspect-[0.01] stroke-[1px] stroke-gray-200 max-md:mt-10"
            />
            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                srcSet="/subs/testimo2.png"
                className="rounded-full aspect-square w-[72px]"
              />
              <div className="mt-14 text-2xl font-bold tracking-tight leading-9 max-md:mt-10">
                “Simply the best”
              </div>
              <div className="self-stretch mt-9 text-xl tracking-normal leading-8">
                Better than all the rest. I’d recommend this product to beginners.
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-2.5 mt-5 mb-2.5 w-full fill-slate-100 min-h-[58px] max-md:px-5 max-md:max-w-full">
            <div className="flex relative gap-5 max-w-full w-[679px] max-md:flex-wrap">
              <div className="flex flex-col flex-1 self-start">
                <div className="text-lg font-bold tracking-normal leading-7">
                  Corey Valdez
                </div>
                <div className="mt-2.5 text-base tracking-normal leading-6">
                  Founder at Zenix
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="self-center text-lg font-bold tracking-normal leading-7">
                  Ian Klein
                </div>
                <div className="mt-3.5 text-base tracking-normal leading-6">
                  Digital Marketer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch px-16 py-20 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-6 mb-7 w-full max-w-[1110px] max-md:max-w-full">
            <div className="self-center text-4xl font-bold tracking-tighter leading-10 text-center text-white">
              Pricing & Plans
            </div>
            <div className="self-center mt-7 text-xl tracking-normal leading-8 text-center text-white w-[589px] max-md:max-w-full">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center px-5 pt-9 pb-4 w-full text-lg font-bold text-center text-gray-900 bg-white rounded-xl border border-gray-200 border-solid max-md:mt-8">
                    <div className="justify-center px-5 py-2.5 text-sm tracking-widest text-indigo-600 uppercase whitespace-nowrap bg-indigo-600 rounded-2xl">
                      Basic
                    </div>
                    <div className="mt-9 text-5xl tracking-tighter leading-[58.08px] max-md:text-4xl">
                      $29
                    </div>
                    <div className="mt-5 tracking-normal leading-[171%]">
                      One time purchase
                    </div>
                    <div className="mt-14 tracking-normal leading-7 max-md:mt-10">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                    <div className="justify-center items-center self-stretch px-16 py-6 mt-16 tracking-tight text-white bg-indigo-600 rounded-lg leading-[188%] max-md:px-5 max-md:mt-10">
                      Get started for free
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center px-5 pt-9 pb-4 w-full text-lg font-bold text-center text-gray-900 bg-white rounded-xl border border-gray-200 border-solid max-md:mt-8">
                    <div className="justify-center px-3 py-2.5 text-sm tracking-widest text-indigo-600 uppercase whitespace-nowrap bg-indigo-600 rounded-2xl">
                      Standard
                    </div>
                    <div className="mt-9 text-5xl tracking-tighter leading-[58.08px] max-md:text-4xl">
                      $49
                    </div>
                    <div className="mt-5 tracking-normal leading-[171%]">
                      One time purchase
                    </div>
                    <div className="mt-14 tracking-normal leading-7 max-md:mt-10">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                    <div className="justify-center items-center self-stretch px-16 py-6 mt-16 tracking-tight text-white bg-indigo-600 rounded-lg leading-[188%] max-md:px-5 max-md:mt-10">
                      Get started for free
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center px-5 pt-9 pb-4 w-full text-lg font-bold text-center text-gray-900 bg-white rounded-xl border border-gray-200 border-solid max-md:mt-8">
                    <div className="justify-center px-3.5 py-2.5 text-sm tracking-widest text-indigo-600 uppercase whitespace-nowrap bg-indigo-600 rounded-2xl">
                      Premium
                    </div>
                    <div className="mt-9 text-5xl tracking-tighter leading-[58.08px] max-md:text-4xl">
                      $99
                    </div>
                    <div className="mt-5 tracking-normal leading-[171%]">
                      One time purchase
                    </div>
                    <div className="mt-14 tracking-normal leading-7 max-md:mt-10">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                    <div className="justify-center items-center self-stretch px-16 py-6 mt-16 tracking-tight text-white bg-indigo-600 rounded-lg leading-[188%] max-md:px-5 max-md:mt-10">
                      Get started for free
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-28 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 text-xl font-bold tracking-tight leading-8 max-md:flex-wrap">
                      <img
                        loading="lazy"
                        src="/subs/ask.svg"
                        className="shrink-0 aspect-square w-[29px]"
                      />
                      <div className="flex-auto max-md:max-w-full">
                        Can I use Albino for my clients?
                      </div>
                    </div>
                    <div className="self-end mt-6 text-lg tracking-normal leading-7 max-md:max-w-full">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page. Integer ut
                      Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                      sagittis interdum Melisandre.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 text-xl font-bold tracking-tight leading-8 max-md:flex-wrap">
                      <img
                        loading="lazy"
                        src="/subs/ask.svg"
                        className="shrink-0 aspect-square w-[29px]"
                      />
                      <div className="flex-auto self-start max-md:max-w-full">
                        Does it work with WordPress?
                      </div>
                    </div>
                    <div className="self-end mt-6 text-lg tracking-normal leading-7 max-md:max-w-full">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page. Integer ut
                      Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                      sagittis interdum Melisandre.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 self-start mt-10 ml-12 text-lg font-bold tracking-tight leading-8 text-green-400 max-md:mt-10 max-md:ml-2.5">
              <div className="flex-auto">Click to learn more</div>
              <img
                loading="lazy"
                src="/subs/ask.svg"
                className="shrink-0 my-auto w-2.5 aspect-[1.11]"
              />
            </div>
            <div className="mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 self-start text-xl font-bold tracking-tight leading-8">
                      <img
                        loading="lazy"
                        src="/subs/ask.svg"
                        className="shrink-0 aspect-square w-[29px]"
                      />
                      <div className="flex-auto">Do I get free updates?</div>
                    </div>
                    <div className="self-end mt-6 text-lg tracking-normal leading-7 max-md:max-w-full">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page. Integer ut
                      Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                      sagittis interdum Melisandre.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 self-start text-xl font-bold tracking-tight leading-8">
                      <img
                        loading="lazy"
                        src="/subs/ask.svg"
                        className="shrink-0 aspect-square w-[29px]"
                      />
                      <div className="flex-auto">Will you provide support?</div>
                    </div>
                    <div className="self-end mt-6 text-lg tracking-normal leading-7 max-md:max-w-full">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page. Integer ut
                      Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                      sagittis interdum Melisandre.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center mt-24 text-lg tracking-normal leading-7 text-center text-green-400 max-md:mt-10">
              <span className="text-white">Haven’t got your answer? </span>
              <span className="text-green-400">Contact our support now</span>
            </div>
          </div>
        </div>
        <div className="mt-24 w-full max-w-[1110px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-gray-900 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-bold tracking-tighter leading-10 max-md:max-w-full">
                  Build better landing page fast
                </div>
                <div className="mt-8 text-xl tracking-normal leading-8 max-md:max-w-full">
                  With lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-5 self-stretch my-auto text-lg font-bold tracking-tight leading-8 max-md:mt-10">
                <div className="flex gap-5 justify-between px-5 py-6 text-white bg-indigo-600 rounded-lg">
                  <div>Learn more</div>
                  <img
                    loading="lazy"
                    src="/subs/arrow.svg"
                    className="shrink-0 w-3.5 aspect-[1.16]"
                  />
                </div>
                <div className="flex gap-5 justify-between px-5 py-6 text-white bg-indigo-600 rounded-lg max-md:pl-5">
                  <div>Get it now</div>
                  <img
                    loading="lazy"
                    src="/subs/arrow.svg"
                    className="aspect-[1.18] w-[13px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dc0e02d0f4f1b04274d023c4fe1d524a19ea81650adf08bf919baef4603f955?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="self-stretch mt-24 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex gap-5 justify-between items-start px-5 mt-32 w-full text-gray-900 max-w-[1093px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-3xl font-bold tracking-normal">Brainwave.io</div>
            <div className="mt-12 text-base tracking-normal leading-7 max-md:mt-10">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </div>
            <img
              loading="lazy"
              src="/subs/socail-1.svg"
              className="mt-11 max-w-full aspect-[7.69] w-[142px] max-md:mt-10"
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
    </>
  )
}

export default page
