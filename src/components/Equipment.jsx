import React from 'react';
import { motion } from 'framer-motion';

const equipment = [
    {
        name: "IRM 3 Tesla",
        description: "Système d'imagerie par résonance magnétique haute performance pour des images ultra-précises.",
        features: ["Champ magnétique élevé", "Résolution spatiale améliorée", "Temps d'examen réduit"]
    },
    {
        name: "Scanner 128 barrettes",
        description: "Tomodensitomètre multicoupe pour des acquisitions rapides et des reconstructions 3D de qualité.",
        features: ["Coupes submillimétriques", "Reconstruction 3D", "Dose réduite"]
    },
    {
        name: "Échographe haute résolution",
        description: "Système d'échographie Doppler couleur avec sondes multifréquences pour toutes les applications.",
        features: ["Doppler couleur", "Élastographie", "4D"]
    }
];

const Equipment = () => {
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Équipements</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nous investissons continuellement dans des technologies de pointe pour garantir les meilleurs résultats diagnostiques.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {equipment.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="h-48 bg-blue-600 flex items-center justify-center text-white text-5xl">
                                {index === 0 && "🧲"}
                                {index === 1 && "🌀"}
                                {index === 2 && "📡"}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.name}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <ul className="space-y-2">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Equipment;