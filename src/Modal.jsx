import React from 'react'


function Modal({handleChange, updateContact,appendContact, handleModal, Contact}) {



    const action = "add"
    const handleSave = () =>{
       console.log("data",Contact)

        fetch('http://localhost:8000/api/add_contacts', {
        method: "POST",
        body: JSON.stringify(Contact),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Accept": "application/json"
        }
        })
        .then(response => response.json()) 
        .then(data => {
            //closethe modal
            handleModal();
            alert("Contact saved successfully!");
            document.getElementById("exampleModal").classList.remove("show");
            document.querySelector(".modal-backdrop").classList.remove("show");
            if(data.type=='edit'){
                updateContact(data)
            }else{
                appendContact(data)
            }
       
             
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
                        {/* Modal */}
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-body">
                                <i
                                  className="flaticon-cancel-12 close"
                                  data-dismiss="modal"
                                />
                                <div className="add-contact-box">
                                  <div className="add-contact-content">
                                    <form id="addContactModalTitle">
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="contact-name">
                                            <i className="flaticon-user-11" />
                                            <input
                                              type="text"
                                              id="name"
                                              className="form-control name"
                                              placeholder="Name"
                                              value={Contact.name}
                                              onChange={handleChange}
                                            />
                                            <span className="validation-text" />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="contact-email">
                                            <i className="flaticon-mail-26" />
                                            <input
                                              type="text"
                                              id="email"
                                              className="form-control email"
                                              placeholder="Email"
                                              value={Contact.email}
                                              onChange={handleChange}
                                            />
                                            <span className="validation-text" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="contact-occupation">
                                            <i className="flaticon-fill-area" />
                                            <input
                                              type="text"
                                              id="designation"
                                              className="form-control designation"
                                              placeholder="Designation"
                                              value={Contact.designation}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="contact-phone">
                                            <i className="flaticon-telephone" />
                                            <input
                                              type="text"
                                              id="phone"
                                              className="form-control phone"
                                              placeholder="Phone"
                                              value={Contact.phone}
                                              onChange={handleChange}
                                            />
                                            <span className="validation-text" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="contact-location">
                                            <i className="flaticon-location-1" />
                                            <input
                                              type="text"
                                              id="location"
                                              className="form-control location"
                                              placeholder="Location"
                                              value={Contact.location}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                {action==='add'?<button
                                  id="btn-edit"
                                  className="float-left btn"
                                  type="submit"
                                  onClick = {handleSave}
                                >
                                  Save
                                </button>:
                                <button
                                  id="btn-add"
                                  className="btn"
                                  type="submit"
                                >
                                  Add
                                </button>}
                                <button className="btn" data-dismiss="modal">
                                  {" "}
                                  <i className="flaticon-delete-1" /> Discard
                                </button>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
    )
}

export default Modal
