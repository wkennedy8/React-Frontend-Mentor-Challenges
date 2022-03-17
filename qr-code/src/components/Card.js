import React from 'react'
import qrCode from '../images/image-qr-code.png'

const Card = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="qr-container">
          <img src={qrCode} alt="qr code" />
        </div>
        <div className="text-container">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
