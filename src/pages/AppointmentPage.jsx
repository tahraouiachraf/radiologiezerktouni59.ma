import React from 'react';
import Seo from '../components/seo/Seo';
import { motion } from 'framer-motion';
import { FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
import HeroBanner from '../components/hero/HeroBanner';

const AppointmentPage = () => {
    const styles = {
        container: {
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px'
        },
        section: {
            padding: '2rem 0',
            '@media (min-width: 768px)': {
                padding: '4rem 0'
            }
        },
        sectionTitle: {
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#3490dc',
            marginBottom: '1rem',
            textAlign: 'center',
            '@media (min-width: 768px)': {
                fontSize: '2.25rem'
            }
        },
        sectionSubtitle: {
            fontSize: '1rem',
            color: '#718096',
            maxWidth: '800px',
            margin: '0 auto 2rem auto',
            textAlign: 'center',
            padding: '0 1rem',
            '@media (min-width: 768px)': {
                fontSize: '1.125rem',
                marginBottom: '3rem'
            }
        },
        divider: {
            width: '6rem',
            height: '0.25rem',
            backgroundColor: '#38c172',
            margin: '0 auto 1.5rem auto'
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            '@media (min-width: 768px)': {
                padding: '2rem',
                marginBottom: '2rem'
            }
        },
        cardTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            '@media (min-width: 768px)': {
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
            }
        },
        cardIcon: {
            marginRight: '0.75rem',
            color: '#3490dc'
        },
        infoBox: {
            backgroundColor: '#f7fafc',
            borderLeft: '4px solid #3490dc',
            padding: '1rem',
            marginBottom: '1rem',
            display: 'flex',
            '@media (min-width: 768px)': {
                marginBottom: '1.5rem'
            }
        },
        infoIcon: {
            color: '#3490dc',
            marginRight: '0.75rem',
            fontSize: '1.25rem',
            flexShrink: 0
        },
        formGroup: {
            marginBottom: '1rem',
            '@media (min-width: 768px)': {
                marginBottom: '1.5rem'
            }
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
        formInput: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            transition: 'border-color 0.2s ease',
            '@media (min-width: 768px)': {
                fontSize: '1rem'
            }
        },
        formSelect: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            backgroundColor: '#ffffff',
            transition: 'border-color 0.2s ease',
            '@media (min-width: 768px)': {
                fontSize: '1rem'
            }
        },
        formTextarea: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            minHeight: '120px',
            transition: 'border-color 0.2s ease',
            '@media (min-width: 768px)': {
                fontSize: '1rem'
            }
        },
        submitButton: {
            backgroundColor: '#3490dc',
            color: '#ffffff',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            width: '100%',
            '@media (min-width: 768px)': {
                width: 'auto'
            }
        },
        contactItem: {
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '1rem',
            color: '#4a5568',
            fontSize: '0.875rem',
            '@media (min-width: 768px)': {
                fontSize: '1rem'
            }
        },
        contactIcon: {
            marginRight: '0.75rem',
            color: '#3490dc',
            flexShrink: 0,
            marginTop: '0.25rem'
        },
        grid: {
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(1, 1fr)',
            '@media (min-width: 992px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem'
            }
        },
        preparationGrid: {
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(1, 1fr)',
            '@media (min-width: 768px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem'
            }
        },
        textCenter: {
            textAlign: 'center'
        },
        mb2: { marginBottom: '0.5rem' },
        mb3: { marginBottom: '0.75rem' },
        mb4: { marginBottom: '1rem' },
        mb6: { marginBottom: '1.5rem' },
        mb8: { marginBottom: '2rem' },
        mb12: { marginBottom: '3rem' }
    };

    // Fonction pour gérer les styles responsives
    const getResponsiveStyle = (styleObj) => {
        return {
            ...Object.entries(styleObj).reduce((acc, [key, value]) => {
                if (key.startsWith('@media')) return acc;
                acc[key] = value;
                return acc;
            }, {}),
            ...(styleObj['@media (min-width: 768px)'] || {})
        };
    };

    return (
        <>
            <Seo title="Prendre Rendez-vous - Centre de Radiologie" />
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
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                style={getResponsiveStyle(styles.card)}
                            >
                                <h3 style={getResponsiveStyle(styles.cardTitle)}>
                                    <FaCalendarAlt style={styles.cardIcon} />
                                    Formulaire de rendez-vous
                                </h3>

                                <div style={getResponsiveStyle(styles.infoBox)}>
                                    <FaInfoCircle style={styles.infoIcon} />
                                    <div>
                                        <p style={{ margin: 0, fontWeight: '600' }}>Informations importantes</p>
                                        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem' }}>
                                            Pour les examens nécessitant une préparation particulière, merci de nous contacter par téléphone.
                                        </p>
                                    </div>
                                </div>

                                <form>
                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Nom complet *</label>
                                        <input
                                            type="text"
                                            style={getResponsiveStyle(styles.formInput)}
                                            required
                                        />
                                    </div>

                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Téléphone *</label>
                                        <input
                                            type="tel"
                                            style={getResponsiveStyle(styles.formInput)}
                                            required
                                        />
                                    </div>

                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Email</label>
                                        <input
                                            type="email"
                                            style={getResponsiveStyle(styles.formInput)}
                                        />
                                    </div>

                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Type d'examen *</label>
                                        <select style={getResponsiveStyle(styles.formSelect)} required>
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
                                            style={getResponsiveStyle(styles.formInput)}
                                            required
                                        />
                                    </div>

                                    <div style={getResponsiveStyle(styles.formGroup)}>
                                        <label style={getResponsiveStyle(styles.formLabel)}>Message</label>
                                        <textarea
                                            style={getResponsiveStyle(styles.formTextarea)}
                                            placeholder="Précisez vos besoins ou contraintes particulières..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        style={getResponsiveStyle(styles.submitButton)}
                                        whileHover={{ backgroundColor: '#2779bd' }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Envoyer la demande
                                    </motion.button>
                                </form>
                            </motion.div>

                            {/* Informations de contact */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                style={getResponsiveStyle(styles.card)}
                            >
                                <h3 style={getResponsiveStyle(styles.cardTitle)}>
                                    <FaPhone style={styles.cardIcon} />
                                    Nous contacter
                                </h3>

                                <div style={styles.mb8}>
                                    <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#2d3748' }}>Horaires d'ouverture</h4>
                                    <div style={styles.contactItem}>
                                        <FaClock style={styles.contactIcon} />
                                        <div>
                                            <p style={{ margin: 0, fontWeight: '600' }}>Lundi - Vendredi</p>
                                            <p style={{ margin: 0 }}>8h00 - 19h00</p>
                                        </div>
                                    </div>
                                    <div style={styles.contactItem}>
                                        <FaClock style={styles.contactIcon} />
                                        <div>
                                            <p style={{ margin: 0, fontWeight: '600' }}>Samedi</p>
                                            <p style={{ margin: 0 }}>9h00 - 13h00</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={styles.mb8}>
                                    <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#2d3748' }}>Coordonnées</h4>
                                    <div style={styles.contactItem}>
                                        <FaPhone style={styles.contactIcon} />
                                        <span>05 22 22 22 22</span>
                                    </div>
                                    <div style={styles.contactItem}>
                                        <FaPhone style={styles.contactIcon} />
                                        <span>06 11 11 11 11 (Urgences)</span>
                                    </div>
                                    <div style={styles.contactItem}>
                                        <FaPhone style={styles.contactIcon} />
                                        <span>contact@radiologie-aboumadi.com</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#2d3748' }}>Adresse</h4>
                                    <div style={styles.contactItem}>
                                        <FaMapMarkerAlt style={styles.contactIcon} />
                                        <div>
                                            <p style={{ margin: 0 }}>Centre de Radiologie Aboumadi</p>
                                            <p style={{ margin: 0 }}>123 Avenue des Cliniques</p>
                                            <p style={{ margin: 0 }}>Casablanca, Maroc</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section Préparation aux examens */}
                <section style={{ ...getResponsiveStyle(styles.section), backgroundColor: '#f7fafc' }}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
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
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={getResponsiveStyle(styles.card)}
                                >
                                    <h3 style={{ ...getResponsiveStyle(styles.cardTitle), fontSize: '1.25rem' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: '0.875rem' }}>{item.content}</p>
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