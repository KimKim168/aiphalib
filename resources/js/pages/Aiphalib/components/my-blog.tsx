import { usePage } from '@inertiajs/react';
import ReadMoreButton from './read-more-button';

const MyBlog = () => {
    const { headingBlog, allDataBlogs } = usePage().props;
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';

    return (
        <div className="mt-5 lg:mt-14">
            <div className="container mx-auto px-4">
                <h2 className={`text-primary mb-2 text-center text-base font-bold ${fontClass}`}>
                    {locale === 'kh' ? (headingBlog?.title_kh ?? headingBlog?.title) : headingBlog?.title}
                </h2>
                <p className={`mb-10 text-center text-lg font-bold text-gray-700 sm:text-xl dark:text-gray-200 max-w-3xl ${fontClass}`}>
                    {locale === 'kh' ? (headingBlog?.short_description_kh ?? headingBlog?.short_description) : headingBlog?.short_description}
                </p>
            </div>
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {allDataBlogs?.map((item) => (
                        <div key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-lg">
                            {/* Image Section */}

                            <div className="relative p-2">
                                <img
                                    src={`/assets/images/posts/thumb/${item?.images?.[0]?.image}`}
                                    alt="Blog Image"
                                    className="aspect-video w-full rounded-md object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="p-4">
                                <h2 className="line-clamp-2 text-xl font-bold text-gray-900">{item?.title}</h2>

                                {/* Description */}
                                <p className="mt-3 line-clamp-3 text-gray-600">{item.short_description}</p>

                                {/* Read More Link */}
                                <ReadMoreButton link={'blogs'} id={item?.id} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBlog;
