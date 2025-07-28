import { usePage } from '@inertiajs/react';
import React from 'react';

const Modern = () => {
  const { support, dataSupport } = usePage().props;
  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-10 xl:px-20 grid grid-cols-1 gap-8 py-10 lg:grid-cols-2 ">
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
        {dataSupport?.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-4 rounded-xl p-4 transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <img
              src={`/assets/images/items/${item?.images?.[0]?.image}`}
              alt={item.name}
              className="h-16 w-16 flex-shrink-0 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-base text-gray-800 group-hover:text-primary dark:text-white">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modern;
