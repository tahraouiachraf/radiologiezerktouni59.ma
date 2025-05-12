import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    <motion.div
                        className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">À propos de notre centre</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Fondé en 2010, notre centre de radiologie est devenu une référence dans la région pour la qualité de ses services et l'expertise de son équipe.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Nous nous engageons à fournir des résultats précis dans les meilleurs délais, tout en offrant un accueil chaleureux et un environnement confortable pour nos patients.
                        </p>

                        <motion.div
                            className="grid grid-cols-2 gap-4 mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="text-blue-600 font-bold text-xl mb-2">15+</h4>
                                <p className="text-gray-600">Années d'expérience</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="text-blue-600 font-bold text-xl mb-2">50k+</h4>
                                <p className="text-gray-600">Patients satisfaits</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="text-blue-600 font-bold text-xl mb-2">10+</h4>
                                <p className="text-gray-600">Spécialistes</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h4 className="text-blue-600 font-bold text-xl mb-2">24/7</h4>
                                <p className="text-gray-600">Urgences</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            <img
                                src="/assets/images/about-main.jpg"
                                alt="Notre centre de radiologie"
                                className="rounded-lg shadow-xl w-full"
                            />
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl w-3/4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h4 className="text-blue-600 font-bold text-lg mb-2">Notre mission</h4>
                                <p className="text-gray-600">
                                    Fournir des services d'imagerie médicale de haute qualité avec une approche centrée sur le patient.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;