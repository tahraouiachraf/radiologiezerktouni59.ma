import { motion } from 'framer-motion';
import Seo from '../components/seo/Seo.jsx';
import Contact from '../components/contact/Contact.jsx';

const ContactPage = () => {
    return (
        <>
            <Seo title="Contact - Radiologie Zerktouni 59" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="professional-contact-page"
            >
                <div className="professional-contact-wrapper">
                    {/* Professional Hero Section */}
                    <section className="professional-hero-section">
                        <div className="professional-container">
                            <motion.div
                                className="professional-hero-content"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="professional-hero-title">Contactez-nous</h1>
                                <p className="professional-hero-subtitle">
                                    Prenez rendez-vous ou posez-nous vos questions
                                </p>
                                <div className="professional-hero-badge">
                                    <span>Centre de Radiologie Professionnel</span>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Main Professional Contact Section */}
                    <Contact />

                    {/* Professional Map Section */}
                    <section className="professional-map-section">
                        <div className="professional-container">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="professional-section-title">Notre Localisation</h2>
                                <p className="professional-section-subtitle">
                                    Situés au cœur de Casablanca pour votre facilité d'accès
                                </p>
                                <div className="professional-map-container">
                                    <iframe 
                                        title="Localisation Radiologie Zerktouni 59"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.86381382071!2d-7.624968524794662!3d33.58288504236879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x285ab0496732c533%3A0x6b9233dda00f303a!2sRADIOLOGIE%20ZERKTOUNI%2059!5e0!3m2!1sen!2sma!4v1747053160710!5m2!1sen!2sma" 
                                        width="100%"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy">
                                    </iframe>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Professional Hours Section */}
                    <section className="professional-hours-section">
                        <div className="professional-container">
                            <motion.div
                                className="professional-hours-content"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="professional-hours-title">Horaires d'Ouverture</h3>
                                <div className="professional-hours-grid">
                                    <div className="professional-hour-item">
                                        <span className="professional-day">Lundi - Vendredi</span>
                                        <span className="professional-time">8h00 - 20h00</span>
                                    </div>
                                    <div className="professional-hour-item">
                                        <span className="professional-day">Samedi</span>
                                        <span className="professional-time">8h00 - 14h00</span>
                                    </div>
                                    <div className="professional-hour-item professional-closed">
                                        <span className="professional-day">Dimanche</span>
                                        <span className="professional-time">Fermé</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </motion.div>
        </>
    );
};

export default ContactPage;