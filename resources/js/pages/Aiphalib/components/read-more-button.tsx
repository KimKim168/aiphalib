import { Link } from '@inertiajs/react';
import React from 'react';

const ReadMoreButton = ({link, id}) => {
  return (
    <div>
      <button
        className="
          px-3 py-2 mt-6
          bg-foreground-two text-white hover:-translate-y-2 tracking-widest
          border border-foreground-two 
          hover:shadow-xl
          text-sm
          rounded-full
          transition duration-500
          hover:bg-white hover:text-primary
        "
      >
        <Link href={`/${link}/${id}`}>Read More</Link> 
      </button>
    </div>
  );
};

export default ReadMoreButton;
