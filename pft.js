// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("gmAcJMf-GXK8wyV1x");
})();

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1500);
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Add hover effect to logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.05)';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
    });

    // Animate elements on load
    gsap.from(".logo", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".nav-link", {
        duration: 0.8,
        y: -20,
        opacity: 0,
        delay: 0.5,
        stagger: 0.1,
        ease: "power3.out"
    });

    gsap.from(".name", {
        duration: 1.2,
        x: -50,
        opacity: 0,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from(".title", {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out"
    });

    gsap.from(".description", {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.7,
        ease: "power3.out"
    });

    gsap.from(".skill", {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        delay: 0.9,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    gsap.from(".cta-btn", {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        delay: 1.2,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    gsap.from(".social-section-edge", {
        duration: 1,
        x: 50,
        opacity: 0,
        delay: 1.5,
        ease: "power3.out"
    });

    gsap.from(".floating-element", {
        duration: 2,
        scale: 0,
        opacity: 0,
        delay: 1,
        stagger: 0.5,
        ease: "back.out(1.7)"
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Enhanced Parallax Scrolling
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Parallax effect for elements
        const parallaxElements = document.querySelectorAll('.parallax-element');
        const scrollPosition = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed'));
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // AI Chat Navigation
    const chatToggle = document.getElementById('chatToggle');
    const chatContainer = document.getElementById('chatContainer');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');

    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('active');
    });

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user' : 'ai');
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function processUserInput(input) {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('project') || lowerInput.includes('work')) {
            addMessage("Sure! Let me take you to my projects section.");
            setTimeout(() => {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }, 500);
            return "I've scrolled to my projects section. You can see some of my recent work there.";
        } else if (lowerInput.includes('contact') || lowerInput.includes('book') || lowerInput.includes('hire')) {
            addMessage("Great! Let me show you how to get in touch with me.");
            setTimeout(() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }, 500);
            return "I've taken you to my contact section. You can fill out the form to book my services.";
        } else if (lowerInput.includes('home') || lowerInput.includes('about')) {
            addMessage("Taking you back to the main section.");
            setTimeout(() => {
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            }, 500);
            return "Welcome back to the main section!";
        } else if (lowerInput.includes('skill') || lowerInput.includes('expert')) {
            return "My skills include HTML/CSS, JavaScript, React, Creative Coding, UI/UX Design, Web Animation, Three.js, and GSAP. You can see them in the main section.";
        } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            return "Hello! I'm your portfolio assistant. I can help you navigate to different sections like projects, contact, or skills.";
        } else {
            return "I'm not sure how to help with that. I can guide you to projects, contact information, or tell you about my skills.";
        }
    }

    sendMessage.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';

            setTimeout(() => {
                const response = processUserInput(message);
                addMessage(response);
            }, 1000);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage.click();
        }
    });

    // Booking Form Submission - FIXED VERSION
    const bookingForm = document.getElementById('booking-form');
    const formStatus = document.getElementById('formStatus');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loading state
        const submitBtn = bookingForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Get form data with CORRECT parameter names
        const formData = {
            name: document.getElementById('name').value,
            client_email: document.getElementById('email').value,
            client_phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            client_message: document.getElementById('message').value,
            budget: document.getElementById('budget').value,
            client_name: document.getElementById('name').value, // Added for confirmation template
            to_email: document.getElementById('email').value, // Added for confirmation template
            company_name: "Ayo Codes", // For confirmation email
            company_phone: "+2349159180375"
        };

        console.log('Sending form data:', formData);

        // Send notification to yourself (using your template)
        emailjs.send('service_mgexkzo', 'template_ds6xjkd', formData)
            .then(function(response) {
                console.log('SUCCESS! Notification sent to you', response.status, response.text);

                // Send confirmation to client (using client confirmation template)
                return emailjs.send('service_mgexkzo', 'template_nrw0a11', formData);
            })
            .then(function(response) {
                console.log('SUCCESS! Confirmation sent to client', response.status, response.text);

                formStatus.textContent = 'Booking request sent successfully! You will receive a confirmation email shortly.';
                formStatus.className = 'form-status success';
                bookingForm.reset();
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                formStatus.textContent = 'Failed to send booking request. Please try again or contact me directly.';
                formStatus.className = 'form-status error';
            })
            .finally(() => {
                // Reset button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Hide status message after 5 seconds
                setTimeout(() => {
                    formStatus.className = 'form-status';
                    formStatus.textContent = '';
                }, 5000);
            });
    });
});
