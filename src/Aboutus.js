import React,{useState} from 'react';
import howtouse from './API/howtouse';

const Aboutus=()=>{
    const [aboutdata,setaboutdata]=useState(howtouse);
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./images/image3.jpg " alt="aboutusImg"/>
                        </div>
                        {/* first section right side part */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                            </h3>
                            <h1 className="main-heading">How to use the app?</h1>

                            {aboutdata.map((curElem)=>{
                                const {id,title,info}=curElem;
                                return (
                                    <>
                                <div className="row our-services-info " key={id}>
                                      <div className="col-1 our-services-number">{id}</div>
                                 <div className="col-10 our-services-data">
                                    <h2>{title}</h2>
                                    <p className="main-hero-para">
                                        {info}
                                    </p>
                                 </div>
                               </div>

                                    </>
                                );

                            })}
                            
                            <br/>
                            <button className="btn-style btn-style-border">learn more </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* second part of about us */}

            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                       
                        {/* first section right side part */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                -- SUPPORT IN ANY LANGUAGE
                            </h3>
                            <h1 className="main-heading">world class support is <br/>available 24/7</h1>

                            {aboutdata.map((curElem)=>{
                                const {id,title,info}=curElem;
                                return (
                                    <>
                                <div className="row our-services-info " key={id}>
                                      <div className="col-1 our-services-number">{id}</div>
                                 <div className="col-10 our-services-data">
                                    <h2>{title}</h2>
                                    <p className="main-hero-para">
                                        {info}
                                    </p>
                                 </div>
                               </div>

                                    </>
                                );

                            })}
                            
                            <br/>
                            <button className="btn-style btn-style-border">learn more </button>
                        </div>
                        <div className="col-12 col-lg-5  our-service-rightside-img">
                            <img src="./images/image3.jpg " alt="aboutusImg"/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Aboutus;