import './index.scss'

const ContactForm = () => {
    return (
        <div className="container-fluid contactForm-container">
            <div className="row contact-heading-row"><h2>Contact Us</h2></div>
            <div className="row contactForm-row">
                <div className="col contact-image-col">
                    {/* <img src="https://plus.unsplash.com/premium_photo-1709311452215-496c6740ca59?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="contact-img" className="img-contact" /> */}
                    <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                    alt="contact-img" className="contact-image" />
                    
                </div>

                <div className="col form-col">
                    <form onsubmit="">
                        <div className="row d-flex flex-column">
                            <div className="col-md-12">
                                <label for="name" className="form-label fw-bold">Name:</label>
                                <input type="text" id="name" className="form-control" placeholder="Enter your name"/>
                            </div>
                            <div className="col-md-12">
                                <label for="e-mail" className="form-label fw-bold">E-mail:</label>
                                <input type="email" id="e-mail" className="form-control" placeholder="Enter your E-mail"/>
                            </div>
                            <div className="col-md-12">
                                <label for="msg" className="form-label fw-bold">Message:</label>
                                <textarea type="text" id="msg" className="form-control" placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary active">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;