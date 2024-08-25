import { Link } from "react-router-dom";
import { Footer } from "./footer";
import { Logo } from "./logo";

export function Register() {
  return <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">

          <Logo />  

          <div className="card mb-3">

            <div className="card-body">

              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">Créer un compter</h5>
                <p className="text-center small">
                  Entrez vos détails personnels pour créer votre compte
                </p>
              </div>

              <form className="row g-3 needs-validation" novalidate>
                <div className="col-12">
                  <label for="yourName" className="form-label">Nom</label>
                  <input type="text" name="name" className="form-control" id="yourName" required />
                  <div className="invalid-feedback">Please, enter your name!</div>
                </div>

                <div className="col-12">
                  <label for="yourEmail" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="yourEmail" required />
                  <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                </div>

                <div className="col-12">
                  <label for="yourUsername" className="form-label">Username</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" name="username" className="form-control" id="yourUsername" required />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                </div>

                <div className="col-12">
                  <label for="yourPassword" className="form-label">Password</label>
                  <input type="password" name="password" className="form-control" id="yourPassword" required />
                  <div className="invalid-feedback">Please enter your password!</div>
                </div>

                <div className="col-12">
                  <label for="yourPassword" className="form-label">Confirm Password</label>
                  <input type="password" name="password" className="form-control" id="yourPassword" required />
                  <div className="invalid-feedback">Please enter your password!</div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                    <label className="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                    <div className="invalid-feedback">You must agree before submitting.</div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary w-100" type="submit">S'enregistrer</button>
                </div>
                <div className="col-12">
                  <p className="small mb-0">Vous avez déjà un compte ? <Link to={'/login'}>Se connecter</Link></p>
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