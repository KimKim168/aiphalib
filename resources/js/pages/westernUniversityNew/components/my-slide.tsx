import { Card } from '@/components/ui/card';
import { usePage } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

export function MyNewSlide() {
    const { slides, heading } = usePage().props;
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
    // const { t } = useTranslation();
    // const images = slides;
    // console.log(images);
    // const images = [
    //     { id: '1', image: '/assets/demo-images/banner3.jpg', alt: 'Slide 1' },
    //     { id: '2', image: '/assets/demo-images/banner4.jpg', alt: 'Slide 2' },
    //     { id: '3', image: '/assets/demo-images/banner5.jpg', alt: 'Slide 3' },
    // ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="relative mx-auto w-full">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides?.map((item) =>
                        item.images?.map((img) => (
                            <div key={img.id} className="flex-[0_0_100%]">
                                <Card className="relative aspect-[21/7] w-full rounded-none py-0">
                                    <img
                                        src={`/assets/images/banners/thumb/${img.image}`}
                                        alt="Banner image"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-50"></div>
                                    <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-white sm:px-10 md:px-16 lg:px-20">
                                        <div className="font-proxima-nova-regular max-w-full rounded-sm p-5 px-1 text-center sm:max-w-screen-xl sm:text-left md:max-w-[50%]">
                                            <h3
                                                className={`font-noto-san-extra-light max-w-full text-xs font-bold sm:text-lg md:text-2xl lg:text-4xl ${fontClass}`}
                                            >
                                                {locale === 'kh' ? (heading?.title_kh ?? heading?.title) : heading?.title}
                                            </h3>
                                            <p className={`max-w-full text-[8px] sm:mt-3 sm:max-w-[80%] sm:text-sm ${fontClass}`}>
                                                {locale === 'kh' ? (heading?.short_description_kh ?? heading?.short_description) : heading?.short_description}
                                            </p>
                                            <div className="mt-1 flex flex-col items-center gap-2 sm:mt-5 sm:flex-row sm:items-start sm:gap-4">
                                                <a
                                                    className="bg-foreground-two min-w-[50px] rounded-full px-4 py-1 text-center text-[8px] text-white duration-500 hover:bg-[#ffffff] hover:text-[#017b7b] focus:ring focus:outline-none active:text-[#017b7b] sm:min-w-[120px] sm:px-6 sm:py-2 sm:text-base"
                                                    href="/support"
                                                >
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )),
                    )}
                </div>
            </div>

            {/* Dot Navigation */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-2 sm:bottom-5 sm:space-x-4">
                {slides
                    ?.flatMap((item) => item.images || [])
                    ?.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition sm:h-3 sm:w-3 ${index === selectedIndex ? 'bg-[#ffff]' : 'border border-[#ffff]'}`}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        />
                    ))}
            </div>
        </div>
    );
}
