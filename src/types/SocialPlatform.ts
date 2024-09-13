export enum SocialPlatform {
  Discord = "discord",
  Facebook = "facebook",
  GitHub = "github",
  Instagram = "instagram",
  LinkedIn = "linkedin",
  Reddit = "reddit",
  Twitch = "twitch",
  X = "x",
  YouTube = "youtube",
}

interface PlatformDetails {
  color: string;
  defaultTitle: string;
}

export const socialPlatformDetails: Record<SocialPlatform, PlatformDetails> = {
  [SocialPlatform.Discord]: {
    color: "#7289DA", // Discord Blue
    defaultTitle: "Discord Account",
  },
  [SocialPlatform.Facebook]: {
    color: "#4267B2", // Facebook Blue
    defaultTitle: "Facebook Profile",
  },
  [SocialPlatform.GitHub]: {
    color: "#333", // GitHub Dark
    defaultTitle: "GitHub Account",
  },
  [SocialPlatform.Instagram]: {
    color: "#E1306C", // Instagram Gradient
    defaultTitle: "Instagram Profile",
  },
  [SocialPlatform.LinkedIn]: {
    color: "#0077B5", // LinkedIn Blue
    defaultTitle: "LinkedIn Profile",
  },
  [SocialPlatform.Reddit]: {
    color: "#FF4500", // Reddit Orange
    defaultTitle: "Reddit User",
  },
  [SocialPlatform.Twitch]: {
    color: "#9146FF", // Twitch Purple
    defaultTitle: "Twitch Stream",
  },
  [SocialPlatform.X]: {
    color: "#000000", // X Black
    defaultTitle: "X Account",
  },
  [SocialPlatform.YouTube]: {
    color: "#FF0000", // YouTube Red
    defaultTitle: "YouTube Channel",
  },
};
