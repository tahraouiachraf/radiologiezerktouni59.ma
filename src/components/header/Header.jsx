import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'À Propos', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            {/* Top Bar - Masquée sur mobile */}
            {!isMobile && (
                <div className="top-bar">
                    <div className="container">
                        <div className="top-bar-content">
                            <div className="top-bar-item">
                                <FaPhone className="top-bar-icon" />
                                <span>+212 5 22 88 11 11</span>
                            </div>
                            <div className="top-bar-item">
                                <FaMapMarkerAlt className="top-bar-icon" />
                                <span>Résidence les fleurs, 59 Bd Mohammed Zerktouni, Casablanca</span>
                            </div>
                            <div className="top-bar-item">
                                <FaClock className="top-bar-icon" />
                                <span>Lun-Ven: 8h-20h / Sam: 8h-14h</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Header */}
            <header className={`main-header ${scrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <motion.div
                            className="logo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link to="/">
                                <h1>Radiologie <span>Zerktouni 59</span></h1>
                            </Link>
                        </motion.div>

                        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                            <ul>
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link to={link.path} onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mobile-menu-btn" onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;