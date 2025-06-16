import React from 'react';
import Seo from '../components/seo/Seo';
import Hero from '../components/hero/Hero';
import { radiologue } from '../constants';
import { motion } from 'framer-motion';
import { FaClinicMedical, FaUserMd, FaProcedures, FaCalendarAlt } from 'react-icons/fa';

const HomePage = () => {
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
        aboutSection: {
            backgroundColor: '#f7fafc',
            padding: '4rem 0'
        },
        servicesSection: {
            padding: '4rem 0'
        },
        ctaSection: {
            backgroundColor: '#3490dc',
            color: '#ffffff',
            padding: '4rem 0',
            textAlign: 'center'
        },
        equipmentSection: {
            backgroundColor: '#f7fafc',
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
        featureCard: {
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'box-shadow 0.3s ease'
        },
        featureCardHover: {
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
        },
        featureIcon: {
            fontSize: '2.25rem',
            color: '#3490dc',
            marginBottom: '1rem'
        },
        featureTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '0.75rem'
        },
        serviceCard: {
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            transition: 'box-shadow 0.3s ease'
        },
        serviceCardHover: {
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        serviceTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#3490dc',
            marginBottom: '1rem'
        },
        serviceList: {
            listStyle: 'none',
            padding: '0'
        },
        serviceListItem: {
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'flex-start'
        },
        serviceListBullet: {
            color: '#38c172',
            marginRight: '0.5rem'
        },
        ctaIcon: {
            fontSize: '3rem',
            marginBottom: '1.5rem'
        },
        ctaTitle: {
            fontSize: '2.25rem',
            fontWeight: '700',
            marginBottom: '1rem'
        },
        ctaText: {
            fontSize: '1.25rem',
            maxWidth: '800px',
            margin: '0 auto 2rem auto'
        },
        ctaButton: {
            display: 'inline-block',
            backgroundColor: '#ffffff',
            color: '#3490dc',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            fontSize: '1.125rem',
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
        },
        ctaButtonHover: {
            transform: 'scale(1.05)'
        },
        equipmentImage: {
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
            display: 'block',
            margin: '0 auto'
        },
        equipmentDescription: {
            marginBottom: '1.5rem'
        },
        equipmentTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '0.5rem'
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
        gridCols3: {
            gridTemplateColumns: 'repeat(3, 1fr)'
        },
        textCenter: {
            textAlign: 'center'
        },
        mxAuto: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        mb2: { marginBottom: '0.5rem' },
        mb3: { marginBottom: '0.75rem' },
        mb4: { marginBottom: '1rem' },
        mb6: { marginBottom: '1.5rem' },
        mb8: { marginBottom: '2rem' },
        mb12: { marginBottom: '3rem' },
        p4: { padding: '1rem' },
        p6: { padding: '1.5rem' },
        p8: { padding: '2rem' },
        roundedLg: { borderRadius: '0.5rem' }
    };

    return (
        <>
            <Seo title="" />
            <div style={{ overflow: 'hidden' }}>
                <Hero />

                {/* Section A propos */}
                <section style={styles.aboutSection}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
                        >
                            <h2 style={styles.sectionTitle}>À propos de notre centre</h2>
                            <div style={styles.divider}></div>
                            <p style={styles.sectionSubtitle}>
                                Notre centre de radiologie médicale met à votre disposition un plateau technique performant
                                et une équipe médicale expérimentée pour répondre à tous vos besoins en imagerie diagnostique.
                            </p>
                        </motion.div>

                        <div style={{ ...styles.grid, ...styles.gridCols3 }}>
                            {[
                                {
                                    icon: <FaClinicMedical style={styles.featureIcon} />,
                                    title: "Équipements modernes",
                                    desc: "Des appareils de dernière génération pour des résultats précis et fiables."
                                },
                                {
                                    icon: <FaUserMd style={styles.featureIcon} />,
                                    title: "Professionnels qualifiés",
                                    desc: "Une équipe de radiologues expérimentés et spécialisés dans différents domaines."
                                },
                                {
                                    icon: <FaProcedures style={styles.featureIcon} />,
                                    title: "Prise en charge complète",
                                    desc: "Du diagnostic au suivi, nous vous accompagnons à chaque étape."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    style={styles.featureCard}
                                    whileHover={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
                                >
                                    {item.icon}
                                    <h3 style={styles.featureTitle}>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section Nos Services */}
                <section style={styles.servicesSection}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
                        >
                            <h2 style={styles.sectionTitle}>Nos Services</h2>
                            <div style={styles.divider}></div>
                            <p style={styles.sectionSubtitle}>
                                Nous proposons une gamme complète d'examens d'imagerie médicale réalisés avec
                                des équipements de pointe et interprétés par des radiologues spécialisés.
                            </p>
                        </motion.div>

                        <div style={{ ...styles.grid, ...styles.gridCols2, ...styles.gridCols3 }}>
                            {[
                                {
                                    title: "Radiologie Numérique",
                                    items: ["Radiologie thoracique", "Radiologie ostéo-articulaire", "Radiologie digestive"]
                                },
                                {
                                    title: "Échographie",
                                    items: ["Échographie abdominale", "Échographie pelvienne", "Échographie thyroïdienne", "Échographie mammaire"]
                                },
                                {
                                    title: "IRM",
                                    items: ["IRM cérébrale", "IRM rachidienne", "IRM articulaire", "IRM abdominale"]
                                },
                                {
                                    title: "Scanner",
                                    items: ["Scanner cérébral", "Scanner thoracique", "Scanner abdominal", "Scanner ostéo-articulaire"]
                                },
                                {
                                    title: "Mammographie",
                                    items: ["Dépistage du cancer du sein", "Mammographie diagnostique", "Échographie mammaire complémentaire"]
                                },
                                {
                                    title: "Ostéodensitométrie",
                                    items: ["Évaluation de la densité osseuse", "Diagnostic d'ostéoporose", "Suivi thérapeutique"]
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={styles.serviceCard}
                                    whileHover={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <h3 style={styles.serviceTitle}>{service.title}</h3>
                                    <ul style={styles.serviceList}>
                                        {service.items.map((item, i) => (
                                            <li key={i} style={styles.serviceListItem}>
                                                <span style={styles.serviceListBullet}>•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section Prendre RDV */}
                <section style={styles.ctaSection}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <FaCalendarAlt style={styles.ctaIcon} />
                            <h2 style={styles.ctaTitle}>Prendre rendez-vous</h2>
                            <p style={styles.ctaText}>
                                Notre secrétariat est à votre disposition du lundi au vendredi de 8h à 19h
                                et le samedi de 9h à 13h pour convenir d'un rendez-vous.
                            </p>
                            <motion.a
                                href="#contact"
                                style={styles.ctaButton}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contactez-nous
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                {/* Section Équipements */}
                <section style={styles.equipmentSection}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
                        >
                            <h2 style={styles.sectionTitle}>Nos Équipements</h2>
                            <div style={styles.divider}></div>
                            <p style={styles.sectionSubtitle}>
                                Un plateau technique moderne et performant pour des diagnostics précis
                            </p>
                        </motion.div>

                        <div style={{ ...styles.grid, ...styles.gridCols2, alignItems: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={radiologue}
                                    alt="Appareil IRM"
                                    style={styles.equipmentImage}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                            >
                                <div>
                                    <h3 style={styles.equipmentTitle}>IRM 1.5 Tesla</h3>
                                    <p>
                                        Notre appareil d'IRM haute définition permet des examens précis avec un confort
                                        optimal pour le patient et des temps d'acquisition réduits.
                                    </p>
                                </div>
                                <div>
                                    <h3 style={styles.equipmentTitle}>Scanner 64 barrettes</h3>
                                    <p>
                                        Scanner multidetecteur permettant des acquisitions rapides avec une irradiation
                                        réduite et une excellente résolution spatiale.
                                    </p>
                                </div>
                                <div>
                                    <h3 style={styles.equipmentTitle}>Échographes haute résolution</h3>
                                    <p>
                                        Des échographes de dernière génération avec doppler couleur et 3D/4D pour
                                        une imagerie de qualité.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;