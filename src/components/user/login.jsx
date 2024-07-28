import { Footer } from "./footer";
import { Logo } from "./logo";

export function Login() {
    return <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">

                    <Logo />

                    <div class="card mb-3">

                        <div class="card-body">

                            <div class="pt-4 pb-2">
                                <h5 class="card-title text-center pb-0 fs-4">Se connecter à votre compte</h5>
                                <p class="text-center small">
                                    Entrez votre nom d'utilisateur et votre mot de passe pour vous connecter
                                </p>
                            </div>

                            <form class="row g-3 needs-validation" novalidate>

                                <div class="col-12">
                                    <label for="yourUsername" class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" name="username" class="form-control" id="yourUsername" required />
                                        <div class="invalid-feedback">Please enter your username.</div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="yourPassword" class="form-label">Password</label>
                                    <input type="password" name="password" class="form-control" id="yourPassword" required />
                                    <div class="invalid-feedback">Please enter your password!</div>
                                </div>

                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                        <label class="form-check-label" for="rememberMe">Remember me</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-primary w-100" type="submit">Se connecter</button>
                                </div>
                                <div class="col-12">
                                    <p class="small mb-0">Vous n'avez pas de compte ? <a >Créer un compte</a></p>
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
