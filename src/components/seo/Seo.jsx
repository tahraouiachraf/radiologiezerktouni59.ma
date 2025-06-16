import { useEffect } from 'react';

const Seo = ({ title }) => {
    useEffect(() => {
        const baseTitle = "Radiologie Zerktouni 59";
        document.title = title ? `${baseTitle} - ${title}` : baseTitle;
    }, [title]);

    return null;
};

export default Seo;