import React from 'react'
import { Link } from 'react-router-dom'
import flag from "../../assets/flag.png"
const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container py-sm-0 py-md-5">
                <div className="row py-4">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width={180} className="mb-3" />
                    <div>
                        <p className="font-italic text-muted"><span className="bold">Coinsapphire</span> provides a fundamental analysis of the crypto markets.All content provided herein our website is for your general information only, procured from third party sources. </p>
                        {/* <div style={{height:"30px",width:"70px"}}>
                            <img src={flag} style={{height:"100%",width:"100%",objectFit:"cover"}}/>
                        </div>
                        <p className="font-italic text-muted my-3">
                            All prices are in INR ,specially designed for indians.
                        </p> */}
                    </div>
                        
                        {/* <ul className="list-inline mt-4">
                            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook" /></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram" /></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest" /></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo" /></a></li>
                        </ul> */}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Services</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><Link to="/home" className="text-muted text-decoration-none">Cryptocurrencies</Link></li>
                            <li className="mb-2"><Link to="/exchanges" className="text-muted text-decoration-none">Exchanges</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                        <p className="text-muted mb-4">Subscribe to our newsletter for daily updates.</p>
                        <div className="p-1 rounded border">
                            <div className="input-group">
                                <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                                <div className="input-group-append">
                                    <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyrights */}
            <div className="bg-light py-4">
                <div className="container text-center">
                    <p className="text-muted mb-0 py-2">© 2023 <span className="bold">Coinsapphire</span>  All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer
