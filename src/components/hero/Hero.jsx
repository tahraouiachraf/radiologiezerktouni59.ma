import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { radiologue } from '../../constants';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <>
            <style jsx>{`
                .hero-section {
                    padding: 120px 0 80px;
                    background: linear-gradient(135deg, var(--light-color) 0%, var(--white) 100%);
                    position: relative;
                    overflow: hidden;
                }

                .hero-content {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                }

                .hero-text {
                    flex: 1;
                }

                .hero-text h1 {
                    font-size: 2.8rem;
                    color: var(--dark-color);
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .hero-text .subtitle {
                    font-size: 1.1rem;
                    color: var(--text-color);
                    margin-bottom: 30px;
                    max-width: 500px;
                }

                .hero-buttons {
                    display: flex;
                    gap: 20px;
                    margin-top: 30px;
                }

                .hero-buttons .btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .hero-image {
                    flex: 1;
                    position: relative;
                    display: flex;
                    justify-content: center;
                }

                .hero-image img {
                    width: 70%;
                    max-width: 450px;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                    object-fit: cover;
                }

                @media (max-width: 992px) {
                    .hero-content {
                        flex-direction: column;
                        text-align: center;
                    }

                    .hero-text h1 {
                        font-size: 2.3rem;
                    }

                    .hero-text .subtitle {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .hero-buttons {
                        justify-content: center;
                    }

                    .hero-image {
                        margin-top: 40px;
                    }

                    .hero-image img {
                        width: 70%;
                        max-width: 400px;
                    }
                }

                @media (max-width: 576px) {
                    .hero-section {
                        padding: 100px 0 60px;
                    }

                    .hero-text h1 {
                        font-size: 1.8rem;
                    }

                    .hero-buttons {
                        flex-direction: column;
                        gap: 15px;
                    }

                    .hero-image img {
                        width: 90%;
                        max-width: 350px;
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
                                <Link to="/appointment">
                                    <motion.button
                                        className="btn"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Prendre Rendez-vous <FaArrowRight />
                                    </motion.button>
                                </Link>
                                <Link to="/services">
                                    <motion.button
                                        className="btn btn-outline"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Nos Services
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-image"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img src={radiologue} alt="Radiologie" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;