import React,{useState} from 'react'

function Contact() {
    const[userdata,setuserdata]=useState({
        firstname:"",
        lastname:"",
        phone:"",
        email:"",
        address:"",
        message:"",
    });
    let name,value;

    const postuserdata=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setuserdata({...userdata,[name]: value})

    }
// realtime firebase connected
    const submitdata=async(e)=>{
        e.preventDefault();
        const{firstname,lastname,phone,email,address,message}=userdata;
        if(firstname && lastname && phone && email&& address && message)
        {
        const res=fetch(
            'https://reactfirebasewebsite-6ecaf-default-rtdb.firebaseio.com/userdatarecord.json',
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    firstname,
                    lastname,
                    phone,
                    email,
                    address,
                    message,
                })
            });

            if(res)
            {
                setuserdata({
                    firstname:"",
                    lastname:"",
                    phone:"",
                    email:"",
                    address:"",
                    message:"",
                    
                })
                alert("data stored")
            }else
            {
                alert("plz fill the data")
            }
        }
        else
        {
            alert("plz fill data")
        }

    };
  return (
    <>
        <section className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="contact-leftside col-12 col-lg-5">
                                <h1 className="main-heading fw-bold">
                                    connect with our team <br/> sales team.
                                </h1>
                                <p className="main-hero-para">
                                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    deserunt eaque alias similique.
                                </p>
                                <figure>
                                    <img src="./images/download.jpg" alt="contactus" className="img-fluid" />
                                </figure>
                            </div>
                            {/* right side of contact us */}

                            <div className="contact-rightside col-12 col-lg-7">
                                <form method="POST">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="firstname" id="" className=" form-control"
                                             placeholder=" firstname"
                                             value={userdata.firstname}
                                             onChange={postuserdata}/>
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="lastname" id="" className="form-control" 
                                             placeholder=" lastname"
                                             value={userdata.lastname}
                                             onChange={postuserdata}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="number" name="phone" id="" className=" form-control"
                                             placeholder=" phonenumber"
                                             value={userdata.phone}
                                             onChange={postuserdata}/>
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="email" name="email" id="" className="form-control"  
                                            placeholder=" email id"
                                                value={userdata.email}
                                                onChange={postuserdata}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 contact-input-feild">
                                            <input type="text" name="address" id=" " className='form-control'
                                             placeholder="add address"
                                             value={userdata.address}
                                             onChange={postuserdata}/>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-12  contact-input-feild">
                                            <input type="text" name="message" id=" " className="form-control" 
                                            placeholder="enter yourmessage"
                                            value={userdata.message}
                                            onChange={postuserdata}/>
                                        </div>
                                        
                                    </div>

                                    
                                    <div class="form-check form-check-style">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault " className="main-hero-para">
                                           i agree that the phonepay may connect with me at the email address or phone number
                                            above
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-style w-100" onClick={submitdata}>
                                        Submit
                                    </button>
                                    




                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact