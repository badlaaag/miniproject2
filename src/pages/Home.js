import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className="home-wrapper-1 py-5">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative p-3'>
              <img src="images/bannermusic.jpg"
              className='img-fluid rounded-3' alt=""/>
              <div className='main-banner-content position-absolute'>
                <h4>Experienced HD Sounds</h4>
                <h5>G-30</h5>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
            <div className='small-banner position-relative p-3'>
              <img
              src="images/catbanner-02.jpg"
              className='img-fluid rounded-3'
              alt='main banner'
              />
              <div className='small-banner-content position-absolute'>
                <h4>Experienced HD Sounds</h4>
                <h5>G-30</h5>
                <Link className='button'>BUY NOW</Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home