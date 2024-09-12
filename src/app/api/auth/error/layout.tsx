import "@/app/globals.css";

import { getServerSession } from "next-auth";
import AuthSessionProvider from "@/providers/AuthSessionProvider";

export default async function TwitterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <AuthSessionProvider session={session} refetchInterval={5 * 60}>
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
