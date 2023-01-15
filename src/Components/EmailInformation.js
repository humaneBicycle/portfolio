import React from 'react'
import config from '../config'

export default function EmailInformation() {
  return (
    <div className='EmailInformation'>
        <a className='Email' href={`mailto:${config.email}`}>
            {config.email}
        </a>
        <div
          style={{
            width: "1px",
            height: "100px",
            backgroundColor: "#BAC5DD",
            marginLeft: "7px",
          }}
        />
        
    </div>
  )
}
