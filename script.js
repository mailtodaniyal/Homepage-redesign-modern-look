        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
        
        // Intersection Observer for Animations
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(element);
        });
        
        // Simple Testimonial Slider
        const testimonials = [
            {
                content: "Dankzij de professionele begeleiding van Huisinfo is onze verbouwing vlekkeloos verlopen. Ze hebben ons veel tijd en geld bespaard door problemen vroegtijdig te signaleren.",
                name: "Sanne de Vries",
                title: "Particuliere klant",
                image: "https://randomuser.me/api/portraits/women/45.jpg"
            },
            {
                content: "Als aannemer werk ik al jaren samen met Huisinfo. Hun technische kennis en praktische aanpak zijn onmisbaar voor kwalitatief hoogstaande projecten.",
                name: "Peter Jansen",
                title: "Aannemer",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
                content: "De bouwbegeleiding van Huisinfo gaf ons gemoedsrust tijdens ons complexe renovatieproject. Ze dachten mee en kwamen met creatieve oplossingen.",
                name: "Eva en Mark",
                title: "Particuliere klanten",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
            }
        ];
        
        let currentTestimonial = 0;
        const testimonialContainer = document.querySelector('.testimonial-slider');
        
        function updateTestimonial() {
            const testimonial = testimonials[currentTestimonial];
            testimonialContainer.innerHTML = `
                <div class="testimonial">
                    <div class="testimonial-content">
                        <p>${testimonial.content}</p>
                    </div>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            <img src="${testimonial.image}" alt="${testimonial.name}">
                        </div>
                        <div class="author-name">${testimonial.name}</div>
                        <div class="author-title">${testimonial.title}</div>
                    </div>
                </div>
            `;
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }
        
        // Change testimonial every 5 seconds
        updateTestimonial();
        setInterval(updateTestimonial, 5000);
