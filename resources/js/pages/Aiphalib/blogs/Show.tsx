import MyNoData from '@/components/my-no-data';
import { Head, Link, usePage } from '@inertiajs/react';
import AiphalibLayout from '../layout/Layout';

const Show = () => {
    const { blog, relatedBlogs } = usePage().props;
    return (
        <AiphalibLayout>
            <Head title={'Blogs'} />

            <div className="mx-auto my-10 grid max-w-screen-2xl flex-col gap-6 px-4 sm:px-10 lg:grid-cols-3 xl:px-20">
                <div className="prose flex min-h-[200px] w-full max-w-none items-center justify-center lg:col-span-2">
                    {blog?.long_description ? <div dangerouslySetInnerHTML={{ __html: blog.long_description }} /> : <MyNoData />}
                </div>
                <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100 dark:bg-neutral-900 dark:ring-neutral-800">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Related</h3>
                        <div className="bg-foreground-two mt-2 mb-5 h-1 w-10 rounded-full"></div>

                        <div className="space-y-6">
                            {relatedBlogs?.map((post, index) => (
                                <Link
                                    href={`/blogs/${post.id}`}
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
