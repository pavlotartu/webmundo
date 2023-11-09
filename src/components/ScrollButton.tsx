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
                left: '44vw',
                bottom: '10px',
                zIndex: 999,
            }}
        >
            <button
                className="btn border-0"
                onClick={scrollToTop}
            >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Farriba.png?alt=media&token=0fc36afc-00f7-4092-835a-c6fe9d52a8c9"
                    style={{
                        width: '38px',
                        height: 'auto',
                        opacity: 0.6
                    }}
                    alt="Arriba"
                    className="hover-effect"
                />

            </button>
        </div>
    );
};

export default ScrollButton;