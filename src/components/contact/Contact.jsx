
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaUser, FaCalendarAlt, FaStethoscope } from 'react-icons/fa';

const Contact = () => {
    const professionalContactInfo = [
        {
            icon: <FaPhone />,
            title: "Téléphone",
            content: "+212 5228-81111",
            link: "tel:+212522881111",
            description: "Appelez-nous pour prendre rendez-vous"
        },
        {
            icon: <FaEnvelope />,
            title: "Email Professionnel",
            content: "contact@radiologiezerktouni59.ma",
            link: "mailto:contact@radiologiezerktouni59.ma",
            description: "Envoyez-nous vos questions"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Adresse du Cabinet",
            content: "Résidence les fleurs, 59 Bd Mohammed Zerktouni, Casablanca",
            description: "Centre ville, facile d'accès"
        },
        {
            icon: <FaStethoscope />,
            title: "Services Médicaux",
            content: "Radiologie & Imagerie Médicale",
            description: "Équipements de pointe"
        }
    ];

    return (
        <section className="professional-contact-section">
            <div className="professional-container">
                <div className="professional-contact-grid">
                    {/* Professional Contact Information */}
                    <motion.div
                        className="professional-contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="professional-info-header">
                            <h2 className="professional-info-title">Informations Professionnelles</h2>
                        </div>
                        <p className="professional-contact-description">
                            Notre équipe médicale professionnelle est à votre disposition pour répondre 
                            à vos questions et organiser vos examens radiologiques.
                        </p>

                        <div className="professional-contact-details">
                            {professionalContactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="professional-contact-item"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="professional-contact-icon">{item.icon}</div>
                                    <div className="professional-contact-text">
                                        <h3 className="professional-contact-title">{item.title}</h3>
                                        {item.link ? (
                                            <a href={item.link} className="professional-contact-link">
                                                {item.content}
                                            </a>
                                        ) : (
                                            <p className="professional-contact-content">{item.content}</p>
                                        )}
                                        <span className="professional-contact-description">
                                            {item.description}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Professional Contact Form */}
                    <motion.div
                        className="professional-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="professional-form-header">
                            <h2 className="professional-form-title">Demande de Contact</h2>
                            <p className="professional-form-subtitle">
                                Remplissez ce formulaire pour nous contacter
                            </p>
                        </div>
                        
                        <form className="professional-contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="professional-form-row">
                                <div className="professional-form-group">
                                    <label htmlFor="professional-name" className="professional-form-label">
                                        <FaUser className="professional-label-icon" /> 
                                        Nom complet *
                                    </label>
                                    <input 
                                        type="text" 
                                        id="professional-name" 
                                        name="name" 
                                        className="professional-form-input"
                                        placeholder="Votre nom complet"
                                        required 
                                    />
                                </div>

                                <div className="professional-form-group">
                                    <label htmlFor="professional-email" className="professional-form-label">
                                        <FaEnvelope className="professional-label-icon" /> 
                                        Email *
                                    </label>
                                    <input 
                                        type="email" 
                                        id="professional-email" 
                                        name="email" 
                                        className="professional-form-input"
                                        placeholder="votre.email@exemple.com"
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="professional-form-row">
                                <div className="professional-form-group">
                                    <label htmlFor="professional-phone" className="professional-form-label">
                                        <FaPhone className="professional-label-icon" /> 
                                        Téléphone
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="professional-phone" 
                                        name="phone" 
                                        className="professional-form-input"
                                        placeholder="+212 6XX-XXXXXX"
                                    />
                                </div>

                                <div className="professional-form-group">
                                    <label htmlFor="professional-subject" className="professional-form-label">
                                        Type de demande *
                                    </label>
                                    <select 
                                        id="professional-subject" 
                                        name="subject" 
                                        className="professional-form-select"
                                        required
                                    >
                                        <option value="">Sélectionnez un sujet</option>
                                        <option value="rendezvous">Prise de rendez-vous</option>
                                        <option value="urgence">Demande urgente</option>
                                        <option value="resultats">Demande de résultats</option>
                                        <option value="information">Information générale</option>
                                        <option value="autre">Autre demande</option>
                                    </select>
                                </div>
                            </div>

                            <div className="professional-form-group">
                                <label htmlFor="professional-message" className="professional-form-label">
                                    Message *
                                </label>
                                <textarea 
                                    id="professional-message" 
                                    name="message" 
                                    rows="6" 
                                    className="professional-form-textarea"
                                    placeholder="Décrivez votre demande ou vos questions..."
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="professional-submit-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaCalendarAlt className="professional-btn-icon" />
                                Envoyer la demande
                            </motion.button>

                            <p className="professional-form-note">
                                * Champs obligatoires. Nous vous répondrons dans les plus brefs délais.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;