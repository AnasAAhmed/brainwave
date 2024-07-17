import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar textColor='white'/>
      <div className="flex flex-col items-center pb-9 bg-white">
        <div className="flex overflow-hidden relative flex-col self-stretch pt-4 w-full min-h-[908px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/app/hero-bg.png"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative z-10 flex-col items-start px-6 w-full max-md:px-5 max-md:max-w-full">
          
            <div className="mt-32 xl:ml-56 text-6xl font-bold tracking-tighter text-white leading-[65px] w-[541px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Manage your remote team work
            </div>
            <div className="mt-11 xl:ml-56 text-xl tracking-normal leading-8 text-white w-[500px] max-md:mt-10 max-md:max-w-full">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </div>
            <div className="justify-center px-12 py-2 mt-11 xl:ml-56 text-lg font-bold tracking-tight leading-8 text-center text-white bg-red-500 rounded-lg max-md:px-5 max-md:mt-10 max-md:ml-2.5">
              Explore more
            </div>
            <div className="mt-16 xl:ml-56 text-sm font-bold tracking-widest uppercase text-slate-100 max-md:mt-10 max-md:ml-2.5">
              Download our app
            </div>
            <div className="flex flex-wrap gap-4 mt-7 xl:ml-56 max-md:ml-2.5">
              <img
                loading="lazy"
                srcSet="/app/app-store.png"
                className="shrink-0 max-w-full aspect-[3.13] w-[184px]"
              />
              <img
                loading="lazy"
                srcSet="/app/plat-store.png"
                className="shrink-0 max-w-full aspect-[3.13] w-[184px]"
              />
            </div>
          </div>
          <img
            loading="lazy"
            src="/app/hero-curve.svg"
            className="z-10 w-full hidden xl:block aspect-[7.14] fill-white max-md:max-w-full"
          />
        </div>
        <div className="mt-28 max-w-full w-[992px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/app/team.png"
                className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 mt-2.5 font-bold tracking-normal text-gray-900 max-md:mt-10">
                <div className="text-5xl tracking-tighter leading-[58px] max-md:text-4xl max-md:leading-[54px]">
                  Collaborate with team members.
                </div>
                <div className="mt-9 text-xl leading-8">
                  We share common trends and strategies for improving your rental
                  income.
                </div>
                <div className="mt-16 text-xl tracking-tight leading-8 max-md:mt-10">
                  Project Based Groups
                </div>
                <div className="mt-6 text-lg leading-7">
                  With lots of unique blocks, you can easily build a page without
                  coding.{" "}
                </div>
                <div className="mt-11 text-xl tracking-tight leading-8 max-md:mt-10">
                  Unlimited Video Meetings
                </div>
                <div className="mt-6 text-lg leading-7">
                  With lots of unique blocks, you can easily build a page without
                  coding.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 w-full max-w-[1110px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 mt-5 font-bold tracking-normal text-gray-900 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl tracking-tighter leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Organize remote team fast & easily.
                </div>
                <div className="mt-7 text-xl leading-8 max-md:max-w-full">
                  We share common trends and strategies for creating & improving
                  your rental income.
                </div>
                <div className="mt-16 text-xl tracking-tight leading-8 max-md:mt-10 max-md:max-w-full">
                  Create Unlimited Teams
                </div>
                <div className="mt-7 text-lg leading-7 max-md:max-w-full">
                  With lots of unique blocks, you can easily build a page without
                  coding.{" "}
                </div>
                <div className="mt-11 text-xl tracking-tight leading-8 max-md:mt-10 max-md:max-w-full">
                  Hasslefree Chat with Everyone
                </div>
                <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                  With lots of unique blocks, you can easily build a page without
                  coding.{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/app/org.png"
                className="grow w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-40 text-5xl font-bold tracking-tighter text-center text-gray-900 leading-[58.08px] max-md:mt-10 max-md:text-4xl">
          How does it work?
        </div>
        <div className="mt-10 text-xl tracking-normal leading-8 text-center text-gray-900 w-[468px] max-md:max-w-full">
          With lots of unique blocks, you can easily build a page easily without
          any coding.{" "}
        </div>
        <div className="px-5 mt-20 max-w-full w-[982px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-center text-gray-900 max-md:mt-10">
                <div className="justify-center items-center px-8 text-4xl tracking-tighter leading-10 text-white whitespace-nowrap bg-red-500 rounded-full h-[73px] w-[73px] max-md:px-5">
                  1
                </div>
                <div className="mt-14 text-xl tracking-tight leading-8 max-md:mt-10">
                  Install App
                </div>
                <div className="self-stretch mt-7 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page easily
                  without any coding.{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-center text-gray-900 max-md:mt-10">
                <div className="justify-center items-center px-7 text-4xl tracking-tighter leading-10 text-white whitespace-nowrap bg-green-400 rounded-full h-[73px] w-[73px] max-md:px-5">
                  2
                </div>
                <div className="mt-14 text-xl tracking-tight leading-8 max-md:mt-10">
                  Add Team Members
                </div>
                <div className="self-stretch mt-8 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page easily
                  without any coding.{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-center text-gray-900 max-md:mt-10">
                <div className="justify-center items-center px-7 text-4xl tracking-tighter leading-10 text-white whitespace-nowrap bg-indigo-600 rounded-full h-[73px] w-[73px] max-md:px-5">
                  3
                </div>
                <div className="mt-14 text-xl tracking-tight leading-8 max-md:mt-10">
                  Start Rolling!
                </div>
                <div className="self-stretch mt-7 text-lg tracking-normal leading-7">
                  With lots of unique blocks, you can easily build a page easily
                  without any coding.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pb-20 mt-96 w-full min-h-[2181px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="/app/video-curve.svg"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative z-10 flex-col mt-0 mb-5 w-full max-w-[1150px] max-md:mt-0 max-md:max-w-full">
            <div className="flex gap-0 items-start max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                src="/app/dots.svg"
                className="shrink-0 self-end max-w-full aspect-[1.1] mt-[561px] w-[156px] max-md:mt-10"
              />
              <div className="flex grow shrink-0 justify-center items-center self-start px-16 py-20 bg-gray-900 rounded-3xl basis-0 w-fit max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/app/play.svg"
                  className="mt-48 max-w-full aspect-square w-[114px] max-md:mt-10"
                />
              </div>
            </div>
            <div className="self-center mt-16 text-5xl font-bold tracking-tighter text-center text-white leading-[58px] w-[630px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              We made this app <br />
              to solve your problems.
            </div>
            <div className="flex flex-col items-center pr-3 pl-10 mt-28 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-stretch max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 text-white max-md:mt-10">
                      <img
                        loading="lazy"
                        src="/app/icon1.svg"
                        className="shrink-0 self-start aspect-[1.47] w-[47px]"
                      />
                      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                        <div className="text-xl font-bold tracking-tight leading-8">
                          Unlimited Projects
                        </div>
                        <div className="mt-7 text-lg tracking-normal leading-7">
                          With lots of unique blocks, you can easily build a page
                          without coding. Build your next landing page.

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 justify-between text-white max-md:flex-wrap max-md:mt-10">
                      <img
                        loading="lazy"
                        src="/app/icon2.svg"
                        className="shrink-0 self-start aspect-[1.14] w-[41px]"
                      />
                      <div className="flex flex-col">
                        <div className="text-xl font-bold tracking-tight leading-8">
                          Team Management
                        </div>
                        <div className="mt-7 text-lg tracking-normal leading-7">
                          With lots of unique blocks, you can easily build a page
                          without coding. Build your next landing page.
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="/app/icon3.svg"
                        className="shrink-0 self-start w-10 aspect-square"
                      />
                      <div className="flex flex-col">
                        <div className="text-xl font-bold tracking-tight leading-8">
                          File Sharing
                        </div>
                        <div className="mt-7 text-lg tracking-normal leading-7">
                          With lots of unique blocks, you can easily build a page
                          without coding. Build your next landing page.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between items-start self-stretch mt-16 text-white max-md:flex-wrap max-md:mt-10">
                <img
                  loading="lazy"
                  src="/app/icon4.svg"
                  className="shrink-0 aspect-[1.22] w-[39px]"
                />
                <div className="flex flex-col mt-1">
                  <div className="text-xl font-bold tracking-tight leading-8">
                    Video Meetings
                  </div>
                  <div className="mt-7 text-lg tracking-normal leading-7">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="/app/icon5.svg"
                  className="shrink-0 w-10 aspect-[0.98]"
                />
                <div className="flex flex-col mt-1">
                  <div className="text-xl font-bold tracking-tight leading-8">
                    Time Tracking
                  </div>
                  <div className="mt-7 text-lg tracking-normal leading-7">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="/app/icon6.svg"
                  className="shrink-0 aspect-[1.05] w-[37px]"
                />
                <div className="flex flex-col mt-1">
                  <div className="text-xl font-bold tracking-tight leading-8">
                    Payment System
                  </div>
                  <div className="mt-7 text-lg tracking-normal leading-7">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="/app/divider.svg"
                className="mt-28 ml-4 max-w-full border-white border-solid aspect-[50] border-[3px] stroke-[3px] stroke-white w-[163px] max-md:mt-10"
              />
              <div className="mt-24 ml-4 text-3xl font-bold tracking-tighter leading-10 text-center text-white w-[550px] max-md:mt-10 max-md:max-w-full">
                1,749 remote teams have shared their experience with our app!
              </div>
              <div className="px-10 py-10 mt-16 ml-4 max-w-full bg-white rounded-xl border border-solid border-zinc-600 w-[730px] max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="/app/testimo-1.png"
                      className="shrink-0 self-stretch my-auto max-w-full rounded-full aspect-square w-[111px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-gray-900 max-md:mt-10 max-md:max-w-full">
                      <div className="text-xl tracking-tight leading-8 max-md:max-w-full">
                        “OMG! I cannot believe that I have got a brand new landing
                        page after getting Omega. It was super easy to edit and
                        publish.”
                      </div>
                      <div className="mt-7 text-lg tracking-normal leading-7 max-md:max-w-full">
                        Isaac Olson
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-9 py-9 mt-5 ml-4 max-w-full bg-white rounded-xl border border-solid border-zinc-600 w-[730px] max-md:px-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="/app/testimo-2.png"
                      className="shrink-0 self-stretch my-auto max-w-full rounded-full aspect-square w-[111px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-gray-900 max-md:mt-10 max-md:max-w-full">
                      <div className="text-xl tracking-tight leading-8 max-md:max-w-full">
                        “Simply the best. Better than all the rest. I’d recommend
                        this product to beginners and advanced users who want
                        success.”
                      </div>
                      <div className="mt-8 text-lg tracking-normal leading-7 max-md:max-w-full">
                        Barry Young
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-11 pr-20 pl-9 mt-5 ml-4 max-w-full bg-white rounded-xl border border-solid border-zinc-600 w-[730px] max-md:px-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="/app/testimo-3.png"
                      className="shrink-0 max-w-full rounded-full aspect-square w-[111px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-gray-900 max-md:mt-10 max-md:max-w-full">
                      <div className="text-xl tracking-tight leading-8 max-md:max-w-full">
                        “Must have book for all, who want to be Product Designer
                        or Interaction Designer.”
                      </div>
                      <div className="mt-7 text-lg tracking-normal leading-7 max-md:max-w-full">
                        Esther Allison
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-14 ml-4 text-lg font-bold tracking-tight leading-8 text-green-400 max-md:mt-10">
                <div className="flex-auto">Read more reviews</div>
                <img
                  loading="lazy"
                  src="/subs/arrow.svg"
                  className="shrink-0 my-auto w-2.5 aspect-[1.11]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-slate-100 overflow-hidden relative flex-col items-center self-stretch pt-20 w-full min-h-[1103px] max-md:max-w-full">
          <div className="relative mt-10 text-5xl font-bold tracking-tighter text-center text-gray-900 leading-[58.08px] max-md:text-4xl">
            Pricing made easy
          </div>
          <div className="relative mt-8 text-xl tracking-normal leading-8 text-center text-gray-900 w-[468px] max-md:max-w-full">
            With lots of unique blocks, you can easily build a page easily without
            any coding.{" "}
          </div>
          <div className="relative mt-20 max-w-full w-[730px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow items-center px-6 py-8 rounded-xl border border-gray-200 border-solid max-md:px-5 max-md:mt-8">
                  <div className="text-sm font-bold tracking-widest text-center text-red-500 uppercase">
                    Starter
                  </div>
                  <div className="flex gap-1.5 mt-11 text-gray-900 max-md:mt-10">
                    <div className="text-2xl font-bold tracking-tighter leading-[65px]">
                      $<span className="text-6xl tracking-tighter">19</span>
                    </div>
                    <div className="self-end mt-8 text-lg tracking-normal leading-7">
                      / mo
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/home/divider.svg"
                    className="self-stretch mt-9 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200"
                  />
                  <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900">
                    Upto 100 Team Members
                  </div>
                  <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-6 border border-gray-200 border-solid aspect-[306] stroke-[1px] stroke-gray-200">
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200"
                    />
                  </div>
                  <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900">
                    100 GB Cloud Storage
                  </div>
                  <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-6 border border-gray-200 border-solid aspect-[306] stroke-[1px] stroke-gray-200">
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200"
                    />
                  </div>
                  <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900">
                    Unlimited Meetings
                  </div>
                  <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-6 border border-gray-200 border-solid aspect-[306] stroke-[1px] stroke-gray-200">
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200"
                    />
                  </div>
                  <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900">
                    Premium Support
                  </div>
                  <div className="justify-center px-12 py-6 mt-9 text-lg font-bold tracking-tight leading-8 text-center text-white bg-gray-900 rounded-lg max-md:px-5">
                    Get Started Now
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow items-center px-6 py-8 mx-auto w-full bg-white rounded-xl shadow-2xl max-md:px-5 max-md:mt-8">
                  <div className="text-sm font-bold tracking-widest text-center text-red-500 uppercase">
                    Unlimited
                  </div>
                  <div className="flex gap-3 mt-11 text-gray-900 max-md:mt-10">
                    <div className="text-2xl font-bold tracking-tighter leading-[65px]">
                      $<span className="text-6xl tracking-tighter">99</span>
                    </div>
                    <div className="self-end mt-8 text-lg tracking-normal leading-7">
                      / mo
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/home/divider.svg"
                    className="self-stretch mt-9 w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200"
                  />
                  <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900">
                    Unlimited Team Members
                  </div>
                  <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-7 border border-gray-200 border-solid aspect-[306] stroke-[1px] stroke-gray-200">
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200"
                    />
                  </div>
                  <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900">
                    Unlimited Cloud Storage
                  </div>
                  <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-6 border border-gray-200 border-solid aspect-[306] stroke-[1px] stroke-gray-200">
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200"
                    />
                  </div>
                  <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900">
                    Unlimited Meetings
                  </div>
                  <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-6 border border-gray-200 border-solid aspect-[306] stroke-[1px] stroke-gray-200">
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <img
                      loading="lazy"
                      src="/home/divider.svg"
                      className="w-full border border-gray-200 border-solid stroke-[1px] stroke-gray-200"
                    />
                  </div>
                  <div className="mt-7 text-xl tracking-normal leading-8 text-center text-gray-900">
                    Premium Support
                  </div>
                  <div className="justify-center items-center self-stretch px-16 py-6 mt-9 text-lg font-bold tracking-tight leading-8 text-center text-white bg-red-500 rounded-lg max-md:px-5">
                    Get Started Now
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="/app/hero-curve.svg"
            className="z-10 x mt-32 -mb-1 w-full aspecst-[16.67] fill-white "
          />
        </div>
        <div className="flex gap-5 justify-between items-start px-5 mt-24 max-w-full w-[949px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col">
            <div className="text-base tracking-normal leading-6 text-gray-900">
              Company
            </div>
            <div className="mt-10 text-lg tracking-normal leading-10 text-red-500">
              <span className="text-gray-900">About us</span>
              <br />
              <span className="text-red-500">Contact us</span>
              <br />
              <span className="text-gray-900">Careers</span>
              <br />
              <span className="text-gray-900">Press</span>
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
            <div className="text-base tracking-normal leading-6">Legal</div>
            <div className="mt-10 text-lg tracking-normal leading-10">
              Privacy Policy
              <br />
              Terms & Conditions
              <br />
              Return Policy
            </div>
          </div>
          <div className="flex flex-col items-center text-base tracking-normal leading-6 text-gray-900">
            <div className="self-stretch">Download Our App</div>
            <img
              loading="lazy"
              srcSet="/app/app-store.png"
              className="mt-9 aspect-[3.13] w-[189px]"
            />
            <img
              loading="lazy"
              srcSet="/app/plat-store.png"
              className="mt-3.5 aspect-[3.13] w-[189px]"
            />
          </div>
        </div>
        <img
          loading="lazy"
          src="/home/divider.svg"
          className="mt-24 w-full border border-gray-200 border-solid max-w-[1111px] stroke-[1px] stroke-gray-200 max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex gap-5 justify-between mt-9 w-full text-base tracking-normal leading-6 text-gray-900 max-w-[1110px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3 self-start px-5 max-md:flex-wrap">
            <div className="flex-auto">
              © 2024 Copyright, All Right Reserved, Made by Anas Ahmed Figma-to-code with
            </div>
            <img
              loading="lazy"
              src="/app/heart.svg"
              className="shrink-0 self-start w-3.5 aspect-[1.08] fill-red-500"
            />
          </div>
          <img
            loading="lazy"
            src="/app/social.svg"
            className="shrink-0 max-w-full aspect-[9.09] w-[166px]"
          />
        </div>
      </div>
    </>
  )
}

export default page
