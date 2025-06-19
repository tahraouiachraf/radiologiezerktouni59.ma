import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaUser, FaCalendarAlt, FaStethoscope, FaInfoCircle } from 'react-icons/fa';

const Contact = () => {
    // Styles CSS en objets JavaScript avec approche mobile-first
    const styles = {
        container: {
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            '@media (min-width: 768px)': {
                padding: '0 1.5rem'
            }
        },
        section: {
            padding: '3rem 0',
            backgroundColor: '#f8fafc',
            '@media (min-width: 768px)': {
                padding: '5rem 0'
            }
        },
        sectionTitle: {
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#2c5282',
            marginBottom: '1rem',
            textAlign: 'center',
            lineHeight: '1.3',
            '@media (min-width: 768px)': {
                fontSize: '2.25rem'
            }
        },
        sectionSubtitle: {
            fontSize: '1rem',
            color: '#4a5568',
            maxWidth: '800px',
            margin: '0 auto 2rem auto',
            textAlign: 'center',
            padding: '0 1rem',
            lineHeight: '1.6',
            '@media (min-width: 768px)': {
                fontSize: '1.125rem',
                marginBottom: '3rem'
            }
        },
        divider: {
            width: '4rem',
            height: '0.25rem',
            backgroundColor: '#38b2ac',
            margin: '0 auto 2rem auto',
            '@media (min-width: 768px)': {
                marginBottom: '3rem'
            }
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            border: '1px solid #e2e8f0',
            '@media (min-width: 768px)': {
                padding: '2rem',
                marginBottom: '0',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
            }
        },
        cardTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            '@media (min-width: 768px)': {
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
            }
        },
        cardIcon: {
            marginRight: '0.75rem',
            color: '#3182ce',
            fontSize: '1.25rem'
        },
        infoBox: {
            backgroundColor: '#ebf8ff',
            borderLeft: '4px solid #3182ce',
            padding: '1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            borderRadius: '0.25rem'
        },
        infoIcon: {
            color: '#3182ce',
            marginRight: '0.75rem',
            fontSize: '1.25rem',
            flexShrink: 0,
            marginTop: '0.125rem'
        },
        formGroup: {
            marginBottom: '1.5rem'
        },
        formLabel: {
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#4a5568',
            marginBottom: '0.5rem',
            '@media (min-width: 768px)': {
                fontSize: '1rem'
            }
        },
        formControl: {
            width: '100%',
            padding: '0.75rem 1rem',
            border: '1px solid #cbd5e0',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            transition: 'all 0.2s ease',
            backgroundColor: '#fff',
            '&:focus': {
                outline: 'none',
                borderColor: '#3182ce',
                boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.2)'
            },
            '@media (min-width: 768px)': {
                fontSize: '1rem'
            }
        },
        formSelect: {
            appearance: 'none',
            backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1rem'
        },
        formTextarea: {
            minHeight: '120px',
            resize: 'vertical'
        },
        submitButton: {
            backgroundColor: '#3182ce',
            color: '#ffffff',
            padding: '0.875rem 1.75rem',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: '100%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                backgroundColor: '#2c5282'
            },
            '@media (min-width: 768px)': {
                width: 'auto'
            }
        },
        contactItem: {
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '1.25rem',
            color: '#4a5568',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            '@media (min-width: 768px)': {
                fontSize: '1rem'
            }
        },
        contactIcon: {
            marginRight: '0.75rem',
            color: '#3182ce',
            flexShrink: 0,
            marginTop: '0.25rem',
            fontSize: '1rem'
        },
        grid: {
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: '1fr',
            '@media (min-width: 992px)': {
                gridTemplateColumns: 'repeat(2, 1fr)'
            }
        },
        contactCard: {
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            border: '1px solid #e2e8f0',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            },
            '@media (min-width: 768px)': {
                padding: '2rem'
            }
        },
        emergencyCard: {
            borderColor: '#feb2b2',
            backgroundColor: '#fff5f5'
        },
        contactIconLarge: {
            fontSize: '1.5rem',
            padding: '1rem',
            borderRadius: '50%',
            backgroundColor: '#ebf8ff',
            color: '#3182ce',
            marginBottom: '1rem'
        },
        emergencyIcon: {
            backgroundColor: '#fed7d7',
            color: '#e53e3e'
        },
        textCenter: {
            textAlign: 'center'
        },
        mb4: { marginBottom: '1rem' },
        mb6: { marginBottom: '1.5rem' },
        mb8: { marginBottom: '2rem' }
    };

    // Fonction pour gérer les styles responsives
    const getResponsiveStyle = (baseStyle, mediaStyles = {}) => {
        return {
            ...baseStyle,
            ...mediaStyles
        };
    };

    const contactInfo = [
        {
            icon: <FaPhone />,
            title: "Téléphone",
            content: "+212 5228-81111",
            link: "tel:+212522881111",
            description: "Appelez-nous pour prendre rendez-vous ou informations",
            isEmergency: false
        },
        {
            icon: <FaEnvelope />,
            title: "Email Professionnel",
            content: "contact@radiologiezerktouni59.ma",
            link: "mailto:contact@radiologiezerktouni59.ma",
            description: "Pour toutes demandes médicales ou administratives",
            isEmergency: false
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Adresse du Centre",
            content: "59 Bd Mohammed Zerktouni, Casablanca",
            link: "https://goo.gl/maps/XYZ123",
            description: "Accès facile depuis tout Casablanca",
            isEmergency: false
        }
    ];

    return (
        <section style={getResponsiveStyle(styles.section)}>
            <div style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={styles.textCenter}
                >
                    <h2 style={getResponsiveStyle(styles.sectionTitle)}>Contactez-nous</h2>
                    <div style={styles.divider}></div>
                    <p style={getResponsiveStyle(styles.sectionSubtitle)}>
                        Plusieurs moyens pour nous contacter selon vos besoins. Notre équipe est à votre disposition pour répondre à toutes vos questions.
                    </p>
                </motion.div>

                <div style={getResponsiveStyle(styles.grid)}>
                    {/* Informations de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    style={{
                                        ...getResponsiveStyle(styles.contactCard),
                                        ...(item.isEmergency ? styles.emergencyCard : {}),
                                        textDecoration: 'none',
                                        color: 'inherit'
                                    }}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div style={{
                                        ...styles.contactIconLarge,
                                        ...(item.isEmergency ? styles.emergencyIcon : {})
                                    }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.2rem',
                                        fontWeight: '600',
                                        color: item.isEmergency ? '#e53e3e' : '#2d3748',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        color: item.isEmergency ? '#e53e3e' : '#3182ce',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {item.content}
                                    </p>
                                    <p style={{
                                        fontSize: '0.875rem',
                                        color: '#4a5568',
                                        margin: 0
                                    }}>
                                        {item.description}
                                    </p>
                                </motion.a>
                            ))}
                        </div>

                        {/* Horaires d'ouverture */}
                        <motion.div
                            style={getResponsiveStyle(styles.card, { marginTop: '2rem' })}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={getResponsiveStyle(styles.cardTitle)}>
                                <FaClock style={styles.cardIcon} />
                                Horaires d'ouverture
                            </h3>

                            <div style={getResponsiveStyle(styles.contactItem)}>
                                <FaClock style={styles.contactIcon} />
                                <div>
                                    <p style={{ margin: 0, fontWeight: '600' }}>Lundi - Vendredi</p>
                                    <p style={{ margin: 0 }}>8h00 - 19h00</p>
                                </div>
                            </div>
                            <div style={getResponsiveStyle(styles.contactItem)}>
                                <FaClock style={styles.contactIcon} />
                                <div>
                                    <p style={{ margin: 0, fontWeight: '600' }}>Samedi</p>
                                    <p style={{ margin: 0 }}>9h00 - 13h00</p>
                                </div>
                            </div>
                            <div style={getResponsiveStyle(styles.contactItem)}>
                                <FaClock style={styles.contactIcon} />
                                <div>
                                    <p style={{ margin: 0, fontWeight: '600' }}>Dimanche</p>
                                    <p style={{ margin: 0 }}>Urgences uniquement</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Formulaire de contact */}
                    <motion.div
                        style={getResponsiveStyle(styles.card)}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={getResponsiveStyle(styles.cardTitle)}>
                            <FaEnvelope style={styles.cardIcon} />
                            Formulaire de Contact
                        </h3>

                        <div style={getResponsiveStyle(styles.infoBox)}>
                            <FaInfoCircle style={styles.infoIcon} />
                            <div>
                                <p style={{ margin: 0, fontWeight: '600', color: '#2d3748' }}>Réponse rapide garantie</p>
                                <p style={{ margin: '0.5rem 0 0 0', color: '#4a5568', fontSize: '0.875rem' }}>
                                    Nous nous engageons à répondre à votre demande dans les 24 heures ouvrables.
                                </p>
                            </div>
                        </div>

                        <form style={{ display: 'grid', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={getResponsiveStyle(styles.formGroup)}>
                                    <label htmlFor="name" style={getResponsiveStyle(styles.formLabel)}>
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        style={getResponsiveStyle(styles.formControl)}
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div style={getResponsiveStyle(styles.formGroup)}>
                                    <label htmlFor="email" style={getResponsiveStyle(styles.formLabel)}>
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        style={getResponsiveStyle(styles.formControl)}
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>

                            <div style={getResponsiveStyle(styles.formGroup)}>
                                <label htmlFor="subject" style={getResponsiveStyle(styles.formLabel)}>
                                    Objet *
                                </label>
                                <select
                                    id="subject"
                                    style={getResponsiveStyle(styles.formControl, styles.formSelect)}
                                    required
                                    aria-required="true"
                                >
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="rendezvous">Prise de rendez-vous</option>
                                    <option value="resultats">Demande de résultats</option>
                                    <option value="urgence">Urgence médicale</option>
                                    <option value="information">Demande d'information</option>
                                    <option value="autre">Autre demande</option>
                                </select>
                            </div>

                            <div style={getResponsiveStyle(styles.formGroup)}>
                                <label htmlFor="message" style={getResponsiveStyle(styles.formLabel)}>
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    style={getResponsiveStyle(styles.formControl, styles.formTextarea)}
                                    required
                                    aria-required="true"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                style={getResponsiveStyle(styles.submitButton)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Envoyer le message"
                            >
                                <FaEnvelope style={{ marginRight: '0.5rem' }} />
                                Envoyer le message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;