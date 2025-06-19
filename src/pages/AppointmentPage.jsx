import React from 'react';
import Seo from '../components/seo/Seo';
import { motion } from 'framer-motion';
import { FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
import HeroBanner from '../components/hero/HeroBanner';

const AppointmentPage = () => {
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
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            border: '1px solid #e2e8f0',
            '@media (min-width: 768px)': {
                padding: '2rem',
                marginBottom: '0',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
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
        preparationGrid: {
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: '1fr',
            '@media (min-width: 768px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem'
            }
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

    return (
        <>
            <Seo
                title="Prendre Rendez-vous - Centre de Radiologie"
                description="Prenez rendez-vous en ligne avec nos spécialistes en radiologie. Formulaire simple et sécurisé pour planifier votre examen."
                keywords="rendez-vous radiologie, examen médical, prise de rendez-vous en ligne"
            />

            {/* Hero Section */}
            <HeroBanner
                title="Prendre Rendez-vous"
                subtitle=""
                badge="Réservez votre examen en ligne ou par téléphone. Notre équipe est à votre disposition pour vous conseiller."
            />

            <div style={{ overflow: 'hidden' }}>
                {/* Section Prendre Rendez-vous */}
                <section style={getResponsiveStyle(styles.section)}>
                    <div style={styles.container}>
                        <div style={getResponsiveStyle(styles.grid)}>
                            {/* Formulaire de RDV */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, margin: '-100px' }}
                                style={getResponsiveStyle(styles.card)}
                            >
                                <h3 style={getResponsiveStyle(styles.cardTitle)}>
                                    <FaCalendarAlt style={styles.cardIcon} />
                                    Formulaire de rendez-vous
                                </h3>

                                <div style={getResponsiveStyle(styles.infoBox)}>
                                    <FaInfoCircle style={styles.infoIcon} />
                                    <div>
                                        <p style={{ margin: 0, fontWeight: '600', color: '#2d3748' }}>Informations importantes</p>
                                        <p style={{ margin: '0.5rem 0 0 0', color: '#4a5568', fontSize: '0.875rem' }}>
                                            Pour les examens nécessitant une préparation particulière, merci de nous contacter par téléphone.
                                        </p>
                                    </div>
                                </div>

                                <form>
                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Nom complet *</label>
                                        <input
                                            type="text"
                                            style={getResponsiveStyle(styles.formControl)}
                                            required
                                            aria-required="true"
                                        />
                                    </div>

                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Téléphone *</label>
                                        <input
                                            type="tel"
                                            style={getResponsiveStyle(styles.formControl)}
                                            required
                                            aria-required="true"
                                        />
                                    </div>

                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Email</label>
                                        <input
                                            type="email"
                                            style={getResponsiveStyle(styles.formControl)}
                                        />
                                    </div>

                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Type d'examen *</label>
                                        <select
                                            style={getResponsiveStyle(styles.formControl, styles.formSelect)}
                                            required
                                            aria-required="true"
                                        >
                                            <option value="">Sélectionnez un examen</option>
                                            <option value="radiologie">Radiologie standard</option>
                                            <option value="echographie">Échographie</option>
                                            <option value="mammographie">Mammographie</option>
                                            <option value="scanner">Scanner</option>
                                            <option value="irm">IRM</option>
                                            <option value="osteodensitometrie">Ostéodensitométrie</option>
                                        </select>
                                    </div>

                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Date souhaitée *</label>
                                        <input
                                            type="date"
                                            style={getResponsiveStyle(styles.formControl)}
                                            required
                                            aria-required="true"
                                        />
                                    </div>

                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Message</label>
                                        <textarea
                                            style={getResponsiveStyle(styles.formControl, styles.formTextarea)}
                                            placeholder="Précisez vos besoins ou contraintes particulières..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        style={getResponsiveStyle(styles.submitButton)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        aria-label="Envoyer la demande de rendez-vous"
                                    >
                                        Envoyer la demande
                                    </motion.button>
                                </form>
                            </motion.div>

                            {/* Informations de contact */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true, margin: '-100px' }}
                                style={getResponsiveStyle(styles.card)}
                            >
                                <h3 style={getResponsiveStyle(styles.cardTitle)}>
                                    <FaPhone style={styles.cardIcon} />
                                    Nous contacter
                                </h3>

                                <div style={getResponsiveStyle(styles.mb8)}>
                                    <h4 style={{
                                        fontSize: '1.125rem',
                                        marginBottom: '1rem',
                                        color: '#2d3748',
                                        '@media (min-width: 768px)': {
                                            fontSize: '1.25rem'
                                        }
                                    }}>
                                        Horaires d'ouverture
                                    </h4>
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
                                </div>

                                <div style={getResponsiveStyle(styles.mb8)}>
                                    <h4 style={{
                                        fontSize: '1.125rem',
                                        marginBottom: '1rem',
                                        color: '#2d3748',
                                        '@media (min-width: 768px)': {
                                            fontSize: '1.25rem'
                                        }
                                    }}>
                                        Coordonnées
                                    </h4>
                                    <div style={getResponsiveStyle(styles.contactItem)}>
                                        <FaPhone style={styles.contactIcon} />
                                        <a href="tel:+212522881111" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            05 22 88 11 11
                                        </a>
                                    </div>
                                    <div style={getResponsiveStyle(styles.contactItem)}>
                                        <FaPhone style={styles.contactIcon} />
                                        <a href="tel:+212611111111" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            06 11 11 11 11 (Urgences)
                                        </a>
                                    </div>
                                    <div style={getResponsiveStyle(styles.contactItem)}>
                                        <FaPhone style={styles.contactIcon} />
                                        <a href="mailto:contact@radiologie-aboumadi.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            contact@radiologie-aboumadi.com
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h4 style={{
                                        fontSize: '1.125rem',
                                        marginBottom: '1rem',
                                        color: '#2d3748',
                                        '@media (min-width: 768px)': {
                                            fontSize: '1.25rem'
                                        }
                                    }}>
                                        Adresse
                                    </h4>
                                    <div style={getResponsiveStyle(styles.contactItem)}>
                                        <FaMapMarkerAlt style={styles.contactIcon} />
                                        <div>
                                            <p style={{ margin: 0 }}>Centre de Radiologie Aboumadi</p>
                                            <p style={{ margin: '0.25rem 0 0 0' }}>123 Avenue des Cliniques</p>
                                            <p style={{ margin: '0.25rem 0 0 0' }}>Casablanca, Maroc</p>
                                            <a
                                                href="https://maps.google.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-block',
                                                    marginTop: '0.5rem',
                                                    color: '#3182ce',
                                                    textDecoration: 'none',
                                                    fontWeight: '500',
                                                    fontSize: '0.875rem'
                                                }}
                                            >
                                                Voir sur la carte →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section Préparation aux examens */}
                <section style={{
                    ...getResponsiveStyle(styles.section),
                    backgroundColor: '#f7fafc',
                    borderTop: '1px solid #e2e8f0',
                    borderBottom: '1px solid #e2e8f0'
                }}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: '-100px' }}
                            style={{ ...styles.textCenter, ...styles.mb8 }}
                        >
                            <h2 style={getResponsiveStyle(styles.sectionTitle)}>Préparation aux examens</h2>
                            <div style={styles.divider}></div>
                            <p style={getResponsiveStyle(styles.sectionSubtitle)}>
                                Informations importantes pour bien préparer votre examen
                            </p>
                        </motion.div>

                        <div style={getResponsiveStyle(styles.preparationGrid)}>
                            {[
                                {
                                    title: "IRM",
                                    content: "Prévoir 30 minutes à 1 heure selon l'examen. Pas de préparation particulière sauf pour les IRM abdominales (jeûne de 4 heures). Contre-indications : pacemaker, clips vasculaires, corps étrangers métalliques."
                                },
                                {
                                    title: "Scanner",
                                    content: "Certains scanners nécessitent une injection de produit de contraste (jeûne de 4 heures). Prévoir 15 à 30 minutes. Signaler toute allergie ou insuffisance rénale."
                                },
                                {
                                    title: "Échographie",
                                    content: "Échographie abdominale : venir à jeun depuis 6 heures avec une vessie pleine. Échographie pelvienne : vessie pleine (boire 1L d'eau 1h avant sans uriner)."
                                },
                                {
                                    title: "Mammographie",
                                    content: "Éviter les déodorants, talcs ou crèmes avant l'examen. Prévoir 20 minutes. Meilleure période : première partie du cycle menstruel."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    style={getResponsiveStyle(styles.card)}
                                >
                                    <h3 style={{
                                        ...getResponsiveStyle(styles.cardTitle),
                                        fontSize: '1.25rem',
                                        '@media (min-width: 768px)': {
                                            fontSize: '1.375rem'
                                        }
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.875rem',
                                        color: '#4a5568',
                                        lineHeight: '1.6',
                                        '@media (min-width: 768px)': {
                                            fontSize: '1rem'
                                        }
                                    }}>
                                        {item.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AppointmentPage;