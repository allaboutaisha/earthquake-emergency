import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCcVisa, FaCcMastercard, FaCcAmex, FaApplePay, FaGooglePay } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <ul className="footer-list">
                <li>CONNECT WITH US:</li>
                <li>
                    <a href="https://www.linkedin.com/in/aishamamoor/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/allaboutaisha/earthquake-emergency" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="mailto:aisha.mamoor@gmail.com"><FaEnvelope /></a>
                </li>
            </ul>
            <ul className="footer-list">
                <li>WE ACCEPT:</li>
                <li>
                    <FaCcVisa />
                    <FaCcMastercard />
                    <FaCcAmex />
                    <FaApplePay className='fa-inverse' />
                    <FaGooglePay className='fa-inverse' />
                </li>
            </ul>
            <div className="footer-text">COPYRIGHT 2023</div>
        </footer>
    )
}

