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
            <div className="modal-body mx-3">
                <div className="md-form mb-5">
                    <i className="fa fa-user prefix grey-text"></i>
                    <input type="text" id="form34" className="form-control validate"/>
                    <label data-error="wrong" data-success="right" for="form34">Your name</label>
                </div>

                <div className="md-form mb-5">
                    <i className="fa fa-envelope prefix grey-text"></i>
                    <input type="email" id="form29" className="form-control validate"/>
                    <label data-error="wrong" data-success="right" for="form29">Your email</label>
                </div>

                <div className="md-form mb-5">
                    <i className="fa fa-tag prefix grey-text"></i>
                    <input type="text" id="form32" className="form-control validate"/>
                    <label data-error="wrong" data-success="right" for="form32">Subject</label>
                </div>

                <div className="md-form">
                    <i className="fa fa-pencil prefix grey-text"></i>
                    <textarea type="text" id="form8" className="md-textarea form-control" rows="4"></textarea>
                    <label data-error="wrong" data-success="right" for="form8">Your message</label>
                </div>

            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-unique">Send <i className="fab fa-telegram-plane"></i></button>
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

