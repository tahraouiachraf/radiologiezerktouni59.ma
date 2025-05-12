import React from 'react';
import Seo from '../components/seo/Seo';
import Hero from '../components/hero/Hero';
import Services from '../components/Services';
import About from '../components/about/About';
import Equipment from '../components/Equipment';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Seo title="" />
            <div className="overflow-hidden">
                <Hero />
                {/* <Services /> */}
                {/* <About /> */}
                {/* <Equipment /> */}
                {/* <Team /> */}
                {/* <Testimonials /> */}
            </div>
        </>
    );
};

export default Home;