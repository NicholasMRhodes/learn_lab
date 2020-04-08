
import React from 'react'

const Faq = () => {

  return (
    <div className="container">
      <div className="content-wrapper">
        <h2 className="title">Frequently Asked Questions</h2>
      </div>
      <div>
        <div>
          <p><b>What is Learn Lab? </b></p>
          <p>Learn Lab is an online learning and teaching platform that provides the one-on-one learning environment many people desire.</p>
        </div>
        <br/>
        <div>
          <p><b>What are the advantages of one-on-one online learning? </b></p>
          <ul>
            <li>> High quality personal interaction</li>
            <li>> Greater student engagement</li>
            <li>> Empowers students to not rely on others</li>
            <li>> Tailored learning experience</li>
            <li>> Learn at your own pace</li>
            <li>> Low stress environment</li>
            <li>> Freedom to ask questions without peer judgement</li>
          </ul>
        </div>
        <br/>
        <div>
          <p><b>How much does it cost?</b></p>
          <p>Learn Lab is free to register. The per hour cost of each session is provided on the service page. You can access this page by finding the subject you are interested in and clicking the "Learn More" button. </p>
        </div>
      </div>
    </div>
  )
}

export default Faq