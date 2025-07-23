document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) { // Ensure it's an internal link
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                const navLinks = document.querySelector('.nav-links');
                const menuToggle = document.getElementById('mobile-menu');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // 2. Animated counters for impact metrics (Intersection Observer)
    const impactMetrics = document.querySelectorAll('.impact-metric .number');
    const animateNumbers = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target;
                const target = parseInt(numberElement.getAttribute('data-target').replace(/[KM+]/g, ''));
                const duration = 2000; // milliseconds
                let start = 0;
                const increment = target / (duration / 10); // Calculate increment based on duration and interval

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        clearInterval(timer);
                        start = target;
                    }
                    let displayedValue = Math.floor(start);
                    if (numberElement.getAttribute('data-target').includes('M')) {
                        displayedValue = (displayedValue / 1000000).toFixed(1) + 'M+';
                    } else if (numberElement.getAttribute('data-target').includes('K')) {
                        displayedValue = (displayedValue / 1000).toFixed(1) + 'K+';
                    } else if (numberElement.getAttribute('data-target').includes('+')) {
                        displayedValue = displayedValue + '+';
                    }
                    numberElement.textContent = displayedValue;
                }, 10);
                observer.unobserve(numberElement); // Stop observing once animated
            }
        });
    };

    const counterObserver = new IntersectionObserver(animateNumbers, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    impactMetrics.forEach(metric => {
        counterObserver.observe(metric);
    });

    // 3. Scroll Reveal Animation for sections
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealOnScroll, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Adjust to trigger slightly earlier
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 4. Testimonial Slider Functionality
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentIndex = 0;

    const showTestimonial = (index) => {
        testimonials.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
        // For actual slide effect, you might translate the wrapper:
        // sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    };

    const goToNextTestimonial = () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    };

    const goToPrevTestimonial = () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    };

    // Initial display
    showTestimonial(currentIndex);

    // Add event listeners for buttons
    if (nextButton) nextButton.addEventListener('click', goToNextTestimonial);
    if (prevButton) prevButton.addEventListener('click', goToPrevTestimonial);

    // Auto-advance slider
    let slideInterval = setInterval(goToNextTestimonial, 7000); // Change slide every 7 seconds

    // Pause on hover
    if (sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
        sliderWrapper.addEventListener('mouseleave', () => {
            slideInterval = setInterval(goToNextTestimonial, 7000);
        });
    }


    // 5. Mobile Navigation Toggle (Hamburger Menu)
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
        });
    }

    // 6. FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            // Close other open answers
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                    otherQuestion.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current answer
            question.classList.toggle('active');
            answer.classList.toggle('active');
            if (question.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
                // Set max-height to scrollHeight for smooth auto-height
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                icon.style.transform = 'rotate(0deg)';
                answer.style.maxHeight = "0";
            }
        });
    });


    // 7. Simple Form Validation and Submission (Client-side only)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formMessage.textContent = 'Por favor, rellena todos los campos obligatorios.';
                formMessage.className = 'error';
                formMessage.classList.remove('hidden');
                return;
            }

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Por favor, introduce un correo electrónico válido.';
                formMessage.className = 'error';
                formMessage.classList.remove('hidden');
                return;
            }

            // Simulate form submission
            formMessage.classList.add('hidden'); // Hide previous message
            formMessage.textContent = 'Enviando mensaje...';
            formMessage.className = ''; // Clear previous classes
            formMessage.classList.remove('hidden');

            setTimeout(() => {
                // In a real application, you would send this data to a server
                // using fetch() or XMLHttpRequest
                const isSuccess = Math.random() > 0.5; // Simulate success/failure

                if (isSuccess) {
                    formMessage.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
                    formMessage.className = 'success';
                    contactForm.reset(); // Clear form fields
                } else {
                    formMessage.textContent = 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.';
                    formMessage.className = 'error';
                }
                formMessage.classList.remove('hidden');
            }, 1500); // Simulate network delay
        });
    }

});