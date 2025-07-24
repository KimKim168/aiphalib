import { usePage } from '@inertiajs/react';
import ReadMoreButton from './read-more-button';

const MyService = () => {
    const { headingServices, allDataServices } = usePage().props;
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
    // const services = [
    //     {
    //         title: 'Business Planning',
    //         icon: '/assets/demo-images/bussiness.png',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    //     },
    //     {
    //         title: 'Global Business',
    //         icon: '/assets/demo-images/global.png',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    //     },
    //     {
    //         title: 'Planning and Analysis',
    //         icon: '/assets/demo-images/analysis.png',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    //     },
    //     {
    //         title: 'Risk Management',
    //         icon: '/assets/demo-images/risk.png',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    //     },
    //     {
    //         title: 'Human Resources',
    //         icon: '/assets/demo-images/human.png',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    //     },
    //     {
    //         title: 'Brand Strategy',
    //         icon: '/assets/demo-images/strategy.png',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    //     },
    // ];

    return (
        <div className="mt-5 lg:mt-14">
            <div className="container mx-auto px-4">
                <h2 className={`text-primary mb-2 text-center text-base font-bold ${fontClass}`}>
                    {locale === 'kh' ? (headingServices?.title_kh ?? headingServices?.title) : headingServices?.title}
                </h2>
                <p className={`mb-10 text-center text-xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200 ${fontClass}`}>
                    {locale === 'kh'
                        ? (headingServices?.short_description_kh ?? headingServices?.short_description)
                        : headingServices?.short_description}
                </p>
            </div>

            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20 ">
                <div className="mx-auto">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {allDataServices.map((item, index) => (
                            <div key={index} className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:shadow-lg">
                                <div className="mb-4">
                                    <img src={`/assets/images/items/thumb/${item?.images?.[0]?.image}`} alt={item?.name} className="w-20 h-auto object-contain" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-800">{item?.name}</h3>
                                <p className="mb-4 text-sm text-gray-600 line-clamp-2">{item?.short_description}</p>
                                <ReadMoreButton link="services" id={item?.id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;
