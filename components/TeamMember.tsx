import Image from 'next/image';
import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';

interface TeamMemberProps {
  name: string;
  imageUrl: string;
  socialMediaLinks?: string[];
  bio?: string;
}

export const TeamMember: FC<TeamMemberProps> = ({
  name,
  imageUrl,
  socialMediaLinks,
  bio,
}) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={imageUrl} alt={name} width={250} height={250} />
      </div>
      <p className="text-center mt-5 font-bold text-xl">{name}</p>
      {socialMediaLinks && (
        <div className="flex mt-5 items-center justify-center gap-2">
          {socialMediaLinks.map((link, index) => (
            <SocialIcon
              key={index}
              url={link}
              bgColor="#fff"
              style={{ width: 30, height: 30 }}
            />
          ))}
        </div>
      )}
      {bio && <p className="mt-5 text-center">{bio}</p>}
    </div>
  );
};
