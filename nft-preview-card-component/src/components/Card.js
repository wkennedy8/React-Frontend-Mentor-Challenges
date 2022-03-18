import React from 'react'
import equilibrium from '../images/image-equilibrium.jpg'
import avatar from '../images/image-avatar.png'

const Card = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-container--image">
          <div className="svg">
            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h48v48H0z" />
                <path
                  d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                  fill="#FFF"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>

          <img src={equilibrium} alt="nft" />
        </div>
        <div className="text-container">
          <h2>Equilibrium #3429</h2>
          <p className="desc">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="price-time">
            <div className="left">
              <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                  fill="#00FFF8"
                />
              </svg>
              <p>0.041 ETH</p>
            </div>
            <div className="right">
              <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                  fill="#8BACD9"
                />
              </svg>
              <p>3 days left</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="card-footer">
          <img src={avatar} alt="nft-owner" />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
