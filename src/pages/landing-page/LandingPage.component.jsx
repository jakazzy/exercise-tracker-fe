import React from 'react'
import { Button } from 'react-bootstrap'
import HomeNavbar from '../../components/navbar/navbar.component'
import './landing-page.styles.css'
import Stability from '../../images/stability_ball.svg'
import WorkOut from '../../images/working_out.svg'
import ControlledCarousel from '../../components/carousel/carousel.component'
import { cardData } from '../../data/data'
import CardItem from '../../components/card/card.component'
import Footer from '../../components/footer/footer'
import AuthContextProvider from '../../contexts/AuthContext'

const LandingPage = () => {
  console.log('Do you render? ')
  return (
    <div style={{ overflowX: 'hidden' }}>
      <AuthContextProvider>
        <HomeNavbar />
      </AuthContextProvider>
      <section className="welcome-message">
        <div className="CTA-message">
          <h1> MAKE IT HAPPEN. SHOCK EVERYONE</h1>
          Begin your fitness goals today. Set goals and smash them goals using
          exercise tracker.
          <Button className="btn-bg-color-cta" type="button" block>
            {' '}
            JOIN NOW
          </Button>
        </div>
        <div className="landing-page-container">
          <div className="rounded-divider"></div>
          <div className="landing-page-images">
            <img
              src={Stability}
              alt="stability"
              loading="lazy"
              className="stability"
            />
            <img
              src={WorkOut}
              alt="workout"
              loading="lazy"
              className="work-out"
            />
          </div>
        </div>
      </section>
      <div className="success-stories">
        <h3>SUCCESS STORIES</h3>
        <ControlledCarousel />
      </div>
      <section className="info">
        {cardData.map(({ width, image, id, info }) => (
          <CardItem width={width} img={image} key={id} info={info} />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage
