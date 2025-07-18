import ReadMoreButton from './read-more-button';

const MyService = () => {
    const services = [
        {
            title: 'Business Planning',
            icon: '/assets/demo-images/bussiness.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            title: 'Global Business',
            icon: '/assets/demo-images/global.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            title: 'Planning and Analysis',
            icon: '/assets/demo-images/analysis.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            title: 'Risk Management',
            icon: '/assets/demo-images/risk.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            title: 'Human Resources',
            icon: '/assets/demo-images/human.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            title: 'Brand Strategy',
            icon: '/assets/demo-images/strategy.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
    ];

    return (
        <div className="mt-5 lg:mt-14">
            <div className="bg-blue-100 py-2 sm:py-10 dark:bg-blue-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-primary mb-2 text-center text-base font-bold">Services We Provide</h2>
                    <p className="text-center text-2xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200">
                        Preparing Your Business for the Future
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden leading-none dark:bg-gray-800">
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

            <div className="mx-auto max-w-screen-2xl bg-white px-4 sm:px-10 md:px-20 dark:bg-gray-800">
                <div className="mx-auto">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div key={index} className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:shadow-lg">
                                <div className="mb-4">
                                    <img src={service.icon} alt={service.title} className="h-12 w-12 object-cover" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-800">{service.title}</h3>
                                <p className="mb-4 text-sm text-gray-600">{service.description}</p>
                                <ReadMoreButton link='services' id='1' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;
