import React from 'react'
import './footer.scss'
import Logo from '../../assets/logo.png'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsTelephone,BsLink45Deg} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {GoSignIn,GoPeople} from 'react-icons/go'

function Footer() {
  return (
    <div className='footer-wrapper'>
        <hr />
        <div className="c-footer">
            <div className="f-logo">
                <img src={Logo} alt="" />
                <span>Beautify</span>
            </div>

            <div className="block">
                <div className="detail">
                    <span>Contact Us</span>
                    <span className='pngLine'>
                        <HiOutlineLocationMarker className='icon'/>
                        <a href='#'>111 North Avenue Orlando, FL 32801</a>
                    </span>
                    <span className='pngLine'>
                        <BsTelephone className='icon'/>
                        <a href='tel:9818126074'>+977-9818-126-074</a>
                    </span>
                    <span className='pngLine'>
                        <AiOutlineMail className='icon'/>
                        <a href='mailto:support@beautify.com'>support@beautify.com</a>
                    </span>
                </div>
            </div>

            <div className="block">
                <div className="detail">
                    <span>Account</span>
                    <span className='pngLine'>
                        <GoSignIn className='icon'/>
                        <a href='#'>Sign in</a>
                    </span>
                </div>
            </div>

            <div className="block">
                <div className="detail">
                    <span>Company</span>
                    <span className='pngLine'>
                        <GoPeople className='icon'/>
                        <a href='#'>About Us</a>
                    </span>
                </div>
            </div>
            <div className="block">
                <div className="detail">
                    <span>Resource</span>
                    <span className='pngLine'>
                        <BsLink45Deg className='icon'/>
                        <a href='#'>Safety, Privacy and Terms</a>
                    </span>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <span>Copyright &copy;2023 by Beautify, Inc.</span>
            <span>All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer