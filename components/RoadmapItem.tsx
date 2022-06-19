import { FC } from 'react';

interface RoadmapItemProps {
  title: string;
  points: string[];
}

export const RoadmapItem: FC<RoadmapItemProps> = ({ title, points }) => {
  return (
    <div className="px-10 py-7 rounded-2xl text-shadowColor bg-darker bg-gradient-to-r from-darkBase to-darker shadow-black">
      <p className="text-white text-2xl font-black mb-3">{title}</p>
      <ul className="text-white list-disc">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};
