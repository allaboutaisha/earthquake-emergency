import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCcVisa, FaCcMastercard, FaCcAmex, FaRegCopyright } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <ul className="footer-list">
                <li>CONNECT WITH US:</li>
                <li className='icons'>
                    <a href="https://www.linkedin.com/in/aishamamoor/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/allaboutaisha/earthquake-emergency" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="mailto:aisha.mamoor@gmail.com"><FaEnvelope /></a>
                </li>
            </ul>
            <ul className="footer-list">
                <li>WE ACCEPT:</li>
                <li className='icons'>
                    <FaCcVisa />
                    <FaCcMastercard />
                    <FaCcAmex />
                </li>
            </ul>
            <div className="footer-text"><FaRegCopyright /> COPYRIGHT 2023</div>
        </footer>
    )
}

