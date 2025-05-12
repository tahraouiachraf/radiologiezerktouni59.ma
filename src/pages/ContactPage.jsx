import { motion } from 'framer-motion';
import Contact from '../components/contact/Contact.jsx';
import '../components/contact/Contact.css';

const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="contact-page">
                {/* Hero Section */}
                <section className="contact-hero">
                    <div className="container">
                        <motion.div
                            className="contact-hero-content"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>Contactez-nous</h1>
                            <p>Prenez rendez-vous ou posez-nous vos questions</p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Contact Section */}
                <Contact />

                {/* Map Section */}
                <section className="map-section">
                    <div className="container">
                        <h2 className="section-title">Nous trouver</h2>
                        <div className="map-container">
                            <iframe title="Localisation Radiologie Zerktouni 59"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.86381382071!2d-7.624968524794662!3d33.58288504236879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x285ab0496732c533%3A0x6b9233dda00f303a!2sRADIOLOGIE%20ZERKTOUNI%2059!5e0!3m2!1sen!2sma!4v1747053160710!5m2!1sen!2sma" width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default ContactPage;