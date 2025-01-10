// JavaScript for interactive features

document.addEventListener('DOMContentLoaded', () => {
    // Redirect to WhatsApp
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contactar por WhatsApp';
    contactButton.style.backgroundColor = '#25d366';
    contactButton.style.color = '#fff';
    contactButton.style.padding = '10px 20px';
    contactButton.style.border = 'none';
    contactButton.style.borderRadius = '5px';
    contactButton.style.cursor = 'pointer';
    contactButton.style.fontSize = '1em';
    contactButton.style.margin = '20px auto';
    contactButton.style.display = 'block';
    contactButton.addEventListener('click', () => {
        window.open('https://wa.me/50431538031', '_blank');
    });

    const contactSection = document.querySelector('#contact');
    contactSection.appendChild(contactButton);
});
