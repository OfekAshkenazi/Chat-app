export default function Login() {
    return (
        <section className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                </form>


            </div>
        </section>
    )
}