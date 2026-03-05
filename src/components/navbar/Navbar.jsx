import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'À propos', path: '/about' },
        // { name: 'Départements', path: '/departments' },
        { name: 'Nos Docteurs', path: '/doctors' },
        { name: 'Services', path: '/services' },
        { name: 'Rendez-vous', path: '/appointment' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

                :root {
                    --primary-color: #3490dc;
                    --white: #fff;
                    --text-color: #222;
                    --dark-color: #111;
                    --transition: all 0.3s ease;
                }

                body {
                    font-family: 'Poppins', sans-serif;
                    line-height: 1.6;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .top-bar {
                    background-color: var(--primary-color);
                    color: var(--white);
                    padding: 8px 0;
                    font-size: 0.85rem;
                }

                .top-bar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 15px;
                }

                .top-bar-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .top-bar-icon {
                    font-size: 0.9rem;
                }

                .main-header {
                    position: fixed;
                    top: 40px;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: var(--white);
                    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08);
                    transition: var(--transition);
                }

                .main-header.scrolled {
                    top: 0;
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
                }

                .main-header.mobile {
                    top: 0;
                }

                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 0;
                }

                .logo h1 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: var(--dark-color);
                    margin: 0;
                }

                .logo h1 span {
                    color: var(--primary-color);
                }

                .nav-links ul {
                    display: flex;
                    gap: 25px;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .nav-links a {
                    color: var(--text-color);
                    font-weight: 500;
                    font-size: 0.95rem;
                    position: relative;
                    text-decoration: none;
                    padding: 5px 0;
                    transition: var(--transition);
                }

                .nav-links a:hover {
                    color: var(--primary-color);
                }

                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--primary-color);
                    transition: var(--transition);
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                .mobile-menu-btn {
                    display: none;
                    font-size: 1.4rem;
                    cursor: pointer;
                    color: var(--dark-color);
                    background: none;
                    border: none;
                    padding: 5px;
                }

                .nav-links a.active {
                    color: var(--primary-color);
                    font-weight: 600;
                }

                .nav-links a.active::after {
                    width: 100%;
                }

                @media (max-width: 992px) {
                    .top-bar {
                        display: none;
                    }

                    .main-header {
                        top: 0;
                    }

                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 280px;
                        height: 100vh;
                        background-color: var(--white);
                        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.08);
                        transition: var(--transition);
                        z-index: 1001;
                        padding: 80px 25px;
                    }

                    .nav-links.open {
                        right: 0;
                    }

                    .nav-links ul {
                        flex-direction: column;
                        gap: 15px;
                    }

                    .nav-links a {
                        font-size: 0.9rem;
                        padding: 8px 0;
                        display: block;
                    }

                    .mobile-menu-btn {
                        display: block;
                        z-index: 1002;
                    }
                }

                @media (max-width: 576px) {
                    .logo h1 {
                        font-size: 1.3rem;
                    }

                    .nav-links {
                        padding: 70px 20px;
                        width: 75%;
                    }
                }
            `}</style>

            {/* Top Bar */}
            <div className="top-bar" style={{ display: isMobile ? 'none' : 'block' }}>
                <div className="container">
                    <div className="top-bar-content">
                        <div className="top-bar-item">
                            <FaPhone className="top-bar-icon" />
                            <span>+212 522 881 111</span>
                        </div>
                        <div className="top-bar-item">
                            <FaMapMarkerAlt className="top-bar-icon" />
                            <span>Résidence les fleurs, 59 Bd Mohammed Zerktouni, Casablanca</span>
                        </div>
                        <div className="top-bar-item">
                            <FaClock className="top-bar-icon" />
                            <span>Lun-Ven: 8h-20h</span>
                        </div>
                    </div>
                </div>
            </div>

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
                            <Link to="/" title="Page d’accueil">
                                <h1>Radiologie<span> Zerktouni 59</span></h1>
                            </Link>
                        </motion.div>

                        <nav className={`nav-links ${isOpen ? 'open' : ''}`} role="navigation" aria-label="Menu principal">
                            <ul>
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={location.pathname === link.path ? 'active' : ''}
                                            title={`Page ${link.name}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        <button
                            className="mobile-menu-btn"
                            onClick={toggleMenu}
                            aria-label={isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
