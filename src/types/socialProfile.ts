import { SocialPlatform } from "./SocialPlatform";

export type SocialProfile = {
  platform: string;
  identity: string;
  title?: string;
  description?: string;
  avatar?: string;
  url?: string;
  created_at?: string;
  followers?: number;
  following?: number;
  items?: number;
  views?: number;
  listed?: number;
  likes?: number;
};

export const getEmptySociaProfile = () => {
  const result: SocialProfile = {
    platform: "",
    identity: "",
  };
  return result;
};

export const isSocialPlatform = (obj: Record<string, any>): boolean => {
  // Check if the "platform" key exists and its value is one of the Platforms enum values
  return (
    obj.hasOwnProperty("platform") &&
    Object.values(SocialPlatform).includes(obj.platform)
  );
};
