import React from 'react';

interface SectionTitleProps {
  title: string;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, id }) => {
  return (
    <h2 id={id} className="text-3xl font-bold text-center text-gray-800 mb-10">
      {title}
    </h2>
  );
};

export default SectionTitle;