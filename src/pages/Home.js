import React from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Blogs from '../components/Blogs';
import Brands from '../components/Brands';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Services from '../components/Services';
import CarsDistribution from '../components/CarsDistribution';
import Stats from '../components/Stats';
import Discount from '../components/Discount';
import Footer from '../components/Footer';


class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Landing />
        <Blogs />
        <Brands />
        <Features />
        <Testimonials />
        <Team />
        <Services />
        <CarsDistribution />
        <Stats />
        <Discount />
        <Footer />
      </>
    )
  }
}

export default Home;
