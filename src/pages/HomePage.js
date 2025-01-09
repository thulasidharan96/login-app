import React from 'react'
import NavBar from '../components/NavBar'
import './HomePage.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar/>
        <div className='home-content'>
          <section>
            <h1>Welcome to Company XYZ</h1>
            <p>We are glad to have you here. Explore our services and offerings.</p>
            <p>Feel free to register or login to access more features.</p>
          </section>
        </div>
      <Footer />
    </div>
  )
}

export default Home