import React from 'react';
import Seo from '../components/seo/Seo';
import Hero from '../components/hero/Hero';

const Home = () => {
    return (
        <>
            <Seo title="" />
            <div className="overflow-hidden">
                <Hero />
            </div>
        </>
    );
};

export default Home;