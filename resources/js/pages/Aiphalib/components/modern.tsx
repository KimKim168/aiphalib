import { usePage } from '@inertiajs/react';
import React from 'react';

const relatedItems = [
  {
    id: 1,
    title: 'Web Development',
    src: '/assets/demo-images/newBanner.png',
  },
  {
    id: 2,
    title: 'IT Services',
    src: '/assets/demo-images/newBanner.png',
  },
  {
    id: 3,
    title: 'Artificial Intelligence',
    src: '/assets/demo-images/newBanner.png',
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    src: '/assets/demo-images/newBanner.png',
  },
  {
    id: 5,
    title: 'Cyber Security',
    src: '/assets/demo-images/newBanner.png',
  },
  {
    id: 6,
    title: 'Mobile App Development',
    src: '/assets/demo-images/newBanner.png',
  },
];

const Modern = () => {
  const { support } = usePage().props;
  return (
    <section className="grid grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-2 lg:px-20">
      {/* Left: Large Image */}
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg">
        <img
          src={`/assets/images/item_categories/${support?.image}`}
          alt="Main"
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Right: Related Items */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {relatedItems.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-4 rounded-xl p-4 transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <img
              src={item.src}
              alt={item.title}
              className="h-16 w-16 flex-shrink-0 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-base text-gray-800 group-hover:text-primary dark:text-white">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modern;
