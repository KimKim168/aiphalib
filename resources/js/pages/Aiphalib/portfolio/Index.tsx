import React from 'react'
import AiphalibLayout from '../layout/Layout'
import BreadcrumbContent from '../components/breadcrumb-content'
import { Head } from '@inertiajs/react'
import { Link, usePage } from '@inertiajs/react';

const Index = () => {
    const { headingClient, ourClients } = usePage().props;
        const { locale } = usePage().props;
        const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
  return (
   <AiphalibLayout>
        <Head title={('Portfolio')} />
        <BreadcrumbContent title='Portfolio'/>
        <div className="pt-5 lg:pt-10">
                <div className="flex flex-col items-center mx-auto px-4">
                <h2 className={`text-primary mb-2 text-center text-base font-bold ${fontClass}`}>
                    {locale === 'kh' ? (headingClient?.title_kh ?? headingClient?.title) : headingClient?.title}
                </h2>
                <p className={`mb-10 text-center text-lg font-bold text-gray-700 sm:text-xl dark:text-gray-200 max-w-3xl ${fontClass}`}>
                    {locale === 'kh'
                        ? (headingClient?.short_description_kh ?? headingClient?.short_description)
                        : headingClient?.short_description}
                </p>
            </div>
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20">
                    <div className='mx-auto '>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-6">
                        {ourClients?.map((item, i) => (
                            <a target='_blank' href={item?.link} key={item.id} className="basis-1/2 md:basis-1/3 xl:basis-1/6">
                                <div
                                    className="border-primary bg-background flex flex-col items-center justify-center gap-2 rounded border p-2 transition-all duration-300 hover:-translate-2 hover:border-solid hover:shadow-[5px_5px_rgba(11,_127,_127,_0.4),_10px_10px_rgba(11,_127,_127,_0.3),_15px_15px_rgba(11,_127,_127,_0.2)]
"
                                >
                                    <img src={`/assets/images/items/thumb/${item?.images?.[0]?.image}`} alt={`Partner ${i + 1}`} className="h-12 object-contain" />
                                    <p className="text-lg font-semibold text-gray-600 dark:text-white">
                                        {locale === 'kh' ? item?.name_kh : item?.name}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                    </div>
                    {/* <CarouselPrevious className="absolute top-1/2 -left-2 z-10 -translate-y-1/2 transform " /> */}
                    {/* <CarouselNext className="absolute top-1/2 -right-2 z-10 -translate-y-1/2 transform" /> */}
                </div>
            </div>
   </AiphalibLayout>
  )
}

export default Index
