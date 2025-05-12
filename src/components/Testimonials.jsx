import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Mohamed El Amrani",
        role: "Patient",
        content: "Un accueil chaleureux et un personnel très professionnel. Les résultats ont été expliqués clairement et les délais respectés. Je recommande vivement ce centre.",
        rating: 5
    },
    {
        id: 2,
        name: "Sophie Martin",
        role: "Patient",
        content: "Examen IRM réalisé dans d'excellentes conditions. Le radiologue a pris le temps de répondre à toutes mes questions. Installation moderne et très propre.",
        rating: 5
    },
    {
        id: 3,
        name: "Karim Benchekroun",
        role: "Médecin traitant",
        content: "Je collabore régulièrement avec ce centre pour mes patients. Les comptes-rendus sont toujours précis et détaillés, avec des délais très raisonnables.",
        rating: 4
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Témoignages</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ce que nos patients disent de notre centre.
                    </p>
                </motion.div>

                <motion.div
                    className="relative max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-lg relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl"></div>

                        <motion.div
                            key={testimonials[current].id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-6 h-6 ${i < testimonials[current].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-lg text-gray-700 mb-8 italic">
                                "{testimonials[current].content}"
                            </p>

                            <div>
                                <h4 className="text-xl font-bold text-gray-800">{testimonials[current].name}</h4>
                                <p className="text-blue-600">{testimonials[current].role}</p>
                            </div>
                        </motion.div>

                        <div className="flex justify-center mt-8 space-x-4">
                            <button
                                onClick={prevTestimonial}
                                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition duration-300"
                            >
                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition duration-300"
                            >
                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-3 h-3 rounded-full ${i === current ? 'bg-blue-600' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;