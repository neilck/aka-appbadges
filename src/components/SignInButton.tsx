"use client";

import { signIn } from "next-auth/react";
import { SocialPlatform } from "@/types/SocialPlatform";
import DefaultButton from "./DefaultButton";

interface SignInButtonProps {
  children: React.ReactNode;
  platform: SocialPlatform;
  disabled?: boolean;
}

const SignInButton: React.FC<SignInButtonProps> = ({
  disabled = false,
  platform,
  children,
}: SignInButtonProps) => {
  const onClick = () => {
    signIn(platform);
  };

  return <DefaultButton onClick={onClick}>{children}</DefaultButton>;
};

export default SignInButton;
