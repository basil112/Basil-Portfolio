(function () {
    'use strict';

    const prefersReducedMotion = () =>
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('DOMContentLoaded', function () {
        /* -------- Carousel -------- */
        class PremiumCarousel {
            constructor(containerSelector) {
                this.carousel = document.querySelector(containerSelector);
                this.cards = this.carousel?.querySelectorAll('.project-card');
                this.wrapper = this.carousel?.closest('.carousel-wrapper');
                this.prevBtn = this.wrapper?.querySelector('.carousel-prev');
                this.nextBtn = this.wrapper?.querySelector('.carousel-next');
                this.dotsContainer = this.wrapper?.querySelector('.carousel-dots');

                if (!this.carousel || !this.cards?.length) return;

                this.currentIndex = 0;
                this.cardCount = this.cards.length;
                this.isAnimating = false;
                this.touchStartX = 0;
                this.touchEndX = 0;

                this.createDots();
                this.setupEventListeners();
                this.updateCarousel();
            }

            createDots() {
                if (!this.dotsContainer) return;
                this.dotsContainer.innerHTML = '';
                for (let i = 0; i < this.cardCount; i++) {
                    const dot = document.createElement('button');
                    dot.type = 'button';
                    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
                    dot.setAttribute('aria-label', 'Go to project ' + (i + 1));
                    dot.addEventListener('click', () => this.goToSlide(i));
                    this.dotsContainer.appendChild(dot);
                }
            }

            setupEventListeners() {
                this.prevBtn?.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.previous();
                });
                this.nextBtn?.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.next();
                });

                this.carousel.addEventListener('touchstart', (e) => {
                    this.touchStartX = e.changedTouches[0].screenX;
                }, { passive: true });
                this.carousel.addEventListener('touchend', (e) => {
                    this.touchEndX = e.changedTouches[0].screenX;
                    this.handleSwipe();
                }, { passive: true });

                this.onKeydown = (e) => {
                    if (!this.wrapper || !this.isInView()) return;
                    if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        this.previous();
                    } else if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        this.next();
                    }
                };
                document.addEventListener('keydown', this.onKeydown);

                let scrollTimeout;
                this.carousel.addEventListener('scroll', () => {
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => this.syncFromScroll(), 120);
                }, { passive: true });
            }

            isInView() {
                const r = this.wrapper.getBoundingClientRect();
                return r.top < window.innerHeight && r.bottom > 0;
            }

            syncFromScroll() {
                const carouselRect = this.carousel.getBoundingClientRect();
                const center = carouselRect.left + carouselRect.width / 2;
                let best = 0;
                let bestDist = Infinity;
                this.cards.forEach((card, i) => {
                    const cr = card.getBoundingClientRect();
                    const c = cr.left + cr.width / 2;
                    const d = Math.abs(c - center);
                    if (d < bestDist) {
                        bestDist = d;
                        best = i;
                    }
                });
                if (best !== this.currentIndex) {
                    this.currentIndex = best;
                    this.updateDotsAndActive();
                }
            }

            updateDotsAndActive() {
                this.cards.forEach((card, i) => {
                    card.classList.toggle('active', i === this.currentIndex);
                });
                const dots = this.dotsContainer?.querySelectorAll('.carousel-dot');
                dots?.forEach((dot, i) => dot.classList.toggle('active', i === this.currentIndex));
            }

            handleSwipe() {
                const diff = this.touchStartX - this.touchEndX;
                if (Math.abs(diff) > 50) {
                    if (diff > 0) this.next();
                    else this.previous();
                }
            }

            updateCarousel() {
                this.updateDotsAndActive();
                this.scrollToCard();
            }

            scrollToCard() {
                const card = this.cards[this.currentIndex];
                if (!card) return;
                card.scrollIntoView({
                    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }

            next() {
                if (this.isAnimating) return;
                this.isAnimating = true;
                this.currentIndex = (this.currentIndex + 1) % this.cardCount;
                this.updateCarousel();
                setTimeout(() => { this.isAnimating = false; }, 450);
            }

            previous() {
                if (this.isAnimating) return;
                this.isAnimating = true;
                this.currentIndex = (this.currentIndex - 1 + this.cardCount) % this.cardCount;
                this.updateCarousel();
                setTimeout(() => { this.isAnimating = false; }, 450);
            }

            goToSlide(index) {
                this.currentIndex = ((index % this.cardCount) + this.cardCount) % this.cardCount;
                this.updateCarousel();
            }
        }

        new PremiumCarousel('.projects-carousel');

        /* -------- Mobile nav -------- */
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('.nav');

        if (menuToggle && nav) {
            menuToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                const open = !nav.classList.contains('is-open');
                nav.classList.toggle('is-open', open);
                menuToggle.setAttribute('aria-expanded', open);
                menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            });

            nav.querySelectorAll('.nav-link').forEach((link) => {
                link.addEventListener('click', () => {
                    nav.classList.remove('is-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Open menu');
                });
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.nav') && !e.target.closest('.menu-toggle')) {
                    nav.classList.remove('is-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Open menu');
                }
            });
        }

        /* -------- Smooth scroll (in-page) -------- */
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                const id = this.getAttribute('href');
                if (!id || id === '#') return;
                const target = document.querySelector(id);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        /* -------- Header scroll state -------- */
        const header = document.querySelector('.header');
        const updateHeader = () => {
            if (!header) return;
            header.classList.toggle('is-scrolled', window.scrollY > 24);
        };
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });

        /* -------- Scroll progress -------- */
        const progressBar = document.querySelector('.scroll-progress-bar');
        if (progressBar) {
            window.addEventListener('scroll', () => {
                const doc = document.documentElement;
                const scrollTop = window.pageYOffset || doc.scrollTop;
                const height = doc.scrollHeight - window.innerHeight;
                const pct = height > 0 ? (scrollTop / height) * 100 : 0;
                progressBar.style.width = pct + '%';
            }, { passive: true });
        }

        /* -------- Reveal on scroll -------- */
        if (!prefersReducedMotion()) {
            const revealEls = document.querySelectorAll('[data-reveal]');
            const revObs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            revObs.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
            );
            revealEls.forEach((el) => revObs.observe(el));
        } else {
            document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
        }

        /* -------- Active nav by section -------- */
        const navLinks = document.querySelectorAll('.nav .nav-link');
        const sections = document.querySelectorAll('main section[id]');
        const setActiveNav = () => {
            let current = '';
            const pad = 120;
            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - pad) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach((link) => {
                const href = link.getAttribute('href');
                link.classList.toggle('is-active', href === '#' + current);
            });
        };
        window.addEventListener('scroll', setActiveNav, { passive: true });
        setActiveNav();

        /* -------- Hero skill rotation (CSS handles float/morph) -------- */
        const heroShape = document.querySelector('.hero-shape');
        const shapePlaceholder = document.querySelector('.shape-placeholder');
        if (heroShape && shapePlaceholder) {
            const skills = ['Elementor', 'WordPress', 'Shopify', 'HTML', 'CSS', 'Performance'];
            let i = 0;
            shapePlaceholder.textContent = skills[0];
            setInterval(() => {
                shapePlaceholder.classList.add('fade-out');
                setTimeout(() => {
                    i = (i + 1) % skills.length;
                    shapePlaceholder.textContent = skills[i];
                    shapePlaceholder.classList.remove('fade-out');
                    shapePlaceholder.classList.add('fade-in');
                    setTimeout(() => shapePlaceholder.classList.remove('fade-in'), 400);
                }, 200);
            }, 2800);
        }

        /* -------- Subtle parallax on hero (reduced when preferred) -------- */
        const heroGlows = document.querySelectorAll('.hero-glow');
        if (heroGlows.length && !prefersReducedMotion()) {
            window.addEventListener('scroll', () => {
                const y = window.pageYOffset * 0.15;
                heroGlows[0].style.transform = 'translateY(' + y + 'px)';
                if (heroGlows[1]) heroGlows[1].style.transform = 'translateY(' + (-y * 0.6) + 'px)';
            }, { passive: true });
        }

        /* -------- Button ripple -------- */
        document.querySelectorAll('.btn, .btn-cv').forEach((btn) => {
            btn.addEventListener('click', function (e) {
                const rect = this.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
                ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 550);
            });
        });

        /* -------- Cursor (fine pointer only) -------- */
        const finePointer = window.matchMedia('(pointer: fine)').matches;
        if (finePointer && !prefersReducedMotion()) {
            document.body.classList.add('is-fine-pointer');
            const glow = document.createElement('div');
            glow.className = 'cursor-glow';
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            document.body.appendChild(glow);
            document.body.appendChild(dot);

            let mx = 0, my = 0, gx = 0, gy = 0, dx = 0, dy = 0;
            document.addEventListener('mousemove', (e) => {
                mx = e.clientX;
                my = e.clientY;
            }, { passive: true });

            const tick = () => {
                gx += (mx - gx) * 0.08;
                gy += (my - gy) * 0.08;
                dx += (mx - dx) * 0.22;
                dy += (my - dy) * 0.22;
                glow.style.left = gx + 'px';
                glow.style.top = gy + 'px';
                dot.style.left = dx + 'px';
                dot.style.top = dy + 'px';
                requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }
    });
})();
