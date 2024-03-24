import { Link } from "react-router-dom";
import GenderBox from "./GenderBox";
import { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import toast from "react-hot-toast";

export default function Signup() {

    const [credentials, setCredentials] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, signup } = useSignUp()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await signup(credentials)
            toast.success("sign up succsfuly")
        } catch (error) {
            console.log(error)
        }
    }

    function handleCheckBox(gender) {
        setCredentials({ ...credentials, gender })
    }




    return (
        <section className="flex flex-col items-center justify-center min-w-96 mx-auto">

            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-300">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Full name"
                            className="w-full input input-bordered h-10"
                            value={credentials.fullName}
                            onChange={(e) => setCredentials({ ...credentials, fullName: e.target.value })}
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
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
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
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
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
                            value={credentials.confirmPassword}
                            onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
                        />

                    </div>

                    <GenderBox handleCheckBox={handleCheckBox} selectedGender={credentials.gender} />


                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Allready have an account?
                    </Link>


                    <div>
                        <button className="btn btn-block btn-sm mt-2">Sign up</button>
                    </div>


                </form>

            </div>

        </section>
    )
}