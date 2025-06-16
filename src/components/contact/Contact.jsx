import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaUser, FaCalendarAlt, FaStethoscope } from 'react-icons/fa';

const Contact = ({ medicalStyles }) => {
    const contactInfo = [
        {
            icon: <FaPhone />,
            title: "Téléphone",
            content: "+212 5228-81111",
            link: "tel:+212522881111",
            description: "Appelez-nous pour prendre rendez-vous ou informations"
        },
        {
            icon: <FaEnvelope />,
            title: "Email Professionnel",
            content: "contact@radiologiezerktouni59.ma",
            link: "mailto:contact@radiologiezerktouni59.ma",
            description: "Pour toutes demandes médicales ou administratives"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Adresse du Centre",
            content: "59 Bd Mohammed Zerktouni, Casablanca",
            link: "https://goo.gl/maps/XYZ123",
            description: "Accès facile depuis tout Casablanca"
        }
    ];

    return (
        <section style={medicalStyles.section}>
            <div style={medicalStyles.container}>
                <div style={medicalStyles.grid}>
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={medicalStyles.sectionTitle}>Nos Coordonnées</h2>
                        <p style={medicalStyles.sectionSubtitle}>
                            Plusieurs moyens pour nous contacter selon vos besoins
                        </p>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1.5rem',
                                        background: item.isEmergency ? 'rgba(229, 62, 62, 0.05)' : 'var(--medical-white)',
                                        padding: '1.5rem',
                                        borderRadius: 'var(--medical-border-radius)',
                                        boxShadow: 'var(--medical-shadow)',
                                        border: `1px solid ${item.isEmergency ? 'rgba(229, 62, 62, 0.2)' : 'var(--medical-light-gray)'}`,
                                        transition: 'var(--medical-transition)',
                                    }}
                                    whileHover={{ y: -5, boxShadow: 'var(--medical-shadow-hover)' }}
                                >
                                    <div style={{
                                        fontSize: '1.5rem',
                                        color: item.isEmergency ? 'var(--medical-emergency)' : 'var(--medical-primary)',
                                        background: item.isEmergency ? 'rgba(229, 62, 62, 0.1)' : 'rgba(26, 95, 122, 0.1)',
                                        padding: '1rem',
                                        borderRadius: '50%',
                                        flexShrink: 0,
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 600,
                                            color: item.isEmergency ? 'var(--medical-emergency)' : 'var(--medical-dark)',
                                            marginBottom: '0.5rem',
                                        }}>
                                            {item.title}
                                        </h3>
                                        {item.link ? (
                                            <a href={item.link} style={{
                                                display: 'block',
                                                fontSize: '1rem',
                                                fontWeight: 500,
                                                color: item.isEmergency ? 'var(--medical-emergency)' : 'var(--medical-primary)',
                                                textDecoration: 'none',
                                                marginBottom: '0.5rem',
                                                transition: 'var(--medical-transition)',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}>
                                                {item.content}
                                            </a>
                                        ) : (
                                            <p style={{
                                                fontSize: '1rem',
                                                color: 'var(--medical-dark)',
                                                marginBottom: '0.5rem',
                                            }}>
                                                {item.content}
                                            </p>
                                        )}
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#666',
                                            fontStyle: 'italic',
                                            margin: 0,
                                        }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        style={medicalStyles.formContainer}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{
                            ...medicalStyles.sectionTitle,
                            textAlign: 'left',
                            marginBottom: '1.5rem',
                            fontSize: '1.8rem',
                        }}>
                            Formulaire de Contact
                        </h2>
                        <p style={{
                            ...medicalStyles.sectionSubtitle,
                            textAlign: 'left',
                            marginBottom: '2rem',
                            fontSize: '1rem',
                        }}>
                            Remplissez ce formulaire et nous vous recontacterons rapidement
                        </p>

                        <form style={{ display: 'grid', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div>
                                    <label htmlFor="name" style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        marginBottom: '0.5rem',
                                        color: 'var(--medical-dark)',
                                    }}>
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem 1rem',
                                            border: '1px solid var(--medical-light-gray)',
                                            borderRadius: '6px',
                                            fontSize: '1rem',
                                            transition: 'var(--medical-transition)',
                                            '&:focus': {
                                                outline: 'none',
                                                borderColor: 'var(--medical-primary)',
                                                boxShadow: '0 0 0 3px rgba(26, 95, 122, 0.1)',
                                            },
                                        }}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        marginBottom: '0.5rem',
                                        color: 'var(--medical-dark)',
                                    }}>
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem 1rem',
                                            border: '1px solid var(--medical-light-gray)',
                                            borderRadius: '6px',
                                            fontSize: '1rem',
                                            transition: 'var(--medical-transition)',
                                            '&:focus': {
                                                outline: 'none',
                                                borderColor: 'var(--medical-primary)',
                                                boxShadow: '0 0 0 3px rgba(26, 95, 122, 0.1)',
                                            },
                                        }}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" style={{
                                    display: 'block',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    color: 'var(--medical-dark)',
                                }}>
                                    Objet *
                                </label>
                                <select
                                    id="subject"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem',
                                        border: '1px solid var(--medical-light-gray)',
                                        borderRadius: '6px',
                                        fontSize: '1rem',
                                        backgroundColor: 'var(--medical-white)',
                                        appearance: 'none',
                                        backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center',
                                        backgroundSize: '1rem',
                                        transition: 'var(--medical-transition)',
                                        '&:focus': {
                                            outline: 'none',
                                            borderColor: 'var(--medical-primary)',
                                            boxShadow: '0 0 0 3px rgba(26, 95, 122, 0.1)',
                                        },
                                    }}
                                    required
                                >
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="rendezvous">Prise de rendez-vous</option>
                                    <option value="resultats">Demande de résultats</option>
                                    <option value="urgence">Urgence médicale</option>
                                    <option value="information">Demande d'information</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" style={{
                                    display: 'block',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    color: 'var(--medical-dark)',
                                }}>
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem',
                                        border: '1px solid var(--medical-light-gray)',
                                        borderRadius: '6px',
                                        fontSize: '1rem',
                                        resize: 'vertical',
                                        minHeight: '120px',
                                        transition: 'var(--medical-transition)',
                                        '&:focus': {
                                            outline: 'none',
                                            borderColor: 'var(--medical-primary)',
                                            boxShadow: '0 0 0 3px rgba(26, 95, 122, 0.1)',
                                        },
                                    }}
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                style={{
                                    background: 'linear-gradient(135deg, var(--medical-primary) 0%, var(--medical-secondary) 100%)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '1rem 2rem',
                                    borderRadius: '6px',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'var(--medical-transition)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    marginTop: '0.5rem',
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaEnvelope /> Envoyer le message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;