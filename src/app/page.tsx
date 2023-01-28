import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function Home() {
  return (
    <main className="flex-auto bg-base-300 h-full flex justify-center items-center">
      <p className="text-3xl">Veuillez selectionner un board</p>
    </main>
  );
}

export default Home;
