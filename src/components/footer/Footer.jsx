import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Liens Rapides", links: [
                { name: "Accueil", path: "/" },
                { name: "Nos Services", path: "/services" },
                { name: "Équipements", path: "/about#equipements" },
                { name: "Notre Équipe", path: "/about#equipe" },
                { name: "Contact", path: "/contact" }
            ]
        },
        {
            title: "Nos Services", links: [
                { name: "Radiologie Numérique", path: "/services#radiologie" },
                { name: "Échographie", path: "/services#echographie" },
                { name: "Mammographie", path: "/services#mammographie" },
                { name: "Scanner", path: "/services#scanner" },
                { name: "IRM", path: "/services#irm" }
            ]
        }
    ];

    const socialLinks = [
        { icon: <FaFacebook />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaInstagram />, url: "#" }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Colonne 1 - A propos */}
                    <motion.div
                        className="footer-col"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3>Radiologie Zerktouni 59</h3>
                        <p className="footer-about">
                            Centre d'imagerie médicale de référence offrant des services de radiologie de haute qualité avec des équipements modernes et une équipe expérimentée.
                        </p>

                    </motion.div>

                    {/* Colonnes de liens */}
                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={index}
                            className="footer-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{section.title}</h3>
                            <ul className="footer-links">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Colonne 4 - Newsletter */}
                    <motion.div
                        className="footer-col"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="footer-contact">
                            <div className="footer-contact-item">
                                <FaPhone className="footer-contact-icon" />
                                <span>+212 5228-81111</span>
                            </div>
                            <div className="footer-contact-item">
                                <FaEnvelope className="footer-contact-icon" />
                                <span>contact@radiologiezerktouni59.ma</span>
                            </div>
                            <div className="footer-contact-item">
                                <FaMapMarkerAlt className="footer-contact-icon" />
                                <span>Résidence les fleurs, 59 Bd Mohammed Zerktouni, Casablanca</span>
                            </div>
                            <div className="footer-contact-item">
                                <FaClock className="footer-contact-icon" />
                                <span>Lun-Ven: 8h-20h / Sam: 8h-14h</span>
                            </div>
                        </div>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, color: "#0077b6" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    className="copyright"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p>&copy; {currentYear} Radiologie Zerktouni 59. Tous droits réservés.</p>
                    <div className="legal-links">
                        <Link to="/mentions-legales">Mentions légales</Link>
                        <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;