import { useState } from "react";

function App() {
  return (
    <>
      <h2>Задание 2.1</h2>
      <div className="
      bg-gray-200 
      lg:max-w-360
      lg:mx-auto 
      lg:w-4/5 
      block 
      w-full 
      ">
        <header className="w-full">
          <div className="bg-[url(./Banner.jpg)] h-32"></div>
          <nav className="
          flex
          flex-col 
          -mt-15 
          pb-5 
          mb-11.5
          sm:flex-row 
          sm:items-end 
          items-center 
          sm:justify-center 
          sm:gap-10
          lg:gap-56
          xl:gap-96 
          ">
            <div className="
            flex 
            flex-col 
            mb-3 
            items-center 
            sm:flex-row 
            sm:items-end
            lg:items-end 
            ">
              <img className="w-32 h-32 rounded-full" src="./profile.jpg" alt="" />
              <h3 className="text-2xl font-bold">Ricardo Cooper</h3>
            </div>
            <div className="flex gap-4 justify-center">
              <button className="bg-stone-50 h-9.5 rounded-md flex items-center gap-2 pl-3.5 pr-4.5 py-2.5">
                <img src="./Mail.svg" alt="" />
                Message
              </button>
              <button className="bg-stone-50 h-9.5 rounded-md flex items-center gap-2 pl-3.5 pr-4.5 py-2.5">
                <img src="./Phone.svg" alt="" />
                Call
              </button>
            </div>
          </nav>
        </header>

        <div className="
        grid 
        justify-center
        sm:grid-cols-2
        sm:gap-y-1.5
        sm:gap-x-1.5
        sm:justify-items-center
        lg:grid-cols-3 
        lg:gap-y-8 
        lg:gap-x-8 
        lg:items-center">
          <div>
            <img className="rounded-lg mb-2" src="./card-1.jpg" alt="" />
            <p>id: 1</p>
          </div>
          <div>
            <img className="rounded-lg mb-2" src="./card-2.jpg" alt="" />
            <p>id: 2</p>
          </div>
          <div>
            <img className="rounded-lg mb-2" src="./card-3.jpg" alt="" />
            <p>id: 3</p>
          </div>
          <div>
            <img className="rounded-lg mb-2" src="./card-2.jpg" alt="" />
            <p>id: 4</p>
          </div>
          <div>
            <img className="rounded-lg mb-2" src="./card-3.jpg" alt="" />
            <p>id: 5</p>
          </div>
          <div>
            <img className="rounded-lg mb-2" src="./card-1.jpg" alt="" />
            <p>id: 6</p>
          </div>
        </div>
      </div>
      <h2>Задание 2.1</h2>
      <div className="
      bg-gray-200 
      lg:max-w-360
      lg:mx-auto 
      lg:w-4/5 
      block 
      w-full">
        <header className="
        shadow-md 
        xl:h-20 
        flex 
        items-center
        xl:flex-row
        flex-col
        py-5
        ">
          <nav className="
          flex 
          flex-col
          gap-5.5 
          w-4/5 
          mx-auto
          items-center
          sm:flex-row
          sm:justify-between
          md:justify-start
          
          ">
            <a className="no-underline flex gap-6 w-38 items-center" href="#">
              <img src="./logo.svg" alt="" />
              <p className="uppercase text-xs">Resource Center</p>
            </a>
            <ul className="
            flex 
            gap-5.5
            flex-wrap
            xl:flex-row
            
            ">
              <li>
                <a className="no-underline uppercase text-xs" href="">
                  Blog
                </a>
              </li>
              <li>
                <a className="no-underline uppercase text-xs" href="">
                  Featured
                </a>
              </li>
              <li>
                <a className="no-underline uppercase text-xs" href="">
                  About
                </a>
              </li>
              <li>
                <a className="no-underline uppercase text-xs" href="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="
        bg-[url(./background.jpg)] 
        bg-cover
        ">
          <div className="
          w-70
          pt-20
          pl-5
          pb-17 
          mx-auto
          sm:mx-0
          sm:w-100
          md:w-150
          md:pt-36
          md:pl-30  
          lg:w-150 
          box-border
          ">
            <h1 className="
            text-3xl
            xl:text-5xl 
            mb-2
            ">
              The <span className="text-green-600">most complete</span>
              <br />
              Photography resource.
            </h1>
            <p className="text-lg mb-25">Welcome at Template Resource. This template is packed with useful features to built out your own resource website.</p>
            <div className="flex flex-wrap gap-3.5 justify-center sm:flex-nowrap">
              <a className="bg-[#F55F39] text-center text-stone-50 block px-3.5 pt-2.5 pb-1.5 w-fit text-2xl" href="#">
                Visit our Blog
                <br />
                <span className="text-sm">Stories, News & info</span>
              </a>
              <a className="bg-stone-50 text-center text-stone-950 block px-3.5 pt-2.5 pb-1.5 w-fit text-2xl" href="">
                Resource Center
                <br />
                <span className="text-sm">Tips, Tricks & Tutorials</span>
              </a>
            </div>
          </div>
        </div>
        <footer className="
        flex 
        flex-wrap 
        justify-center
        gap-13.75 
        w-4/5 
        mx-auto 
        py-13 
        relative
        sm:justify-between
        md:justify-start
        ">
          <h2 className="w-32 text-3xl text-green-600 text-7">How can we help you?</h2>
          <ul>
            <li>
              <a className="no-underline text-sm text-blue-950" href="">
                Visit our Blog
              </a>
            </li>
            <li>
              <a className="no-underline text-sm text-blue-950" href="">
                Photographers Resources Library
              </a>
            </li>
            <li>
              <a className="no-underline text-sm text-blue-950" href="">
                Featured Stories
              </a>
            </li>
            <li>
              <a className="no-underline text-sm text-blue-950" href="">
                Get Full Access Today!
              </a>
            </li>
          </ul>
          <div className="
          hidden 
          lg:block 
          absolute 
          bg-[url(./background.svg)] 
          bg-cover
          w-100
          xl:w-150 h-75 bottom-0 right-[-12.5%] text-stone-50 ">
            <div className="mt-20 pl-20">
              <h3 className="text-2xl mb-6.5">Meet our Writers</h3>
              <p className="w-76 text-sm mb-4.5">We've got a professional team of professional photographers providing you with resources.</p>
              <div className="relative w-50">
                <img className="absolute w-20 h-20 rounded-2xl z-1" src="./ava-1.jpg" alt="" />
                <img className="absolute w-20 h-20 rounded-2xl right-15 z-2 top-5" src="./ava-2.jpg" alt="" />
                <img className="absolute w-20 h-20 rounded-2xl right-0 z-1" src="./ava-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <h2>Задание 2.3</h2>
      <div className="bg-[#262627] max-w-360 mx-auto w-4/5 block overflow-hidden">
        <div className="flex mx-auto w-4/5 justify-between py-40.5">
          <p className="text-lg text-stone-50 w-114">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
            diam libero vitae erat.
          </p>
          <ul className="text-stone-50 flex gap-14.5">
            <li>
              <p className="text-base text-center">
                <span className="text-6xl font-bold -mb-2 block">17K</span>
                <br />
                Artwork
              </p>
            </li>
            <li>
              <p className="text-base text-center">
                <span className="text-6xl font-bold -mb-2 block">4.5K</span>
                <br />
                Auctions
              </p>
            </li>
            <li>
              <p className="text-base text-center">
                <span className="text-6xl font-bold -mb-2 block">23</span>
                <br />
                Artists
              </p>
            </li>
          </ul>
        </div>
        <div className="w-[125%] ml-[-5%] pb-21">
          <div className="flex flex-wrap  gap-y-16 gap-x-10 ">
            <img className="w-95 h-90 column" src="./image-5.jpg" alt="" />
            <img className="w-95 h-90" src="./image-6.jpg" alt="" />
            <img className="w-95 h-90" src="./image-4.jpg" alt="" />
            <img className="w-95 h-90 ml-30" src="./image-1.jpg" alt="" />
            <img className="w-95 h-90" src="./image-2.jpg" alt="" />
            <img className="w-95 h-90" src="./image-3.jpg" alt="" />
          </div>
        </div>
        <div className="bg-stone-950 pt-24 pb-30 text-stone-50">
          <h2 className="text-5xl font-bold text-center mb-12.5">Create and sell NFTs</h2>
          <div className="flex gap-5 justify-center">
            <div className="bg-[#262627] border-[#858586] border w-85 min-h-50 pt-9 pl-4 pb-14 box-border relative">
              <hr className="absolute w-[30%] h-1 border-[#858586] top-[14%] right-[-4%] rotate-45"/>
              <div className="bg-gray-300 w-12.5 h-12.5 rounded-full mb-3.5"></div>
              <h3 className="text-2xl font-bold mb-2">Connect your wallet</h3>
              <p className="text-base w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="bg-[#262627] border-[#858586] border w-85 min-h-50 pt-9 pl-4 pb-14 box-border relative">
              <hr className="absolute w-[30%] h-1 border-[#858586] top-[14%] right-[-4%] rotate-45"/>
              <div className="bg-gray-300 w-12.5 h-12.5 rounded-full mb-3.5"></div>
              <h3 className="text-2xl font-bold mb-2">Explore our marketplace</h3>
              <p className="text-base w-4/5">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="bg-[#262627] border-[#858586] border w-85 min-h-50 pt-9 pl-4 pb-14 box-border relative">
              <hr className="absolute w-[30%] h-1 border-[#858586] top-[14%] right-[-4%] rotate-45"/>
              <div className="bg-gray-300 w-12.5 h-12.5 rounded-full mb-3.5"></div>
              <h3 className="text-2xl font-bold mb-2">Create your collection</h3>
              <p className="text-base w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto my-40">
          <div className="grid grid-cols-3 gap-4">
            <div className="">
              <div className="bg-[url(./profile-2.jpg)] bg-cover h-50 mx-auto"></div>
              <div className="mt-[-15%] text-stone-50 flex flex-col items-center">
                <img className="w-25 h-25 mb-4.5" src="./profile-avatar-3.jpg" alt="" />
                <h3 className="text-3xl font-bold mb-8">Jason Santigo</h3>
                <button className="text-lg font-bold bg-[#D400B3] pl-8 pr-8 pb-3.5 pt-1.5 ">Follow</button>
              </div>
            </div>
            <div className="">
              <div className="bg-[url(./profile-3.jpg)] bg-cover h-50 mx-auto relative z-1"></div>
              <div className="mt-[-15%] text-stone-50 flex flex-col items-center">
                <img className="w-25 h-25 mb-4.5 relative z-0" src="./profile-avatar-1.jpg" alt="" />
                <h3 className="text-3xl font-bold mb-8">Jason Santigo</h3>
                <button className="text-lg font-bold bg-[#D400B3] pl-8 pr-8 pb-3.5 pt-1.5 ">Follow</button>
              </div>
            </div>
            <div className="">
              <div className="bg-[url(./profile-1.jpg)] bg-cover h-50 mx-auto"></div>
              <div className="mt-[-15%] text-stone-50 flex flex-col items-center">
                <img className="w-25 h-25 mb-4.5" src="./profile-avatar-2.jpg" alt="" />
                <h3 className="text-3xl font-bold mb-8">Jason Santigo</h3>
                <button className="text-lg font-bold bg-[#D400B3] pl-8 pr-8 pb-3.5 pt-1.5 ">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
