import React from 'react'
import config from '../config'

export default function AboutMe() {
  return (
    <div className="about_me">
        <div className="about_me_head">
          <span>01.</span>&nbsp;About Me.
          <div className="about_me_inner">
            <div className="about_me_about">
              <p>{config.p1}</p>
              <br />
              <p>{config.p2}</p>
              <br />

              <p>{config.p3}</p>
              <br />

              <p>{config.p4}</p>
              <br />
              <p>The technologies that I worked on:</p>
              <ul className="skill_ul">
              {config.skills.map((skill,i)=>{
                return(
                  <li className="skill_bullet"><span key={i}>▹</span>{skill}</li>
                )
              })}
              </ul>
            </div>
            <div className="">
              <img
                src={config.image_url}
                alt="alt"
                className="about_me_image"
              />
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
  )
}
