import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { loading, login } = useLogin()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await login(username, password)

        } catch (error) {

        }
    }

    return (
        <section className="flex flex-col items-center justify-center">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 min-w-[365px] max-w-[450px]">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit} className="mt-4 w-full">
                    <div className="mb-4">
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-300">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text text-gray-300">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 inline-block">
                        Don't have an account?
                    </Link>

                    <div className="mt-2">
                        <button
                            className="btn btn-block btn-sm"
                            disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );


}