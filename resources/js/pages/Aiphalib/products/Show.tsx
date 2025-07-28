import MyNoData from '@/components/my-no-data';
import { Head, Link, usePage } from '@inertiajs/react';
import AiphalibLayout from '../layout/Layout';

const Show = () => {
    const { product, relatedProducts } = usePage().props;
    // const dummyContent = [
    //     {
    //         title: 'Delivery Management System',
    //         description: (
    //             <>
    //                 <p>
    //                     is a software tool that streamlines the delivery process by managing orders, optimizing routes, and providing real-time
    //                     tracking.
    //                 </p>
    //                 <p>
    //                     Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam in commodo id reprehenderit adipisicing. Proident duis
    //                     exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
    //                 </p>
    //                 <p>
    //                     Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod reprehenderit deserunt amet laborum consequat adipisicing
    //                     officia qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud. Amet culpa officia aliquip deserunt veniam
    //                     deserunt officia adipisicing aliquip proident officia sunt.
    //                 </p>
    //             </>
    //         ),
    //         badge: 'React',
    //         image: '/assets/demo-images/newBanner.png',
    //     },
    //     {
    //         title: 'Lorem Ipsum Dolor Sit Amet',
    //         description: (
    //             <>
    //                 <p>
    //                     Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
    //                     exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum
    //                     culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id
    //                     ad deserunt dolor aliquip duis veniam sunt.
    //                 </p>
    //                 <p>
    //                     In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui
    //                     proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut mollit.
    //                 </p>
    //             </>
    //         ),
    //         badge: 'Changelog',
    //         image: '/assets/demo-images/newBanner.png',
    //     },
    //     {
    //         title: 'Lorem Ipsum Dolor Sit Amet',
    //         description: (
    //             <>
    //                 <p>
    //                     Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
    //                     exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum
    //                     culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id
    //                     ad deserunt dolor aliquip duis veniam sunt.
    //                 </p>
    //             </>
    //         ),
    //         badge: 'Launch Week',
    //         image: '/assets/demo-images/newBanner.png',
    //     },
    // ];
    return (
        <AiphalibLayout>
            <Head title={'Products'} />
            <div className="mx-auto my-5 xl:my-10 grid max-w-screen-2xl flex-col gap-6 px-4 sm:px-10 lg:grid-cols-3 xl:px-20">
                <div className="prose dark:prose-invert flex min-h-[200px] w-full max-w-none items-center justify-center lg:col-span-2">
                    {product?.long_description ? <div dangerouslySetInnerHTML={{ __html: product.long_description }} /> : <MyNoData />}
                </div>

                <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100 dark:bg-neutral-900 dark:ring-neutral-800">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Related</h3>
                        <div className="bg-foreground-two mt-2 mb-5 h-1 w-10 rounded-full"></div>

                        <div className="space-y-6">
                            {relatedProducts?.map((post, index) => (
                                <Link
                                    href={`/products/${post.id}`}
                                    key={index}
                                    className="group flex cursor-pointer items-start gap-4 rounded-xl p-3 transition-all hover:bg-blue-50 dark:hover:bg-neutral-800"
                                >
                                    <img
                                        src={`/assets/images/items/thumb/${post.images?.[0]?.image}`}
                                        alt="Thumbnail"
                                        className="h-20 w-24 rounded-xl object-cover shadow-md"
                                    />
                                    <div className="flex-1 space-y-1">
                                        <p className="group-hover:text-primary-two text-sm font-semibold text-gray-900 dark:text-white dark:group-hover:text-teal-500">
                                            {post?.name}
                                        </p>
                                        <p className="line-clamp-3 text-xs text-gray-500 dark:text-gray-400">{post?.short_description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AiphalibLayout>
    );
};

export default Show;
