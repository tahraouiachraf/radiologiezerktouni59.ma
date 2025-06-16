import React from 'react';
import Seo from '../components/seo/Seo';
import { motion } from 'framer-motion';
import HeroBanner from '../components/hero/HeroBanner';
import { FaXRay, FaProcedures, FaClinicMedical, FaUserMd, FaTeeth, FaBone } from 'react-icons/fa';
import { GiBrain, GiSpinalCoil, GiKidneys, GiBreastplate } from 'react-icons/gi';
import { useMediaQuery } from 'react-responsive';

const ServicesPage = () => {
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
        serviceCard: {
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            margin: isMobile ? '0 0.5rem 1rem 0.5rem' : '0'
        },
        serviceHeader: {
            backgroundColor: '#3490dc',
            color: '#ffffff',
            padding: isMobile ? '1rem' : '1.5rem',
            display: 'flex',
            alignItems: 'center'
        },
        serviceIcon: {
            fontSize: isMobile ? '1.5rem' : '2rem',
            marginRight: isMobile ? '0.75rem' : '1rem'
        },
        serviceTitle: {
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            fontWeight: '600',
            margin: 0
        },
        serviceBody: {
            padding: isMobile ? '1rem' : '1.5rem'
        },
        serviceList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        serviceListItem: {
            padding: isMobile ? '0.5rem 0' : '0.75rem 0',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            fontSize: isMobile ? '0.9rem' : '1rem'
        },
        serviceListIcon: {
            color: '#38c172',
            marginRight: isMobile ? '0.5rem' : '0.75rem',
            fontSize: isMobile ? '0.8rem' : '1rem'
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
        mb12: {
            marginBottom: '3rem'
        },
        equipmentCard: {
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '1rem' : '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            margin: isMobile ? '0 0.5rem 1rem 0.5rem' : '0'
        },
        equipmentTitle: {
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            fontWeight: '600',
            color: '#3490dc',
            marginBottom: '1rem'
        },
        equipmentDescription: {
            fontSize: isMobile ? '0.9rem' : '1rem'
        }
    };

    const services = [
        {
            id: 1,
            title: "Radiologie Générale",
            icon: <FaXRay style={styles.serviceIcon} />,
            exams: [
                "Radiographie pulmonaire",
                "Radiographie du squelette",
                "Radiographie digestive",
                "Radiographie du crâne",
                "Radiographie dentaire (panoramique)",
                "Radiographie des sinus"
            ]
        },
        {
            id: 2,
            title: "Échographie",
            icon: <FaProcedures style={styles.serviceIcon} />,
            exams: [
                "Échographie abdominale",
                "Échographie pelvienne",
                "Échographie thyroïdienne",
                "Échographie mammaire",
                "Échographie doppler",
                "Échographie obstétricale",
                "Échographie musculo-tendineuse"
            ]
        },
        {
            id: 3,
            title: "Mammographie",
            icon: <GiBreastplate style={styles.serviceIcon} />,
            exams: [
                "Mammographie numérique",
                "Tomosynthèse (mammo 3D)",
                "Échographie mammaire complémentaire",
                "Biopsie mammaire stéréotaxique",
                "Repérage pré-opératoire"
            ]
        },
        {
            id: 4,
            title: "Scanner (Tomodensitométrie)",
            icon: <FaClinicMedical style={styles.serviceIcon} />,
            exams: [
                "Scanner cérébral",
                "Scanner thoracique",
                "Scanner abdominal",
                "Scanner ORL",
                "Scanner rachidien",
                "Scanner ostéo-articulaire",
                "Angioscanner"
            ]
        },
        {
            id: 5,
            title: "IRM (Imagerie par Résonance Magnétique)",
            icon: <GiBrain style={styles.serviceIcon} />,
            exams: [
                "IRM cérébrale",
                "IRM rachidienne",
                "IRM articulaire (épaule, genou, etc.)",
                "IRM abdominale",
                "IRM pelvienne",
                "Spectroscopie",
                "Diffusion"
            ]
        },
        {
            id: 6,
            title: "Ostéodensitométrie",
            icon: <FaBone style={styles.serviceIcon} />,
            exams: [
                "Densitométrie osseuse centrale",
                "Évaluation du risque fracturaire",
                "Suivi de l'ostéoporose",
                "Densitométrie corporelle"
            ]
        },
        {
            id: 7,
            title: "Radiologie Interventionnelle",
            icon: <FaUserMd style={styles.serviceIcon} />,
            exams: [
                "Infiltrations articulaires",
                "Infiltrations rachidiennes",
                "Ponctions biopsies guidées",
                "Drainages d'abcès",
                "Arthrographies"
            ]
        },
        {
            id: 8,
            title: "Dentascanner",
            icon: <FaTeeth style={styles.serviceIcon} />,
            exams: [
                "Imagerie dentaire 3D",
                "Bilan d'implantologie",
                "Pathologie des dents incluses",
                "Pathologie des maxillaires",
                "Bilan des ATM"
            ]
        },
        {
            id: 9,
            title: "Imagerie du Rachis",
            icon: <GiSpinalCoil style={styles.serviceIcon} />,
            exams: [
                "Radiographie rachidienne",
                "Scanner rachidien",
                "IRM rachidienne",
                "Myélographie",
                "Discographie"
            ]
        }
    ];

    return (
        <>
            <Seo title="Nos Prestations - Centre de Radiologie" />
            <HeroBanner
                title="Nos Prestations"
                subtitle=""
                badge="Un plateau technique complet et des professionnels expérimentés pour répondre à tous vos besoins en imagerie médicale"
            />
            <div style={{ overflow: 'hidden' }}>
                <section style={styles.section}>
                    <div style={styles.container}>
                        <div style={{ ...styles.grid, ...(getGridCols() === 1 ? styles.gridCols1 : getGridCols() === 2 ? styles.gridCols2 : styles.gridCols3) }}>
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={styles.serviceCard}
                                    whileHover={{
                                        y: isMobile ? 0 : -5,
                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <div style={styles.serviceHeader}>
                                        {service.icon}
                                        <h3 style={styles.serviceTitle}>{service.title}</h3>
                                    </div>
                                    <div style={styles.serviceBody}>
                                        <ul style={styles.serviceList}>
                                            {service.exams.map((exam, i) => (
                                                <li key={i} style={styles.serviceListItem}>
                                                    <span style={styles.serviceListIcon}>•</span>
                                                    <span>{exam}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section Équipements */}
                <section style={{ ...styles.section, backgroundColor: '#f7fafc' }}>
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
                                Des technologies de pointe pour des diagnostics précis et fiables
                            </p>
                        </motion.div>

                        <div style={{ ...styles.grid, ...(getGridCols() === 1 ? styles.gridCols1 : getGridCols() === 2 ? styles.gridCols2 : styles.gridCols3) }}>
                            {[
                                {
                                    title: "IRM 1.5 Tesla",
                                    description: "Appareil haute résolution pour des examens précis avec un confort optimal pour le patient."
                                },
                                {
                                    title: "Scanner 64 barrettes",
                                    description: "Technologie multibarrettes permettant des acquisitions rapides avec une irradiation réduite."
                                },
                                {
                                    title: "Mammographe numérique",
                                    description: "Mammographe avec tomosynthèse (3D) pour un dépistage plus précis du cancer du sein."
                                },
                                {
                                    title: "Échographes haute résolution",
                                    description: "Appareils dernière génération avec doppler couleur et 3D/4D pour une imagerie de qualité."
                                },
                                {
                                    title: "Ostéodensitomètre",
                                    description: "Appareil de référence pour la mesure de la densité osseuse et le diagnostic d'ostéoporose."
                                },
                                {
                                    title: "Salle de radiologie numérique",
                                    description: "Radiographie directe numérique pour des images de haute qualité avec faible irradiation."
                                }
                            ].map((equipment, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={styles.equipmentCard}
                                    whileHover={{
                                        y: isMobile ? 0 : -5,
                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <h3 style={styles.equipmentTitle}>
                                        {equipment.title}
                                    </h3>
                                    <p style={styles.equipmentDescription}>{equipment.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ServicesPage;