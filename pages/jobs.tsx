import Navbar from '@/components/Navbar'
import { allSeoData } from '@/lib/utils'
import Head from 'next/head'
import React from 'react'

const page = () => {
 const seoData = allSeoData['job']
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

      <div className="flex flex-col items-center bg-white">
        <div className="flex overflow-hidden relative flex-col items-start self-stretch px-12 pt-7 pb-20 w-full text-base text-gray-900 min-h-[761px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a3575aec78d7bbcea34412c059ac12c16c063b9228734720740f4de0e58d2537?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3575aec78d7bbcea34412c059ac12c16c063b9228734720740f4de0e58d2537?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3575aec78d7bbcea34412c059ac12c16c063b9228734720740f4de0e58d2537?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3575aec78d7bbcea34412c059ac12c16c063b9228734720740f4de0e58d2537?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3575aec78d7bbcea34412c059ac12c16c063b9228734720740f4de0e58d2537?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3575aec78d7bbcea34412c059ac12c16c063b9228734720740f4de0e58d2537?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3575aec78d7bbcea34412c059ac12c16c063b9228734720740f4de0e58d2537?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3575aec78d7bbcea34412c059ac12c16c063b9228734720740f4de0e58d2537?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="object-cover absolute inset-0 size-full"
          />

          <div className="relative mt-40 ml-48 text-6xl font-bold tracking-tighter leading-[65px] w-[492px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Find a dream job that changes life.
          </div>
          <div className="relative mt-8 ml-48 text-xl tracking-normal leading-8 w-[518px] max-md:max-w-full">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next job website.
          </div>
          <div className="flex relative gap-4 items-start px-5 py-6 mt-12 ml-48 max-w-full bg-indigo-600 rounded-xl shadow-2xl w-[729px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
            <div className="flex flex-col justify-center tracking-normal bg-white rounded-lg">
              <div className="justify-center items-start px-5 py-5 rounded-lg border border-gray-200 border-solid max-md:pr-5">
                Job title or keyword
              </div>
            </div>
            <div className="flex flex-col justify-center tracking-normal whitespace-nowrap bg-white rounded-lg leading-[173%]">
              <div className="flex gap-5 justify-between px-4 py-4 rounded-lg border border-gray-200 border-solid">
                <div>City</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b97cc1918a962703ea6d8dc1aa6dac2b0d64c9bf0146a70a5d5b6f6e81a144cb?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="shrink-0 aspect-square w-[18px]"
                />
              </div>
            </div>
            <div className="justify-center self-stretch px-14 py-5 text-lg font-bold tracking-tight leading-8 text-center text-white whitespace-nowrap bg-gray-900 rounded-lg max-md:px-5">
              Search
            </div>
          </div>
          <div className="relative mt-6 mb-12 ml-48 tracking-normal leading-[173%] max-md:mb-10 max-md:ml-2.5">
            Try Product Designer, Software Engineer etc.
          </div>
        </div>
        <div className="mt-32 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-900 max-md:mt-10">
          Big companies are here
        </div>
        <div className="mt-11 text-xl tracking-normal leading-8 text-center text-gray-900 w-[686px] max-md:mt-10 max-md:max-w-full">
          With lots of unique blocks, you can easily build a page without coding.
          Build your next consultancy website within few minutes. You have a
          business to run. Stop worring about cross-browser bugs, designing new
          pages.
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e778c93b4deaeabeebef0e94a909bfdeadca0b4c71073e40ee03c16d739a3c4?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="mt-16 max-w-full aspect-[7.14] w-[766px] max-md:mt-10"
        />
        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 mt-32 w-full min-h-[746px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1695e404229816a0502978ac290c88765e9bec163f2dbde7d78bd07821617561?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col mt-16 mb-9 w-full max-w-[1110px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between px-px w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col text-white">
                <div className="text-4xl font-bold tracking-tighter leading-10">
                  Jobs by category
                </div>
                <div className="mt-8 text-xl tracking-normal leading-8">
                  With lots of unique blocks, you can easily build a page without
                  coding.
                </div>
              </div>
              <div className="flex gap-5 self-end mt-24 text-lg font-bold tracking-tight leading-8 text-green-400 max-md:mt-10">
                <div className="grow">Explore all categories</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f8700ab0b102078dd15ac39d9ceeaef3c71a834bc85f51c5df7c0c7d819a3ac?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="shrink-0 self-start w-2.5 aspect-[1.11]"
                />
              </div>
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 justify-between px-8 py-9 w-full text-white bg-indigo-600 rounded-xl shadow-2xl max-md:px-5 max-md:mt-8">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold tracking-tight leading-8">
                        Design
                      </div>
                      <div className="mt-5 text-base tracking-normal leading-6">
                        47 Jobs
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c8870ae0bdf390f40fbc5c6765eba1faca3f87476678dbe6af8116a6fc5f07cf?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8870ae0bdf390f40fbc5c6765eba1faca3f87476678dbe6af8116a6fc5f07cf?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8870ae0bdf390f40fbc5c6765eba1faca3f87476678dbe6af8116a6fc5f07cf?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8870ae0bdf390f40fbc5c6765eba1faca3f87476678dbe6af8116a6fc5f07cf?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8870ae0bdf390f40fbc5c6765eba1faca3f87476678dbe6af8116a6fc5f07cf?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8870ae0bdf390f40fbc5c6765eba1faca3f87476678dbe6af8116a6fc5f07cf?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8870ae0bdf390f40fbc5c6765eba1faca3f87476678dbe6af8116a6fc5f07cf?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8870ae0bdf390f40fbc5c6765eba1faca3f87476678dbe6af8116a6fc5f07cf?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 self-start mt-1.5 bg-white rounded-full aspect-square h-[42px] w-[42px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-9 pr-20 pl-8 mt-2.5 w-full text-gray-900 bg-white rounded-xl max-md:px-5 max-md:mt-10">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Marketing
                    </div>
                    <div className="mt-5 text-base tracking-normal leading-6">
                      51 Jobs
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-9 pr-20 pl-8 mt-2.5 w-full text-gray-900 bg-white rounded-xl max-md:px-5 max-md:mt-10">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Engineering
                    </div>
                    <div className="mt-4 text-base tracking-normal leading-6">
                      89 Jobs
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-9 pr-20 pl-8 w-full text-gray-900 bg-white rounded-xl max-md:px-5 max-md:mt-8">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Mangement
                    </div>
                    <div className="mt-5 text-base tracking-normal leading-6">
                      16 Jobs
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-9 pr-20 pl-8 w-full text-gray-900 bg-white rounded-xl max-md:px-5 max-md:mt-8">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Finance
                    </div>
                    <div className="mt-5 text-base tracking-normal leading-6">
                      23 Jobs
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-9 pr-20 pl-8 w-full text-gray-900 bg-white rounded-xl max-md:px-5 max-md:mt-8">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Customer Support
                    </div>
                    <div className="mt-5 text-base tracking-normal leading-6">
                      34 Jobs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-900 max-md:mt-10">
          Find jobs with 3 easy steps
        </div>
        <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900 w-[589px] max-md:max-w-full">
          With lots of unique blocks, you can easily build a page without coding.
          Build your next landing page.
        </div>
        <div className="mt-24 max-w-full w-[983px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73b1e35d2a4559dce69f9eeeb072ce643feb72e63516d81982c91718e0d42c70?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73b1e35d2a4559dce69f9eeeb072ce643feb72e63516d81982c91718e0d42c70?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73b1e35d2a4559dce69f9eeeb072ce643feb72e63516d81982c91718e0d42c70?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73b1e35d2a4559dce69f9eeeb072ce643feb72e63516d81982c91718e0d42c70?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73b1e35d2a4559dce69f9eeeb072ce643feb72e63516d81982c91718e0d42c70?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73b1e35d2a4559dce69f9eeeb072ce643feb72e63516d81982c91718e0d42c70?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73b1e35d2a4559dce69f9eeeb072ce643feb72e63516d81982c91718e0d42c70?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73b1e35d2a4559dce69f9eeeb072ce643feb72e63516d81982c91718e0d42c70?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                className="grow w-full aspect-[0.88] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                <div className="flex gap-5 items-start">
                  <div className="justify-center items-center px-5 text-lg font-bold tracking-normal leading-7 text-center text-white whitespace-nowrap bg-indigo-600 rounded-full h-[43px] w-[43px]">
                    1
                  </div>
                  <div className="flex flex-col grow shrink-0 px-5 text-gray-900 basis-0 w-fit">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Search for a job
                    </div>
                    <div className="mt-6 text-lg tracking-normal leading-7">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-start mt-16 max-md:mt-10">
                  <div className="justify-center items-center px-5 text-lg font-bold tracking-normal leading-7 text-center text-white whitespace-nowrap bg-indigo-600 rounded-full h-[43px] w-[43px]">
                    2
                  </div>
                  <div className="flex flex-col grow shrink-0 px-5 text-gray-900 basis-0 w-fit">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Apply within our website
                    </div>
                    <div className="mt-6 text-lg tracking-normal leading-7">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-start mt-16 max-md:mt-10">
                  <div className="justify-center items-center px-5 text-lg font-bold tracking-normal leading-7 text-center text-white whitespace-nowrap bg-indigo-600 rounded-full h-[43px] w-[43px]">
                    3
                  </div>
                  <div className="flex flex-col grow shrink-0 px-5 text-gray-900 basis-0 w-fit">
                    <div className="text-xl font-bold tracking-tight leading-8">
                      Get interview call
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
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dc0e02d0f4f1b04274d023c4fe1d524a19ea81650adf08bf919baef4603f955?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="self-stretch mt-28 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 w-full min-h-[740px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e357972c734bfbdda1bf11075c1cdbc1676937fed47057d1a42a64d7934e64b8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357972c734bfbdda1bf11075c1cdbc1676937fed47057d1a42a64d7934e64b8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357972c734bfbdda1bf11075c1cdbc1676937fed47057d1a42a64d7934e64b8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357972c734bfbdda1bf11075c1cdbc1676937fed47057d1a42a64d7934e64b8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357972c734bfbdda1bf11075c1cdbc1676937fed47057d1a42a64d7934e64b8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357972c734bfbdda1bf11075c1cdbc1676937fed47057d1a42a64d7934e64b8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357972c734bfbdda1bf11075c1cdbc1676937fed47057d1a42a64d7934e64b8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357972c734bfbdda1bf11075c1cdbc1676937fed47057d1a42a64d7934e64b8?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col mt-9 mb-8 w-full max-w-[1110px] max-md:max-w-full">
            <div className="text-4xl font-bold tracking-tighter leading-10 text-gray-900 max-md:max-w-full">
              Featured jobs
            </div>
            <div className="flex gap-5 mt-7 text-xl tracking-normal leading-8 text-gray-900 max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto">
                With lots of unique blocks, you can easily build a page without
                coding.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05567d29e5da133dd177d390ca458febfa89306c5021443fc3b0fb6aa30b2f6?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                className="shrink-0 self-start mt-3 aspect-[1.79] w-[79px]"
              />
            </div>
            <div className="mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-8 pr-20 pl-8 mx-auto w-full bg-white rounded-xl border border-gray-200 border-solid duration-300 hover:shadow-2xl max-md:px-5 max-md:mt-8">
                    <div className="text-sm font-bold tracking-widest text-green-400 uppercase">
                      Full-time
                    </div>
                    <div className="mt-7 text-xl font-bold tracking-tight leading-8 text-gray-900">
                      Senior Software Engineer
                    </div>
                    <div className="mt-4 text-base tracking-normal leading-6 text-gray-900">
                      New York, USA
                    </div>
                    <div className="flex gap-2.5 mt-16 text-xl tracking-normal leading-8 whitespace-nowrap max-md:mt-10">
                      <div className="justify-center items-center px-2.5 w-8 h-8 text-white bg-sky-400 rounded-full">
                        D
                      </div>
                      <div className="flex-auto my-auto font-bold text-gray-900">
                        Dorfus
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex duration-300 hover:shadow-2xl flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e326241b93a838fec6547a7fbdaa45c07fb77fd2f94e0422c1ae87ac8a93383?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="grow shrink-0 max-w-full aspect-[0.92] w-[255px] max-md:mt-8"
                  />
                </div>
                {/* <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex duration-300 hover:shadow-2xl flex-col grow items-start py-8 pr-20 pl-8 mx-auto w-full bg-white rounded-xl border border-gray-200 border-solid max-md:px-5 max-md:mt-8">
                <div className="text-sm font-bold tracking-widest text-blue-400 uppercase">
                  Remote
                </div>
                <div className="mt-7 text-xl font-bold tracking-tight leading-8 text-gray-900">
                  Product Designer
                </div>
                <div className="mt-4 text-base tracking-normal leading-6 text-gray-900">
                  Lake Colby,UK
                </div>
                <div className="flex gap-2.5 mt-24 whitespace-nowrap max-md:mt-10">
                  <div className="justify-center items-center px-3.5 w-8 h-8 text-3xl tracking-tight leading-8 text-white bg-indigo-600 rounded-full">
                    c
                  </div>
                  <div className="my-auto text-xl font-bold tracking-normal leading-8 text-gray-900">
                    Coworks
                  </div>
                </div>
              </div>
            </div> */}
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex duration-300 hover:shadow-2xl flex-col grow items-start py-8 pr-20 pl-8 mx-auto w-full bg-white rounded-xl border border-gray-200 border-solid max-md:px-5 max-md:mt-8">
                    <div className="text-sm font-bold tracking-widest text-green-400 uppercase">
                      Full-time
                    </div>
                    <div className="mt-7 text-xl font-bold tracking-tight leading-8 text-gray-900">
                      UX Designer
                    </div>
                    <div className="mt-4 text-base tracking-normal leading-6 text-gray-900">
                      California, USA
                    </div>
                    <div className="flex gap-2.5 mt-24 whitespace-nowrap max-md:mt-10">
                      <div className="justify-center items-center px-3.5 w-8 h-8 text-3xl tracking-tight leading-8 text-white bg-indigo-600 rounded-full">
                        a
                      </div>
                      <div className="my-auto text-xl font-bold tracking-normal leading-8 text-gray-900">
                        Askimat
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex duration-300 hover:shadow-2xl flex-col grow items-start py-8 pr-20 pl-8 mx-auto w-full font-bold text-gray-900 bg-white rounded-xl border border-gray-200 border-solid max-md:px-5 max-md:mt-8">
                    <div className="text-sm tracking-widest text-red-500 uppercase">
                      Part-time
                    </div>
                    <div className="mt-7 text-xl tracking-tight leading-8">
                      Full-stack Web Developer
                    </div>
                    <div className="mt-4 text-base tracking-normal leading-6">
                      Katlynburgh, Sweden
                    </div>
                    <div className="flex gap-2.5 mt-16 text-xl tracking-normal leading-8 whitespace-nowrap max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2130ee1101ff454f78ff856df6ed9b52e0c4d521b5ad1d555c691bb5bddf3a5a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                        className="shrink-0 w-8 aspect-square"
                      />
                      <div className="my-auto">Greener</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch px-16 py-20 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
          <div className="flex duration-300 hover:shadow-2xl flex-col items-center mt-7 mb-8 w-full max-w-[1112px] max-md:max-w-full">
            <div className="text-4xl font-bold tracking-tighter leading-10 text-center text-gray-900">
              News that helps
            </div>
            <div className="mt-8 text-xl tracking-normal leading-8 text-center text-gray-900 w-[503px] max-md:max-w-full">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </div>
            <div className="self-stretch px-px mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pb-8 w-full text-gray-900 bg-white rounded-xl shadow-2xl max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fc5b69585835bda5d52e0da6a7998684cb685b79a9ae376d2284baed2401a226?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc5b69585835bda5d52e0da6a7998684cb685b79a9ae376d2284baed2401a226?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc5b69585835bda5d52e0da6a7998684cb685b79a9ae376d2284baed2401a226?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc5b69585835bda5d52e0da6a7998684cb685b79a9ae376d2284baed2401a226?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc5b69585835bda5d52e0da6a7998684cb685b79a9ae376d2284baed2401a226?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc5b69585835bda5d52e0da6a7998684cb685b79a9ae376d2284baed2401a226?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc5b69585835bda5d52e0da6a7998684cb685b79a9ae376d2284baed2401a226?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc5b69585835bda5d52e0da6a7998684cb685b79a9ae376d2284baed2401a226?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="w-full aspect-[1.16]"
                    />
                    <div className="flex flex-col px-8 mt-7 max-md:px-5">
                      <div className="text-base tracking-normal leading-6">
                        Career
                      </div>
                      <div className="mt-7 text-xl font-bold tracking-tight leading-8">
                        How to win any job you want. Get started with 5 steps.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pb-8 w-full text-gray-900 bg-white rounded-xl max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31c6a9df981ef2c99573461be030452de8ac2a308c36ded4ca36b3195465a6b6?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31c6a9df981ef2c99573461be030452de8ac2a308c36ded4ca36b3195465a6b6?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31c6a9df981ef2c99573461be030452de8ac2a308c36ded4ca36b3195465a6b6?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31c6a9df981ef2c99573461be030452de8ac2a308c36ded4ca36b3195465a6b6?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31c6a9df981ef2c99573461be030452de8ac2a308c36ded4ca36b3195465a6b6?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31c6a9df981ef2c99573461be030452de8ac2a308c36ded4ca36b3195465a6b6?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31c6a9df981ef2c99573461be030452de8ac2a308c36ded4ca36b3195465a6b6?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31c6a9df981ef2c99573461be030452de8ac2a308c36ded4ca36b3195465a6b6?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="w-full aspect-[1.16]"
                    />
                    <div className="flex flex-col px-8 mt-7 max-md:px-5">
                      <div className="text-base tracking-normal leading-6">
                        Lifestyle
                      </div>
                      <div className="mt-6 text-xl font-bold tracking-tight leading-8">
                        10 ways to reduce your office work depression.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pb-8 w-full text-gray-900 bg-white rounded-xl max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff63da667eef1be25bc9bb4e7e4c80f58c37bf60fe8a981283512f0242ba51ef?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff63da667eef1be25bc9bb4e7e4c80f58c37bf60fe8a981283512f0242ba51ef?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff63da667eef1be25bc9bb4e7e4c80f58c37bf60fe8a981283512f0242ba51ef?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff63da667eef1be25bc9bb4e7e4c80f58c37bf60fe8a981283512f0242ba51ef?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff63da667eef1be25bc9bb4e7e4c80f58c37bf60fe8a981283512f0242ba51ef?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff63da667eef1be25bc9bb4e7e4c80f58c37bf60fe8a981283512f0242ba51ef?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff63da667eef1be25bc9bb4e7e4c80f58c37bf60fe8a981283512f0242ba51ef?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff63da667eef1be25bc9bb4e7e4c80f58c37bf60fe8a981283512f0242ba51ef?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="w-full aspect-[1.16]"
                    />
                    <div className="flex flex-col px-8 mt-7 max-md:px-5">
                      <div className="text-base tracking-normal leading-6">
                        Career
                      </div>
                      <div className="mt-7 text-xl font-bold tracking-tight leading-8">
                        Why should you work as a team even on small projects.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7c586b21e2e180fd291d36b318e18689d6acbe65ba6c7b797085c73dd1f8f6f?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="mt-32 aspect-square w-[78px] max-md:mt-10"
        />
        <div className="mt-12 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-900 max-md:mt-10">
          Get our latest updates
        </div>
        <div className="mt-8 text-xl tracking-normal leading-8 text-center text-gray-900 w-[502px] max-md:max-w-full">
          With lots of unique blocks, you can easily build a page without coding.
          Build your next landing page.
        </div>
        <div className="flex flex-col justify-center mt-12 max-w-full bg-white rounded-lg w-[499px] max-md:mt-10">
          <div className="flex gap-5 pr-1.5 pl-5 rounded-lg border border-gray-200 border-solid max-md:flex-wrap max-md:max-w-full">
            <input placeholder='Enter your Email' type="email" className="flex-auto h-full my-auto text-base tracking-normal text-gray-900" />
            <button className="justify-center px-12 py-2 text-lg font-bold tracking-tight leading-8 text-center text-white whitespace-nowrap bg-indigo-600 rounded-lg max-md:px-5">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-8 text-base tracking-normal leading-7 text-center text-gray-900 w-[365px]">
          We’ll never share your details with third parties.
          <br />
          View our Privacy Policy for more info.
        </div>
        <div className="flex justify-center items-center self-stretch px-16 py-20 mt-32 w-full text-white bg-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start mt-12 mb-8 w-full max-w-[1093px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a63b713ef90bc707ad63fc8a7cda01688620b3ce492a068a1ce38e950ef9a831?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
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
      </div>
    </>
  )
}

export default page
