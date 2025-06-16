import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaUser, FaCalendarAlt, FaStethoscope } from 'react-icons/fa';

const Contact = ({ professionalStyles }) => {
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
        <section style={professionalStyles.section}>
            <div style={professionalStyles.container}>
                <div style={professionalStyles.grid}>
                    {/* Professional Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div style={professionalStyles.infoHeader}>
                            <h2 style={professionalStyles.infoTitle}>
                                Informations Professionnelles
                            </h2>
                            <div style={professionalStyles.infoBadge}>
                                <span>Centre Médical Spécialisé</span>
                            </div>
                        </div>
                        <p style={professionalStyles.description}>
                            Notre équipe médicale professionnelle est à votre disposition pour répondre
                            à vos questions et organiser vos examens radiologiques.
                        </p>

                        <div style={professionalStyles.contactDetails}>
                            {professionalContactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    style={professionalStyles.contactItem}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div style={professionalStyles.contactIcon}>{item.icon}</div>
                                    <div style={professionalStyles.contactText}>
                                        <h3 style={professionalStyles.contactTitle}>{item.title}</h3>
                                        {item.link ? (
                                            <a href={item.link} style={professionalStyles.contactLink}>
                                                {item.content}
                                            </a>
                                        ) : (
                                            <p style={{
                                                ...professionalStyles.contactLink,
                                                color: 'var(--professional-dark)',
                                                textDecoration: 'none',
                                                cursor: 'default'
                                            }}>
                                                {item.content}
                                            </p>
                                        )}
                                        <span style={{
                                            fontSize: '0.9rem',
                                            color: '#666',
                                            fontStyle: 'italic'
                                        }}>
                                            {item.description}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Professional Contact Form */}
                    <motion.div
                        style={professionalStyles.formContainer}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div style={professionalStyles.formHeader}>
                            <h2 style={professionalStyles.formTitle}>Demande de Contact</h2>
                            <p style={professionalStyles.formSubtitle}>
                                Remplissez ce formulaire pour nous contacter
                            </p>
                        </div>

                        <form style={professionalStyles.contactForm} onSubmit={(e) => e.preventDefault()}>
                            <div style={professionalStyles.formRow}>
                                <div style={professionalStyles.formGroup}>
                                    <label htmlFor="professional-name" style={professionalStyles.formLabel}>
                                        <FaUser style={{ fontSize: '0.9rem', color: 'var(--professional-primary)' }} />
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="professional-name"
                                        name="name"
                                        style={professionalStyles.formInput}
                                        placeholder="Votre nom complet"
                                        required
                                    />
                                </div>

                                <div style={professionalStyles.formGroup}>
                                    <label htmlFor="professional-email" style={professionalStyles.formLabel}>
                                        <FaEnvelope style={{ fontSize: '0.9rem', color: 'var(--professional-primary)' }} />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="professional-email"
                                        name="email"
                                        style={professionalStyles.formInput}
                                        placeholder="votre.email@exemple.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div style={professionalStyles.formRow}>
                                <div style={professionalStyles.formGroup}>
                                    <label htmlFor="professional-phone" style={professionalStyles.formLabel}>
                                        <FaPhone style={{ fontSize: '0.9rem', color: 'var(--professional-primary)' }} />
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="professional-phone"
                                        name="phone"
                                        style={professionalStyles.formInput}
                                        placeholder="+212 6XX-XXXXXX"
                                    />
                                </div>

                                <div style={professionalStyles.formGroup}>
                                    <label htmlFor="professional-subject" style={professionalStyles.formLabel}>
                                        Type de demande *
                                    </label>
                                    <select
                                        id="professional-subject"
                                        name="subject"
                                        style={{
                                            ...professionalStyles.formInput,
                                            appearance: 'none',
                                            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 1rem center',
                                            backgroundSize: '1rem',
                                            paddingRight: '3rem'
                                        }}
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

                            <div style={professionalStyles.formGroup}>
                                <label htmlFor="professional-message" style={professionalStyles.formLabel}>
                                    Message *
                                </label>
                                <textarea
                                    id="professional-message"
                                    name="message"
                                    rows="6"
                                    style={{
                                        ...professionalStyles.formInput,
                                        minHeight: '120px',
                                        resize: 'vertical'
                                    }}
                                    placeholder="Décrivez votre demande ou vos questions..."
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                style={professionalStyles.submitBtn}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaCalendarAlt style={{ fontSize: '1rem' }} />
                                Envoyer la demande
                            </motion.button>

                            <p style={{
                                fontSize: '0.85rem',
                                color: '#666',
                                textAlign: 'center',
                                marginTop: '20px',
                                fontStyle: 'italic'
                            }}>
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