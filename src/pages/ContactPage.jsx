import { motion } from 'framer-motion';
import Seo from '../components/seo/Seo';
import Contact from '../components/contact/Contact';
import HeroBanner from '../components/hero/HeroBanner';

// Styles professionnels médicaux modernes
const medicalStyles = {
    root: {
        '--medical-primary': '#1A5F7A',         // Bleu médical profond
        '--medical-secondary': '#57C5B6',       // Turquoise médical
        '--medical-accent': '#FF9F29',          // Orange d'accent
        '--medical-dark': '#2D3748',            // Gris foncé
        '--medical-light': '#F7FAFC',           // Gris très clair
        '--medical-border': '#EDF2F7',          // Gris clair pour bordures
        '--medical-white': '#FFFFFF',           // Blanc
        '--medical-emergency': '#E53E3E',       // Rouge pour urgences
        '--medical-success': '#38A169',         // Vert pour succès
        '--medical-shadow': '0 4px 12px rgba(0, 0, 0, 0.08)',
        '--medical-shadow-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        '--medical-transition': 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        '--medical-border-radius': '12px',
        '--medical-spacing-unit': '1rem',
    },
    page: {
        minHeight: '100vh',
        backgroundColor: 'var(--medical-white)',
        fontFamily: "'Roboto', 'Helvetica Neue', sans-serif",
        lineHeight: 1.6,
        color: 'var(--medical-dark)',
    },
    wrapper: {
        overflowX: 'hidden',
    },
    container: {
        maxWidth: '1280px',
        width: '90%',
        margin: '0 auto',
        padding: '0 calc(var(--medical-spacing-unit) * 1.5)',
    },
    section: {
        padding: 'calc(var(--medical-spacing-unit) * 5) 0',
        position: 'relative',
    },
    sectionTitle: {
        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
        fontWeight: 700,
        color: 'var(--medical-primary)',
        textAlign: 'center',
        marginBottom: 'calc(var(--medical-spacing-unit) * 1.5)',
        lineHeight: 1.3,
    },
    sectionSubtitle: {
        fontSize: 'clamp(1rem, 1.25vw, 1.25rem)',
        color: 'var(--medical-dark)',
        opacity: 0.8,
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto calc(var(--medical-spacing-unit) * 3) auto',
        lineHeight: 1.7,
    },
    divider: {
        width: '80px',
        height: '4px',
        background: 'var(--medical-secondary)',
        margin: '0 auto calc(var(--medical-spacing-unit) * 3) auto',
        borderRadius: '2px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'calc(var(--medical-spacing-unit) * 2)',
        alignItems: 'start',
    },
    card: {
        background: 'var(--medical-white)',
        borderRadius: 'var(--medical-border-radius)',
        boxShadow: 'var(--medical-shadow)',
        border: '1px solid var(--medical-border)',
        padding: 'calc(var(--medical-spacing-unit) * 2)',
        transition: 'var(--medical-transition)',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 'var(--medical-shadow-hover)',
        },
    },
    emergencyCard: {
        borderColor: 'var(--medical-emergency)',
        background: 'rgba(229, 62, 62, 0.03)',
    },
    mapContainer: {
        borderRadius: 'var(--medical-border-radius)',
        overflow: 'hidden',
        boxShadow: 'var(--medical-shadow)',
        height: '450px',
        marginTop: 'calc(var(--medical-spacing-unit) * 2)',
        border: '1px solid var(--medical-border)',
    },
    hoursGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 'var(--medical-spacing-unit)',
        maxWidth: '800px',
        margin: '0 auto',
    },
    hourItem: {
        background: 'var(--medical-light)',
        padding: 'calc(var(--medical-spacing-unit) * 1.5)',
        borderRadius: 'var(--medical-border-radius)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'var(--medical-transition)',
    },
    dayText: {
        fontWeight: 600,
        color: 'var(--medical-dark)',
        marginBottom: 'calc(var(--medical-spacing-unit) * 0.5)',
        fontSize: '1.1rem',
    },
    timeText: {
        fontWeight: 500,
        color: 'var(--medical-primary)',
    },
    closedText: {
        color: 'var(--medical-emergency)',
    },
    // Responsive adjustments
    '@media (max-width: 768px)': {
        container: {
            width: '95%',
            padding: '0 var(--medical-spacing-unit)',
        },
        section: {
            padding: 'calc(var(--medical-spacing-unit) * 3) 0',
        },
        grid: {
            gridTemplateColumns: '1fr',
        },
    },
};

const ContactPage = () => {
    return (
        <>
            <Seo
                title="Contact - Centre de Radiologie Zerktouni 59"
                description="Contactez notre centre d'imagerie médicale à Casablanca. Prenez rendez-vous en ligne ou par téléphone pour vos examens de radiologie."
                keywords="contact radiologie, rendez-vous imagerie médicale, centre radiologie Casablanca"
            />

            {/* Hero Section */}
            <HeroBanner
                title="Contactez notre centre"
                subtitle="Notre équipe de radiologues est à votre disposition pour répondre à vos questions"
                badge="Prise de rendez-vous rapide et sécurisée"
                backgroundImage="/images/contact-hero.jpg"
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

                    {/* Location Section */}
                    <section style={{ ...medicalStyles.section, backgroundColor: 'var(--medical-light)' }}>
                        <div style={medicalStyles.container}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: '-100px' }}
                            >
                                <h2 style={medicalStyles.sectionTitle}>Notre Localisation</h2>
                                <div style={medicalStyles.divider}></div>
                                <p style={medicalStyles.sectionSubtitle}>
                                    Situé au cœur de Casablanca, notre centre est facilement accessible avec un parking privé pour nos patients
                                </p>

                                <div style={medicalStyles.mapContainer}>
                                    <iframe
                                        title="Localisation du Centre de Radiologie Zerktouni 59"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.86381382071!2d-7.624968424794662!3d33.58288504236879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x285ab0496732c533%3A0x6b9233dda00f303a!2sRADIOLOGIE%20ZERKTOUNI%2059!5e0!3m2!1sen!2sma!4v1747053160710!5m2!1sen!2sma"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Hours Section */}
                    <section style={medicalStyles.section}>
                        <div style={medicalStyles.container}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: '-100px' }}
                            >
                                <h2 style={medicalStyles.sectionTitle}>Horaires d'Ouverture</h2>
                                <div style={medicalStyles.divider}></div>
                                <p style={medicalStyles.sectionSubtitle}>
                                    Nous vous accueillons du lundi au samedi pour vos examens d'imagerie médicale
                                </p>

                                <div style={medicalStyles.hoursGrid}>
                                    {[
                                        { day: 'Lundi - Vendredi', time: '8h00 - 20h00' },
                                        { day: 'Samedi', time: '8h00 - 14h00' },
                                        { day: 'Dimanche', time: 'Fermé', isClosed: true },
                                        { day: 'Urgences', time: '24h/24', isEmergency: true },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            style={{
                                                ...medicalStyles.hourItem,
                                                ...(item.isEmergency && medicalStyles.emergencyCard),
                                            }}
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span style={medicalStyles.dayText}>{item.day}</span>
                                            <span style={{
                                                ...medicalStyles.timeText,
                                                ...(item.isClosed && medicalStyles.closedText),
                                                ...(item.isEmergency && { color: 'var(--medical-emergency)' }),
                                            }}>
                                                {item.time}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Additional Info Section */}
                    <section style={{ ...medicalStyles.section, backgroundColor: 'var(--medical-light)' }}>
                        <div style={medicalStyles.container}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true, margin: '-100px' }}
                                style={medicalStyles.grid}
                            >
                                <div style={medicalStyles.card}>
                                    <h3 style={{ ...medicalStyles.sectionTitle, textAlign: 'left', fontSize: '1.5rem' }}>
                                        Préparation aux examens
                                    </h3>
                                    <p>
                                        Certains examens nécessitent une préparation particulière. Consultez nos recommandations pour votre examen.
                                    </p>
                                </div>

                                <div style={medicalStyles.card}>
                                    <h3 style={{ ...medicalStyles.sectionTitle, textAlign: 'left', fontSize: '1.5rem' }}>
                                        Résultats en ligne
                                    </h3>
                                    <p>
                                        Accédez à vos résultats d'examens de manière sécurisée via notre plateforme en ligne après authentification.
                                    </p>
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