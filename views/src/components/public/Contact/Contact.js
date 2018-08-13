import React from "react";
import "./Contact.css";
import Email from "../Email";

const Contact = () => (
  <div className="intro-text left-0 text-centerfaded rounded text-center mb-3">
    <h2 className="section-heading">
      <span id="instagram" className="section-heading-lower mb-3">
        Contact Us
      </span>
    </h2>
<div className="mb-3">
    <div className="container">
      <div className="heading" />
      <div className="row">
        <div className="col-md-4">
          <div className="card special-skill-item border-0 bg-faded">
            <div className="card-header bg-transparent border-0">
            </div>
            <div className="card-body">
            <i class="fas fa-store-alt"></i>
              <h3 className="card-title">Store Front</h3>
              <p className="card-text">
                312 E. 9th Street
                <br /> Charlotte, NC
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card special-skill-item border-0 bg-faded">
            <div className="card-header bg-transparent border-0">
            </div>
            <div className="card-body">
            <i class="fas fa-phone"></i>
              <h3 className="card-title">Call</h3>
              <p className="card-text">(555) 555-5555 <br />&nbsp;</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card special-skill-item border-0 bg-faded">
            <div className="card-header bg-transparent border-0">
            </div>
            <div className="card-body">
            <i class="fas fa-envelope"></i>
            <h3 className="card-title pointer email" role="button" data-toggle="modal" data-target="#modalContactForm">Email</h3>
              <p className="card-text">admin@popuptheory.com <br />&nbsp;</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

<div className="mb-3">
    <div className="container">
      <div className="heading" />
      <div className="row">
        <div className="col-md-4">
          <div className="card special-skill-item border-0 bg-faded">
            <div className="card-header bg-transparent border-0">
            </div>
            <div className="card-body">
            <i class="fas fa-comments"></i>
              <h3 className="card-title">Chat</h3>
              <p className="card-text">
                Live Chat  <br />&nbsp; 
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card special-skill-item border-0 bg-faded">
            <div className="card-header bg-transparent border-0">
            </div>
            <div className="card-body">
            <i class="fas fa-mobile"></i>
              <h3 className="card-title">Text</h3>
              <p className="card-text">Text "popup" to <br />(555) 555-5555</p>
            </div>
          </div>
        </div>
     
        </div>
      </div>
    </div>
    <Email />
    </div>
 
);

export default Contact;