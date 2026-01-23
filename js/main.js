// ============================================
// PIWC PHILADELPHIA - MAIN.JS
// Page initialization and common utilities
// ============================================

// Initialize EmailJS on page load
// (function() {
//     emailjs.init('eO6Q-nNQblMRmspl0');
// })();

// Common utility functions used across all pages
const PIWC = {
    
    // Initialize suggestion form modal
    initSuggestionForm: function() {
        const otherCheckbox = document.getElementById('other');
        const otherAreaDiv = document.getElementById('otherAreaDiv');
        const suggestionModal = document.getElementById('suggestionModal');
        
        if (otherCheckbox) {
            otherCheckbox.addEventListener('change', function() {
                otherAreaDiv.style.display = this.checked ? 'block' : 'none';
            });
        }

        if (suggestionModal) {
            suggestionModal.addEventListener('hidden.bs.modal', function () {
                document.getElementById('suggestionForm').reset();
                if (otherAreaDiv) otherAreaDiv.style.display = 'none';
                
                // Clear validation states
                const inputs = suggestionModal.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.classList.remove('is-invalid', 'is-valid');
                });
                
                // Clear error messages
                const errorMessages = suggestionModal.querySelectorAll('.invalid-feedback');
                errorMessages.forEach(error => {
                    error.style.display = 'none';
                });
            });
        }
    },

    // Initialize carousel navigation (for events, announcements, etc.)
    initCarousel: function(carouselId, prevBtnId, nextBtnId) {
        const carousel = document.getElementById(carouselId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);

        if (!carousel || !prevBtn || !nextBtn) {
            console.warn(`Carousel elements not found: ${carouselId}`);
            return;
        }

        function updateButtons() {
            const scrollLeft = carousel.scrollLeft;
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            prevBtn.disabled = scrollLeft <= 0;
            nextBtn.disabled = scrollLeft >= maxScroll - 1;
        }

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -430, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 430, behavior: 'smooth' });
        });

        carousel.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);
        
        // Initial state
        updateButtons();
    },

    // Smooth scroll to section
    smoothScroll: function(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    // Format date helper
    formatDate: function(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Add animation on scroll
    animateOnScroll: function() {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(element => {
            if (this.isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated', element.dataset.animate);
            }
        });
    },

    // Initialize all common components
    init: function() {
        console.log('PIWC Website Initialized');
        
        // Initialize suggestion form if modal exists
        if (document.getElementById('suggestionModal')) {
            this.initSuggestionForm();
        }

        // Initialize carousel if it exists
        if (document.getElementById('carousel')) {
            this.initCarousel('carousel', 'prevBtn', 'nextBtn');
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    PIWC.smoothScroll(href);
                }
            });
        });

        // Animate on scroll
        window.addEventListener('scroll', () => this.animateOnScroll());
        this.animateOnScroll(); // Check on load

        // Add active class to current nav item
        this.highlightCurrentNav();
    },

    // Highlight current page in navigation
    highlightCurrentNav: function() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (currentPath === linkPath || 
                (currentPath.includes(linkPath) && linkPath !== '/')) {
                link.classList.add('active');
            }
        });
    }
};

// Honeypot spam protection
// const honeypot = document.getElementById('website');
// if (honeypot && honeypot.value) {
//     console.warn('Spam detected (honeypot)');
//     return false;
// }


// Suggestion form submission handler
function sendSuggestion(event) {
    event.preventDefault();

    // Ensure EmailJS is initialized
    // if (typeof emailjs !== 'undefined' && !emailjs._initialized) {
    //     emailjs.init('eO6Q-nNQblMRmspl0');
    //     emailjs._initialized = true;
    // }
    // if (typeof emailjs === 'undefined') {
    //     showSuggestionFormFeedback('Error: Email service not available. Please try again later.', 'danger');
    //     return false;
    // }

    const form = event.target;
    const suggestionField = document.getElementById('suggestions');
    const benefitsField = document.getElementById('benefits');
    const feedbackDiv = document.getElementById('suggestionFormFeedback');

    // Validate suggestions field
    if (!suggestionField.value.trim()) {
        showSuggestionFormFeedback('Please enter your suggestions.', 'danger');
        suggestionField.focus();
        return false;
    }

    // Validate benefits field
    if (!benefitsField.value.trim()) {
        showSuggestionFormFeedback('Please describe how this will benefit the church.', 'danger');
        benefitsField.focus();
        return false;
    }

    // Get selected areas
    const selectedAreas = Array.from(document.querySelectorAll('input[name="areas[]"]:checked'))
        .map(checkbox => checkbox.value);

    // Validate that at least one area is selected
    if (selectedAreas.length === 0) {
        showSuggestionFormFeedback('Please select at least one area for your suggestion.', 'danger');
        return false;
    }

    // Get other area text if "Other" is selected
    const otherAreaText = document.getElementById('other').checked 
        ? document.getElementById('otherAreaText').value 
        : '';

    // Combine selected areas
    const areasText = selectedAreas.join(', ') + (otherAreaText ? ', Other: ' + otherAreaText : '');

    // Validate implementation choice
    const implementChoice = document.querySelector('input[name="implement"]:checked');
    if (!implementChoice) {
        showSuggestionFormFeedback('Please select if you would help implement this suggestion.', 'danger');
        return false;
    }

    // Prepare template parameters
    const templateParams = {
        fullName: document.getElementById('fullName').value || 'Anonymous',
        contactInfo: document.getElementById('contactInfo').value || 'Not provided',
        areasCheckboxes: areasText,
        suggestions: suggestionField.value,
        benefits: benefitsField.value,
        implement: implementChoice.value
    };

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

    // Clear previous feedback
    if (feedbackDiv) {
        feedbackDiv.style.display = 'none';
        feedbackDiv.innerHTML = '';
    }

    // Send email using EmailJS
    emailjs.send('service_lsrzhml', 'template_vu0g4ns', templateParams)
        .then(function(response) {
            if (response.status === 200) {

                // ✅ MARK SUCCESSFUL SUBMISSION TIME
                localStorage.setItem('piwc_last_submit', Date.now());

                if (feedbackDiv) {
                    feedbackDiv.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">Thank you for your idea submission! We appreciate your feedback and will review it shortly.</div>';
                    feedbackDiv.style.display = 'block';
                }
                form.reset();
                document.getElementById('otherAreaDiv').style.display = 'none';
                setTimeout(function() {
                    const modal = bootstrap.Modal.getInstance(document.getElementById('suggestionModal'));
                    if (modal) {
                        modal.hide();
                    }
                }, 2000);
            } else {
                throw new Error('Failed to send email - Status: ' + response.status);
            }
        })
        .catch(function(error) {
            console.error('EmailJS error:', error);
            if (feedbackDiv) {
                feedbackDiv.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert">Sorry, there was an error submitting your suggestion. Please try again later or contact us directly.</div>';
                feedbackDiv.style.display = 'block';
            }
        })
        .finally(function() {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        });

    return false;
}

// Helper for feedback in suggestion modal
function showSuggestionFormFeedback(message, type) {
    const feedback = document.getElementById('suggestionFormFeedback');
    if (!feedback) return;
    feedback.className = `alert alert-${type} mt-3 text-center`;
    feedback.innerHTML = message;
    feedback.style.display = 'block';
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 5000);
}

// Initialize when DOM is ready
// document.addEventListener('DOMContentLoaded', function() {
//     PIWC.init();
// });



document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('eO6Q-nNQblMRmspl0');
    PIWC.init();

    // Handle suggestion form submit (modal is injected dynamically)
    document.addEventListener('submit', (e) => {
        if (e.target && e.target.id === 'suggestionForm') {
            sendSuggestion(e);
        }
    });
});

// Reinitialize Bootstrap navbar toggle (for dynamic content)
function reinitNavbarToggle() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (!navbarCollapse || !navbarToggler) return;

    // Dispose existing instance if any
    const existing = bootstrap.Collapse.getInstance(navbarCollapse);
    if (existing) {
        existing.dispose();
    }

    // Recreate collapse instance
    new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    });
}

// Spam guard utility
function spamGuard(form, options = {}) {
    const {
        minTime = 3000,      // 3 seconds
        rateLimit = 60000,   // 1 minute
        storageKey = 'piwc_last_submit'
    } = options;

    // Honeypot check
    const honeypot = form.querySelector('.hp-field');
    if (honeypot && honeypot.value) {
        console.warn('Spam blocked: honeypot');
        return false;
    }

    // Timing check
    const loadedAt = parseInt(form.dataset.loadedAt || '0', 10);
    if (loadedAt && Date.now() - loadedAt < minTime) {
        return false;
    }

    // Rate limit check
    const lastSubmit = localStorage.getItem(storageKey);
    if (lastSubmit && Date.now() - lastSubmit < rateLimit) {
        return false;
    }

    return true;
}

document.addEventListener('focusin', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        const form = e.target.closest('form');
        if (form && !form.dataset.loadedAt) {
            form.dataset.loadedAt = Date.now();
        }
    }
});


// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PIWC;
}