import { useState } from 'react'
import { Tab } from '@headlessui/react'
import SectionContainer from './sectionContainer'
import PricingSection from './pricingSection'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    let [categories] = useState({
        ERP: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        ECommerce: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Marketing: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    return (

        <div className="  px-2 py-16 sm:px-0">

            <Tab.Group >
                <Tab.List className="flex  md:px-48 rounded-xl bg-white/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                                    
                                    selected
                                        ? 'text-white bg-deep-purple-accent-400 shadow'
                                        : 'text-deep-purple-accent-400 hover:bg-white hover:text-deep-purple-accent-700'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <div >
                        <Tab.Panel className={classNames(
                            ' py-8',

                        )}>
                            <PricingSection />
                        </Tab.Panel >
                    </div>
                    <Tab.Panel className={classNames(
                        'py-8',

                    )}>
                        <PricingSection />
                    </Tab.Panel>
                    <Tab.Panel className={classNames(
                        ' py-8',

                    )}>
                        <PricingSection />
                    </Tab.Panel>
                    {/** {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-violet-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-violet-600 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))} */}
                </Tab.Panels>
            </Tab.Group>
        </div>

    )
}