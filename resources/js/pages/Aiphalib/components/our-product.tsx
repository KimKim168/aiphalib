import ReadMoreButton from './read-more-button';

const OurProduct = () => {
    const image = [
        {
            title: 'Web Development',
            short: 'Tech Products That Makes Its Easier to Stay at Home',
            des: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
            src: '/assets/demo-images/newBanner.png',
            id: 1,
        },
        {
            title: 'It Services',
            short: 'Tech Products That Makes Its Easier to Stay at Home',
            des: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
            src: '/assets/demo-images/newBanner.png',
            id: 2,
        },
        {
            title: 'Artifical Intelligence',
            short: 'Tech Products That Makes Its Easier to Stay at Home',
            des: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
            src: '/assets/demo-images/newBanner.png',
            id: 3,
        },
        {
            id: 4,
            title: 'Cloud Solutions',
            short: 'Access your data from anywhere, anytime securely.',
            des: 'Cloud computing allows for flexible and scalable operations in a modern IT environment.',
            src: '/assets/demo-images/newBanner.png',
        },
        {
            id: 5,
            title: 'Cyber Security',
            short: 'Protecting digital assets from evolving threats.',
            des: 'We provide end-to-end cybersecurity strategies to keep your data and systems safe.',
            src: '/assets/demo-images/newBanner.png',
        },
        {
            id: 6,
            title: 'Mobile App Development',
            short: 'Empower users with intuitive mobile experiences.',
            des: 'Build native and cross-platform apps tailored to business needs and user goals.',
            src: '/assets/demo-images/newBanner.png',
        },
    ];
    return (
        <div className="pt-5 lg:pt-10">
            <div className="container mx-auto px-4">
                <h2 className="text-primary mb-2 text-center text-base font-bold">Our Products</h2>
                <p className="mb-10 text-center text-2xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200">
                    Preparing Your Business for the Future
                </p>
            </div>
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {image?.map((item) => (
                        <div key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-lg">
                            {/* Image Section */}

                            <div className="relative p-2">
                                <img src={item.src} alt="Blog Image" className="aspect-video w-full rounded-md object-cover" />
                            </div>
                            {/* Content Section */}
                            <div className="p-4">
                                <h2 className="line-clamp-2 text-2xl font-bold text-gray-900">{item.short}</h2>

                                {/* Description */}
                                <p className="mt-3 line-clamp-3 text-gray-600">{item.des}</p>

                                {/* Read More Link */}
                                <ReadMoreButton link={'products'} id={'1'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProduct;
