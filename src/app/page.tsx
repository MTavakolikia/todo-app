import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {
  const todos = await prisma.todo.findMany();
  // await prisma.todo.create({ data: { title: "test", complete: false } })
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link href={"/new"} className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline">New</Link>
      </header>
      <ul className="pl-4">
        {todos.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}
