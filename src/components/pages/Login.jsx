import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { login, loginWithGoogle, setUser, } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        // authentication start
        login(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                toast.success(`welcome ${ result.user?.displayName? result.user.displayName : ''} to Crowd Funding`)
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    const handleGoogle = () => {
        loginWithGoogle()
            .then(result => {
                setUser(result.user)
                toast.success(`welcome ${ result.user?.displayName? result.user.displayName : ''} to Crowd Funding`)
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Log in to Crowd Funding to continue.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl card-body">
                        <button onClick={handleGoogle} className="btn"> <FaGoogle></FaGoogle> Contionue with Google</button>
                        <div className="text-xl font-bold text-center">
                            Or
                        </div>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center pb-5 font-semibold">Don&apos;t have an account? <Link to={'/auth/register'} className="text-red-600 underline">Register</Link> Now</p>

                </div>
            </div>
        </div>
    );
};

export default Login;