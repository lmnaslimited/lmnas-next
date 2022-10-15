import React from "react";
import PricingSection from "./pricingSection";

export default function TabSection() {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
        <div className="flex flex-wrap">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          
            <ul
              className="flex mb-0 list-none justfy-center flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                 
                  className={
                  
                        'w-full px-10 justify-end rounded-lg py-2.5 text-sm font-medium leading-5 text-white ' +
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-deep-purple-accent-400 focus:outline-none focus:ring-2 ' +
                     
                    (openTab === 1
                        ? ' text-white bg-violet-600 shadow'
                        : ' text-violet-600 hover:bg-white hover:text-deep-purple-accent-700')
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  ERP
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'w-full px-10 justify-end rounded-lg py-2.5 text-sm font-medium leading-5 text-white ' +
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-deep-purple-accent-400 focus:outline-none focus:ring-2 ' +
                     
                    (openTab === 2
                        ? ' text-white bg-violet-600 shadow'
                        : ' text-violet-600 hover:bg-white hover:text-deep-purple-accent-700')
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  E-Commerce
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'w-full px-10 justify-end rounded-lg py-2.5 text-sm font-medium leading-5 text-white ' +
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-deep-purple-accent-400 focus:outline-none focus:ring-2 ' +
                     
                    (openTab === 3
                        ? ' text-white bg-violet-600 shadow'
                        : ' text-violet-600 hover:bg-white hover:text-deep-purple-accent-700')
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                   <PricingSection/>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <PricingSection />
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <PricingSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}