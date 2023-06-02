import React from 'react';


const Header=()=>{
  return(
    <>
      <header>
        <section className="container main-hero-container">
            <div className="row">
                <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                    <h1 className="display-2">online payment made <br/>easy for you.</h1>
            
                    <p className="main-hero-para">
                    What does Lorem Ipsum text say?
                    Lorem ipsum is a name for a common type of placeholder text.
                    Also known as
                    filler or dummy text, this is text copy that serves to fill a space
                    without saying anything meaningful.
                    It's essentially nonsense text that still gives an idea of what real words will look like 
                    in the final product.

                    </p>

                    <h3> Get early access for you</h3>
                      <div className="input-group mt-3">
                        <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="enter your email"/>
                        <div className="input-group-button">
                          Get it now
                          </div>
                      </div>

                    

                </div>

                {/* main header right side */}

                <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                  <img src="./images/images.jpg" alt="heroimg" className="image-fluid main-hero-img2" />

                  <img src="./images/download.jpg" alt="heroimg" className="image-fluid " />

                </div>


            </div>
        </section>
      </header>
    </>
  );
    
}

export default Header;
