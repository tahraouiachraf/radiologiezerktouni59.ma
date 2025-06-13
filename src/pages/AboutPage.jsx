import React from 'react';
import { motion } from 'framer-motion';
import { radiologue } from '../constants';

const About = () => {
    return (
        <>
            <section className="professional-hero-section">
                <div className="professional-container">
                    <motion.div
                        className="professional-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="professional-hero-title">À propos de nous</h1>
                        <p className="professional-hero-subtitle">
                            À propos de notre centre
                        </p>
                        <div className="professional-hero-badge">
                            <span>Centre de Radiologie Professionnel</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="rad-about-section">


                <div className="rad-container">
                    <div className="rad-about-grid">
                        <motion.div
                            className="rad-about-content"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="rad-section-title">À propos de notre centre</h2>
                            <p className="rad-text-description">
                                Fondé en 2010, notre centre de radiologie est devenu une référence dans la région pour la qualité de ses services et l'expertise de son équipe.
                            </p>
                            <p className="rad-text-description">
                                Nous nous engageons à fournir des résultats précis dans les meilleurs délais, tout en offrant un accueil chaleureux et un environnement confortable pour nos patients.
                            </p>

                            <motion.div
                                className="rad-stats-grid"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="rad-stat-item">
                                    <h4 className="rad-stat-value">15</h4>
                                    <p className="rad-stat-label">Années d'expérience</p>
                                </div>
                                <div className="rad-stat-item">
                                    <h4 className="rad-stat-value">50k</h4>
                                    <p className="rad-stat-label">Patients satisfaits</p>
                                </div>
                                <div className="rad-stat-item">
                                    <h4 className="rad-stat-value">10</h4>
                                    <p className="rad-stat-label">Spécialistes</p>
                                </div>
                                <div className="rad-stat-item">
                                    <h4 className="rad-stat-value">24/7</h4>
                                    <p className="rad-stat-label">Urgences</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="rad-media-container"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={radiologue}
                                alt="Notre centre de radiologie"
                                className="rad-featured-image"
                            />
                            <motion.div
                                className="rad-mission-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h4 className="rad-card-title">Notre mission</h4>
                                <p className="rad-card-text">
                                    Fournir des services d'imagerie médicale de haute qualité avec une approche centrée sur le patient.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;