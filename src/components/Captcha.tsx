import { useEffect } from 'react';

function CaptchaLogo() {
    useEffect(() => {
        const reCAPTCHAContainer = document.getElementById('recaptcha-container');
        if (reCAPTCHAContainer) {
            const iframe = document.createElement('iframe');
            iframe.title = 'reCAPTCHA';
            iframe.width = '256';
            iframe.height = '60';
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('sandbox', 'allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation');
            iframe.src = '';

            reCAPTCHAContainer.appendChild(iframe);
        }
    }, []);

    return (
        <div
            id="recaptcha-container"
            className="grecaptcha-badge"
            data-style="bottomright"
            style={{
                width: '256px',
                height: '60px',
                display: 'block',
                transition: 'right 0.3s ease 0s',
                position: 'fixed',
                bottom: '14px',
                right: '-186px',
                boxShadow: 'gray 0px 0px 5px',
                borderRadius: '2px',
                overflow: 'hidden',
            }}
        ></div>
    );
}

export default CaptchaLogo;
