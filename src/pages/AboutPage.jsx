import React from 'react';
import Seo from '../components/seo/Seo.jsx';

const AboutPage = () => {
    return (
        <>
            <Seo title="À propos" />
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-12">À propos de nous</h1>
            </main>
        </>
    );
};

export default AboutPage;