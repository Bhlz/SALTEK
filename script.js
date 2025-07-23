document.addEventListener('DOMContentLoaded', () => {
    // --- Language Translation Data (Simplified for Demo) ---
    // IMPORTANT: For a production site, you'd load this from JSON files or a backend.
    const translations = {
        es: {
            nav_que_es: '¿Qué es?',
            nav_como_funciona: '¿Cómo Funciona?',
            nav_a_quien_ayuda: '¿A Quién Ayuda?',
            nav_impacto: 'Nuestro Impacto',
            nav_equipo: 'Nuestro Equipo',
            nav_faq: 'FAQ',
            nav_contacto: 'Contacto',
            cta_demo: 'Solicita una Demo',
            cta_brochure: 'Descargar Brochure',
            hero_subtitle: 'Innovación en Energía Limpia',
            hero_heading: 'SALTEK: Tu Solución Modular para <span class="highlight">Energía Azul Renovable</span>',
            hero_highlight_text: 'Energía Azul Renovable', // For the span
            hero_description: 'Transformando la diferencia de salinidad del agua en electricidad limpia y sostenible para un futuro brillante.',
            hero_cta_discover: 'Descubre el Potencial',
            hero_cta_brochure: 'Descargar Brochure',
            section_que_es_heading: 'Descubre SALTEK: La Revolución de la Energía Azul',
            section_que_es_p1: 'SALTEK es una solución modular de vanguardia que genera <strong>electricidad 100% limpia y sostenible</strong> aprovechando la diferencia de salinidad entre agua dulce y salada mediante un innovador proceso de <strong>Electrodiálisis Inversa (RED)</strong>. Esta tecnología representa un salto cualitativo hacia un futuro energético más verde y eficiente.',
            feature_renewable_heading: 'Totalmente Renovable',
            feature_renewable_desc: 'Aprovecha la energía inagotable inherente a la naturaleza, sin agotar recursos.',
            feature_emissions_heading: 'Cero Emisiones Netas',
            feature_emissions_desc: 'Opera sin liberar gases de efecto invernadero, contribuyendo a un aire más puro.',
            feature_247_heading: 'Operación Continua 24/7',
            feature_247_desc: 'Genera electricidad ininterrumpidamente, día y noche, independientemente del clima.',
            feature_modular_heading: 'Diseño Modular & Escalable',
            feature_modular_desc: 'Nuestra solución se adapta a diversas escalas y ubicaciones, desde pequeñas comunidades hasta grandes industrias.',
            section_how_it_works_heading: 'El Proceso SALTEK: Ciencia Transformada en Energía',
            diagram_caption: 'Diagrama de Electrodiálisis Inversa (RED)',
            step1_heading: '<i class="fas fa-water"></i> Flujo Dual de Agua',
            step1_desc: 'Agua dulce y salada ingresan en canales alternos, separados por membranas semipermeables.',
            step2_heading: '<i class="fas fa-magnet"></i> Intercambio Iónico Selectivo',
            step2_desc: 'Membranas aniónicas y catiónicas permiten el paso de iones específicos, creando un gradiente electroquímico.',
            step3_heading: '<i class="fas fa-charging-station"></i> Generación de Corriente Eléctrica',
            step3_desc: 'El movimiento de iones a través de las membranas produce un flujo direccional de electrones, generando electricidad.',
            step4_heading: '<i class="fas fa-network-wired"></i> Conexión a la Red',
            step4_desc: 'Electrodos estratégicamente ubicados capturan y dirigen la electricidad generada para su distribución.',
            step5_heading: '<i class="fas fa-globe-americas"></i> Impacto Global',
            step5_desc: 'La energía limpia se integra en comunidades e industrias, impulsando un desarrollo sostenible.',
            section_who_helps_heading: 'SALTEK en Acción: Impulsando el Desarrollo Sostenible Global',
            beneficiary1_heading: 'Comunidades Vulnerables',
            beneficiary1_desc: 'Llevamos electrificación a regiones remotas y desfavorecidas, transformando la calidad de vida y las oportunidades.',
            beneficiary2_heading: 'Organizaciones & Gobiernos',
            beneficiary2_desc: 'Apoyamos iniciativas de desarrollo sostenible y electrificación rural a gran escala con soluciones innovadoras y de bajo impacto.',
            beneficiary3_heading: 'Sectores Industriales & Agrícolas',
            beneficiary3_desc: 'Proporcionamos una fuente de energía confiable, económica y limpia, vital para operaciones críticas y la competitividad sostenible.',
            section_impact_heading: 'Nuestro Legado: Cifras que Transforman Vidas',
            impact_communities: 'Comunidades Electrificadas',
            impact_kwh: 'kWh Generados Anualmente',
            impact_co2: 'Toneladas de CO2 Reducidas',
            testimonial1_quote: '"SALTEK ha sido un pilar para nuestra comunidad. La luz nocturna ha permitido que nuestros hijos estudien y que los pequeños negocios florezcan. Es más que energía, es esperanza."',
            testimonial1_author: '- María P., Líder Comunitaria en El Carmen, Oaxaca',
            testimonial2_quote: '"Integrar SALTEK en nuestros proyectos fue una decisión estratégica. Su modularidad y la mínima huella ambiental son incomparables. Son el futuro de la electrificación rural sostenible."',
            testimonial2_author: '- Dr. Juan G., Director de Proyectos Ambientales, ONG Global Power',
            testimonial3_quote: '"Con SALTEK, nuestros costos operativos se han optimizado drásticamente y nuestro compromiso ambiental es tangible. Una inversión inteligente que se alinea perfectamente con nuestra visión de sostenibilidad."',
            testimonial3_author: '- Ing. Laura R., Gerente de Operaciones, AgroTech Solutions',
            section_team_heading: 'Conoce al Equipo Visionario de SALTEK',
            team_braulio_role: 'CEO & Fundador',
            team_braulio_bio: 'Visionario y estratega con una profunda experiencia en energías renovables y desarrollo tecnológico sostenible.',
            team_hannia_role: 'Directora de I+D',
            team_hannia_bio: 'Científica de materiales, experta en el diseño y optimización de membranas para la Electrodiálisis Inversa.',
            team_daniel_role: 'Director de Tecnología',
            team_daniel_bio: 'Ingeniero con amplia trayectoria en la implementación y gestión de proyectos de electrificación en zonas de difícil acceso.',
            section_faq_heading: 'Preguntas Frecuentes: Resuelve tus Dudas sobre SALTEK',
            faq1_question: '¿Qué es exactamente la Electrodiálisis Inversa (RED)? <i class="fas fa-chevron-down"></i>',
            faq1_answer: 'La Electrodiálisis Inversa (Reverse Electrodialysis - RED) es una tecnología avanzada que genera electricidad aprovechando la diferencia de potencial electroquímico entre dos soluciones con distintas concentraciones de sal (como el agua dulce de un río y el agua salada del mar) a través de membranas de intercambio iónico altamente selectivas. Es un proceso de generación de energía completamente limpio y renovable.',
            faq2_question: '¿Es SALTEK adecuado para mi comunidad o proyecto? <i class="fas fa-chevron-down"></i>',
            faq2_answer: 'SALTEK es ideal para cualquier ubicación que tenga acceso a fuentes de agua con diferencias de salinidad significativas, como la confluencia de ríos y el mar, la cercanía a lagos salinos o la disponibilidad de salmueras. Su diseño modular permite una fácil adaptación a diversas escalas, desde la provisión de energía para pequeñas comunidades rurales hasta aplicaciones industriales a gran escala, ofreciendo una solución energética flexible y eficiente.',
            faq3_question: '¿Cuál es el costo de implementación y mantenimiento? <i class="fas fa-chevron-down"></i>',
            faq3_answer: 'El costo inicial de implementación de un sistema SALTEK varía considerablemente según la escala del proyecto, la potencia energética requerida y las condiciones específicas del sitio. Ofrecemos estudios de viabilidad detallados y presupuestos personalizados para cada cliente. El mantenimiento es notablemente bajo gracias a la robustez y durabilidad de nuestros componentes, así como a la naturaleza pasiva y eficiente del proceso de generación de energía, lo que se traduce en menores costos operativos a largo plazo.',
            faq4_question: '¿Cuál es la vida útil esperada de un sistema SALTEK? <i class="fas fa-chevron-down"></i>',
            faq4_answer: 'Nuestros sistemas están meticulosamente diseñados para ofrecer una larga vida útil. Las membranas y todos los componentes han sido optimizados y seleccionados para resistir las condiciones ambientales y operativas más exigentes. Con un mantenimiento preventivo adecuado y siguiendo nuestras recomendaciones, esperamos que un sistema SALTEK opere de manera eficiente y confiable por más de 20 años, asegurando un retorno de inversión a largo plazo.',
            section_contact_heading: 'Conéctate con Nosotros: Impulsa el Cambio Energético',
            contact_form_heading: 'Envíanos un Mensaje',
            form_label_name: 'Nombre Completo',
            form_label_email: 'Correo Electrónico',
            form_label_subject: 'Asunto',
            form_label_message: 'Tu Mensaje',
            form_submit_button: 'Enviar Mensaje',
            contact_info_heading: 'Información de Contacto',
            contact_info_email_label: 'Email:',
            contact_info_phone_label: 'Teléfono:',
            contact_info_address_label: 'Oficina Principal:',
            footer_copyright: '&copy; 2025 SALTEK. Todos los derechos reservados.',
            footer_privacy: 'Política de Privacidad',
            footer_terms: 'Términos de Servicio',
            form_error_required: 'Este campo es obligatorio.',
            form_error_name: 'Por favor, introduce tu nombre.',
            form_error_email_valid: 'Introduce un correo electrónico válido.',
            form_error_email_required: 'El correo electrónico es obligatorio.',
            form_error_message: 'Por favor, escribe tu mensaje.',
            form_submit_sending: 'Enviando mensaje...',
            form_submit_success: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
            form_submit_error: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.',
            form_validation_error_summary: 'Por favor, corrige los errores en el formulario.'
        },
        en: {
            nav_que_es: 'What is it?',
            nav_como_funciona: 'How it Works?',
            nav_a_quien_ayuda: 'Who Benefits?',
            nav_impacto: 'Our Impact',
            nav_equipo: 'Our Team',
            nav_faq: 'FAQ',
            nav_contacto: 'Contact',
            cta_demo: 'Request a Demo',
            cta_brochure: 'Download Brochure',
            hero_subtitle: 'Clean Energy Innovation',
            hero_heading: 'SALTEK: Your Modular Solution for <span class="highlight">Renewable Blue Energy</span>',
            hero_highlight_text: 'Renewable Blue Energy',
            hero_description: 'Transforming salinity differences in water into clean, sustainable electricity for a brighter future.',
            hero_cta_discover: 'Discover the Potential',
            hero_cta_brochure: 'Download Brochure',
            section_que_es_heading: 'Discover SALTEK: The Blue Energy Revolution',
            section_que_es_p1: 'SALTEK is a cutting-edge modular solution that generates <strong>100% clean and sustainable electricity</strong> by harnessing the salinity difference between fresh and saltwater through an innovative <strong>Reverse Electrodialysis (RED)</strong> process. This technology represents a qualitative leap towards a greener and more efficient energy future.',
            feature_renewable_heading: 'Fully Renewable',
            feature_renewable_desc: 'Harnesses inexhaustible energy inherent in nature, without depleting resources.',
            feature_emissions_heading: 'Zero Net Emissions',
            feature_emissions_desc: 'Operates without releasing greenhouse gases, contributing to cleaner air.',
            feature_247_heading: '24/7 Continuous Operation',
            feature_247_desc: 'Generates electricity uninterruptedly, day and night, regardless of weather.',
            feature_modular_heading: 'Modular & Scalable Design',
            feature_modular_desc: 'Our solution adapts to various scales and locations, from small communities to large industries.',
            section_how_it_works_heading: 'The SALTEK Process: Science Transformed into Energy',
            diagram_caption: 'Reverse Electrodialysis (RED) Diagram',
            step1_heading: '<i class="fas fa-water"></i> Dual Water Flow',
            step1_desc: 'Fresh and saltwater enter alternating channels, separated by semi-permeable membranes.',
            step2_heading: '<i class="fas fa-magnet"></i> Selective Ion Exchange',
            step2_desc: 'Anionic and cationic membranes allow specific ions to pass through, creating an electrochemical gradient.',
            step3_heading: '<i class="fas fa-charging-station"></i> Electricity Generation',
            step3_desc: 'The movement of ions across the membranes produces a directional flow of electrons, generating electricity.',
            step4_heading: '<i class="fas fa-network-wired"></i> Grid Connection',
            step4_desc: 'Strategically located electrodes capture and direct the generated electricity for distribution.',
            step5_heading: '<i class="fas fa-globe-americas"></i> Global Impact',
            step5_desc: 'Clean energy integrates into communities and industries, driving sustainable development.',
            section_who_helps_heading: 'SALTEK in Action: Driving Global Sustainable Development',
            beneficiary1_heading: 'Vulnerable Communities',
            beneficiary1_desc: 'We bring electrification to remote and disadvantaged regions, transforming quality of life and opportunities.',
            beneficiary2_heading: 'Organizations & Governments',
            beneficiary2_desc: 'We support large-scale sustainable development and rural electrification initiatives with innovative and low-impact solutions.',
            beneficiary3_heading: 'Industrial & Agricultural Sectors',
            beneficiary3_desc: 'We provide a reliable, economical, and clean energy source, vital for critical operations and sustainable competitiveness.',
            section_impact_heading: 'Our Legacy: Numbers That Transform Lives',
            impact_communities: 'Communities Electrified',
            impact_kwh: 'kWh Generated Annually',
            impact_co2: 'Tons of CO2 Reduced',
            testimonial1_quote: '"SALTEK has been a pillar for our community. Night lighting has allowed our children to study and small businesses to flourish. It\'s more than energy, it\'s hope."',
            testimonial1_author: '- María P., Community Leader in El Carmen, Oaxaca',
            testimonial2_quote: '"Integrating SALTEK into our projects was a strategic decision. Its modularity and minimal environmental footprint are unmatched. They are the future of sustainable rural electrification."',
            testimonial2_author: '- Dr. Juan G., Director of Environmental Projects, Global Power NGO',
            testimonial3_quote: '"With SALTEK, our operating costs have been drastically optimized, and our environmental commitment is tangible. A smart investment that perfectly aligns with our vision of sustainability."',
            testimonial3_author: '- Eng. Laura R., Operations Manager, AgroTech Solutions',
            section_team_heading: 'Meet the Visionary SALTEK Team',
            team_braulio_role: 'CEO & Founder',
            team_braulio_bio: 'Visionary and strategist with deep experience in renewable energies and sustainable technological development.',
            team_hannia_role: 'R&D Director',
            team_hannia_bio: 'Materials scientist, expert in the design and optimization of membranes for Reverse Electrodialysis.',
            team_daniel_role: 'Technology Director',
            team_daniel_bio: 'Engineer with extensive experience in the implementation and management of electrification projects in hard-to-reach areas.',
            section_faq_heading: 'Frequently Asked Questions: Resolve Your Doubts about SALTEK',
            faq1_question: 'What exactly is Reverse Electrodialysis (RED)? <i class="fas fa-chevron-down"></i>',
            faq1_answer: 'Reverse Electrodialysis (RED) is an advanced technology that generates electricity by leveraging the electrochemical potential difference between two solutions with different salt concentrations (such as fresh water from a river and saltwater from the sea) through highly selective ion-exchange membranes. It is a completely clean and renewable energy generation process.',
            faq2_question: 'Is SALTEK suitable for my community or project? <i class="fas fa-chevron-down"></i>',
            faq2_answer: 'SALTEK is ideal for any location with access to water sources with significant salinity differences, such as the confluence of rivers and the sea, proximity to saline lakes, or the availability of brines. Its modular design allows for easy adaptation to various scales, from providing energy for small rural communities to large-scale industrial applications, offering a flexible and efficient energy solution.',
            faq3_question: 'What is the cost of implementation and maintenance? <i class="fas fa-chevron-down"></i>',
            faq3_answer: 'The initial implementation cost of a SALTEK system varies considerably depending on the project\'s scale, required energy output, and specific site conditions. We offer detailed feasibility studies and customized quotes for each client. Maintenance is remarkably low thanks to the robustness and durability of our components, as well as the passive and efficient nature of the energy generation process, resulting in lower long-term operating costs.',
            faq4_question: 'What is the expected lifespan of a SALTEK system? <i class="fas fa-chevron-down"></i>',
            faq4_answer: 'Our systems are meticulously designed for a long lifespan. Membranes and all components have been optimized and selected to withstand the most demanding environmental and operational conditions. With proper preventive maintenance and adherence to our recommendations, we expect a SALTEK system to operate efficiently and reliably for over 20 years, ensuring a long-term return on investment.',
            section_contact_heading: 'Connect With Us: Drive Energy Change',
            contact_form_heading: 'Send Us a Message',
            form_label_name: 'Full Name',
            form_label_email: 'Email Address',
            form_label_subject: 'Subject',
            form_label_message: 'Your Message',
            form_submit_button: 'Send Message',
            contact_info_heading: 'Contact Information',
            contact_info_email_label: 'Email:',
            contact_info_phone_label: 'Phone:',
            contact_info_address_label: 'Main Office:',
            footer_copyright: '&copy; 2025 SALTEK. All rights reserved.',
            footer_privacy: 'Privacy Policy',
            footer_terms: 'Terms of Service',
            form_error_required: 'This field is required.',
            form_error_name: 'Please enter your name.',
            form_error_email_valid: 'Please enter a valid email address.',
            form_error_email_required: 'Email address is required.',
            form_error_message: 'Please write your message.',
            form_submit_sending: 'Sending message...',
            form_submit_success: 'Thank you for your message! We will get back to you soon.',
            form_submit_error: 'There was an error sending your message. Please try again.',
            form_validation_error_summary: 'Please correct the errors in the form.'
        }
    };

    let currentLanguage = 'es'; // Default language

    // Function to apply translations
    const applyTranslations = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                // Handle innerHTML for elements that contain HTML (like <strong> or <i>)
                if (key.includes('hero_heading') || key.includes('step') || key.includes('faq')) {
                     element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        // Update button text
        const desktopToggle = document.getElementById('langToggleDesktop');
        const mobileToggle = document.getElementById('langToggleMobile');
        if (desktopToggle) desktopToggle.textContent = lang === 'es' ? 'English' : 'Español';
        if (mobileToggle) mobileToggle.textContent = lang === 'es' ? 'English' : 'Español';

        // Update HTML lang attribute for accessibility and SEO
        document.documentElement.lang = lang;
    };

    // Toggle language
    const toggleLanguage = () => {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        applyTranslations(currentLanguage);
    };

    // Add event listeners for language toggle buttons
    const langToggleDesktop = document.getElementById('langToggleDesktop');
    const langToggleMobile = document.getElementById('langToggleMobile');
    if (langToggleDesktop) langToggleDesktop.addEventListener('click', toggleLanguage);
    if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);

    // Initial translation application
    applyTranslations(currentLanguage);


    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu and CTA buttons after clicking a link
                const navLinks = document.querySelector('.nav-links');
                const mobileMenuButton = document.getElementById('mobile-menu');
                const headerCtaButtons = document.querySelector('header .cta-buttons');

                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuButton.classList.remove('active');
                    if (headerCtaButtons) {
                        headerCtaButtons.classList.remove('active');
                    }
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
                const targetString = numberElement.getAttribute('data-target');
                const suffix = numberElement.getAttribute('data-suffix') || '';
                const type = numberElement.getAttribute('data-type') || 'number';

                let targetValue = parseFloat(targetString);
                const duration = 2000; // milliseconds
                let startValue = 0;
                const startTime = performance.now();

                const updateNumber = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    let progress = Math.min(elapsed / duration, 1);
                    startValue = progress * targetValue;

                    let displayedValue;
                    if (type === 'kwh' && targetValue >= 1000000) {
                        displayedValue = (startValue / 1000000).toFixed(1);
                    } else if (type === 'kwh' || type === 'co2') {
                         if (targetValue % 1 !== 0) { // If target has decimals
                            displayedValue = startValue.toFixed(1);
                        } else {
                            displayedValue = Math.floor(startValue);
                        }
                    } else { // For communities, usually integer
                        displayedValue = Math.round(startValue);
                    }

                    numberElement.textContent = `${displayedValue}${suffix}`;

                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    } else {
                        // Ensure the final value is exactly the data-target value, formatted
                        let finalDisplay = parseFloat(targetString);
                        if (type === 'kwh' && finalDisplay >= 1000000) {
                            finalDisplay = (finalDisplay / 1000000).toFixed(1);
                        } else if (type === 'kwh' || type === 'co2') {
                             if (finalDisplay % 1 !== 0) {
                                finalDisplay = finalDisplay.toFixed(1);
                            }
                        }
                        numberElement.textContent = `${finalDisplay}${suffix}`;
                    }
                };

                requestAnimationFrame(updateNumber);
                observer.unobserve(numberElement); // Stop observing once animated
            }
        });
    };

    const counterObserver = new IntersectionObserver(animateNumbers, {
        threshold: 0.7 // Trigger when 70% of the element is visible for more impact
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
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealOnScroll, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -70px 0px" // Adjust to trigger slightly earlier
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 4. Testimonial Slider Functionality
    const sliderWrapper = document.querySelector('.testimonials-slider .slider-wrapper');
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentIndex = 0;

    const showTestimonial = (index) => {
        if (!testimonials.length) return;

        // Apply transform to the wrapper first
        if (sliderWrapper) {
            sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
        }

        // Reset opacity for all for fade effect, then set active
        testimonials.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active'); // Add active for CSS-driven fade-in
            } else {
                item.classList.remove('active'); // Remove active from others
            }
        });
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
    let slideInterval = setInterval(goToNextTestimonial, 8000); // Change slide every 8 seconds

    // Pause on hover
    if (sliderWrapper) {
        const testimonialsContainer = document.querySelector('.testimonials-slider'); // Use parent container
        if (testimonialsContainer) {
            testimonialsContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            testimonialsContainer.addEventListener('mouseleave', () => {
                slideInterval = setInterval(goToNextTestimonial, 8000);
            });
        }
    }

    // 5. Mobile Navigation Toggle (Hamburger Menu)
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const headerCtaButtons = document.querySelector('header .cta-buttons');

    if (mobileMenuButton && navLinks && headerCtaButtons) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
            // headerCtaButtons.classList.toggle('active'); // No longer needed here as CTA buttons should be hidden on mobile until menu is opened
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
                    otherQuestion.nextElementSibling.style.maxHeight = "0";
                    otherQuestion.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current answer
            question.classList.toggle('active');
            answer.classList.toggle('active');

            if (question.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                icon.style.transform = 'rotate(0deg)';
                answer.style.maxHeight = "0";
            }
        });
    });

    // 7. Form Validation and Submission (Client-side only)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    const validateField = (inputElement, errorMessageElement, validationFn, errorMessageKey) => {
        const value = inputElement.value.trim();
        if (!validationFn(value)) {
            errorMessageElement.textContent = translations[currentLanguage][errorMessageKey] || translations[currentLanguage]['form_error_required'];
            errorMessageElement.style.display = 'block';
            inputElement.classList.add('invalid');
            return false;
        } else {
            errorMessageElement.textContent = '';
            errorMessageElement.style.display = 'block'; // Keep display block to reserve space
            inputElement.classList.remove('invalid');
            return true;
        }
    };

    const isNotEmpty = (value) => value !== '';
    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        // Real-time validation on blur
        nameInput.addEventListener('blur', () => validateField(nameInput, nameError, isNotEmpty, 'form_error_name'));
        emailInput.addEventListener('blur', () => validateField(emailInput, emailError, isValidEmail, 'form_error_email_valid'));
        messageInput.addEventListener('blur', () => validateField(messageInput, messageError, isNotEmpty, 'form_error_message'));

        // Real-time re-validation on input (clear error if fixed)
        nameInput.addEventListener('input', () => validateField(nameInput, nameError, isNotEmpty, 'form_error_name'));
        emailInput.addEventListener('input', () => validateField(emailInput, emailError, isValidEmail, 'form_error_email_valid'));
        messageInput.addEventListener('input', () => validateField(messageInput, messageError, isNotEmpty, 'form_error_message'));


        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validate all fields on submit
            const isNameValid = validateField(nameInput, nameError, isNotEmpty, 'form_error_name');
            const isEmailValid = validateField(emailInput, emailError, isValidEmail, 'form_error_email_valid');
            const isMessageValid = validateField(messageInput, messageError, isNotEmpty, 'form_error_message');

            if (!isNameValid || !isEmailValid || !isMessageValid) {
                formMessage.textContent = translations[currentLanguage]['form_validation_error_summary'];
                formMessage.className = 'error active'; // Show error message
                return;
            }

            // Simulate form submission
            formMessage.textContent = translations[currentLanguage]['form_submit_sending'];
            formMessage.className = 'active'; // Clear previous classes, show active

            setTimeout(() => {
                const isSuccess = Math.random() > 0.3; // Simulate success/failure

                if (isSuccess) {
                    formMessage.textContent = translations[currentLanguage]['form_submit_success'];
                    formMessage.className = 'success active';
                    contactForm.reset(); // Clear form fields
                    // Clear any lingering error messages
                    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
                    document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
                } else {
                    formMessage.textContent = translations[currentLanguage]['form_submit_error'];
                    formMessage.className = 'error active';
                }
            }, 1500); // Simulate network delay
        });
    }
});