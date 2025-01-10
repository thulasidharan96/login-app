import { useState } from 'react';
import { RegisterApi } from '../services/Api';
import { isAuthenticated } from '../services/Auth';
import { storeUserData } from '../services/Storage';
import { Link, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function RegisterPage() {
    const initialStateErrors = {
        email: { required: false },
        password: { required: false },
        name: { required: false },
        custom_error: null
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = initialStateErrors;
        let hasError = false;

        if (inputs.name === "") {
            errors.name.required = true;
            hasError = true;
        }
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
            RegisterApi(inputs)
                .then((response) => {
                    storeUserData(response.data.idToken);
                })
                .catch((err) => {
                    if (err.response.data.error.message === "EMAIL_EXISTS") {
                        setErrors({ ...errors, custom_error: "Email already registered!" });
                    } else if (String(err.response.data.error.message).includes('WEAK_PASSWORD')) {
                        setErrors({ ...errors, custom_error: "Password must be at least 6 characters!" });
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }
        setErrors(errors);
    };

    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    if (isAuthenticated()) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div>
            <NavBar />
            <section className="register-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mx-auto login-sec">
                        <h2 className="text-center p-3">Register Now</h2>

                            <form onSubmit={handleSubmit} className="register-form">
                                <div className="form-group pt-3">
                                    <label htmlFor="name" className="text-uppercase">Name</label>
                                    <input type="text" className="form-control border-dark" onChange={handleInput} name="name" id="name" />
                                    {errors.name.required && <span className="text-danger">Name is required.</span>}
                                </div>
                                <div className="form-group pt-3">
                                    <label htmlFor="email" className="text-uppercase">Email</label>
                                    <input type="text" className="form-control border-dark" onChange={handleInput} name="email" id="email" />
                                    {errors.email.required && <span className="text-danger">Email is required.</span>}
                                </div>
                                <div className="form-group pt-3">
                                    <label htmlFor="password" className="text-uppercase">Password</label>
                                    <input className="form-control border-dark" type="password" onChange={handleInput} name="password" id="password" />
                                    {errors.password.required && <span className="text-danger">Password is required.</span>}
                                </div>
                                <div className="form-group pt-3">
                                    {errors.custom_error && <span className="text-danger"><p>{errors.custom_error}</p></span>}
                                    {loading && (
                                        <div className="text-center">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    )}
                                    <input type="submit" className="btn btn-primary" disabled={loading} value="Register" />
                                </div>
                                <div className="form-group pt-3">
                                    Already have an account? Please <Link to="/login">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
}
