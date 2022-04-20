import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="container">

<section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

        <div className="d-flex justify-content-center py-4">
          <a href="/" className="logo d-flex align-items-center w-auto">
            <img src="assets/img/logo.png" alt=""/>
            <span className="d-none d-lg-block">FABLAB</span>
          </a>
        </div>{/*-- End Logo -*/}

        <div className="card mb-3">

          <div className="card-body">

            <div className="pt-4 pb-2">
              <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
              <p className="text-center small">Enter your personal details to create account</p>
            </div>

            <form className="row g-3 needs-validation" novalidate>
              <div className="col-12">
                <label for="yourName" className="form-label">Your Name</label>
                <input type="text" name="name" className="form-control" id="yourName" required/>
                <div className="invalid-feedback">Please, enter your name!</div>
              </div>

              <div className="col-12">
                <label for="yourEmail" className="form-label">Your Email</label>
                <input type="email" name="email" className="form-control" id="yourEmail" required/>
                <div className="invalid-feedback">Please enter a valid Email adddress!</div>
              </div>

              <div className="col-12">
                <label for="yourUsername" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">@</span>
                  <input type="text" name="username" className="form-control" id="yourUsername" required/>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div className="col-12">
                <label for="yourPassword" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="yourPassword" required/>
                <div className="invalid-feedback">Please enter your password!</div>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                  <label className="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                  <div className="invalid-feedback">You must agree before submitting.</div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100" type="submit">Create Account</button>
              </div>
              <div className="col-12">
                <p className="small mb-0">Already have an account? <a href="/login">Log in</a></p>
              </div>
            </form>

          </div>
        </div>

        {/* <div className="credits">
          -- All the links in the footer should remain intact. -
          -- You can delete the links only if you purchased the pro version. -
          -- Licensing information: https://bootstrapmade.com/license/ -
          -- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div> */}

<div className="credits">
        Designed and Developed by <a href="https://www.linkedin.com/in/nikhil-taparia/" target={'_blank'}>NIKHIL TAPARIA 🚀</a>
      </div>

      </div>
    </div>
  </div>

</section>

</div>
    </>
  )
}

export default Signup