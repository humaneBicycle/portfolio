import React from 'react'
import config from '../config'

export default function ContactMe(){
    return(
            <div className='contact_me' id='contact_me'>
                <span className='contact_me_overline'>04. What's next?</span>
                <span className='contact_me_overline_two'>Get In Touch</span>
                <span className='contact_me_desc'>{config.description}</span>
                <a className='contact_me_button'href= {`mailto:${config.email}`}>Say Hello</a>

            </div>
    )
}