import AiphalibLayout from '../layout/Layout';

const Show = () => {
    const dummyContent = [
        {
            title: 'Delivery Management System',
            description: (
                <>
                    <p>
                        is a software tool that streamlines the delivery process by managing orders, optimizing routes, and providing real-time
                        tracking.
                    </p>
                    <p>
                        Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam in commodo id reprehenderit adipisicing. Proident duis
                        exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                    </p>
                    <p>
                        Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod reprehenderit deserunt amet laborum consequat adipisicing
                        officia qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud. Amet culpa officia aliquip deserunt veniam
                        deserunt officia adipisicing aliquip proident officia sunt.
                    </p>
                </>
            ),
            badge: 'React',
            image: '/assets/demo-images/newBanner.png',
        },
        {
            title: 'Lorem Ipsum Dolor Sit Amet',
            description: (
                <>
                    <p>
                        Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
                        exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum
                        culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id
                        ad deserunt dolor aliquip duis veniam sunt.
                    </p>
                    <p>
                        In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui
                        proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut mollit.
                    </p>
                </>
            ),
            badge: 'Changelog',
            image: '/assets/demo-images/newBanner.png',
        },
        {
            title: 'Lorem Ipsum Dolor Sit Amet',
            description: (
                <>
                    <p>
                        Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt
                        exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum
                        culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id
                        ad deserunt dolor aliquip duis veniam sunt.
                    </p>
                </>
            ),
            badge: 'Launch Week',
            image: '/assets/demo-images/newBanner.png',
        },
    ];
    return (
        <AiphalibLayout>
            <div className="mx-auto my-10 grid max-w-screen-2xl flex-col gap-6 px-4 sm:px-10 lg:grid-cols-3 xl:px-20">
                <div className="w-full max-w-none lg:col-span-2">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 max-w-none">
                            <p className={'mb-4 text-xl'}>{item.title}</p>

                            <div className="prose prose-sm dark:prose-invert max-w-none text-sm">
                                {item?.image && <img src={item.image} alt="blog thumbnail" className="mb-10 rounded-lg object-cover" />}
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100 dark:bg-neutral-900 dark:ring-neutral-800">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Related</h3>
                        <div className="mt-2 mb-5 h-1 w-10 rounded-full bg-foreground-two"></div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Pen Source Job Report Show More Openings Fewer',
                                    short_description: 'Jun 02, 2025,culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore.',
                                },
                                {
                                    title: 'Tech Products That Make It Easier to Stay at Home',
                                    short_description: 'culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id',
                                },
                                {
                                    title: 'Necessity May Give Us Your Best Virtual Court System',
                                    short_description: 'Jun 14, 2025,culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id',
                                },
                                {
                                    title: 'Servo Project Joins The Linux Foundation Fold Desco',
                                    short_description: 'Jun 01, 2025.culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id',
                                },
                            ].map((post, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-4 rounded-xl p-3 transition-all hover:bg-blue-50 dark:hover:bg-neutral-800 cursor-pointer"
                                >
                                    <img
                                        src="/assets/demo-images/newBanner.png"
                                        alt="Thumbnail"
                                        className="h-20 w-24 rounded-xl object-cover shadow-md"
                                    />
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary-two dark:text-white dark:group-hover:text-teal-500">
                                            {post.title}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">{post.short_description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AiphalibLayout>
    );
};

export default Show;
