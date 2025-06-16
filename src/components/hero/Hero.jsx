import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <>
            <style jsx>{`
                .hero-section {
                    padding: 150px 0 100px;
                    background: linear-gradient(135deg, var(--light-color) 0%, var(--white) 100%);
                    position: relative;
                    overflow: hidden;
                }

                .hero-content {
                    display: flex;
                    align-items: center;
                    gap: 50px;
                }

                .hero-text {
                    flex: 1;
                }

                .hero-text h1 {
                    font-size: 3.5rem;
                    color: var(--dark-color);
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .hero-text .subtitle {
                    font-size: 1.2rem;
                    color: var(--text-color);
                    margin-bottom: 30px;
                    max-width: 600px;
                }

                .hero-buttons {
                    display: flex;
                    gap: 20px;
                    margin-top: 40px;
                }

                .hero-buttons .btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .hero-image {
                    flex: 1;
                    position: relative;
                }

                .hero-image img {
                    width: 100%;
                    max-width: 600px;
                    border-radius: 10px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 992px) {
                    .hero-content {
                        flex-direction: column;
                        text-align: center;
                    }

                    .hero-text h1 {
                        font-size: 2.5rem;
                    }

                    .hero-buttons {
                        justify-content: center;
                    }

                    .hero-image {
                        margin-top: 50px;
                    }
                }

                @media (max-width: 576px) {
                    .hero-section {
                        padding: 120px 0 80px;
                    }

                    .hero-text h1 {
                        font-size: 2rem;
                    }

                    .hero-buttons {
                        flex-direction: column;
                        gap: 15px;
                    }
                }
            `}</style>

            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <motion.div
                            className="hero-text"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>Centre de Radiologie Médicale</h1>
                            <p className="subtitle">
                                Imagerie médicale de haute technologie avec des professionnels expérimentés
                            </p>
                            <div className="hero-buttons">
                                <motion.a
                                    href="#contact"
                                    className="btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Prendre Rendez-vous <FaArrowRight />
                                </motion.a>
                                <motion.a
                                    href="#services"
                                    className="btn btn-outline"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Nos Services
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-image"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img src="/assets/images/hero-image.jpg" alt="Radiologie" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;