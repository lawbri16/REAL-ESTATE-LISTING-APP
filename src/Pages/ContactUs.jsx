import NavBar from "../Components/Navbar"
import Footer from "../Components/Footer"
export default function Contact(){
    return(
        <>
        <NavBar />
           <section className="contact-section" id="contact">
        <div className="section-content">
          <p className="section-label">CONTACT US</p>

          <h2>Let's help you find your next property.</h2>

          <p>
            Have a question about a property or want to learn more
            about NaijaHomes? Get in touch with our team.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong> hello@naijahomes.com
            </p>

            <p>
              <strong>Phone:</strong> +234 7014 324 422
            </p>

            <p>
              <strong>Location:</strong> Nigeria
            </p>
          </div>
        </div>
      </section>
      <Footer/>
        </>
    )
}