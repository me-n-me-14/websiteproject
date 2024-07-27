document.addEventListener('DOMContentLoaded', () => {
    // Existing animation logic for sector cards
    const cards = document.querySelectorAll('.sector-card');
    let cardIndex = 0;

    function updateCards() {
        cards.forEach((card, i) => {
            const position = (i - cardIndex + cards.length) % cards.length;
            card.style.order = position;
            card.style.opacity = 1;
        });
    }

    document.querySelector('.prev-btn').addEventListener('click', () => {
        cardIndex = (cardIndex > 0) ? cardIndex - 1 : cards.length - 1;
        updateCards();
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        cardIndex = (cardIndex < cards.length - 1) ? cardIndex + 1 : 0;
        updateCards();
    });

    // Initialize the cards order
    updateCards();

    // New functionality for updating leftsidetext content
    const sections = [
        {
            title: 'Related<br>Companies',
            description: 'We identified potential for a<br>design consultant who can<br>approach a challenge not<br>only to find a design solution<br>but also a solution that serves<br>the interest of clients.'
        },
        {
            title: 'Company<br>Details',
            description: 'Each company has unique strengths<br>and capabilities. Our analysis focuses<br>on finding the best-fit solutions<br>to address the specific challenges<br>of each client.'
        },
        // Add more sections as needed
    ];

    let textIndex = 0;

    function updateTextContent() {
        document.getElementById('section-title').innerHTML = sections[textIndex].title;
        document.getElementById('section-description').innerHTML = sections[textIndex].description;
    }

    document.querySelector('.navigation button:first-child').addEventListener('click', () => {
        textIndex = (textIndex > 0) ? textIndex - 1 : sections.length - 1;
        updateTextContent();
    });

    document.querySelector('.navigation button:last-child').addEventListener('click', () => {
        textIndex = (textIndex < sections.length - 1) ? textIndex + 1 : 0;
        updateTextContent();
    });

    // Initialize the text content
    updateTextContent();
});
