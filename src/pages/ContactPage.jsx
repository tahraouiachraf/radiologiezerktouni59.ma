import { motion } from 'framer-motion';
import Seo from '../components/seo/Seo.jsx';
import Contact from '../components/contact/Contact.jsx';
import Hero from '../components/hero/Hero.jsx';
import HeroBanner from '../components/hero/HeroBanner.jsx';

// Styles professionnels unifiés
const professionalStyles = {
    root: {
        '--professional-primary': '#0077B6',
        '--professional-secondary': '#00A8CC',
        '--professional-accent': '#FFB700',
        '--professional-dark': '#1A1A1A',
        '--professional-gray': '#F8F9FA',
        '--professional-light-gray': '#E9ECEF',
        '--professional-white': '#FFFFFF',
        '--professional-shadow': '0 4px 20px rgba(0, 0, 0, 0.1)',
        '--professional-shadow-hover': '0 8px 30px rgba(0, 0, 0, 0.15)',
        '--professional-transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '--professional-border-radius': '12px',
    },
    page: {
        minHeight: '100vh',
        backgroundColor: 'var(--professional-white)',
    },
    wrapper: {
        overflowX: 'hidden',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    heroSection: {
        background: 'linear-gradient(135deg, var(--professional-primary) 0%, var(--professional-secondary) 100%)',
        color: 'var(--professional-white)',
        padding: '120px 0px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    heroContent: {
        position: 'relative',
        zIndex: 2,
        opacity: 1,
    },
    heroTitle: {
        fontSize: '3.5rem',
        fontWeight: 700,
        marginBottom: '20px',
        lineHeight: 1.2,
        textShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 10px',
    },
    heroSubtitle: {
        fontSize: '1.3rem',
        fontWeight: 300,
        marginBottom: '30px',
        opacity: 0.9,
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.6,
    },
    heroBadge: {
        display: 'inline-block',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '12px 24px',
        borderRadius: '30px',
        fontWeight: 500,
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    section: {
        padding: '100px 0',
        backgroundColor: 'var(--professional-white)',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: 'var(--professional-dark)',
        textAlign: 'center',
        marginBottom: '15px',
    },
    sectionSubtitle: {
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '50px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
    },
    infoHeader: {
        marginBottom: '30px',
    },
    infoTitle: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: 'var(--professional-dark)',
        marginBottom: '15px',
        position: 'relative',
        lineHeight: 1.3,
    },
    infoBadge: {
        display: 'inline-block',
        background: 'linear-gradient(90deg, var(--professional-accent), #FFC107)',
        color: 'var(--professional-dark)',
        padding: '8px 20px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    description: {
        fontSize: '1.1rem',
        lineHeight: 1.8,
        color: '#666',
        marginBottom: '40px',
    },
    contactDetails: {
        display: 'grid',
        gap: '20px',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '20px',
        background: 'var(--professional-white)',
        padding: '30px',
        borderRadius: 'var(--professional-border-radius)',
        boxShadow: 'var(--professional-shadow)',
        border: '1px solid var(--professional-light-gray)',
        transition: 'var(--professional-transition)',
        cursor: 'pointer',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 'var(--professional-shadow-hover)',
            borderColor: 'var(--professional-primary)',
        },
    },
    contactIcon: {
        fontSize: '1.8rem',
        color: 'var(--professional-primary)',
        background: 'rgba(0, 119, 182, 0.1)',
        padding: '15px',
        borderRadius: '50%',
        minWidth: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactText: {
        flex: 1,
    },
    contactTitle: {
        fontSize: '1.2rem',
        fontWeight: 600,
        color: 'var(--professional-dark)',
        marginBottom: '8px',
    },
    contactLink: {
        fontSize: '1rem',
        fontWeight: 500,
        color: 'var(--professional-primary)',
        textDecoration: 'none',
        marginBottom: '5px',
        display: 'block',
        transition: 'var(--professional-transition)',
        '&:hover': {
            color: 'var(--professional-secondary)',
            textDecoration: 'underline',
        },
    },
    formContainer: {
        background: 'var(--professional-gray)',
        padding: '50px',
        borderRadius: 'var(--professional-border-radius)',
        boxShadow: 'var(--professional-shadow)',
    },
    formHeader: {
        textAlign: 'center',
        marginBottom: '40px',
    },
    formTitle: {
        fontSize: '2.2rem',
        fontWeight: 700,
        color: 'var(--professional-dark)',
        marginBottom: '10px',
    },
    formSubtitle: {
        color: '#666',
        fontSize: '1rem',
        lineHeight: 1.5,
    },
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
    },
    formRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    formLabel: {
        fontWeight: 600,
        color: 'var(--professional-dark)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.95rem',
    },
    formInput: {
        padding: '15px 20px',
        border: '2px solid var(--professional-light-gray)',
        borderRadius: '8px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        background: 'var(--professional-white)',
        transition: 'var(--professional-transition)',
        resize: 'none',
        '&:focus': {
            outline: 'none',
            borderColor: 'var(--professional-primary)',
            boxShadow: '0 0 0 3px rgba(0, 119, 182, 0.1)',
            transform: 'translateY(-1px)',
        },
    },
    submitBtn: {
        background: 'linear-gradient(135deg, var(--professional-primary), var(--professional-secondary))',
        color: 'var(--professional-white)',
        border: 'none',
        padding: '18px 40px',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'var(--professional-transition)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        marginTop: '10px',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 'var(--professional-shadow-hover)',
        },
    },
    hoursGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
    },
    hourItem: {
        background: 'var(--professional-gray)',
        padding: '25px',
        borderRadius: 'var(--professional-border-radius)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid transparent',
        transition: 'var(--professional-transition)',
        '&:hover': {
            borderColor: 'var(--professional-primary)',
            transform: 'translateY(-2px)',
        },
    },
    closedItem: {
        background: '#FFF5F5',
        borderColor: '#FFB3B3',
    },
    dayText: {
        fontWeight: 600,
        color: 'var(--professional-dark)',
    },
    timeText: {
        fontWeight: 500,
        color: 'var(--professional-primary)',
    },
    closedTime: {
        color: '#D32F2F',
    },
    // Responsive styles
    responsive: {
        tablet: {
            grid: {
                gap: '50px',
            },
            formContainer: {
                padding: '30px',
            },
        },
        mobile: {
            heroTitle: {
                fontSize: '2.5rem',
                paddingTop: '25px',
            },
            grid: {
                gridTemplateColumns: '1fr',
                gap: '40px',
            },
            formRow: {
                gridTemplateColumns: '1fr',
                gap: '15px',
            },
            hoursGrid: {
                gridTemplateColumns: '1fr',
            },
            contactItem: {
                padding: '20px',
            },
            formContainer: {
                padding: '25px',
            },
        },
        smallMobile: {
            heroSection: {
                padding: '80px 0 60px',
            },
            heroTitle: {
                fontSize: '2rem',
            },
            heroSubtitle: {
                fontSize: '1.1rem',
            },
            section: {
                padding: '60px 0',
            },
            contactItem: {
                flexDirection: 'column',
                textAlign: 'center',
                gap: '15px',
            },
            infoTitle: {
                fontSize: '1.8rem',
            },
            formTitle: {
                fontSize: '1.8rem',
            },
        },
    },
};

const ContactPage = () => {
    return (
        <>
            <Seo title="Contact - Radiologie Zerktouni 59" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={professionalStyles.page}
            >
                <div style={professionalStyles.wrapper}>
                    {/* Hero Section */}
                    <HeroBanner
                        title="Contactez-nous"
                        subtitle="Prenez rendez-vous ou posez-nous vos questions"
                        badge="Centre de Radiologie Professionnel"
                    />

                    {/* Main Contact Section */}
                    <Contact professionalStyles={professionalStyles} />

                    {/* Map Section */}
                    <section style={professionalStyles.section}>
                        <div style={professionalStyles.container}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 style={professionalStyles.sectionTitle}>Notre Localisation</h2>
                                <p style={professionalStyles.sectionSubtitle}>
                                    Situés au cœur de Casablanca pour votre facilité d'accès
                                </p>
                                <div style={{ borderRadius: 'var(--professional-border-radius)', overflow: 'hidden', boxShadow: 'var(--professional-shadow)' }}>
                                    <iframe
                                        title="Localisation Radiologie Zerktouni 59"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.86381382071!2d-7.624968424794662!3d33.58288504236879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x285ab0496732c533%3A0x6b9233dda00f303a!2sRADIOLOGIE%20ZERKTOUNI%2059!5e0!3m2!1sen!2sma!4v1747053160710!5m2!1sen!2sma"
                                        width="100%"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Hours Section */}
                    <section style={{ ...professionalStyles.section, padding: '60px 0' }}>
                        <div style={professionalStyles.container}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                            >
                                <h3 style={{ ...professionalStyles.sectionTitle, fontSize: '2rem' }}>Horaires d'Ouverture</h3>
                                <div style={professionalStyles.hoursGrid}>
                                    <div style={professionalStyles.hourItem}>
                                        <span style={professionalStyles.dayText}>Lundi - Vendredi</span>
                                        <span style={professionalStyles.timeText}>8h00 - 20h00</span>
                                    </div>
                                    <div style={professionalStyles.hourItem}>
                                        <span style={professionalStyles.dayText}>Samedi</span>
                                        <span style={professionalStyles.timeText}>8h00 - 14h00</span>
                                    </div>
                                    <div style={{ ...professionalStyles.hourItem, ...professionalStyles.closedItem }}>
                                        <span style={professionalStyles.dayText}>Dimanche</span>
                                        <span style={{ ...professionalStyles.timeText, ...professionalStyles.closedTime }}>Fermé</span>
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