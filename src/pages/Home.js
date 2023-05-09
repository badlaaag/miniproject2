import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from '../components/ProductCard';
import Container from "../components/Container";

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
                  <h5>Special Sale</h5>
                  <p>3000 / monthly</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img
                src="images/catbanner-02.jpg"
                className='img-fluid rounded-3'
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SELLER</h4>
                  <h5>G-30</h5>
                </div>
                </div>
                <div className='small-banner position-relative'>
                <img
                src="images/catbanner-02.jpg"
                className='img-fluid rounded-3'
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>FEATURED PRODUCTS</h4>
                  <h5>G-30</h5>
                </div>
                </div>
                <div className='small-banner position-relative'>
                <img
                src="images/catbanner-02.jpg"
                className='img-fluid rounded-3'
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>60% OFF</h4>
                  <h5>G-30</h5>
                </div>
                </div>
                <div className='small-banner position-relative'>
                <img
                src="images/catbanner-02.jpg"
                className='img-fluid rounded-3'
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>G-30</h5>
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service.png" alt="services" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-02.png" alt="services" />
                <div>
                  <h6>Daily Offers</h6>
                  <p className="mb-0">Save upto 60% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-03.png" alt="services" />
                <div>
                  <h6>Active 24/7</h6>
                  <p className="mb-0">Let's go and shop!</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-04.png" alt="services" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory Price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-05.png" alt="services" />
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payment</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6></h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6></h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Mobile</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6></h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6></h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Mobile</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Products</h3>
            </div>
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
        </div>
      </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png">
                    </img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png">
                    </img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png">
                    </img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png">
                    </img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png">
                    </img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png">
                    </img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png">
                    </img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png">
                    </img>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">From The Blogs</h3>
            </div>
         <BlogCard />
         <BlogCard />
         <BlogCard />
         <BlogCard />
        </div>
      </div>
      </section>

    </>
  )
}

export default Home