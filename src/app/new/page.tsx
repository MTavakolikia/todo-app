import { prisma } from "@/db"
import { redirect } from "next/navigation";
import Link from "next/link"

const page = () => {
    async function createTodo(data: FormData) {
        "use server"
        const title = data.get('title')?.valueOf();
        if (typeof title !== 'string' || title.length === 0) {
            throw new Error("Invalid Title")
        }

        await prisma.todo.create({ data: { title, complete: false } })
        redirect("/")
    }
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">New</h1>
            </header>
            <form className="flex gap-2 flex-col" action={createTodo}>
                <input type="text" name="title"
                    className="border border-slate-300 text-slate-300 bg-transparent px-2 py-1 rounded focus-within:bg-slate-900 outline-none"
                />
                <div className="flex justify-end gap-1">
                    <Link href='..'
                        className="border border-slate-300 text-slate-300 px-2 mx-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline">
                        Cancel
                    </Link>
                    <button
                        className="border border-slate-300 text-slate-300 mx-2 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline">
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}

export default page