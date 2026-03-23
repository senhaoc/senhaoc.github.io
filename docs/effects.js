document.addEventListener('DOMContentLoaded', () => {

  // ── Typewriter ──
  const el = document.getElementById('typewriter');
  if (el) {
    const phrases = [
      'Multimodal Reasoning',
      'Vision-Language Models',
      'Reinforcement Learning for VLMs',
      'Cross-modal Retrieval & Generation'
    ];
    let phraseIdx = 0, charIdx = 0, deleting = false;

    function tick() {
      const current = phrases[phraseIdx];
      el.textContent = current.substring(0, charIdx);

      if (!deleting) {
        charIdx++;
        if (charIdx > current.length) {
          deleting = true;
          return setTimeout(tick, 1800);
        }
        return setTimeout(tick, 80);
      }
      charIdx--;
      if (charIdx < 0) {
        charIdx = 0;
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        return setTimeout(tick, 400);
      }
      return setTimeout(tick, 40);
    }
    tick();
  }

  // ── Scroll Reveal ──
  const revealSelectors = [
    '.education-item', '.pub-item', '.experience-item',
    '.pub-detail', '.life-section'
  ];
  const revealEls = document.querySelectorAll(revealSelectors.join(','));
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));

  // ── 3D Tilt on Cards ──
  const tiltEls = document.querySelectorAll('.pub-item, .education-item');
  tiltEls.forEach(card => {
    card.classList.add('tilt-card');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform =
        `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});
