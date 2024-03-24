import React from 'react'
import './Team.css'
import Heading from './../../Common/Heading';
import {team} from '../../Data/Data'

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam amet assumenda impedit tempora. Illo itaque minima architecto eaque rerum ipsam? Repellat repellendus nesciunt magni sit. Perspiciatis eos impedit itaque."
          />
          <div className="content mtop grid3">
            {team.map((val, index) => {
              return(
                <div className="box" key={index}>
                  <button className="btn3">{val.list} Listings</button>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa fa-circle-check"></i>
                    </div>
                    <div className="fa fa-location-dot"></div>
                    <label>{val.address}</label>
                    <h4>{ val.name }</h4>
                    <ul>
                      {val.icon.map((icon, index) => (
                        <li key={index}>{ icon }</li>
                      ))}
                    </ul>
                    <div className="button flex">
                      <button>
                        <i className="fa fa-envelope"></i>
                        Message
                      </button>
                      <button className='btn4'>
                        <i className="fa fa-phone-alt"></i>
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team