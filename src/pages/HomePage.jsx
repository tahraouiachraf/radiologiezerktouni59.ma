import React from 'react';
import Seo from '../components/seo/Seo';
import Hero from '../components/hero/Hero';
import { motion } from 'framer-motion';
import { FaClinicMedical, FaUserMd, FaProcedures, FaCalendarAlt } from 'react-icons/fa';

const HomePage = () => {
    return (
        <>
            <Seo title="" />
            <div className="overflow-hidden">
                <Hero />

                {/* Section A propos */}
                <section className="about-section py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-primary mb-4">À propos de notre centre</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                            <p className="text-lg max-w-3xl mx-auto">
                                Notre centre de radiologie médicale met à votre disposition un plateau technique performant
                                et une équipe médicale expérimentée pour répondre à tous vos besoins en imagerie diagnostique.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FaClinicMedical className="text-4xl mb-4 text-primary" />,
                                    title: "Équipements modernes",
                                    desc: "Des appareils de dernière génération pour des résultats précis et fiables."
                                },
                                {
                                    icon: <FaUserMd className="text-4xl mb-4 text-primary" />,
                                    title: "Professionnels qualifiés",
                                    desc: "Une équipe de radiologues expérimentés et spécialisés dans différents domaines."
                                },
                                {
                                    icon: <FaProcedures className="text-4xl mb-4 text-primary" />,
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
                                    className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                                >
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section Nos Services */}
                <section className="services-section py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-primary mb-4">Nos Services</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                            <p className="text-lg max-w-3xl mx-auto">
                                Nous proposons une gamme complète d'examens d'imagerie médicale réalisés avec
                                des équipements de pointe et interprétés par des radiologues spécialisés.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                                >
                                    <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                                    <ul className="space-y-2">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-secondary mr-2">•</span>
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
                <section className="cta-section py-16 bg-primary text-white">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <FaCalendarAlt className="text-5xl mx-auto mb-6" />
                            <h2 className="text-3xl font-bold mb-4">Prendre rendez-vous</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                Notre secrétariat est à votre disposition du lundi au vendredi de 8h à 19h
                                et le samedi de 9h à 13h pour convenir d'un rendez-vous.
                            </p>
                            <motion.a
                                href="#contact"
                                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contactez-nous
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                {/* Section Équipements */}
                <section className="equipment-section py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-primary mb-4">Nos Équipements</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                            <p className="text-lg max-w-3xl mx-auto">
                                Un plateau technique moderne et performant pour des diagnostics précis
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src="/assets/images/mri-machine.jpg"
                                    alt="Appareil IRM"
                                    className="rounded-lg shadow-md w-full"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">IRM 1.5 Tesla</h3>
                                    <p>
                                        Notre appareil d'IRM haute définition permet des examens précis avec un confort
                                        optimal pour le patient et des temps d'acquisition réduits.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Scanner 64 barrettes</h3>
                                    <p>
                                        Scanner multidetecteur permettant des acquisitions rapides avec une irradiation
                                        réduite et une excellente résolution spatiale.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Échographes haute résolution</h3>
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