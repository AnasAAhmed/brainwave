import Navbar from '@/components/Navbar'
import { allSeoData } from '@/lib/utils'
import Head from 'next/head'
import React from 'react'

const page = () => {
 const seoData = allSeoData['product']
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

      <div className="flex flex-col pb-12 bg-white">
        <div className="flex overflow-hidden relative flex-col items-center px-6 pt-4 pb-20 w-full font-bold text-gray-900 min-h-[1059px] max-md:pl-5 max-md:max-w-full">
         
          <img
            loading="lazy"
            srcSet="/app/airpod-image.png"
            className="mt-32 max-w-full aspect-[1.18] w-[356px] max-md:mt-10"
          />
          <div className="relative mt-20 text-sm tracking-widest text-center text-red-500 uppercase max-md:mt-10">
            Non-stop music for long time
          </div>
          <div className="relative mt-10 text-6xl tracking-tighter text-center leading-[64.8px] max-md:max-w-full max-md:text-4xl">
            Sound, that sounds better!
          </div>
          <div className="relative mt-10 text-xl tracking-normal leading-8 text-center w-[636px] max-md:mt-10 max-md:max-w-full">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </div>
          <div className="relative justify-center px-9 py-5 mt-10 text-lg tracking-tight leading-8 text-center text-white bg-indigo-600 rounded-lg max-md:px-5 max-md:mt-10">
            Buy now - Starting at $99
          </div>
          <div className="flex relative gap-2.5 mt-7 mb-10 text-sm tracking-widest uppercase max-md:mb-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4e60bf8b1f63a5162c473dfe94201006afc31291363d9409ca9d8570773163d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="flex-auto my-auto">Watch in action</div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center items-end px-16 py-20 w-full min-h-[771px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dab04b620b8c49e3b68869ece94a707e2b73a1f68caf55b36cb46a6772f692e9?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab04b620b8c49e3b68869ece94a707e2b73a1f68caf55b36cb46a6772f692e9?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab04b620b8c49e3b68869ece94a707e2b73a1f68caf55b36cb46a6772f692e9?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab04b620b8c49e3b68869ece94a707e2b73a1f68caf55b36cb46a6772f692e9?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab04b620b8c49e3b68869ece94a707e2b73a1f68caf55b36cb46a6772f692e9?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab04b620b8c49e3b68869ece94a707e2b73a1f68caf55b36cb46a6772f692e9?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab04b620b8c49e3b68869ece94a707e2b73a1f68caf55b36cb46a6772f692e9?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab04b620b8c49e3b68869ece94a707e2b73a1f68caf55b36cb46a6772f692e9?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col mt-24 mr-48 mb-14 max-w-full w-[622px] max-md:my-10 max-md:mr-2.5">
            <div className="text-5xl font-bold tracking-tighter text-gray-900 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Listen music anytime, anywhere.
            </div>
            <div className="mt-8 text-xl tracking-normal leading-8 text-gray-900 max-md:max-w-full">
              We share common trends and strategies for improving your rental
              income.
            </div>
            <div className="mt-32 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-3.5 text-gray-900 max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab48a46d23f5d951d56cd97e23cb174687e74755bde4a2998fa7b9007d01a70e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab48a46d23f5d951d56cd97e23cb174687e74755bde4a2998fa7b9007d01a70e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab48a46d23f5d951d56cd97e23cb174687e74755bde4a2998fa7b9007d01a70e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab48a46d23f5d951d56cd97e23cb174687e74755bde4a2998fa7b9007d01a70e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab48a46d23f5d951d56cd97e23cb174687e74755bde4a2998fa7b9007d01a70e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab48a46d23f5d951d56cd97e23cb174687e74755bde4a2998fa7b9007d01a70e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab48a46d23f5d951d56cd97e23cb174687e74755bde4a2998fa7b9007d01a70e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab48a46d23f5d951d56cd97e23cb174687e74755bde4a2998fa7b9007d01a70e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 self-start aspect-[1.05] w-[55px]"
                    />
                    <div className="flex flex-col">
                      <div className="text-xl font-bold tracking-tight leading-8">
                        Comfortable Buds
                      </div>
                      <div className="mt-8 text-lg tracking-normal leading-7">
                        With lots of unique blocks, you can easily build a page
                        without coding.{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 text-gray-900 max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/879e2f130d5fb6ed1dcf4fb165b6254443d5c2ab3d1ffe8c0da38e0db429a0e2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/879e2f130d5fb6ed1dcf4fb165b6254443d5c2ab3d1ffe8c0da38e0db429a0e2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/879e2f130d5fb6ed1dcf4fb165b6254443d5c2ab3d1ffe8c0da38e0db429a0e2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/879e2f130d5fb6ed1dcf4fb165b6254443d5c2ab3d1ffe8c0da38e0db429a0e2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/879e2f130d5fb6ed1dcf4fb165b6254443d5c2ab3d1ffe8c0da38e0db429a0e2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/879e2f130d5fb6ed1dcf4fb165b6254443d5c2ab3d1ffe8c0da38e0db429a0e2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/879e2f130d5fb6ed1dcf4fb165b6254443d5c2ab3d1ffe8c0da38e0db429a0e2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/879e2f130d5fb6ed1dcf4fb165b6254443d5c2ab3d1ffe8c0da38e0db429a0e2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 self-start mt-1 w-12 aspect-square"
                    />
                    <div className="flex flex-col">
                      <div className="text-xl font-bold tracking-tight leading-8">
                        Powerful Bass
                      </div>
                      <div className="mt-8 text-lg tracking-normal leading-7">
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
        <div className="pl-20 w-full bg-indigo-600 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-bold tracking-normal leading-8 text-white max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl tracking-tighter leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Comfortable buds with better sound.
                </div>
                <div className="mt-9 text-xl max-md:max-w-full">
                  We share common trends and strategies for improving your rental
                  income.
                </div>
                <div className="flex gap-5 mt-28 text-xl tracking-normal max-md:flex-wrap max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/36faf5e3d159d67496a135b6374f588108ba21b259b055d65391981728588b5b?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36faf5e3d159d67496a135b6374f588108ba21b259b055d65391981728588b5b?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36faf5e3d159d67496a135b6374f588108ba21b259b055d65391981728588b5b?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36faf5e3d159d67496a135b6374f588108ba21b259b055d65391981728588b5b?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36faf5e3d159d67496a135b6374f588108ba21b259b055d65391981728588b5b?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36faf5e3d159d67496a135b6374f588108ba21b259b055d65391981728588b5b?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36faf5e3d159d67496a135b6374f588108ba21b259b055d65391981728588b5b?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36faf5e3d159d67496a135b6374f588108ba21b259b055d65391981728588b5b?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="shrink-0 self-start rounded-full aspect-square w-[54px]"
                  />
                  <div className="flex-auto">
                    “You made it so simple. My new site is so much faster and
                    easier to work with than my old site.”
                  </div>
                </div>
                <div className="self-start mt-9 ml-20 text-lg leading-7 text-gray-900 max-md:ml-2.5">
                  Isabella Chavez
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a70fa3f3858a2fbf89b13246897d43083504489371bdbd197cbabdc792053af?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a70fa3f3858a2fbf89b13246897d43083504489371bdbd197cbabdc792053af?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a70fa3f3858a2fbf89b13246897d43083504489371bdbd197cbabdc792053af?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a70fa3f3858a2fbf89b13246897d43083504489371bdbd197cbabdc792053af?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a70fa3f3858a2fbf89b13246897d43083504489371bdbd197cbabdc792053af?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a70fa3f3858a2fbf89b13246897d43083504489371bdbd197cbabdc792053af?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a70fa3f3858a2fbf89b13246897d43083504489371bdbd197cbabdc792053af?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a70fa3f3858a2fbf89b13246897d43083504489371bdbd197cbabdc792053af?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                className="grow w-full aspect-[0.77] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-5 pt-20 w-full text-5xl font-bold tracking-tighter text-center text-white bg-gray-900 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          <div className="self-center mt-20 w-[475px] max-md:mt-10 max-md:text-4xl max-md:leading-[54px]">
            Trendy designs with better sound quality.
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fefd1b9386bf476cecb458c81fcbef39edf8488077721baccd231c169ecdbc99?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fefd1b9386bf476cecb458c81fcbef39edf8488077721baccd231c169ecdbc99?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fefd1b9386bf476cecb458c81fcbef39edf8488077721baccd231c169ecdbc99?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fefd1b9386bf476cecb458c81fcbef39edf8488077721baccd231c169ecdbc99?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fefd1b9386bf476cecb458c81fcbef39edf8488077721baccd231c169ecdbc99?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fefd1b9386bf476cecb458c81fcbef39edf8488077721baccd231c169ecdbc99?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fefd1b9386bf476cecb458c81fcbef39edf8488077721baccd231c169ecdbc99?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fefd1b9386bf476cecb458c81fcbef39edf8488077721baccd231c169ecdbc99?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="mt-8 w-full aspect-[2.27] max-md:max-w-full"
          />
        </div>
        <div className="self-center mt-36 text-5xl font-bold tracking-tighter text-center text-gray-900 leading-[58.08px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Get your airpod now.
        </div>
        <div className="self-center mt-8 text-xl tracking-normal leading-8 text-center text-gray-900 w-[404px]">
          We share common trends and strategies for improving your rental income.
        </div>
        <div className="self-center px-5 mt-24 max-w-full w-[999px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg font-bold tracking-tight text-center text-gray-900 max-md:mt-10">
                <div className="flex flex-col text-xl leading-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0823172d19fd2cce3537f2aa61b1396ed588a66542ad5d1b70b42d1236730436?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0823172d19fd2cce3537f2aa61b1396ed588a66542ad5d1b70b42d1236730436?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0823172d19fd2cce3537f2aa61b1396ed588a66542ad5d1b70b42d1236730436?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0823172d19fd2cce3537f2aa61b1396ed588a66542ad5d1b70b42d1236730436?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0823172d19fd2cce3537f2aa61b1396ed588a66542ad5d1b70b42d1236730436?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0823172d19fd2cce3537f2aa61b1396ed588a66542ad5d1b70b42d1236730436?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0823172d19fd2cce3537f2aa61b1396ed588a66542ad5d1b70b42d1236730436?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0823172d19fd2cce3537f2aa61b1396ed588a66542ad5d1b70b42d1236730436?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="w-full aspect-[1.45]"
                  />
                  <div className="self-center mt-10">Midnight Green</div>
                </div>
                <div className="mt-7 tracking-normal leading-7">
                  AirPods (2nd gen) iPhone Colors with Wireless Charging Case
                </div>
                <div className="justify-center self-center px-6 py-4 mt-9 text-white bg-indigo-600 rounded-lg max-md:px-5">
                  Buy now - $99
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg font-bold tracking-tight text-center text-gray-900 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/772bed2b3b2612eddb2ca8e8948ec3b1e77688aa4fa9b8a6908136d088cb6ec2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/772bed2b3b2612eddb2ca8e8948ec3b1e77688aa4fa9b8a6908136d088cb6ec2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/772bed2b3b2612eddb2ca8e8948ec3b1e77688aa4fa9b8a6908136d088cb6ec2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/772bed2b3b2612eddb2ca8e8948ec3b1e77688aa4fa9b8a6908136d088cb6ec2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/772bed2b3b2612eddb2ca8e8948ec3b1e77688aa4fa9b8a6908136d088cb6ec2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/772bed2b3b2612eddb2ca8e8948ec3b1e77688aa4fa9b8a6908136d088cb6ec2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/772bed2b3b2612eddb2ca8e8948ec3b1e77688aa4fa9b8a6908136d088cb6ec2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/772bed2b3b2612eddb2ca8e8948ec3b1e77688aa4fa9b8a6908136d088cb6ec2?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="w-full aspect-[1.54]"
                />
                <div className="self-center mt-10 text-xl leading-8">Silver</div>
                <div className="mt-8 tracking-normal leading-7">
                  AirPods (2nd gen) iPhone Colors with Wireless Charging Case
                </div>
                <div className="justify-center self-center px-6 py-4 mt-9 text-white bg-indigo-600 rounded-lg max-md:px-5">
                  Buy now - $99
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg font-bold tracking-tight text-center text-gray-900 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3edc1fbca937522a9eeff8479df07946f0e2af921f1be5cebef9ac013da2bf6c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3edc1fbca937522a9eeff8479df07946f0e2af921f1be5cebef9ac013da2bf6c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3edc1fbca937522a9eeff8479df07946f0e2af921f1be5cebef9ac013da2bf6c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3edc1fbca937522a9eeff8479df07946f0e2af921f1be5cebef9ac013da2bf6c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3edc1fbca937522a9eeff8479df07946f0e2af921f1be5cebef9ac013da2bf6c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3edc1fbca937522a9eeff8479df07946f0e2af921f1be5cebef9ac013da2bf6c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3edc1fbca937522a9eeff8479df07946f0e2af921f1be5cebef9ac013da2bf6c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3edc1fbca937522a9eeff8479df07946f0e2af921f1be5cebef9ac013da2bf6c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="w-full aspect-[1.54]"
                />
                <div className="self-center mt-10 text-xl leading-8">Gold</div>
                <div className="mt-8 tracking-normal leading-7">
                  AirPods (2nd gen) iPhone Colors with Wireless Charging Case
                </div>
                <div className="justify-center self-center px-6 py-4 mt-9 text-white bg-indigo-600 rounded-lg max-md:px-5">
                  Buy now - $99
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dca99e24be583fb5c9ee37e6f5aca1dd01bbe4798861b41b2815b939e2cbd0bb?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dca99e24be583fb5c9ee37e6f5aca1dd01bbe4798861b41b2815b939e2cbd0bb?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dca99e24be583fb5c9ee37e6f5aca1dd01bbe4798861b41b2815b939e2cbd0bb?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dca99e24be583fb5c9ee37e6f5aca1dd01bbe4798861b41b2815b939e2cbd0bb?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dca99e24be583fb5c9ee37e6f5aca1dd01bbe4798861b41b2815b939e2cbd0bb?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dca99e24be583fb5c9ee37e6f5aca1dd01bbe4798861b41b2815b939e2cbd0bb?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dca99e24be583fb5c9ee37e6f5aca1dd01bbe4798861b41b2815b939e2cbd0bb?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dca99e24be583fb5c9ee37e6f5aca1dd01bbe4798861b41b2815b939e2cbd0bb?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="mt-40 w-full aspect-[2.04] max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex gap-5 self-center mt-12 w-full font-bold text-gray-900 max-w-[1112px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto text-2xl tracking-normal">Brainwave.io</div>
          <div className="flex-auto text-base tracking-normal leading-6 text-right">
            Privacy Policy Terms & Conditions Support
          </div>
        </div>
      </div>
    </>
  )
}

export default page
