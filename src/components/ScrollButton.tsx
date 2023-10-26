import { useState, useEffect } from 'react';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`scroll-button ${isVisible ? 'visible' : ''}`}
            style={{
                position: 'fixed',
                left: '50vw',
                bottom: '5px',
                zIndex: 999,
            }}
        >
            <button
                className="btn"
                onClick={scrollToTop}
            >
                <img
                    src="../src/assets/img/icon/arriba.png"
                    style={{
                        width: '35px',
                        height: 'auto',
                        opacity: 0.5
                    }}
                    alt="Arriba"
                    className="hover-effect"
                />

            </button>
        </div>
    );
};

export default ScrollButton;