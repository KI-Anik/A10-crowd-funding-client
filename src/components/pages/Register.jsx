import { useContext } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createNewUser, loginWithGoogle, setUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password)

        // password conditional check
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        // if (!passwordRegex.test(password)) {
        //   toast.error('password should be at least one uppercase, one lowercase and 6 character long')
        //   return
        // }

        // authentication start
        createNewUser(email, password)
            .then(result => {
                console.log(result.user)

                // profile start
                updateUserProfile({displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                        toast.success('Account created successfully')
                    })
                    .catch(err => {
                        console.log('from update', err.message)
                    })
                    // profile end
            })

            .catch(err => {
                console.log('handleRegister', err.message)
            })
        // authentication end
    }

    const handleGoogle = () => {
        loginWithGoogle()
            .then(result => {
                setUser(result.user)
                console.log(result.user)
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    // authentication end

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration!</h1>
                    <p className="py-6">
                        Meet people and life-changing teachers in need of your support
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl card-body">
                        <button onClick={handleGoogle} className="btn "> <FaGoogle></FaGoogle> Contionue with Google</button>
                        <div className="text-xl font-bold text-center">
                            Or
                        </div>
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-URL</span>
                            </label>
                            <input name="photo" type="url" placeholder="Provide your profile photo link" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center pb-5 font-semibold">
                        Already have an account? <Link to={'/auth/login'} className="text-blue-600 underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;