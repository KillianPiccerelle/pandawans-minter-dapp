import { Box, SimpleGrid } from '@chakra-ui/react';
import { RoadmapItem } from './RoadmapItem';
import { roadmap } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Roadmap = () => {
  if (!Array.isArray(roadmap)) return null;

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <HomeSectionTitle title="Roadmap" />
      <SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} spacing={10}>
        {roadmap.map((roadmapItem, index) => (
          <RoadmapItem key={index} {...roadmapItem} />
        ))}
      </SimpleGrid>
    </div>
  );
};
