// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Home icon scrolls to top
document.getElementById('home-icon').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Recommendation functionality
function submitRecommendation() {
    const text = document.getElementById('rec-text').value.trim();
    const author = document.getElementById('rec-author').value.trim();

    if (text === '' || author === '') {
        alert("Please fill in both recommendation and your name.");
        return;
    }

    // Create new recommendation element
    const recList = document.getElementById('rec-list');
    const newRec = document.createElement('div');
    newRec.className = 'recommendation';
    newRec.style.cssText = 'background:white; padding:20px; margin:15px auto; max-width:600px; border-radius:10px; box-shadow:0 5px 15px rgba(0,0,0,0.1); text-align:left;';
    newRec.innerHTML = `
        <p>"${text}"</p>
        <strong>- ${author}</strong>
    `;
    recList.appendChild(newRec);

    // Clear form
    document.getElementById('rec-text').value = '';
    document.getElementById('rec-author').value = '';

    // Show popup (required for Task 3)
    showPopup();
}

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Optional: Add 2-3 sample recommendations on load
window.onload = function() {
    const recList = document.getElementById('rec-list');
    const samples = [
        {text: "Janroe is an excellent developer with great attention to detail.", author: "Sarah Chen"},
        {text: "Very professional and quick learner. Highly recommended!", author: "Michael Torres"}
    ];
    
    samples.forEach(sample => {
        const div = document.createElement('div');
        div.className = 'recommendation';
        div.style.cssText = 'background:white; padding:20px; margin:15px auto; max-width:600px; border-radius:10px; box-shadow:0 5px 15px rgba(0,0,0,0.1); text-align:left;';
        div.innerHTML = `<p>"${sample.text}"</p><strong>- ${sample.author}</strong>`;
        recList.appendChild(div);
    });
};