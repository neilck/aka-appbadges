import { SocialPlatform } from "@/types/SocialPlatform";
import SignInButton from "@/components/SignInButton";
import SocialCard from "@/components/SocialCard";

export default function TwitterOwnerBadge() {
  return (
    <div className="flex justify-center mt-10">
      <SocialCard platform={SocialPlatform.X}>Content</SocialCard>
    </div>
  );
}
