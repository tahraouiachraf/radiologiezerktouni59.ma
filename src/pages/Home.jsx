import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Services from '../components/Services';
import About from '../components/about/About';
import Equipment from '../components/Equipment';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Services />
            <About />
            <Equipment />
            <Team />
            <Testimonials />
        </div>
    );
};

export default Home;