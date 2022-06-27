import { RoadmapItem } from './RoadmapItem';
import { roadmap } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Roadmap = () => {
  if (!Array.isArray(roadmap)) return null;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <HomeSectionTitle title="Roadmap" />
      <div className="grid grid-cols-3 space-x-10 w-full">
        {roadmap.map((roadmapItem, index) => (
          <RoadmapItem key={index} {...roadmapItem} />
        ))}
      </div>
    </div>
  );
};
