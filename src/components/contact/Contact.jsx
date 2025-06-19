import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaUser, FaCalendarAlt, FaStethoscope, FaInfoCircle } from 'react-icons/fa';

const Contact = () => {
    // Styles CSS en objets JavaScript
    const styles = {
        container: {
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem'
        },
        section: {
            padding: '3rem 0'
        },
        sectionTitle: {
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#2c5282',
            marginBottom: '1rem',
            textAlign: 'center',
            lineHeight: '1.3'
        },
        sectionSubtitle: {
            fontSize: '1rem',
            color: '#4a5568',
            maxWidth: '800px',
            margin: '0 auto 2rem auto',
            textAlign: 'center',
            padding: '0 1rem',
            lineHeight: '1.6'
        },
        divider: {
            width: '4rem',
            height: '0.25rem',
            backgroundColor: '#38b2ac',
            margin: '0 auto 2rem auto'
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            border: '1px solid #e2e8f0',
            height: 'fit-content'
        },
        cardTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center'
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
            marginBottom: '0.5rem'
        },
        formControl: {
            width: '100%',
            padding: '0.75rem 1rem',
            border: '1px solid #cbd5e0',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            transition: 'all 0.2s ease',
            backgroundColor: '#fff',
            boxSizing: 'border-box'
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
            justifyContent: 'center'
        },
        contactItem: {
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '1.25rem',
            color: '#4a5568',
            fontSize: '0.875rem',
            lineHeight: '1.6'
        },
        contactIcon: {
            marginRight: '0.75rem',
            color: '#3182ce',
            flexShrink: 0,
            marginTop: '0.25rem',
            fontSize: '1rem'
        },
        textCenter: {
            textAlign: 'center'
        },
        mb4: { marginBottom: '1rem' },
        mb6: { marginBottom: '1.5rem' },
        mb8: { marginBottom: '2rem' }
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
        <>
            <style>
                {`
                .contact-grid {
                    display: grid;
                    gap: 2rem;
                    grid-template-columns: 1fr;
                }

                @media (min-width: 768px) {
                    .contact-container {
                        padding: 0 1.5rem;
                    }
                    
                    .contact-section {
                        padding: 5rem 0;
                    }
                    
                    .contact-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 2.5rem;
                    }
                    
                    .contact-card {
                        padding: 2rem;
                        margin-bottom: 0;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    
                    .contact-section-title {
                        font-size: 2.25rem;
                    }
                    
                    .contact-section-subtitle {
                        font-size: 1.125rem;
                        margin-bottom: 3rem;
                    }
                    
                    .contact-divider {
                        margin-bottom: 3rem;
                    }
                    
                    .contact-card-title {
                        font-size: 1.5rem;
                        margin-bottom: 1.5rem;
                    }
                    
                    .contact-form-label {
                        font-size: 1rem;
                    }
                    
                    .contact-form-control {
                        font-size: 1rem;
                    }
                    
                    .contact-submit-button {
                        width: auto;
                    }
                    
                    .contact-contact-item {
                        font-size: 1rem;
                    }
                }

                @media (min-width: 992px) {
                    .contact-grid {
                        grid-template-columns: 1fr 1.5fr;
                    }
                }

                .contact-form-control:focus {
                    outline: none;
                    border-color: #3182ce;
                    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
                }

                .contact-submit-button:hover {
                    background-color: #2c5282;
                }
                `}
            </style>

            <section className="contact-section" style={styles.section}>
                <div className="contact-container" style={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        style={styles.textCenter}
                    >
                        <h2 className="contact-section-title" style={styles.sectionTitle}>Contactez-nous</h2>
                        <div className="contact-divider" style={styles.divider}></div>
                        <p className="contact-section-subtitle" style={styles.sectionSubtitle}>
                            Plusieurs moyens pour nous contacter selon vos besoins. Notre équipe est à votre disposition pour répondre à toutes vos questions.
                        </p>
                    </motion.div>

                    <div className="contact-grid">
                        {/* Colonne de gauche - Formulaire de contact */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: '-100px' }}
                            className="contact-card"
                            style={styles.card}
                        >
                            <h3 className="contact-card-title" style={styles.cardTitle}>
                                <FaPhone style={styles.cardIcon} />
                                Nos coordonnées
                            </h3>

                            <div style={styles.mb8}>
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="contact-contact-item" style={styles.contactItem}>
                                        {item.icon}
                                        <div>
                                            <p style={{ margin: 0, fontWeight: '600' }}>{item.title}</p>
                                            <a
                                                href={item.link}
                                                target={item.link.startsWith('http') ? '_blank' : '_self'}
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: '#3182ce',
                                                    textDecoration: 'none',
                                                    display: 'block',
                                                    margin: '0.25rem 0'
                                                }}
                                            >
                                                {item.content}
                                            </a>
                                            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <h4 style={{
                                    fontSize: '1.125rem',
                                    marginBottom: '1rem',
                                    color: '#2d3748'
                                }}>
                                    Horaires d'ouverture
                                </h4>
                                <div className="contact-contact-item" style={styles.contactItem}>
                                    <FaClock style={styles.contactIcon} />
                                    <div>
                                        <p style={{ margin: 0, fontWeight: '600' }}>Lundi - Vendredi</p>
                                        <p style={{ margin: 0 }}>8h00 - 19h00</p>
                                    </div>
                                </div>
                                <div className="contact-contact-item" style={styles.contactItem}>
                                    <FaClock style={styles.contactIcon} />
                                    <div>
                                        <p style={{ margin: 0, fontWeight: '600' }}>Samedi</p>
                                        <p style={{ margin: 0 }}>9h00 - 13h00</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Colonne de droite - Informations de contact */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: '-100px' }}
                            className="contact-card"
                            style={styles.card}
                        >
                            <h3 className="contact-card-title" style={styles.cardTitle}>
                                <FaEnvelope style={styles.cardIcon} />
                                Formulaire de Contact
                            </h3>

                            <div style={styles.infoBox}>
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
                                    <div style={styles.formGroup}>
                                        <label htmlFor="name" className="contact-form-label" style={styles.formLabel}>
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="contact-form-control"
                                            style={styles.formControl}
                                            required
                                            aria-required="true"
                                        />
                                    </div>
                                    <div style={styles.formGroup}>
                                        <label htmlFor="email" className="contact-form-label" style={styles.formLabel}>
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="contact-form-control"
                                            style={styles.formControl}
                                            required
                                            aria-required="true"
                                        />
                                    </div>
                                </div>

                                <div style={styles.formGroup}>
                                    <label htmlFor="subject" className="contact-form-label" style={styles.formLabel}>
                                        Objet *
                                    </label>
                                    <select
                                        id="subject"
                                        className="contact-form-control"
                                        style={{ ...styles.formControl, ...styles.formSelect }}
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

                                <div style={styles.formGroup}>
                                    <label htmlFor="message" className="contact-form-label" style={styles.formLabel}>
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="contact-form-control"
                                        style={{ ...styles.formControl, ...styles.formTextarea }}
                                        required
                                        aria-required="true"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="contact-submit-button"
                                    style={styles.submitButton}
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
        </>
    );
};

export default Contact;