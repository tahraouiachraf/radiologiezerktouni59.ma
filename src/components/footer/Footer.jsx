import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Liens Rapides",
            links: [
                { name: "Accueil", path: "/" },
                { name: "Nos Services", path: "/services" },
                { name: "Équipements", path: "/about" },
                { name: "Notre Équipe", path: "/about" },
                { name: "Contact", path: "/contact" }
            ]
        },
        {
            title: "Nos Services",
            links: [
                { name: "Radiologie Numérique", path: "/services" },
                { name: "Échographie", path: "/services" },
                { name: "Mammographie", path: "/services" },
                { name: "Scanner", path: "/services" },
                { name: "IRM", path: "/services" }
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
        <>
            <ScrollToTop />

            <style jsx>{`
                .footer {
                    background-color: var(--primary-color);
                    color: var(--white);
                    padding: 80px 0 20px;
                    position: relative;
                }

                .footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 5px;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 40px;
                    margin-bottom: 60px;
                }

                .footer-col h3 {
                    color: var(--white);
                    font-size: 1.5rem;
                    margin-bottom: 25px;
                    position: relative;
                    padding-bottom: 10px; 
                }

                .footer-col h3::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background-color: var(--secondary-color);
                }

                .footer-about {
                    margin-bottom: 20px;
                    line-height: 1.7;
                    opacity: 0.9;
                }

                .footer-contact {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .footer-contact-item {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }

                .footer-contact-icon {
                    color: var(--secondary-color);
                    font-size: 1.3rem;
                    margin-right: 10px;
                    flex-shrink: 0;
                }

                .footer-links {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .footer-links a {
                    color: var(--white);
                    opacity: 0.8;
                    transition: var(--transition);
                    display: inline-block;
                    position: relative;
                }

                .footer-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background-color: var(--secondary-color);
                    transition: var(--transition);
                }

                .footer-links a:hover {
                    opacity: 1;
                    padding-left: 8px;
                    color: var(--secondary-color);
                }

                .footer-links a:hover::after {
                    width: 15px;
                }

                .social-links {
                    display: flex;
                    gap: 15px;
                    margin-top: 25px;
                    justify-content: flex-start;
                }

                .social-links a {
                    color: var(--white);
                    font-size: 1.3rem;
                    opacity: 0.8;
                    transition: opacity 0.3s ease;
                }

                .social-links a:hover {
                    opacity: 1;
                }

                .copyright {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 30px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    font-size: 0.9rem;
                    opacity: 0.8;
                }

                .legal-links {
                    display: flex;
                    gap: 20px;
                }

                .legal-links a {
                    color: var(--white);
                }

                .legal-links a:hover {
                    color: var(--secondary-color);
                }

                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                    }

                    .copyright {
                        flex-direction: column;
                        gap: 15px;
                        text-align: center;
                    }
                }

                @media (max-width: 576px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }

                    .footer-col h3::after {
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .footer-contact-item {
                        justify-content: relative;
                    }

                    .footer-links a:hover {
                        padding-left: 0;
                    }

                    .social-links {
                        justify-content: center;
                    }
                }
            `}</style>

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

                        {/* Colonne 4 - Contact */}
                        <motion.div
                            className="footer-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3>Contact</h3>
                            <div className="footer-contact">
                                <div className="footer-contact-item">
                                    <FaPhone className="footer-contact-icon" />
                                    <span>+212 5228-81111</span>
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
                            <Link to="#">Mentions légales</Link>
                            <Link to="#">Politique de confidentialité</Link>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </>
    );
};

export default Footer;