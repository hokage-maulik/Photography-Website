
import React from 'react';
import '../CSS/Contact.css';

export default function Contact() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="mb-4">Let's talk</h2>

                    <p>
                        500 Terry Francine St. <br />
                        San Francisco, CA 94158 <br />
                        Tel: 123-456-7890 <br />
                        Email: info@mysite.com
                    </p>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control form-control-lg" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control form-control-lg" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control form-control-lg" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input type="text" className="form-control form-control-lg" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control form-control-lg" rows="4"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">Send</button>
                    </form>
                </div>

                <div className="col-md-6">
                    <img
                        src="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg"
                        alt="Contact"
                        className="img-fluid rounded shadow w-100"
                    />
                </div>
            </div>
            <div className='mt-3'>
                <button className="btn btn-secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Back to Top
                </button>
            </div>

        </div>
    );
}
