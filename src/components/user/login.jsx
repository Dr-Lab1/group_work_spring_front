import { Link } from "react-router-dom";
import { Footer } from "./footer";
import { Logo } from "./logo";

export function Login() {
    return <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">

                    <Logo />

                    <div className="card mb-3">

                        <div className="card-body">

                            <div className="pt-4 pb-2">
                                <h5 className="card-title text-center pb-0 fs-4">Se connecter à votre compte</h5>
                                <p className="text-center small">
                                    Entrez votre nom d'utilisateur et votre mot de passe pour vous connecter
                                </p>
                            </div>

                            <form className="row g-3 needs-validation" novalidate>

                                <div className="col-12">
                                    <label htmlFor="yourUsername" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" name="username" className="form-control" id="yourUsername" required />
                                        <div className="invalid-feedback">Please enter your username.</div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="yourPassword" className="form-label">Password</label>
                                    <input type="password" name="password" className="form-control" id="yourPassword" required />
                                    <div className="invalid-feedback">Please enter your password!</div>
                                </div>

                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-primary w-100" type="submit">Se connecter</button>
                                </div>
                                <div className="col-12">
                                    <p className="small mb-0">Vous n'avez pas de compte ? <Link to={'/register'}>Créer un compte</Link></p>
                                </div>
                            </form>

                        </div>
                    </div>

                    <Footer />

                </div>
            </div>
        </div>

    </section>

}
