import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
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
    );
};

export default Hero;