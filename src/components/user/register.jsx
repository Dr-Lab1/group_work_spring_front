import { Footer } from "./footer";
import { Logo } from "./logo";

export function Register() {
  return <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">

          <Logo />

          <div class="card mb-3">

            <div class="card-body">

              <div class="pt-4 pb-2">
                <h5 class="card-title text-center pb-0 fs-4">Créer un compter</h5>
                <p class="text-center small">
                  Entrez vos détails personnels pour créer votre compte
                </p>
              </div>

              <form class="row g-3 needs-validation" novalidate>
                <div class="col-12">
                  <label for="yourName" class="form-label">Nom</label>
                  <input type="text" name="name" class="form-control" id="yourName" required />
                  <div class="invalid-feedback">Please, enter your name!</div>
                </div>

                <div class="col-12">
                  <label for="yourEmail" class="form-label">Email</label>
                  <input type="email" name="email" class="form-control" id="yourEmail" required />
                  <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                </div>

                <div class="col-12">
                  <label for="yourUsername" class="form-label">Username</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" name="username" class="form-control" id="yourUsername" required />
                    <div class="invalid-feedback">Please choose a username.</div>
                  </div>
                </div>

                <div class="col-12">
                  <label for="yourPassword" class="form-label">Password</label>
                  <input type="password" name="password" class="form-control" id="yourPassword" required />
                  <div class="invalid-feedback">Please enter your password!</div>
                </div>

                <div class="col-12">
                  <label for="yourPassword" class="form-label">Confirm Password</label>
                  <input type="password" name="password" class="form-control" id="yourPassword" required />
                  <div class="invalid-feedback">Please enter your password!</div>
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                    <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-primary w-100" type="submit">S'enregistrer</button>
                </div>
                <div class="col-12">
                  <p class="small mb-0">Vous avez déjà un compte ? <a href="">Se connecter</a></p>
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