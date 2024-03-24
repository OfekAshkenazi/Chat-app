export default function SearchInput() {
    return (
        <form className="flex item-center gap-2">
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />

            <button type="submit" className="btn btn-circle bg-sky-500 text-white">
                Icone
            </button>

        </form>
    )
}