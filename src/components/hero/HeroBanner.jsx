import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = ({
    title = '',
    subtitle = '',
    badge = '',
}) => {
    const styles = {
        heroSection: {
            background: 'linear-gradient(135deg, #0077B6 0%, #00A8CC 100%)',
            color: '#FFFFFF',
            padding: '8rem 0 5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            minHeight: title || subtitle || badge ? 'auto' : '50vh', // Hauteur minimale si aucun contenu
        },
        container: {
            maxWidth: '1200px',
            width: '90%',
            margin: '0 auto',
            padding: '0 1rem',
        },
        heroContent: {
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem', // Espacement uniforme entre les éléments
        },
        heroTitle: {
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            margin: 0, // Reset margin pour utiliser gap du parent
        },
        heroSubtitle: {
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 300,
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto', // Centrage horizontal
            lineHeight: 1.6,
        },
        heroBadge: {
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '0.75rem 1.5rem',
            borderRadius: '30px',
            fontWeight: 500,
            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            alignSelf: 'center', // Centrage pour le badge
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
    };

    // Media queries en JavaScript
    const responsiveStyles = {
        '@media (max-width: 768px)': {
            heroSection: {
                padding: title || subtitle || badge ? '6rem 0 4rem' : '4rem 0',
            },
        },
        '@media (max-width: 480px)': {
            heroSection: {
                padding: title || subtitle || badge ? '5rem 0 3rem' : '3rem 0',
            },
            heroBadge: {
                padding: '0.5rem 1rem',
            },
        },
    };

    // Fusion des styles de base et des styles responsive
    const getStyles = (styleKey) => ({
        ...styles[styleKey],
        ...(responsiveStyles['@media (max-width: 768px)']?.[styleKey] || {}),
        ...(responsiveStyles['@media (max-width: 480px)']?.[styleKey] || {}),
    });

    // Vérifier si au moins un des éléments est présent
    const hasContent = title || subtitle || badge;

    return (
        <section style={getStyles('heroSection')} className="professional-hero-section">
            <div style={styles.grainOverlay}></div>

            {hasContent && (
                <div style={getStyles('container')} className="professional-container">
                    <motion.div
                        style={getStyles('heroContent')}
                        className="professional-hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {title && (
                            <h1 style={getStyles('heroTitle')} className="professional-hero-title">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p style={getStyles('heroSubtitle')} className="professional-hero-subtitle">
                                {subtitle}
                            </p>
                        )}
                        {badge && (
                            <div style={getStyles('heroBadge')} className="professional-hero-badge">
                                <span>{badge}</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default HeroBanner;