import { Card } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

export function MyNewSlide() {
    const images = [
        { id: '1', image: '/assets/demo-images/banner3.jpg', alt: 'Slide 1' },
        { id: '2', image: '/assets/demo-images/banner4.jpg', alt: 'Slide 2' },
        { id: '3', image: '/assets/demo-images/banner5.jpg', alt: 'Slide 3' },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

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
                    {images?.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%]">
                            <Card className="relative aspect-[21/7] w-full rounded-none py-0">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-white px-4 sm:px-10 md:px-16 lg:px-20">
                                    <div className="font-proxima-nova-regular max-w-full sm:max-w-screen-xl md:max-w-[50%] p-5 rounded-sm px-1 text-center sm:text-left">
                                        <h3 className="max-w-full font-noto-san-extra-light text-xs sm:text-lg md:text-2xl lg:text-4xl font-bold">
                                            Inspiration, Innovation and Discovery.
                                        </h3>
                                        <p className=" sm:mt-3 max-w-full sm:max-w-[80%] text-[8px] sm:text-sm">
                                            Any successful career starts with good education. Together with us you will have deeper knowledge of the subjects that will be especially useful for you when climbing the career ladder.
                                        </p>
                                        <div className="mt-1 sm:mt-5 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start">
                                            <a
                                                className="min-w-[50px] sm:min-w-[120px] rounded-full duration-500  bg-foreground-two px-4 py-1 sm:px-6 sm:py-2 text-center text-white hover:bg-[#ffffff] hover:text-[#017b7b] focus:ring focus:outline-none active:text-[#017b7b] text-[8px] sm:text-base"
                                                href="/contact"
                                            >
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot Navigation */}
            <div className="absolute bottom-2 sm:bottom-5 left-1/2  transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
                {images?.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition ${index === selectedIndex ? 'bg-[#ffff]' : 'border border-[#ffff]'}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
