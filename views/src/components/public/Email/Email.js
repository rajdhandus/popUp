import React from 'react';
 
const Email = () => (
    <div>
    <div className="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Write to us</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="contact-form" className="modal-body mx-3">
                <div className="md-form mb-5">
                    <i className="fa fa-user prefix grey-text"></i>
                    <input type="text" id="inputName" className="form-control validate form__input" name="name"/>
                    <label for="inputName" data-error="wrong" data-success="right">Your name</label>
                </div>

                <div className="md-form mb-5">
                    <i className="fa fa-envelope prefix grey-text"></i>
                    <input type="email" id="inputEmail" className="form-control validate form__input" name="email"/>
                    <label for="inputEmail" data-error="wrong" data-success="right">Your email</label>
                </div>

                <div className="md-form mb-5">
                    <i className="fa fa-tag prefix grey-text"></i>
                    <input type="text" id="inputSubject" className="form-control validate form__input" name="subject"/>
                    <label for="inputSubject" data-error="wrong" data-success="right">Subject</label>
                </div>

                <div className="md-form">
                    <i className="fa fa-pencil prefix grey-text"></i>
                    <textarea type="text" id="inputMessage" className="md-textarea form-control form__input" rows="4"></textarea>
                    <label for="inputMessage" data-error="wrong" data-success="right">Your message</label>
                </div>
                {/* <input className="display-none" type="text" name="_gotcha" /> */}

            </form>
            <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-unique" id="email-submit-btn" type="submit" value="Send" name="_gotcha">Send <i className="fab fa-telegram-plane"></i></button>
            </div>
        </div>
    </div>
</div>

{/* <div className="text-center">
    <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm">Launch Modal Contact Form</a>
</div> */}
</div> 

);

export default Email;

