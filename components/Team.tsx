import { TeamMember } from './TeamMember';
import { team } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Team = () => {
  if (!Array.isArray(team)) return null;

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <HomeSectionTitle title="Team" />
      <div className="grid grid-cols-3 space-x-10">
        {team.map((teamMember, index) => (
          <TeamMember key={index} {...teamMember} />
        ))}
      </div>
    </div>
  );
};
