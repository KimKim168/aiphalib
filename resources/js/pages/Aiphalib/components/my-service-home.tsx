import { usePage } from '@inertiajs/react';
import ButtonViewMore from './button-view-more';
import ReadMoreButton from './read-more-button';

const MyService = () => {
    const { headingServices, allDataServices } = usePage().props;
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
  
    return (
        <div className="mt-5 lg:mt-14">
            <div className="bg-blue-100 py-2 sm:py-10 dark:bg-blue-900">
                <div className="container mx-auto px-4">
                    <h2 className={`text-primary mb-2 text-center text-base font-bold ${fontClass}`}>
                        {locale === 'kh' ? (headingServices?.title_kh ?? headingServices?.title) : headingServices?.title}
                    </h2>
                    <p className={`text-center text-2xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200 ${fontClass}`}>
                        {locale === 'kh'
                            ? (headingServices?.short_description_kh ?? headingServices?.short_description)
                            : headingServices?.short_description}
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden leading-none ">
                <svg
                    className="relative block h-[60px] w-[101%] md:h-[150px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-blue-100 dark:fill-blue-900"
                    ></path>
                </svg>
            </div>

            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20 ">
                <div className="mx-auto">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {allDataServices.map((item, index) => (
                            <div key={index} className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:shadow-lg">
                                <div className="mb-4">
                                    <img
                                        src={`/assets/images/items/thumb/${item?.images?.[0]?.image}`}
                                        alt={item?.name}
                                        className="h-12 w-12 object-cover"
                                    />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-800">{item?.name}</h3>
                                <p className="mb-4 line-clamp-2 text-sm text-gray-600">{item?.short_description}</p>
                                <ReadMoreButton link="services" id={item?.id} />
                            </div>
                        ))}
                    </div>
                    {/* View More Button */}
                    {allDataServices?.length >= 6 && (
                        <div className="py-6 text-center">
                            <ButtonViewMore link="services" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyService;
