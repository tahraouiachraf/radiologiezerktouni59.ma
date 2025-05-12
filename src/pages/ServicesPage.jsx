import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const ServicesPage = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>
                {/* Ajoutez ici le contenu détaillé des services */}
            </main>
            <Footer />
        </div>
    );
};

export default ServicesPage;