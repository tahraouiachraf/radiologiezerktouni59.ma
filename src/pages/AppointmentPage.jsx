import React from 'react';
import Seo from '../components/seo/Seo';
import { motion } from 'framer-motion';
import { FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
import HeroBanner from '../components/hero/HeroBanner';

const AppointmentPage = () => {
    // Styles CSS en objets JavaScript
    const styles = {
        container: {
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px'
        },
        section: {
            padding: '4rem 0'
        },
        sectionTitle: {
            fontSize: '2.25rem',
            fontWeight: '700',
            color: '#3490dc',
            marginBottom: '1rem',
            textAlign: 'center'
        },
        sectionSubtitle: {
            fontSize: '1.125rem',
            color: '#718096',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            textAlign: 'center'
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
            padding: '2rem',
            marginBottom: '2rem'
        },
        cardTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center'
        },
        cardIcon: {
            marginRight: '0.75rem',
            color: '#3490dc'
        },
        infoBox: {
            backgroundColor: '#f7fafc',
            borderLeft: '4px solid #3490dc',
            padding: '1rem',
            marginBottom: '1.5rem',
            display: 'flex'
        },
        infoIcon: {
            color: '#3490dc',
            marginRight: '0.75rem',
            fontSize: '1.25rem'
        },
        formGroup: {
            marginBottom: '1.5rem'
        },
        formLabel: {
            display: 'block',
            fontSize: '1rem',
            fontWeight: '600',
            color: '#4a5568',
            marginBottom: '0.5rem'
        },
        formInput: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            transition: 'border-color 0.2s ease'
        },
        formInputFocus: {
            borderColor: '#3490dc',
            outline: 'none'
        },
        formSelect: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            backgroundColor: '#ffffff',
            transition: 'border-color 0.2s ease'
        },
        formTextarea: {
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            minHeight: '120px',
            transition: 'border-color 0.2s ease'
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
            transition: 'background-color 0.2s ease'
        },
        submitButtonHover: {
            backgroundColor: '#2779bd'
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            color: '#4a5568'
        },
        contactIcon: {
            marginRight: '0.75rem',
            color: '#3490dc'
        },
        grid: {
            display: 'grid',
            gap: '2rem'
        },
        gridCols1: {
            gridTemplateColumns: 'repeat(1, 1fr)'
        },
        gridCols2: {
            gridTemplateColumns: 'repeat(2, 1fr)'
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

    return (
        <>
            <Seo title="Prendre Rendez-vous - Centre de Radiologie" />
            <div style={{ overflow: 'hidden' }}>
                {/* Section Prendre Rendez-vous */}
                <section style={styles.section}>
                    {/* Hero Section */}
                    <HeroBanner
                        title="Prendre Rendez-vous"
                        subtitle=""
                        badge="Réservez votre examen en ligne ou par téléphone. Notre équipe est à votre disposition pour vous conseiller."
                    />
                    <div style={styles.container}>
                        <div style={{ ...styles.grid, ...styles.gridCols2 }}>
                            {/* Formulaire de RDV */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                style={styles.card}
                            >
                                <h3 style={styles.cardTitle}>
                                    <FaCalendarAlt style={styles.cardIcon} />
                                    Formulaire de rendez-vous
                                </h3>

                                <div style={styles.infoBox}>
                                    <FaInfoCircle style={styles.infoIcon} />
                                    <div>
                                        <p style={{ margin: 0, fontWeight: '600' }}>Informations importantes</p>
                                        <p style={{ margin: '0.5rem 0 0 0' }}>
                                            Pour les examens nécessitant une préparation particulière, merci de nous contacter par téléphone.
                                        </p>
                                    </div>
                                </div>

                                <form>
                                    <div style={styles.formGroup}>
                                        <label style={styles.formLabel}>Nom complet *</label>
                                        <input
                                            type="text"
                                            style={styles.formInput}
                                            required
                                        />
                                    </div>

                                    <div style={styles.formGroup}>
                                        <label style={styles.formLabel}>Téléphone *</label>
                                        <input
                                            type="tel"
                                            style={styles.formInput}
                                            required
                                        />
                                    </div>

                                    <div style={styles.formGroup}>
                                        <label style={styles.formLabel}>Email</label>
                                        <input
                                            type="email"
                                            style={styles.formInput}
                                        />
                                    </div>

                                    <div style={styles.formGroup}>
                                        <label style={styles.formLabel}>Type d'examen *</label>
                                        <select style={styles.formSelect} required>
                                            <option value="">Sélectionnez un examen</option>
                                            <option value="radiologie">Radiologie standard</option>
                                            <option value="echographie">Échographie</option>
                                            <option value="mammographie">Mammographie</option>
                                            <option value="scanner">Scanner</option>
                                            <option value="irm">IRM</option>
                                            <option value="osteodensitometrie">Ostéodensitométrie</option>
                                        </select>
                                    </div>

                                    <div style={styles.formGroup}>
                                        <label style={styles.formLabel}>Date souhaitée *</label>
                                        <input
                                            type="date"
                                            style={styles.formInput}
                                            required
                                        />
                                    </div>

                                    <div style={styles.formGroup}>
                                        <label style={styles.formLabel}>Message</label>
                                        <textarea
                                            style={styles.formTextarea}
                                            placeholder="Précisez vos besoins ou contraintes particulières..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        style={styles.submitButton}
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
                                style={styles.card}
                            >
                                <h3 style={styles.cardTitle}>
                                    <FaPhone style={styles.cardIcon} />
                                    Nous contacter
                                </h3>

                                <div style={styles.mb8}>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#2d3748' }}>Horaires d'ouverture</h4>
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
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#2d3748' }}>Coordonnées</h4>
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
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#2d3748' }}>Adresse</h4>
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
                <section style={{ ...styles.section, backgroundColor: '#f7fafc' }}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
                        >
                            <h2 style={styles.sectionTitle}>Préparation aux examens</h2>
                            <div style={styles.divider}></div>
                            <p style={styles.sectionSubtitle}>
                                Informations importantes pour bien préparer votre examen
                            </p>
                        </motion.div>

                        <div style={{ ...styles.grid, ...styles.gridCols2 }}>
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
                                    style={styles.card}
                                >
                                    <h3 style={{ ...styles.cardTitle, fontSize: '1.25rem' }}>
                                        {item.title}
                                    </h3>
                                    <p>{item.content}</p>
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