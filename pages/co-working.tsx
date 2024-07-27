import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar textColor='white' />

      <div className="flex flex-col items-center pb-9 bg-white">
        <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-7 pb-16 w-full font-bold text-white min-h-[1001px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a3221b177ee19424da1f4908f9164c164a915d781dd6883223d30657d8bc525?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3221b177ee19424da1f4908f9164c164a915d781dd6883223d30657d8bc525?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3221b177ee19424da1f4908f9164c164a915d781dd6883223d30657d8bc525?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3221b177ee19424da1f4908f9164c164a915d781dd6883223d30657d8bc525?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3221b177ee19424da1f4908f9164c164a915d781dd6883223d30657d8bc525?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3221b177ee19424da1f4908f9164c164a915d781dd6883223d30657d8bc525?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3221b177ee19424da1f4908f9164c164a915d781dd6883223d30657d8bc525?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3221b177ee19424da1f4908f9164c164a915d781dd6883223d30657d8bc525?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col items-center w-full max-w-[1110px] max-md:max-w-full">
           
            <div className="mt-60 text-sm tracking-widest text-center text-green-400 uppercase max-md:mt-10">
              Shared space in your town
            </div>
            <div className="mt-12 text-6xl tracking-tighter text-center leading-[65px] w-[745px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Rent desk space in a<br />
              shared office environment
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6de05eb12637d6444c7a17525000b629fc8198547ae8e499fe5654e5bb78f94?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="mt-14 max-w-full aspect-[8.33] w-[770px] max-md:mt-10"
            />
            <div className="flex gap-3 mt-11 text-lg tracking-normal leading-7 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37f0e9e08eccb0fd1c9bba251d13f0c74fa95ca8d2baa61ca7607015f28e0251?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                className="shrink-0 aspect-square w-[18px]"
              />
              <div className="flex-auto">Take virtual tour of our spaces</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ecae89a83d44ba8b4bddfbada42fc864012263c91e6f77d4301e6f44c46845b?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="mt-56 w-10 aspect-square max-md:mt-10"
            />
          </div>
        </div>
        <div className="px-5 mt-20 max-w-full w-[984px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-center text-gray-900 max-md:mt-10">
                <div className="self-center text-5xl font-bold tracking-tighter leading-[58.08px] max-md:text-4xl">
                  06
                </div>
                <div className="mt-10 text-xl tracking-normal leading-8">
                  Offices are available on different countries
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-center text-gray-900 max-md:mt-10">
                <div className="self-center text-5xl font-bold tracking-tighter leading-[58.08px] max-md:text-4xl">
                  238
                </div>
                <div className="mt-10 text-xl tracking-normal leading-8">
                  Seats are available right now with dedicated support
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-center text-gray-900 max-md:mt-10">
                <div className="self-center text-5xl font-bold tracking-tighter leading-[58.08px] max-md:text-4xl">
                  1,395
                </div>
                <div className="mt-8 text-xl tracking-normal leading-8">
                  People are using our co-work spaces right now
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/642fbfce97adc4ccb82e703647532a3d9bcad2810a1715e7b83bf3047ea7f396?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="self-stretch mt-20 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
        />
        <div className="mt-28 text-5xl font-bold tracking-tighter text-center text-gray-900 leading-[58.08px] max-md:mt-10 max-md:text-4xl">
          Popular locations
        </div>
        <div className="mt-8 text-xl tracking-normal leading-8 text-center text-gray-900 w-[468px] max-md:max-w-full">
          With lots of unique blocks, you can easily build a page easily without
          any coding.{" "}
        </div>
        <div className="px-5 mt-24 w-full max-w-[1100px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center mt-3.5 text-center text-gray-900 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0dd82a8a3142d06d0891df52dcc178cc7f098b9dc94652b1d3fba34207a6c333?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dd82a8a3142d06d0891df52dcc178cc7f098b9dc94652b1d3fba34207a6c333?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dd82a8a3142d06d0891df52dcc178cc7f098b9dc94652b1d3fba34207a6c333?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dd82a8a3142d06d0891df52dcc178cc7f098b9dc94652b1d3fba34207a6c333?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dd82a8a3142d06d0891df52dcc178cc7f098b9dc94652b1d3fba34207a6c333?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dd82a8a3142d06d0891df52dcc178cc7f098b9dc94652b1d3fba34207a6c333?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dd82a8a3142d06d0891df52dcc178cc7f098b9dc94652b1d3fba34207a6c333?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dd82a8a3142d06d0891df52dcc178cc7f098b9dc94652b1d3fba34207a6c333?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="self-stretch w-full aspect-[0.75]"
                />
                <div className="mt-14 text-2xl font-bold tracking-tight leading-9 max-md:mt-10">
                  Beauview
                </div>
                <div className="mt-5 text-lg tracking-normal leading-7">
                  37 seats
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center text-gray-900 max-md:mt-9">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56a793bea6dcfff778d7bdafbb8994f7d33bcb1d83685a3945111822a9cb318c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56a793bea6dcfff778d7bdafbb8994f7d33bcb1d83685a3945111822a9cb318c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56a793bea6dcfff778d7bdafbb8994f7d33bcb1d83685a3945111822a9cb318c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56a793bea6dcfff778d7bdafbb8994f7d33bcb1d83685a3945111822a9cb318c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56a793bea6dcfff778d7bdafbb8994f7d33bcb1d83685a3945111822a9cb318c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56a793bea6dcfff778d7bdafbb8994f7d33bcb1d83685a3945111822a9cb318c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56a793bea6dcfff778d7bdafbb8994f7d33bcb1d83685a3945111822a9cb318c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56a793bea6dcfff778d7bdafbb8994f7d33bcb1d83685a3945111822a9cb318c?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="self-stretch w-full aspect-[0.75]"
                />
                <div className="mt-11 text-2xl font-bold tracking-tight leading-9 max-md:mt-10">
                  Haleyborough
                </div>
                <div className="mt-4 text-lg tracking-normal leading-7">
                  12 seats
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center text-gray-900 max-md:mt-9">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a82969a3450fb5108bab93ba8ab480ea25dc946431df6d596a5eb49191f18bfd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82969a3450fb5108bab93ba8ab480ea25dc946431df6d596a5eb49191f18bfd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82969a3450fb5108bab93ba8ab480ea25dc946431df6d596a5eb49191f18bfd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82969a3450fb5108bab93ba8ab480ea25dc946431df6d596a5eb49191f18bfd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82969a3450fb5108bab93ba8ab480ea25dc946431df6d596a5eb49191f18bfd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82969a3450fb5108bab93ba8ab480ea25dc946431df6d596a5eb49191f18bfd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82969a3450fb5108bab93ba8ab480ea25dc946431df6d596a5eb49191f18bfd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82969a3450fb5108bab93ba8ab480ea25dc946431df6d596a5eb49191f18bfd?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="self-stretch w-full aspect-[0.75]"
                />
                <div className="mt-11 text-2xl font-bold tracking-tight leading-9 max-md:mt-10">
                  Jeromyshire
                </div>
                <div className="mt-4 text-lg tracking-normal leading-7">
                  28 seats
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch px-16 pt-20 mt-36 w-full bg-slate-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="z-10 mt-20 -mb-32 w-full max-w-[1110px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-gray-900 max-md:mt-10">
                  <div className="text-5xl font-bold tracking-tighter leading-[58px] max-md:text-4xl max-md:leading-[54px]">
                    Work around very <br />
                    talented people.
                  </div>
                  <div className="mt-8 text-xl tracking-normal leading-8">
                    With lots of unique blocks, you can easily build a page easily
                    without any coding.{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f612650bdae3ec7473019e42a598fde112f8d30b0ce6e841d6e9cb84b306029?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f612650bdae3ec7473019e42a598fde112f8d30b0ce6e841d6e9cb84b306029?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f612650bdae3ec7473019e42a598fde112f8d30b0ce6e841d6e9cb84b306029?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f612650bdae3ec7473019e42a598fde112f8d30b0ce6e841d6e9cb84b306029?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f612650bdae3ec7473019e42a598fde112f8d30b0ce6e841d6e9cb84b306029?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f612650bdae3ec7473019e42a598fde112f8d30b0ce6e841d6e9cb84b306029?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f612650bdae3ec7473019e42a598fde112f8d30b0ce6e841d6e9cb84b306029?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f612650bdae3ec7473019e42a598fde112f8d30b0ce6e841d6e9cb84b306029?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                  className="grow mt-1 w-full aspect-[0.78] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-10 flex-col mt-0 w-full text-gray-900 max-w-[1108px] max-md:mt-0 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9080ad0b1c31c74d0e89cabad5f67e9f6af2146f4c064aca6ef86e85b214b120?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9080ad0b1c31c74d0e89cabad5f67e9f6af2146f4c064aca6ef86e85b214b120?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9080ad0b1c31c74d0e89cabad5f67e9f6af2146f4c064aca6ef86e85b214b120?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9080ad0b1c31c74d0e89cabad5f67e9f6af2146f4c064aca6ef86e85b214b120?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9080ad0b1c31c74d0e89cabad5f67e9f6af2146f4c064aca6ef86e85b214b120?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9080ad0b1c31c74d0e89cabad5f67e9f6af2146f4c064aca6ef86e85b214b120?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9080ad0b1c31c74d0e89cabad5f67e9f6af2146f4c064aca6ef86e85b214b120?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9080ad0b1c31c74d0e89cabad5f67e9f6af2146f4c064aca6ef86e85b214b120?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
            className="max-w-full aspect-[0.87] w-[520px]"
          />
          <div className="flex gap-5 justify-between px-5 mt-32 max-md:flex-wrap max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cfa0b8c52ebc6b049fbee5202e29123012b332702b3881a10e2586e8f80285e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="shrink-0 self-start aspect-[1.25] w-[45px]"
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold tracking-tight leading-8">
                Dedicated Desk
              </div>
              <div className="mt-9 text-lg tracking-normal leading-7">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b551d9133140ead394c377b3c8a15f538d9cfd5ecfe099cee691e6c68db55101?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="shrink-0 self-start w-10 aspect-[1.25]"
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold tracking-tight leading-8">
                High Speed Internet
              </div>
              <div className="mt-8 text-lg tracking-normal leading-7">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/669237078cc456799ad52c60ad9e60d1fd2da69b9e47fd3fed1819d188e6a44e?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
              className="shrink-0 self-start aspect-[0.88] w-[35px]"
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold tracking-tight leading-8">
                Unlimited Coffee
              </div>
              <div className="mt-9 text-lg tracking-normal leading-7">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch px-16 py-20 mt-32 w-full bg-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mt-20 mb-11 w-full max-w-[1110px] max-md:my-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-white max-md:mt-10">
                  <div className="text-5xl font-bold tracking-tighter leading-[58px] max-md:text-4xl max-md:leading-[54px]">
                    We are always here for your backup.
                  </div>
                  <div className="mt-7 text-xl tracking-normal leading-8">
                    We share common trends and strategies for creating & improving
                    your rental income.
                  </div>
                  <div className="flex gap-5 mt-20 text-xl font-bold tracking-tight leading-8 max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6ffe92263ae0edb0d8d2ebe03c5d070ad650db20cefef6fdc1108a89209e7d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 aspect-square w-[30px]"
                    />
                    <div className="flex-auto self-start">
                      Noise Free Locations
                    </div>
                  </div>
                  <div className="self-center mt-3.5 text-lg tracking-normal leading-7">
                    With lots of unique blocks, you can easily build a page
                    without coding.{" "}
                  </div>
                  <div className="flex gap-5 mt-12 max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6ffe92263ae0edb0d8d2ebe03c5d070ad650db20cefef6fdc1108a89209e7d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 self-start aspect-square w-[30px]"
                    />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                      <div className="text-xl font-bold tracking-tight leading-8">
                        24/7 Hour Support
                      </div>
                      <div className="mt-6 text-lg tracking-normal leading-7">
                        With lots of unique blocks, you can easily build a page
                        without coding.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col self-stretch px-8 pt-9 my-auto text-xl font-bold tracking-tight leading-8 text-gray-900 min-h-[447px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb93446766660d5208cd33ed9fe4bf55fc0cb06b6278e1277dcb0a8a66ac98a?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-5 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto">How to setup Shade Pro?</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c7fde69421a4f0c1f2516f3b789dd8e84d17bdf86e215613dad42424f800a1?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 my-auto w-3 aspect-[2]"
                    />
                  </div>
                  <div className="relative mt-8 text-lg tracking-normal leading-7 max-md:max-w-full">
                    With lots of unique blocks, you can easily build a page with
                    coding. Build your next landing page. Integer ut obe ryn. Sed
                    feugiat vitae turpis a porta.
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff6a400ca1bb404d7c1fc20c3f53b64496b3bfc913cd4660863ae3db975b22d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="mt-7 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:max-w-full"
                  />
                  <div className="flex relative gap-5 px-0.5 mt-8 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto">
                      Can I use Shade Pro for my clients?
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/16f68347f32b8fd556a13ed77b9436e133f2c38e7d73ff5e2e9a5865fb5e8048?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 my-auto w-1.5 aspect-[0.5]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff6a400ca1bb404d7c1fc20c3f53b64496b3bfc913cd4660863ae3db975b22d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="mt-8 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:max-w-full"
                  />
                  <div className="flex relative gap-5 px-0.5 mt-8 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto">
                      How often do you release update?
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/16f68347f32b8fd556a13ed77b9436e133f2c38e7d73ff5e2e9a5865fb5e8048?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 my-auto w-1.5 aspect-[0.5]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff6a400ca1bb404d7c1fc20c3f53b64496b3bfc913cd4660863ae3db975b22d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="mt-8 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:max-w-full"
                  />
                  <div className="flex relative gap-5 px-0.5 mt-8 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto">
                      How can I access to old version?
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/16f68347f32b8fd556a13ed77b9436e133f2c38e7d73ff5e2e9a5865fb5e8048?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                      className="shrink-0 self-start mt-1 w-1.5 aspect-[0.5]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff6a400ca1bb404d7c1fc20c3f53b64496b3bfc913cd4660863ae3db975b22d?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
                    className="mt-9 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 text-5xl font-bold tracking-tighter text-center text-gray-900 leading-[58.08px] max-md:mt-10 max-md:text-4xl">
          Get latest updates
        </div>
        <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900 w-[527px] max-md:max-w-full">
          With lots of unique blocks, you can easily build a page without coding.
          Build your next landing page.
        </div>
        <div className="justify-center items-start p-6 mt-16 max-w-full text-lg tracking-normal leading-7 text-gray-900 bg-white rounded-lg border border-gray-200 border-solid w-[369px] max-md:px-5 max-md:mt-10">
          Enter your email
        </div>
        <div className="justify-center items-center px-16 py-6 mt-4 max-w-full text-lg font-bold tracking-tight leading-8 text-center text-white whitespace-nowrap bg-indigo-600 rounded-lg w-[368px] max-md:px-5">
          Subscribe
        </div>
        <div className="mt-9 text-base tracking-normal leading-7 text-center text-gray-900 w-[365px]">
          We’ll never share your details with third parties.
          <br />
          View our Privacy Policy for more info.
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dc0e02d0f4f1b04274d023c4fe1d524a19ea81650adf08bf919baef4603f955?apiKey=74fb9a29a4a842cbb13bbfd7cb1d4d5f&"
          className="self-stretch mt-32 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
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
              © 2024 Copyright, All Right Reserved, Made by Anas Ahmed with
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
