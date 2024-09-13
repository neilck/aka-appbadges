import { SocialPlatform, socialPlatformDetails } from "@/types/SocialPlatform";
import Card from "./Card";

interface SocialCardProps {
  title?: string;
  platform: SocialPlatform;
  children: React.ReactNode;
}

const SocialCard: React.FC<SocialCardProps> = ({
  title,
  platform,
  children,
}: SocialCardProps) => {
  const { color, defaultTitle } = socialPlatformDetails[platform];
  if (!title) {
    title = defaultTitle;
  }

  // Dynamically load the SVG based on the platform
  const icon = require(`@/svgs/${platform}.svg`).default;

  return (
    <Card title={title} icon={icon} color={color}>
      {children}
    </Card>
  );
};

export default SocialCard;
