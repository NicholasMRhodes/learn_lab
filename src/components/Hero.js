/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import { Link } from 'react-router-dom'



const Hero = () => 
    <section className="hero is-default is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-5 is-offset-1 landing-caption">
                        <h1 className="title is-1 is-bold is-spaced">
                            Learn, Collaborate.
                        </h1>
                        <h2 className="subtitle is-5 is-muted">Learn Lab is an online learning platform that allows one-on-one collaboration to get the most out of your learning experience. Register to learn or to provide your teaching services. </h2>
                        <Link 
                            to="/register"
                            className="navbar-item">
                            <span className="button signup-button rounded primary-btn raised">
                                Get Started
                            </span>
                        </Link>
                    </div>
                    <div className="column is-5 is-offset-1">
                        <figure className="image is-4by3">
                            <img src={process.env.PUBLIC_URL + '/worker.svg'} alt="Description" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>


export default Hero