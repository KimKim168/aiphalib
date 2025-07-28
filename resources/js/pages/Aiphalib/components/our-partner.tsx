import { usePage } from '@inertiajs/react';
import React from 'react';

const OurPartner: React.FC = () => {
    const { headingClient, ourClients } = usePage().props;
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
    // const items = [
    //     {
    //         id: 1,
    //         code: 'apple',
    //         name: 'Apple',
    //         name_kh: 'អាប់ភល',
    //         image: 'Apple.png',
    //     },
    //     {
    //         id: 2,
    //         code: 'samsung',
    //         name: 'Samsung',
    //         name_kh: 'សាមសុង',
    //         image: 'Samsung.png',
    //     },
    //     {
    //         id: 3,
    //         code: 'xiaomi',
    //         name: 'Xiaomi',
    //         name_kh: 'ស្យៅម៉ី',
    //         image: 'xiaomi.png',
    //     },
    //     {
    //         id: 4,
    //         code: 'oppo',
    //         name: 'Oppo',
    //         name_kh: 'អូប៉ូ',
    //         image: 'Oppo.webp',
    //     },
    //     {
    //         id: 5,
    //         code: 'vivo',
    //         name: 'Vivo',
    //         name_kh: 'វីវ៉ូ',
    //         image: 'vivo.png',
    //     },
    //     {
    //         id: 6,
    //         code: 'realme',
    //         name: 'Realme',
    //         name_kh: 'រីអាល់មី',
    //         image: 'realme.png',
    //     },
    //     {
    //         id: 7,
    //         code: 'apple',
    //         name: 'Apple',
    //         name_kh: 'អាប់ភល',
    //         image: 'apple.png',
    //     },
    //     {
    //         id: 8,
    //         code: 'samsung',
    //         name: 'Samsung',
    //         name_kh: 'សាមសុង',
    //         image: 'samsung.png',
    //     },
    //     {
    //         id: 9,
    //         code: 'xiaomi',
    //         name: 'Xiaomi',
    //         name_kh: 'ស្យៅម៉ី',
    //         image: 'xiaomi.png',
    //     },
    //     {
    //         id: 10,
    //         code: 'oppo',
    //         name: 'Oppo',
    //         name_kh: 'អូប៉ូ',
    //         image: 'Oppo.webp',
    //     },
    //     {
    //         id: 11,
    //         code: 'vivo',
    //         name: 'Vivo',
    //         name_kh: 'វីវ៉ូ',
    //         image: 'vivo.png',
    //     },
    //     {
    //         id: 12,
    //         code: 'realme',
    //         name: 'Realme',
    //         name_kh: 'រីអាល់មី',
    //         image: 'realme.png',
    //     },
    // ];
    return (
        <>
            <div className="mt-5 lg:my-14">
                <div className="bg-[rgba(11,127,127,0.2)] py-2 sm:py-4 dark:bg-[rgba(11,127,127,0.3)]">
                    <div className="container mx-auto px-4">
                        <h2 className={`text-primary mb-2 text-center text-base font-bold ${fontClass}`}>
                            {locale === 'kh' ? (headingClient?.title_kh ?? headingClient?.title) : headingClient?.title}
                        </h2>
                        <p className={`text-center text-xl font-bold text-gray-700 sm:text-2xl dark:text-gray-200 ${fontClass}`}>
                            {locale === 'kh'
                                ? (headingClient?.short_description_kh ?? headingClient?.short_description)
                                : headingClient?.short_description}
                        </p>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden leading-none">
                    <svg
                        className="relative block h-[60px] w-[101%] md:h-[90px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-[rgba(11,127,127,0.2)] dark:fill-[rgba(11,127,127,0.3)]"
                        />
                    </svg>
                </div>

                <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20">
                    <div className="mx-auto">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-6">
                            {ourClients?.map((item, i) => (
                                <a target="_blank" href={item?.link} key={item.id} className="basis-1/2 md:basis-1/3 xl:basis-1/6">
                                    <div className="border-primary bg-background flex flex-col items-center justify-center gap-2 rounded border border-dashed p-2 transition-all duration-300 hover:-translate-2 hover:border-solid hover:shadow-[5px_5px_rgba(104,_96,_255,_0.4),_10px_10px_rgba(104,_96,_255,_0.3),_15px_15px_rgba(104,_96,_255,_0.2)]">
                                        <img
                                            src={`/assets/images/items/thumb/${item?.images?.[0]?.image}`}
                                            alt={`Partner ${i + 1}`}
                                            className="h-12 object-contain"
                                        />
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
        </>
    );
};

export default OurPartner;
