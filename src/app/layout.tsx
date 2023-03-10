import AsideNavBar from "@/components/Aside/AsideNavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import { PrismaClient, User, Board } from "@prisma/client";
import "./globals.css";

const prisma = new PrismaClient();

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user: User = await prisma.user.findUnique({
    where: { id: 1 },
    include: {
      boards: {
        include: {
          columns: { include: { tasks: true } },
        },
      },
    },
  });

  return (
    <html lang="fr" data-theme={user?.theme ?? "dracula"}>
      <head />
      <body className="flex flex-col flex-auto bg-base-300">
        <div className="app-container flex flex-auto">
          <AsideNavBar boards={user.boards} userId={user.id} />
          <div className="flex-col flex-auto">
            <Header user={user} />
            {children}
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
