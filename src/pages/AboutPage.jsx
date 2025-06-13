import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/seo/Seo.jsx';
import { FaAward, FaUserMd, FaClinicMedical, FaHeartbeat, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const AboutPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const values = [
        {
            icon: <FaAward className="text-3xl text-primary" />,
            title: "Excellence médicale",
            description: "Des professionnels expérimentés et passionnés, formés aux dernières techniques d'imagerie."
        },
        {
            icon: <FaClinicMedical className="text-3xl text-primary" />,
            title: "Technologie de pointe",
            description: "Parc d'équipements dernier cri (IRM 3T, Scanner 128 barrettes, Mammographie numérique)."
        },
        {
            icon: <FaHeartbeat className="text-3xl text-primary" />,
            title: "Approche humaine",
            description: "Une prise en charge personnalisée centrée sur le confort et le bien-être du patient."
        },
        {
            icon: <FaShieldAlt className="text-3xl text-primary" />,
            title: "Sécurité optimale",
            description: "Protocoles stricts et doses de rayonnement minimisées pour chaque examen."
        }
    ];

    const teamMembers = [
        {
            name: "Dr. Ahmed Benali",
            role: "Radiologue Chef",
            specialty: "IRM et Scanner",
            experience: "15 ans d'expérience"
        },
        {
            name: "Dr. Leila Mansouri",
            role: "Radiologue Sénior",
            specialty: "Mammographie et Échographie",
            experience: "12 ans d'expérience"
        },
        {
            name: "Karim El Fassi",
            role: "Technicien en Imagerie",
            specialty: "Manipulateur Radio",
            experience: "Certifié par l'OMS"
        }
    ];

    return (
        <>
            <Seo
                title="À propos - Radiologie Zerktouni 59 | Centre d'Imagerie Médicale Casablanca"
                description="Découvrez notre centre de radiologie à Casablanca : équipe experte, équipements haut de gamme et engagement qualité depuis 2010."
                keywords="radiologie Casablanca, imagerie médicale, IRM, scanner, mammographie, centre radiologie Zerktouni"
            />

            {/* Hero Section */}
            <section className="professional-hero-section bg-gradient-to-r from-primary-dark to-primary">
                <div className="professional-container mx-auto px-6 py-24 md:py-32">
                    <motion.div
                        className="professional-hero-content text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h1 className="professional-hero-title text-4xl md:text-5xl font-bold text-white mb-4">
                                Centre d'Imagerie Médicale <span className="text-secondary-light">Zerktouni 59</span>
                            </h1>
                            <p className="professional-hero-subtitle text-xl md:text-2xl text-white opacity-90 mb-6">
                                Excellence en diagnostic radiologique depuis 2010
                            </p>
                            <div className="professional-hero-badge inline-block bg-white text-primary-dark px-6 py-2 rounded-full font-semibold shadow-md">
                                <span>Certifié HAS - Haute Autorité de Santé</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16">
                {/* Introduction Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-20 max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                        À propos de <span className="text-secondary">Radiologie Zerktouni 59</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                        Situé au cœur de Casablanca, le centre <strong className="text-primary">Radiologie Zerktouni 59</strong> est un établissement
                        médical de référence spécialisé en imagerie médicale de pointe. Depuis 2010, nous mettons notre expertise
                        et nos technologies avancées au service d'un diagnostic précis et rapide.
                    </p>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
                </motion.section>

                {/* Values Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <motion.h2
                        variants={fadeIn}
                        className="text-3xl font-bold text-center text-primary mb-16"
                    >
                        Nos valeurs fondamentales
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-primary"
                            >
                                <div className="text-center mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Team Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="mb-24 bg-gray-50 rounded-2xl p-12"
                >
                    <motion.div variants={fadeIn} className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Notre équipe médicale</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Une équipe pluridisciplinaire de radiologues et techniciens spécialisés, engagés dans l'excellence du diagnostic
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-8 rounded-xl shadow-md text-center"
                            >
                                <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center text-4xl text-primary">
                                    <FaUserMd />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                <p className="text-primary font-semibold mb-2">{member.role}</p>
                                <p className="text-gray-600 mb-1"><strong>Spécialité :</strong> {member.specialty}</p>
                                <p className="text-gray-500 text-sm">{member.experience}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Equipment Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Nos équipements haut de gamme</h2>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 mt-1"><FaChartLine /></span>
                                    <span><strong>IRM 3 Tesla</strong> - Technologie dernier cri pour une imagerie haute résolution avec un champ magnétique puissant</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 mt-1"><FaChartLine /></span>
                                    <span><strong>Scanner 128 barrettes</strong> - Précision et rapidité pour des diagnostics fiables avec une irradiation minimale</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 mt-1"><FaChartLine /></span>
                                    <span><strong>Mammographie numérique</strong> - Dépistage précoce avec une dose réduite de rayonnement et une meilleure détection</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 mt-1"><FaChartLine /></span>
                                    <span><strong>Échographes haute résolution</strong> - Équipements Doppler couleur dernière génération pour examens complets</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 rounded-xl h-80 lg:h-96 flex items-center justify-center">
                            <p className="text-gray-400">Visite virtuelle de nos installations</p>
                        </div>
                    </div>
                </motion.section>

                {/* Quality Commitment */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                    className="bg-primary text-white rounded-2xl p-12 mb-16"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Notre engagement qualité</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-5xl font-bold mb-2">100%</div>
                                <p>Examens relus par un second radiologue</p>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">24h</div>
                                <p>Délai moyen de rendu des résultats</p>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">99%</div>
                                <p>Satisfaction patient (enquête 2023)</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-primary mb-6">Prêt à prendre rendez-vous ?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Notre équipe est à votre disposition pour vous orienter vers l'examen le plus adapté à votre situation médicale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            Prendre rendez-vous
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary border border-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Nous contacter
                        </motion.button>
                    </div>
                </motion.section>
            </main>
        </>
    );
};

export default AboutPage;