import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = ({
    title = 'Contactez-nous',
    subtitle = 'Prenez rendez-vous ou posez-nous vos questions',
    badge = 'Centre de Radiologie Professionnel',
}) => {
    const professionalStyles = {
        heroSection: {
            background: 'linear-gradient(135deg, #0077B6 0%, #00A8CC 100%)',
            color: '#FFFFFF',
            padding: '120px 0 80px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
        },
        heroContent: {
            position: 'relative',
            zIndex: 2,
        },
        heroTitle: {
            fontSize: '3.5rem',
            fontWeight: 700,
            marginBottom: '20px',
            lineHeight: 1.2,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        },
        heroSubtitle: {
            fontSize: '1.3rem',
            fontWeight: 300,
            marginBottom: '30px',
            opacity: 0.9,
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
        },
        heroBadge: {
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '12px 24px',
            borderRadius: '30px',
            fontWeight: 500,
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        grainOverlay: {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'><circle cx='25' cy='25' r='1' fill='white' opacity='0.1'/><circle cx='75' cy='75' r='1' fill='white' opacity='0.1'/></pattern></defs><rect width='100' height='100' fill='url(%23grain)'/></svg>")`,
            opacity: 0.3,
            zIndex: 1,
        },

        // Responsive Styles
        '@media (maxWidth: 768px)': {
            heroTitle: {
                fontSize: '2.2rem',
            },
            heroSubtitle: {
                fontSize: '1rem',
            },
        },
    };

    return (
        <section style={professionalStyles.heroSection} className="professional-hero-section">
            <div style={professionalStyles.grainOverlay}></div>

            <div style={professionalStyles.container} className="professional-container">
                <motion.div
                    style={professionalStyles.heroContent}
                    className="professional-hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={professionalStyles.heroTitle} className="professional-hero-title">
                        {title}
                    </h1>
                    <p style={professionalStyles.heroSubtitle} className="professional-hero-subtitle">
                        {subtitle}
                    </p>
                    <div style={professionalStyles.heroBadge} className="professional-hero-badge">
                        <span>{badge}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroBanner;
