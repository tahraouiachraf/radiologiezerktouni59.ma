import React from 'react';
import Seo from '../components/seo/Seo';
import { motion } from 'framer-motion';
import HeroBanner from '../components/hero/HeroBanner';
import { FaUserMd, FaClinicMedical, FaAward, FaGraduationCap } from 'react-icons/fa';

const DoctorsPage = () => {
    // Styles avec approche mobile-first
    const styles = {
        container: {
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px'
        },
        section: {
            padding: '2rem 0'
        },
        sectionMd: {
            padding: '4rem 0'
        },
        sectionTitle: {
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#3490dc',
            marginBottom: '1rem',
            textAlign: 'center'
        },
        sectionTitleMd: {
            fontSize: '2.25rem'
        },
        sectionSubtitle: {
            fontSize: '1rem',
            color: '#718096',
            maxWidth: '800px',
            margin: '0 auto 2rem auto',
            textAlign: 'center',
            padding: '0 1rem'
        },
        sectionSubtitleMd: {
            fontSize: '1.125rem',
            marginBottom: '3rem'
        },
        divider: {
            width: '6rem',
            height: '0.25rem',
            backgroundColor: '#38c172',
            margin: '0 auto 1.5rem auto'
        },
        doctorCard: {
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            marginBottom: '2rem',
            height: 'auto'
        },
        doctorCardMd: {
            marginBottom: '0'
        },
        doctorImage: {
            width: '100%',
            height: '250px',
            objectFit: 'cover'
        },
        doctorImageMd: {
            height: '300px'
        },
        doctorInfo: {
            padding: '1.5rem'
        },
        doctorInfoMd: {
            padding: '2rem'
        },
        doctorName: {
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '0.5rem'
        },
        doctorNameMd: {
            fontSize: '1.5rem'
        },
        doctorSpecialty: {
            fontSize: '0.875rem',
            color: '#718096',
            marginBottom: '1rem',
            fontWeight: '500'
        },
        doctorSpecialtyMd: {
            fontSize: '1rem'
        },
        doctorDescription: {
            color: '#4a5568',
            marginBottom: '1rem',
            lineHeight: '1.6',
            fontSize: '0.875rem'
        },
        doctorDescriptionMd: {
            fontSize: '1rem',
            marginBottom: '1.5rem'
        },
        doctorDetails: {
            listStyle: 'none',
            padding: '0',
            margin: '0'
        },
        doctorDetailItem: {
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '0.5rem',
            color: '#4a5568',
            fontSize: '0.875rem'
        },
        doctorDetailItemMd: {
            fontSize: '1rem',
            marginBottom: '0.75rem'
        },
        doctorDetailIcon: {
            marginRight: '0.5rem',
            color: '#3490dc',
            flexShrink: 0,
            marginTop: '0.2rem'
        },
        // Grid mobile: 1 colonne
        grid: {
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: '1fr'
        },
        // Grid tablette: 2 colonnes
        gridMd: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
        },
        // Grid desktop: 3 colonnes pour les docteurs
        gridLg: {
            gridTemplateColumns: 'repeat(3, 1fr)'
        },
        // Team grid mobile: 1 colonne
        teamGrid: {
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: '1fr'
        },
        // Team grid tablette+: 2 colonnes
        teamGridMd: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
        },
        textCenter: {
            textAlign: 'center'
        },
        mb12: {
            marginBottom: '3rem'
        },
        p6: {
            padding: '1.5rem'
        },
        p6Md: {
            padding: '2rem'
        }
    };

    // Hook pour détecter la taille d'écran
    const [isMobile, setIsMobile] = React.useState(false);
    const [isTablet, setIsTablet] = React.useState(false);

    React.useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 992);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Fonction pour combiner les styles selon la taille d'écran
    const getResponsiveStyles = (baseStyle, mdStyle = {}, lgStyle = {}) => {
        if (isMobile) {
            return baseStyle;
        } else if (isTablet) {
            return { ...baseStyle, ...mdStyle };
        } else {
            return { ...baseStyle, ...mdStyle, ...lgStyle };
        }
    };

    // Données des docteurs
    const doctors = [
        {
            id: 1,
            name: "Dr Abdelfattah BELHOUCINE",
            specialty: "Radiologue - Imagerie Médicale",
            image: "/assets/images/doctors/dr-BELHOUCINE.jpg",
            description: "Le Dr Abdelfattah BELHOUCINE est un radiologue expérimenté spécialisé en imagerie diagnostique. Il possède une expertise particulière en IRM et en scanner.",
            details: [
                { icon: <FaGraduationCap />, text: "Diplômé de la Faculté de Médecine de Paris" },
                { icon: <FaAward />, text: "DES en Radiologie et Imagerie Médicale" },
                { icon: <FaClinicMedical />, text: "20 ans d'expérience en radiologie diagnostique" }
            ]
        },
        {
            id: 2,
            name: "Dr Abdelaziz ZOUAOUI",
            specialty: "Radiologue - Échographie",
            image: "/assets/images/doctors/dr-benbrahim.jpg",
            description: "Le Dr Abdelaziz ZOUAOUI est spécialisée en échographie générale et Doppler. Elle assure également les examens de dépistage et de suivi en sénologie.",
            details: [
                { icon: <FaGraduationCap />, text: "Diplômée de la Faculté de Médecine de Casablanca" },
                { icon: <FaAward />, text: "DES en Radiologie et Imagerie Médicale" },
                { icon: <FaClinicMedical />, text: "15 ans d'expérience en échographie" }
            ]
        }
    ];

    return (
        <>
            <Seo title="Nos Docteurs - Centre de Radiologie" />
            {/* Hero Section */}
            <HeroBanner
                title="Nos Docteurs"
                subtitle=""
                badge="Une équipe de radiologues expérimentés et spécialisés pour une prise en charge optimale"
            />
            <div style={{ overflow: 'hidden' }}>
                {/* Section Nos Docteurs */}
                <section style={getResponsiveStyles(styles.section, styles.sectionMd)}>
                    <div style={styles.container}>
                        <div style={getResponsiveStyles(styles.grid, styles.gridMd, styles.gridLg)}>
                            {doctors.map((doctor, index) => (
                                <motion.div
                                    key={doctor.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={getResponsiveStyles(styles.doctorCard, styles.doctorCardMd)}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <img
                                        src={doctor.image}
                                        alt={`Photo du ${doctor.name}`}
                                        style={getResponsiveStyles(styles.doctorImage, styles.doctorImageMd)}
                                    />
                                    <div style={getResponsiveStyles(styles.doctorInfo, styles.doctorInfoMd)}>
                                        <h3 style={getResponsiveStyles(styles.doctorName, styles.doctorNameMd)}>
                                            {doctor.name}
                                        </h3>
                                        <p style={getResponsiveStyles(styles.doctorSpecialty, styles.doctorSpecialtyMd)}>
                                            {doctor.specialty}
                                        </p>
                                        <p style={getResponsiveStyles(styles.doctorDescription, styles.doctorDescriptionMd)}>
                                            {doctor.description}
                                        </p>
                                        <ul style={styles.doctorDetails}>
                                            {doctor.details.map((detail, i) => (
                                                <li key={i} style={getResponsiveStyles(styles.doctorDetailItem, styles.doctorDetailItemMd)}>
                                                    <span style={styles.doctorDetailIcon}>{detail.icon}</span>
                                                    <span>{detail.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section Équipe Médicale */}
                <section style={{
                    ...getResponsiveStyles(styles.section, styles.sectionMd),
                    backgroundColor: '#f7fafc'
                }}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
                        >
                            <h2 style={getResponsiveStyles(styles.sectionTitle, styles.sectionTitleMd)}>
                                Notre Équipe Médicale
                            </h2>
                            <div style={styles.divider}></div>
                            <p style={getResponsiveStyles(styles.sectionSubtitle, styles.sectionSubtitleMd)}>
                                Une collaboration pluridisciplinaire pour une interprétation optimale de vos examens
                            </p>
                        </motion.div>

                        <div style={getResponsiveStyles(styles.teamGrid, styles.teamGridMd)}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                style={{
                                    ...getResponsiveStyles(styles.doctorCard, styles.doctorCardMd),
                                    ...getResponsiveStyles(styles.p6, styles.p6Md)
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <div style={{ marginRight: '1rem' }}>
                                        <FaUserMd style={{ fontSize: '2rem', color: '#3490dc', marginTop: '0.25rem' }} />
                                    </div>
                                    <div>
                                        <h3 style={getResponsiveStyles(
                                            { ...styles.doctorName, fontSize: '1.25rem' },
                                            { fontSize: '1.5rem' }
                                        )}>
                                            Collaboration Médicale
                                        </h3>
                                        <p style={getResponsiveStyles(styles.doctorSpecialty, styles.doctorSpecialtyMd)}>
                                            Travail d'équipe et réunions de concertation
                                        </p>
                                    </div>
                                </div>
                                <p style={getResponsiveStyles(styles.doctorDescription, styles.doctorDescriptionMd)}>
                                    Nos radiologues travaillent en étroite collaboration avec les autres spécialistes
                                    (médecins généralistes, chirurgiens, oncologues, etc.) pour assurer une interprétation
                                    pertinente de vos examens dans le cadre de votre prise en charge globale.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                style={{
                                    ...getResponsiveStyles(styles.doctorCard, styles.doctorCardMd),
                                    ...getResponsiveStyles(styles.p6, styles.p6Md)
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <div style={{ marginRight: '1rem' }}>
                                        <FaClinicMedical style={{ fontSize: '2rem', color: '#3490dc', marginTop: '0.25rem' }} />
                                    </div>
                                    <div>
                                        <h3 style={getResponsiveStyles(
                                            { ...styles.doctorName, fontSize: '1.25rem' },
                                            { fontSize: '1.5rem' }
                                        )}>
                                            Formation Continue
                                        </h3>
                                        <p style={getResponsiveStyles(styles.doctorSpecialty, styles.doctorSpecialtyMd)}>
                                            Mise à jour permanente des connaissances
                                        </p>
                                    </div>
                                </div>
                                <p style={getResponsiveStyles(styles.doctorDescription, styles.doctorDescriptionMd)}>
                                    Notre équipe médicale participe régulièrement à des congrès, séminaires et formations
                                    pour maintenir ses compétences à jour avec les dernières avancées en imagerie médicale.
                                    Nous nous engageons à vous offrir des diagnostics basés sur les connaissances les plus récentes.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default DoctorsPage;