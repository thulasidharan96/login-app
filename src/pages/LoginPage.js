import { useState } from 'react';
import { LoginApi } from '../services/Api';
import { storeUserData } from '../services/Storage'
import { isAuthenticated } from '../services/Auth';
import { Link, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function LoginPage() {
    const initialStateErrors = {
        email: { required: false },
        password: { required: false },
        custom_error: null
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        console.log(inputs);
        event.preventDefault();
        let errors = initialStateErrors;
        let hasError = false;

        if (inputs.email === "") {
            errors.email.required = true;
            hasError = true;
        }
        if (inputs.password === "") {
            errors.password.required = true;
            hasError = true;
        }

        if (!hasError) {
            setLoading(true);
            // Sending login API request
            LoginApi(inputs)
                .then((response) => {
                    storeUserData(response.data.idToken);
                })
                .catch((err) => {
                    if (err.code === "ERR_BAD_REQUEST") {  // Corrected comparison
                        setErrors({ ...errors, custom_error: "Invalid Credentials." });
                    }
                })
                .finally(() => {
                    setLoading(false); // Hide the loading spinner once done
                });
        }

        setErrors({ ...errors });
    };

    if (isAuthenticated()) {
        // Redirect user to dashboard if authenticated
        return <Navigate to="/dashboard" />;
    }

    return (
        <div>
            <NavBar />
            <section className="register-block">
                <div className="container">
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="row w-100">
                            <div className="col-md-4 mx-auto login-sec">
                                <h2 className="text-center">Login Now</h2>
                                <form onSubmit={handleSubmit} className="login-form">
                                    <div className="form-group pt-3">
                                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                                        <input
                                            type="email"
                                            className="form-control border-dark"
                                            onChange={handleInput}
                                            name="email"
                                            placeholder="email"
                                        />
                                        {errors.email.required && (
                                            <span className="text-danger">Email is required.</span>
                                        )}
                                    </div>
                                    <div className="form-group pt-3">
                                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                        <input
                                            className="form-control border-dark"
                                            type="password"
                                            onChange={handleInput}
                                            name="password"
                                            placeholder="password"
                                        />
                                        {errors.password.required && (
                                            <span className="text-danger">Password is required.</span>
                                        )}
                                    </div>
                                    <div className="form-group pt-3">
                                        {loading ? (
                                            <div className="text-center">
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        ) : (
                                            errors.custom_error && (
                                                <span className="text-danger">
                                                    <p>{errors.custom_error}</p>
                                                </span>
                                            )
                                        )}
                                        <input
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={loading}
                                            value="Login"
                                        />
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group text-center pt-3">
                                        Create new account? Please <Link to="/register">Register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
}
