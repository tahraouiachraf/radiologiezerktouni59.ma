import React from 'react';
import Seo from '../components/seo/Seo';
import Hero from '../components/hero/Hero';
import { motion } from 'framer-motion';
import { FaClinicMedical, FaUserMd, FaProcedures, FaCalendarAlt, FaXRay, FaHeartbeat, FaBone } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { MdPregnantWoman, MdChildFriendly } from 'react-icons/md';

const DepartmentsPage = () => {
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
        departmentCard: {
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            transition: 'box-shadow 0.3s ease',
            backgroundColor: '#ffffff'
        },
        departmentCardHover: {
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        departmentTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#3490dc',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        },
        departmentDescription: {
            marginBottom: '1.5rem',
            color: '#4a5568'
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

    const departments = [
        {
            id: 1,
            title: "Radiologie Générale",
            icon: <FaXRay style={{ color: '#3490dc', fontSize: '1.5rem' }} />,
            description: "Notre service de radiologie générale utilise des équipements numériques de dernière génération pour des images de haute qualité avec une irradiation minimale.",
            services: [
                "Radiographie pulmonaire",
                "Radiographie du squelette",
                "Radiographie digestive",
                "Radiographie du crâne et des sinus",
                "Radiographie du rachis"
            ]
        },
        {
            id: 2,
            title: "Échographie",
            icon: <FaHeartbeat style={{ color: '#3490dc', fontSize: '1.5rem' }} />,
            description: "L'échographie est une technique d'imagerie non invasive utilisant les ultrasons pour explorer les organes internes.",
            services: [
                "Échographie abdominale",
                "Échographie pelvienne",
                "Échographie thyroïdienne",
                "Échographie mammaire",
                "Échographie doppler"
            ]
        },
        {
            id: 3,
            title: "Ostéo-articulaire",
            icon: <FaBone style={{ color: '#3490dc', fontSize: '1.5rem' }} />,
            description: "Spécialisé dans l'imagerie des os et des articulations pour diagnostiquer fractures, arthrose et autres pathologies.",
            services: [
                "Radiographie osseuse",
                "Scanner ostéo-articulaire",
                "IRM articulaire",
                "Arthroscanner",
                "Ostéodensitométrie"
            ]
        },
        {
            id: 4,
            title: "Neurologie",
            icon: <GiBrain style={{ color: '#3490dc', fontSize: '1.5rem' }} />,
            description: "Imagerie spécialisée du système nerveux central et périphérique pour le diagnostic des pathologies cérébrales et médullaires.",
            services: [
                "IRM cérébrale",
                "Scanner cérébral",
                "Angio-IRM",
                "Myélographie",
                "Échographie Doppler des vaisseaux du cou"
            ]
        },
        {
            id: 5,
            title: "Femme et Enfant",
            icon: <MdPregnantWoman style={{ color: '#3490dc', fontSize: '1.5rem' }} />,
            description: "Services d'imagerie adaptés aux besoins spécifiques des femmes et des enfants avec des protocoles adaptés.",
            services: [
                "Mammographie numérique",
                "Échographie gynécologique",
                "Échographie obstétricale",
                "Hystérosalpingographie",
                "Imagerie pédiatrique"
            ]
        },
        {
            id: 6,
            title: "Pédiatrie",
            icon: <MdChildFriendly style={{ color: '#3490dc', fontSize: '1.5rem' }} />,
            description: "Un environnement adapté aux enfants avec des techniques spécifiques pour réduire l'irradiation et le stress.",
            services: [
                "Radiographie pédiatrique",
                "Échographie pédiatrique",
                "Scanner pédiatrique (basse dose)",
                "IRM pédiatrique",
                "Échographie de la hanche chez le nourrisson"
            ]
        }
    ];

    return (
        <>
            <Seo title="Départements de Radiologie" />
            <div style={{ overflow: 'hidden' }}>
                <section className="professional-hero-section">
                    <div className="professional-container">
                        <motion.div
                            className="professional-hero-content"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="professional-hero-title">Contactez-nous</h1>
                            <p className="professional-hero-subtitle">
                                Prenez rendez-vous ou posez-nous vos questions
                            </p>
                            <div className="professional-hero-badge">
                                <span>Centre de Radiologie Professionnel</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section À propos des départements */}
                <section style={styles.aboutSection}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
                        >
                            <h2 style={styles.sectionTitle}>Nos Départements Spécialisés</h2>
                            <div style={styles.divider}></div>
                            <p style={styles.sectionSubtitle}>
                                Notre centre de radiologie dispose de départements spécialisés équipés des dernières technologies
                                et encadrés par des radiologues experts dans chaque domaine.
                            </p>
                        </motion.div>

                        <div style={{ ...styles.grid, ...styles.gridCols3 }}>
                            {[
                                {
                                    icon: <FaClinicMedical style={styles.featureIcon} />,
                                    title: "Expertise spécialisée",
                                    desc: "Des radiologues dédiés à chaque spécialité pour une expertise pointue."
                                },
                                {
                                    icon: <FaUserMd style={styles.featureIcon} />,
                                    title: "Protocoles adaptés",
                                    desc: "Des examens réalisés selon les protocoles les plus récents pour chaque pathologie."
                                },
                                {
                                    icon: <FaProcedures style={styles.featureIcon} />,
                                    title: "Parcours patient optimisé",
                                    desc: "Une organisation conçue pour faciliter votre parcours de soins."
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

                {/* Section Nos Départements */}
                <section style={styles.servicesSection}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
                        >
                            <h2 style={styles.sectionTitle}>Découvrez Nos Départements</h2>
                            <div style={styles.divider}></div>
                            <p style={styles.sectionSubtitle}>
                                Chaque département est équipé d'appareils dédiés et encadré par des radiologues spécialisés
                                dans leur domaine d'expertise.
                            </p>
                        </motion.div>

                        <div style={{ ...styles.grid, ...styles.gridCols2 }}>
                            {departments.map((department, index) => (
                                <motion.div
                                    key={department.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={styles.departmentCard}
                                    whileHover={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <h3 style={styles.departmentTitle}>
                                        {department.icon}
                                        {department.title}
                                    </h3>
                                    <p style={styles.departmentDescription}>{department.description}</p>
                                    <h4 style={{ fontWeight: '600', marginBottom: '0.75rem' }}>Examens proposés :</h4>
                                    <ul style={styles.serviceList}>
                                        {department.services.map((service, i) => (
                                            <li key={i} style={styles.serviceListItem}>
                                                <span style={styles.serviceListBullet}>•</span>
                                                <span>{service}</span>
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
                            <h2 style={styles.ctaTitle}>Prendre rendez-vous dans un département spécialisé</h2>
                            <p style={styles.ctaText}>
                                Notre secrétariat vous orientera vers le département le plus adapté à vos besoins.
                                Nous sommes disponibles du lundi au vendredi de 8h à 19h et le samedi de 9h à 13h.
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
            </div>
        </>
    );
};

export default DepartmentsPage;