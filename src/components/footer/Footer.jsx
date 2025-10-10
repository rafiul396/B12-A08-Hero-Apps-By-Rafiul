import React from 'react';
import Container from '../layout/Container';

const Footer = () => {
    return (
        <footer className="bg-base-100 shadow-sm mt-20">
            <Container>
                <div className='footer sm:footer-horizontal  text-base-content md:p-5 p-3'>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Web Development</a>
                        <a className="link link-hover">UI/UX Design</a>
                        <a className="link link-hover">API Development</a>
                        <a className="link link-hover">DevOpst</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                            <label>Enter your email address</label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn gradient-bg text-white join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Container>
            <div className="border border-[#13131310]"></div>
            <div className='text-center py-5'>
                <h2 className='font-semibold'>&copy; 2025 bdsoft.io | All rights reserved.</h2>
            </div>
        </footer>
    );
};

export default Footer;