import React from 'react';
import Seo from '../components/seo/Seo';
import Hero from '../components/hero/Hero';
import { radiologue } from '../constants';
import { motion } from 'framer-motion';
import { FaClinicMedical, FaUserMd, FaProcedures, FaCalendarAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const HomePage = () => {
    // Définition des breakpoints
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    // Fonction pour déterminer le nombre de colonnes en fonction de l'écran
    const getGridCols = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        return 3;
    };

    const getServicesGridCols = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        return 3;
    };

    const getEquipmentGridCols = () => {
        if (isMobile) return 1;
        return 2;
    };

    // Styles CSS en objets JavaScript avec valeurs responsives
    const styles = {
        container: {
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0 15px'
        },
        section: {
            padding: isMobile ? '2rem 0' : '4rem 0'
        },
        aboutSection: {
            backgroundColor: '#f7fafc',
            padding: isMobile ? '2rem 0' : '4rem 0'
        },
        servicesSection: {
            padding: isMobile ? '2rem 0' : '4rem 0'
        },
        ctaSection: {
            backgroundColor: '#3490dc',
            color: '#ffffff',
            padding: isMobile ? '2rem 0' : '4rem 0',
            textAlign: 'center'
        },
        equipmentSection: {
            backgroundColor: '#f7fafc',
            padding: isMobile ? '2rem 0' : '4rem 0'
        },
        sectionTitle: {
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '700',
            color: '#3490dc',
            marginBottom: '1rem',
            textAlign: 'center',
            padding: isMobile ? '0 1rem' : '0'
        },
        sectionSubtitle: {
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#718096',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            textAlign: 'center',
            padding: isMobile ? '0 1rem' : '0'
        },
        divider: {
            width: '6rem',
            height: '0.25rem',
            backgroundColor: '#38c172',
            margin: '0 auto 1.5rem auto'
        },
        featureCard: {
            backgroundColor: '#ffffff',
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'box-shadow 0.3s ease',
            margin: isMobile ? '0 0.5rem 1rem 0.5rem' : '0'
        },
        featureCardHover: {
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
        },
        featureIcon: {
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            color: '#3490dc',
            marginBottom: '1rem'
        },
        featureTitle: {
            fontSize: isMobile ? '1.1rem' : '1.25rem',
            fontWeight: '600',
            marginBottom: '0.75rem'
        },
        serviceCard: {
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
            padding: isMobile ? '1rem' : '1.5rem',
            transition: 'box-shadow 0.3s ease',
            backgroundColor: '#ffffff',
            margin: isMobile ? '0 0.5rem 1rem 0.5rem' : '0'
        },
        serviceCardHover: {
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        serviceTitle: {
            fontSize: isMobile ? '1.1rem' : '1.25rem',
            fontWeight: '600',
            color: '#3490dc',
            marginBottom: '1rem'
        },
        serviceList: {
            listStyle: 'none',
            padding: '0',
            fontSize: isMobile ? '0.9rem' : '1rem'
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
            fontSize: isMobile ? '2rem' : '3rem',
            marginBottom: '1.5rem'
        },
        ctaTitle: {
            fontSize: isMobile ? '1.5rem' : '2.25rem',
            fontWeight: '700',
            marginBottom: '1rem',
            padding: isMobile ? '0 1rem' : '0'
        },
        ctaText: {
            fontSize: isMobile ? '1rem' : '1.25rem',
            maxWidth: '800px',
            margin: '0 auto 2rem auto',
            padding: isMobile ? '0 1rem' : '0'
        },
        ctaButton: {
            display: 'inline-block',
            backgroundColor: '#ffffff',
            color: '#3490dc',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            fontSize: isMobile ? '1rem' : '1.125rem',
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
            margin: '0 auto',
            marginBottom: isMobile ? '1.5rem' : '0'
        },
        equipmentDescription: {
            marginBottom: '1.5rem',
            fontSize: isMobile ? '0.95rem' : '1rem'
        },
        equipmentTitle: {
            fontSize: isMobile ? '1.1rem' : '1.25rem',
            fontWeight: '600',
            marginBottom: '0.5rem'
        },
        grid: {
            display: 'grid',
            gap: isMobile ? '1rem' : '2rem'
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

                        <div style={{ ...styles.grid, ...(getGridCols() === 1 ? styles.gridCols1 : getGridCols() === 2 ? styles.gridCols2 : styles.gridCols3) }}>
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

                        <div style={{ ...styles.grid, ...(getServicesGridCols() === 1 ? styles.gridCols1 : getServicesGridCols() === 2 ? styles.gridCols2 : styles.gridCols3) }}>
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
                            <Link to="/contact">
                                <motion.button
                                    style={styles.ctaButton}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contactez-nous
                                </motion.button>
                            </Link>
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

                        <div style={{ ...styles.grid, ...(getEquipmentGridCols() === 1 ? styles.gridCols1 : styles.gridCols2), alignItems: 'center' }}>
                            {isMobile ? (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
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
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                                    >
                                        <div>
                                            <h3 style={styles.equipmentTitle}>IRM 1.5 Tesla</h3>
                                            <p style={styles.equipmentDescription}>
                                                Notre appareil d'IRM haute définition permet des examens précis avec un confort
                                                optimal pour le patient et des temps d'acquisition réduits.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 style={styles.equipmentTitle}>Scanner 64 barrettes</h3>
                                            <p style={styles.equipmentDescription}>
                                                Scanner multidetecteur permettant des acquisitions rapides avec une irradiation
                                                réduite et une excellente résolution spatiale.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 style={styles.equipmentTitle}>Échographes haute résolution</h3>
                                            <p style={styles.equipmentDescription}>
                                                Des échographes de dernière génération avec doppler couleur et 3D/4D pour
                                                une imagerie de qualité.
                                            </p>
                                        </div>
                                    </motion.div>
                                </>
                            ) : (
                                <>
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
                                            <p style={styles.equipmentDescription}>
                                                Notre appareil d'IRM haute définition permet des examens précis avec un confort
                                                optimal pour le patient et des temps d'acquisition réduits.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 style={styles.equipmentTitle}>Scanner 64 barrettes</h3>
                                            <p style={styles.equipmentDescription}>
                                                Scanner multidetecteur permettant des acquisitions rapides avec une irradiation
                                                réduite et une excellente résolution spatiale.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 style={styles.equipmentTitle}>Échographes haute résolution</h3>
                                            <p style={styles.equipmentDescription}>
                                                Des échographes de dernière génération avec doppler couleur et 3D/4D pour
                                                une imagerie de qualité.
                                            </p>
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;