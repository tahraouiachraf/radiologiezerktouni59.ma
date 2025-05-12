import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: "Radiographie Numérique",
        description: "Imagerie médicale utilisant des rayons X pour visualiser les structures internes du corps.",
        icon: "🖥️"
    },
    {
        id: 2,
        title: "Échographie",
        description: "Technique d'imagerie utilisant les ultrasons pour examiner les organes internes en temps réel.",
        icon: "📡"
    },
    {
        id: 3,
        title: "IRM",
        description: "Imagerie par résonance magnétique pour des vues détaillées des organes et tissus mous.",
        icon: "🧲"
    },
    {
        id: 4,
        title: "Scanner",
        description: "Tomodensitométrie pour des images en coupe des structures anatomiques avec grande précision.",
        icon: "🌀"
    },
    {
        id: 5,
        title: "Mammographie",
        description: "Examen radiologique spécialisé pour le dépistage et le diagnostic des pathologies mammaires.",
        icon: "👩"
    },
    {
        id: 6,
        title: "Ostéodensitométrie",
        description: "Mesure de la densité minérale osseuse pour évaluer le risque d'ostéoporose.",
        icon: "🦴"
    }
];

const Services = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nous offrons une gamme complète de services d'imagerie médicale avec des équipements de dernière génération.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <Link
                                to={`/services#service-${service.id}`}
                                className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition duration-300"
                            >
                                En savoir plus
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        to="/services"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg"
                    >
                        Voir tous nos services
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;