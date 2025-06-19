import React from 'react';
import { motion } from 'framer-motion';
import { radiologue } from '../constants';
import Seo from '../components/seo/Seo';
import HeroBanner from '../components/hero/HeroBanner';

const AboutPage = () => {
    return (
        <>
            <Seo title="À propos - Radiologie Zerktouni 59" />
            {/* Hero Section */}
            <HeroBanner
                title="À propos de nous"
                subtitle="À propos de notre centre"
                badge="Centre de Radiologie Professionnel"
            />

            <style jsx>{`
                /* Radiologie About Section - Professional Design */
                .rad-about-section {
                    padding: 4rem 0;
                    background-color: #f8fafc;
                    position: relative;
                    overflow: hidden;
                }

                .rad-about-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyMDQsMjMwLDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==');
                    z-index: 0;
                }

                .rad-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    position: relative;
                    z-index: 1;
                }

                .rad-about-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }

                @media (min-width: 992px) {
                    .rad-about-grid {
                        grid-template-columns: 1fr 1fr;
                        align-items: center;
                        gap: 4rem;
                    }
                }

                /* Content Section */
                .rad-about-content {
                    position: relative;
                }

                .rad-section-title {
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: #3490dc;
                    margin-bottom: 1.25rem;
                    line-height: 1.3;
                    position: relative;
                    display: inline-block;
                }

                .rad-section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 70px;
                    height: 4px;
                    background: linear-gradient(90deg, #3182ce, #63b3ed);
                    border-radius: 2px;
                }

                .rad-text-description {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #4a5568;
                    margin-bottom: 1.5rem;
                }

                /* Statistics Grid */
                .rad-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.25rem;
                    margin-top: 2rem;
                }

                .rad-stat-item {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.05);
                    border-left: 3px solid #3182ce;
                    transition: all 0.3s ease;
                }

                .rad-stat-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
                }

                .rad-stat-value {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #3182ce;
                    margin-bottom: 0.5rem;
                    display: flex;
                    align-items: center;
                }

                .rad-stat-value::after {
                    content: '+';
                    margin-left: 2px;
                    font-weight: 400;
                }

                .rad-stat-label {
                    font-size: 0.95rem;
                    color: #718096;
                    font-weight: 500;
                }

                /* Media Section */
                .rad-media-container {
                    position: relative;
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
                    margin-top: 2rem;
                }

                .rad-featured-image {
                    width: 100%;
                    height: auto;
                    max-height: 450px;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.4s ease;
                }

                .rad-media-container:hover .rad-featured-image {
                    transform: scale(1.03);
                }

                .rad-mission-card {
                    position: relative;
                    background: white;
                    padding: 1.5rem;
                    border-radius: 10px;
                    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
                    margin-top: -3rem;
                    margin-right: 1rem;
                    transform: rotateZ(-1deg);
                }

                .rad-card-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #3182ce;
                    margin-bottom: 0.75rem;
                    display: flex;
                    align-items: center;
                }

                .rad-card-title::before {
                    content: '';
                    display: inline-block;
                    width: 20px;
                    height: 3px;
                    background: #3182ce;
                    margin-right: 10px;
                }

                .rad-card-text {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: #4a5568;
                }

                /* Responsive Adjustments */
                @media (min-width: 768px) {
                    .rad-about-section {
                        padding: 5rem 0;
                    }

                    .rad-section-title {
                        font-size: 2.5rem;
                    }

                    .rad-mission-card {
                        position: absolute;
                        bottom: -1.5rem;
                        right: -1.5rem;
                        width: calc(100% - 3rem);
                        padding: 1.75rem;
                    }
                }

                @media (min-width: 992px) {
                    .rad-media-container {
                        margin-top: 0;
                    }
                }

                @media (max-width: 576px) {
                    .rad-stats-grid {
                        grid-template-columns: 1fr;
                    }

                    .rad-section-title {
                        font-size: 2rem;
                    }

                    .rad-mission-card {
                        margin-top: -2rem;
                        margin-right: 0.5rem;
                    }
                }
            `}</style>

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
                                style={{ maxHeight: '400px' }}
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

export default AboutPage;