import GenderBox from "./GenderBox";

export default function Signup() {
    return (
        <section className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-300">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Full name"
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-300">User Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter User name"
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text text-gray-300">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10"
                        />

                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text text-gray-300">Confirm password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full input input-bordered h-10"
                        />

                    </div>

                    <GenderBox />


                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Allready have an account?
                    </a>


                    <div>
                        <button className="btn btn-block btn-sm mt-2">Sign up</button>
                    </div>


                </form>


            </div>
        </section>
    )
}