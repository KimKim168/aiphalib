import { usePage } from '@inertiajs/react';
import ReadMoreButton from './read-more-button';
import ButtonViewMore from './button-view-more';

const OurBlog = () => {
    const { headingBlog, ourBlogs, locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';

    return (
        <div className="pt-5 lg:pt-10">
            <div className="bg-blue-100 py-2 sm:py-4 dark:bg-blue-900">
                <div className="container mx-auto px-4">
                    <h2 className={`text-primary mb-2 text-center text-base font-bold ${fontClass}`}>
                        {locale === 'kh' ? (headingBlog?.title_kh ?? headingBlog?.title) : headingBlog?.title}
                    </h2>
                    <p className={`text-center text-2xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200 ${fontClass}`}>
                        {locale === 'kh' ? (headingBlog?.short_description_kh ?? headingBlog?.short_description) : headingBlog?.short_description}
                    </p>
                </div>
            </div>

            {/* SVG Divider */}
            <div className="relative w-full overflow-hidden leading-none ">
                <svg
                    className="relative block h-[60px] w-[101%] md:h-[90px]"
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

            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {ourBlogs?.map((item) => (
                        <div key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-lg">
                            <div className="relative p-2">
                                <img
                                    src={`/assets/images/posts/${item?.images?.[0]?.image}`}
                                    alt="Blog Image"
                                    className="aspect-video w-full rounded-md object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="line-clamp-2 text-xl font-bold text-gray-900">{item?.title}</h2>
                                <p className="mt-3 line-clamp-3 text-gray-600">{item.short_description}</p>
                                <ReadMoreButton link="blogs" id={item?.id} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                {ourBlogs?.length >= 6 && (
                    <div className="mt-6 text-center">
                        <ButtonViewMore link="blogs" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurBlog;
