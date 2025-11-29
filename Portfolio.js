document.addEventListener('DOMContentLoaded', () => {
    
    // --- THEME TOGGLE FUNCTIONALITY ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    const buttonText = themeToggle.lastChild; // The text node " Dark Mode"

    // 1. Check Local Storage for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        updateButtonState(true);
    }

    // 2. Toggle Event Listener
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const isDarkMode = body.classList.contains('dark-mode');
        
        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Update UI
        updateButtonState(isDarkMode);
    });

    // Helper function to update button text and icon
    function updateButtonState(isDark) {
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            // Update text node safely without removing the icon
            if(themeToggle.childNodes.length > 1) {
                 themeToggle.childNodes[1].nodeValue = " Light Mode";
            }
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            if(themeToggle.childNodes.length > 1) {
                themeToggle.childNodes[1].nodeValue = " Dark Mode";
           }
        }
    }

    // --- FORM SUBMISSION HANDLER (Contact Page) ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual submission
            
            // Visual feedback
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Message Sent!';
            btn.style.backgroundColor = '#4BB543'; // Success Green
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ''; // Revert to CSS var
            }, 3000);
        });
    }

    // --- SMOOTH SCROLL (Optional if using hash links) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});