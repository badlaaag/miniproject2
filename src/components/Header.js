import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs';
const Header = () => {
  return (
    <>
    <header className="header-top-strip py-3">
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6 text-white'>
                    <p>60 % Discount Shop now</p>
                </div>
                <div className='col-6 text-white'>
                    <p className="text-end  mb-0">Contact: <a className='text-white' href="tel:+63 9123456789">09123456789</a>
                    </p>
                </div>
            </div>
        </div>
    </header>
    <header className='header-upper py-3'>
        <div className='container-xxl'>
            <div className='row align-items-center'>
                <div className='col-2'>
                    <h1>
                        <Link className='text-white fs-3'>Tech-O-Matic</Link>
                    </h1>
                </div>
                <div className='col-5'>
                    <div className="input-group">
                        <input
                         type="text" 
                         className="form-control py-2" 
                         placeholder="Search Products..." 
                         aria-label="Search Products..." 
                         aria-describedby="basic-addon2"
                         />
                        <span class="input-group-text p-3" id="basic-addon2">
                           <BsSearch className='fs-6' />
                        </span>
                    </div>
                </div>
                <div className='col-5'>
                    <div className="header-upper-links d-flex align-items-center justify-content-between">
                    <div>
                        <Link to ='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                        <img src="images/compare.png" alt="" />
                            <p className='mb-0'>
                                Compare <br/> Products
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='wishlist' className='d-flex align-items-center gap-10 text-white'>
                        <img src="images/wishlist.svg" alt="" />
                            <p className='mb-0'>
                                Favourite <br/> Wishlist
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                        <img src="images/user.svg" alt="" />
                            <p className='mb-0'>
                            Log in <br/>My Account
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to ='/cart' className='d-flex align-items-center gap-10 text-white'>
                        <img src="images/cart.png" alt="cart" />
                            <div className='d-flex flex-column'>
                                <span className='badge bg-white text-dark'>0</span>
                                <p className='mb-0'>₱ 0.00</p>
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header className='header-bottom py-3'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='menu-bottom d-flex align-items-center gap-30'>
                        <div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="images/menu.svg" alt="" />
                                <span className='me-5 d-inline-block'>
                                Shop Categories
                                </span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <Link className="dropdown-item text-white" to="">Action</Link>
                                <Link className="dropdown-item text-white" to="">Another action</Link>
                                <Link className="dropdown-item text-white" to="">Something else here</Link>
                            </ul>
                        </div>  
                        </div>
                    <div className='menu-links'>
                        <div className="d-flex align-items-center gap-15">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/product">Our Store</NavLink>
                            <NavLink to="/blogs">Blogs</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                         </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header