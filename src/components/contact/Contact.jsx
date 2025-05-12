import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaUser, FaCalendarAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaPhone />,
            title: "Téléphone",
            content: "+212 5228-81111",
            link: "tel:+212522881111"
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            content: "contact@radiologiezerktouni59.ma",
            link: "mailto:contact@radiologiezerktouni59.ma"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Adresse",
            content: "Résidence les fleurs, 59 Bd Mohammed Zerktouni, Casablanca"
        },
        {
            icon: <FaClock />,
            title: "Horaires",
            content: "Lun-Ven: 8h-20h / Sam: 8h-14h"
        }
    ];

    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    {/* Contact Information */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>Informations de contact</h2>
                        <p className="contact-description">
                            Notre équipe est à votre disposition pour répondre à vos questions et prendre vos rendez-vous.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="contact-item"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="contact-icon">{item.icon}</div>
                                    <div className="contact-text">
                                        <h3>{item.title}</h3>
                                        {item.link ? (
                                            <a href={item.link}>{item.content}</a>
                                        ) : (
                                            <p>{item.content}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Envoyez-nous un message</h2>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">
                                    <FaUser /> Nom complet
                                </label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <FaEnvelope /> Email
                                </label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                    <FaPhone /> Téléphone
                                </label>
                                <input type="tel" id="phone" name="phone" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Sujet</label>
                                <select id="subject" name="subject" required>
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="rendezvous">Prise de rendez-vous</option>
                                    <option value="question">Question générale</option>
                                    <option value="resultats">Demande de résultats</option>
                                    <option value="autre">Autre demande</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Envoyer le message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;