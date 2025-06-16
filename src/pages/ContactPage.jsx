import { motion } from 'framer-motion';
import Seo from '../components/seo/Seo.jsx';
import Contact from '../components/contact/Contact.jsx';
import HeroBanner from '../components/hero/HeroBanner.jsx';

// Styles professionnels médicaux
const medicalStyles = {
    root: {
        '--medical-primary': '#1A5F7A',         // Bleu médical profond
        '--medical-secondary': '#57C5B6',       // Turquoise médical
        '--medical-accent': '#FF9F29',          // Orange d'accent
        '--medical-dark': '#2D3748',             // Gris foncé
        '--medical-gray': '#F7FAFC',             // Gris très clair
        '--medical-light-gray': '#EDF2F7',       // Gris clair
        '--medical-white': '#FFFFFF',            // Blanc
        '--medical-emergency': '#E53E3E',        // Rouge pour urgences
        '--medical-shadow': '0 4px 12px rgba(0, 0, 0, 0.08)',
        '--medical-shadow-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        '--medical-transition': 'all 0.3s ease',
        '--medical-border-radius': '10px',
    },
    page: {
        minHeight: '100vh',
        backgroundColor: 'var(--medical-white)',
        fontFamily: "'Roboto', sans-serif",
        lineHeight: 1.6,
        color: 'var(--medical-dark)',
    },
    wrapper: {
        overflowX: 'hidden',
    },
    container: {
        maxWidth: '1200px',
        width: '90%',
        margin: '0 auto',
        padding: '0 1rem',
    },
    heroSection: {
        background: 'linear-gradient(135deg, var(--medical-primary) 0%, var(--medical-secondary) 100%)',
        color: 'var(--medical-white)',
        padding: 'clamp(6rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 5rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    section: {
        padding: 'clamp(3rem, 6vw, 5rem) 0',
        backgroundColor: 'var(--medical-white)',
    },
    sectionTitle: {
        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
        fontWeight: 700,
        color: 'var(--medical-primary)',
        textAlign: 'center',
        marginBottom: '1rem',
        lineHeight: 1.3,
    },
    sectionSubtitle: {
        textAlign: 'center',
        fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
        color: 'var(--medical-dark)',
        opacity: 0.8,
        marginBottom: 'clamp(2rem, 4vw, 3rem)',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.7,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(2rem, 4vw, 3rem)',
        alignItems: 'start',
    },
    formContainer: {
        background: 'var(--medical-white)',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        borderRadius: 'var(--medical-border-radius)',
        boxShadow: 'var(--medical-shadow)',
        border: '1px solid var(--medical-light-gray)',
    },
    hoursGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        maxWidth: '800px',
        margin: '0 auto',
    },
    hourItem: {
        background: 'var(--medical-gray)',
        padding: '1.5rem',
        borderRadius: 'var(--medical-border-radius)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'var(--medical-transition)',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 'var(--medical-shadow-hover)',
        },
    },
    closedItem: {
        background: 'rgba(229, 62, 62, 0.05)',
        border: '1px solid rgba(229, 62, 62, 0.2)',
    },
    dayText: {
        fontWeight: 600,
        color: 'var(--medical-dark)',
        marginBottom: '0.5rem',
    },
    timeText: {
        fontWeight: 500,
        color: 'var(--medical-primary)',
    },
    closedTime: {
        color: 'var(--medical-emergency)',
    },
    mapContainer: {
        borderRadius: 'var(--medical-border-radius)',
        overflow: 'hidden',
        boxShadow: 'var(--medical-shadow)',
        height: '400px',
        marginTop: '2rem',
    },
    // Responsive adjustments
    '@media (max-width: 768px)': {
        grid: {
            gridTemplateColumns: '1fr',
            gap: '2rem',
        },
        formContainer: {
            order: -1, // Met le formulaire en premier sur mobile
        },
    },
};

const ContactPage = () => {
    return (
        <>
            <Seo
                title="Contact - Radiologie Zerktouni 59"
                description="Prenez rendez-vous ou contactez notre centre de radiologie à Casablanca. Notre équipe est à votre disposition pour répondre à vos questions."
            />

            {/* Hero Section */}
            <HeroBanner
                title="Contactez notre centre"
                subtitle="Notre équipe médicale est à votre écoute pour répondre à vos questions et prendre vos rendez-vous"
                badge="Radiologie & Imagerie Médicale"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={medicalStyles.page}
            >
                <div style={medicalStyles.wrapper}>
                    {/* Main Contact Section */}
                    <Contact medicalStyles={medicalStyles} />

                    {/* Map Section */}
                    <section style={medicalStyles.section}>
                        <div style={medicalStyles.container}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 style={medicalStyles.sectionTitle}>Notre Localisation</h2>
                                <p style={medicalStyles.sectionSubtitle}>
                                    Situé au cœur de Casablanca pour un accès facile à nos services d'imagerie médicale
                                </p>
                                <div style={medicalStyles.mapContainer}>
                                    <iframe
                                        title="Localisation Radiologie Zerktouni 59"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.86381382071!2d-7.624968424794662!3d33.58288504236879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x285ab0496732c533%3A0x6b9233dda00f303a!2sRADIOLOGIE%20ZERKTOUNI%2059!5e0!3m2!1sen!2sma!4v1747053160710!5m2!1sen!2sma"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Hours Section */}
                    <section style={{ ...medicalStyles.section, backgroundColor: 'var(--medical-gray)' }}>
                        <div style={medicalStyles.container}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                style={{ textAlign: 'center' }}
                            >
                                <h2 style={medicalStyles.sectionTitle}>Horaires d'Ouverture</h2>
                                <p style={medicalStyles.sectionSubtitle}>
                                    Nous sommes disponibles pour vous accueillir selon les horaires suivants
                                </p>
                                <div style={medicalStyles.hoursGrid}>
                                    <div style={medicalStyles.hourItem}>
                                        <span style={medicalStyles.dayText}>Lundi - Vendredi</span>
                                        <span style={medicalStyles.timeText}>8h00 - 20h00</span>
                                    </div>
                                    <div style={medicalStyles.hourItem}>
                                        <span style={medicalStyles.dayText}>Samedi</span>
                                        <span style={medicalStyles.timeText}>8h00 - 14h00</span>
                                    </div>
                                    <div style={{ ...medicalStyles.hourItem, ...medicalStyles.closedItem }}>
                                        <span style={medicalStyles.dayText}>Dimanche</span>
                                        <span style={{ ...medicalStyles.timeText, ...medicalStyles.closedTime }}>Fermé</span>
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