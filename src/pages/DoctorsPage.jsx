import React from 'react';
import Seo from '../components/seo/Seo';
import { motion } from 'framer-motion';
import { FaUserMd, FaClinicMedical, FaAward, FaGraduationCap } from 'react-icons/fa';

const DoctorsPage = () => {
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
        doctorCard: {
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        },
        doctorCardHover: {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
        },
        doctorImage: {
            width: '100%',
            height: '300px',
            objectFit: 'cover'
        },
        doctorInfo: {
            padding: '1.5rem'
        },
        doctorName: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '0.5rem'
        },
        doctorSpecialty: {
            fontSize: '1rem',
            color: '#718096',
            marginBottom: '1rem',
            fontWeight: '500'
        },
        doctorDescription: {
            color: '#4a5568',
            marginBottom: '1.5rem',
            lineHeight: '1.6'
        },
        doctorDetails: {
            listStyle: 'none',
            padding: '0',
            margin: '0'
        },
        doctorDetailItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.75rem',
            color: '#4a5568'
        },
        doctorDetailIcon: {
            marginRight: '0.5rem',
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
        gridCols3: {
            gridTemplateColumns: 'repeat(3, 1fr)'
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

    // Données des docteurs
    const doctors = [
        {
            id: 1,
            name: "Dr. Ahmed Aboumadi",
            specialty: "Radiologue - Imagerie Médicale",
            image: "/assets/images/doctors/dr-aboumadi.jpg",
            description: "Le Dr. Ahmed Aboumadi est un radiologue expérimenté spécialisé en imagerie diagnostique. Il possède une expertise particulière en IRM et en scanner.",
            details: [
                { icon: <FaGraduationCap style={styles.doctorDetailIcon} />, text: "Diplômé de la Faculté de Médecine de Paris" },
                { icon: <FaAward style={styles.doctorDetailIcon} />, text: "DES en Radiologie et Imagerie Médicale" },
                { icon: <FaClinicMedical style={styles.doctorDetailIcon} />, text: "20 ans d'expérience en radiologie diagnostique" }
            ]
        },
        {
            id: 2,
            name: "Dr. Leila Benbrahim",
            specialty: "Radiologue - Échographie",
            image: "/assets/images/doctors/dr-benbrahim.jpg",
            description: "Le Dr. Leila Benbrahim est spécialisée en échographie générale et Doppler. Elle assure également les examens de dépistage et de suivi en sénologie.",
            details: [
                { icon: <FaGraduationCap style={styles.doctorDetailIcon} />, text: "Diplômée de la Faculté de Médecine de Casablanca" },
                { icon: <FaAward style={styles.doctorDetailIcon} />, text: "DES en Radiologie et Imagerie Médicale" },
                { icon: <FaClinicMedical style={styles.doctorDetailIcon} />, text: "15 ans d'expérience en échographie" }
            ]
        },
        {
            id: 3,
            name: "Dr. Karim El Mansouri",
            specialty: "Radiologue - Scanner et IRM",
            image: "/assets/images/doctors/dr-elmansouri.jpg",
            description: "Le Dr. Karim El Mansouri est expert en imagerie cross-sectionnelle (Scanner et IRM). Il est particulièrement spécialisé en neuroradiologie et imagerie musculo-squelettique.",
            details: [
                { icon: <FaGraduationCap style={styles.doctorDetailIcon} />, text: "Diplômé de la Faculté de Médecine de Rabat" },
                { icon: <FaAward style={styles.doctorDetailIcon} />, text: "DES en Radiologie et Imagerie Médicale" },
                { icon: <FaClinicMedical style={styles.doctorDetailIcon} />, text: "Spécialisation en Neuroradiologie (Paris)" }
            ]
        },
        {
            id: 4,
            name: "Dr. Samira Khalfi",
            specialty: "Radiologue - Mammographie",
            image: "/assets/images/doctors/dr-khalfi.jpg",
            description: "Le Dr. Samira Khalfi est spécialisée en imagerie mammaire et en dépistage du cancer du sein. Elle réalise également des biopsies stéréotaxiques et échoguidées.",
            details: [
                { icon: <FaGraduationCap style={styles.doctorDetailIcon} />, text: "Diplômée de la Faculté de Médecine de Fès" },
                { icon: <FaAward style={styles.doctorDetailIcon} />, text: "DES en Radiologie et Imagerie Médicale" },
                { icon: <FaClinicMedical style={styles.doctorDetailIcon} />, text: "Certificat de Compétence en Sénologie" }
            ]
        },
        {
            id: 5,
            name: "Dr. Youssef Alaoui",
            specialty: "Radiologue Interventionnel",
            image: "/assets/images/doctors/dr-alaoui.jpg",
            description: "Le Dr. Youssef Alaoui pratique la radiologie interventionnelle diagnostique et thérapeutique. Il réalise des infiltrations, des ponctions et des biopsies guidées par imagerie.",
            details: [
                { icon: <FaGraduationCap style={styles.doctorDetailIcon} />, text: "Diplômé de la Faculté de Médecine de Marrakech" },
                { icon: <FaAward style={styles.doctorDetailIcon} />, text: "DES en Radiologie et Imagerie Médicale" },
                { icon: <FaClinicMedical style={styles.doctorDetailIcon} />, text: "DIU de Radiologie Interventionnelle" }
            ]
        },
        {
            id: 6,
            name: "Dr. Amina Belhaj",
            specialty: "Radiopédiatre",
            image: "/assets/images/doctors/dr-belhaj.jpg",
            description: "Le Dr. Amina Belhaj est spécialisée en imagerie pédiatrique. Elle adapte les examens radiologiques aux spécificités des enfants tout en minimisant l'irradiation.",
            details: [
                { icon: <FaGraduationCap style={styles.doctorDetailIcon} />, text: "Diplômée de la Faculté de Médecine de Tanger" },
                { icon: <FaAward style={styles.doctorDetailIcon} />, text: "DES en Radiologie et Imagerie Médicale" },
                { icon: <FaClinicMedical style={styles.doctorDetailIcon} />, text: "Formation en Radiopédiatrie (Lyon)" }
            ]
        }
    ];

    return (
        <>
            <Seo title="Nos Docteurs - Centre de Radiologie" />
            <div style={{ overflow: 'hidden' }}>
                {/* Section Nos Docteurs */}
                <section style={styles.section}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
                        >
                            <h2 style={styles.sectionTitle}>Nos Docteurs</h2>
                            <div style={styles.divider}></div>
                            <p style={styles.sectionSubtitle}>
                                Une équipe de radiologues expérimentés et spécialisés pour une prise en charge optimale
                            </p>
                        </motion.div>

                        <div style={{ ...styles.grid, ...styles.gridCols3 }}>
                            {doctors.map((doctor, index) => (
                                <motion.div
                                    key={doctor.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={styles.doctorCard}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <img
                                        src={doctor.image}
                                        alt={`Photo du ${doctor.name}`}
                                        style={styles.doctorImage}
                                    />
                                    <div style={styles.doctorInfo}>
                                        <h3 style={styles.doctorName}>{doctor.name}</h3>
                                        <p style={styles.doctorSpecialty}>{doctor.specialty}</p>
                                        <p style={styles.doctorDescription}>{doctor.description}</p>
                                        <ul style={styles.doctorDetails}>
                                            {doctor.details.map((detail, i) => (
                                                <li key={i} style={styles.doctorDetailItem}>
                                                    {detail.icon}
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
                <section style={{ ...styles.section, backgroundColor: '#f7fafc' }}>
                    <div style={styles.container}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ ...styles.textCenter, ...styles.mb12 }}
                        >
                            <h2 style={styles.sectionTitle}>Notre Équipe Médicale</h2>
                            <div style={styles.divider}></div>
                            <p style={styles.sectionSubtitle}>
                                Une collaboration pluridisciplinaire pour une interprétation optimale de vos examens
                            </p>
                        </motion.div>

                        <div style={{ ...styles.grid, ...styles.gridCols2 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                style={{ ...styles.doctorCard, ...styles.p6 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <div style={{ marginRight: '1.5rem' }}>
                                        <FaUserMd style={{ fontSize: '3rem', color: '#3490dc' }} />
                                    </div>
                                    <div>
                                        <h3 style={{ ...styles.doctorName, fontSize: '1.75rem' }}>Collaboration Médicale</h3>
                                        <p style={styles.doctorSpecialty}>Travail d'équipe et réunions de concertation</p>
                                    </div>
                                </div>
                                <p style={styles.doctorDescription}>
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
                                style={{ ...styles.doctorCard, ...styles.p6 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <div style={{ marginRight: '1.5rem' }}>
                                        <FaClinicMedical style={{ fontSize: '3rem', color: '#3490dc' }} />
                                    </div>
                                    <div>
                                        <h3 style={{ ...styles.doctorName, fontSize: '1.75rem' }}>Formation Continue</h3>
                                        <p style={styles.doctorSpecialty}>Mise à jour permanente des connaissances</p>
                                    </div>
                                </div>
                                <p style={styles.doctorDescription}>
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