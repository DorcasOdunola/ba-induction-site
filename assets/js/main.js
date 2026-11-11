/**
 * ====================================================================
 * BEAUTIFUL IN HIS TIME - NURSING INDUCTION CELEBRATION WEBSITE
 * Main Application Logic
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Safe initialization of each module
  try { syncContactLinks(); } catch (e) { console.error("syncContactLinks error:", e); }
  try { initNavbar(); } catch (e) { console.error("initNavbar error:", e); }
  try { initPhotoProtection(); } catch (e) { console.error("initPhotoProtection error:", e); }
  try { renderSupportItems(); } catch (e) { console.error("renderSupportItems error:", e); }
  try { initMomentsCarousel(); } catch (e) { console.error("initMomentsCarousel error:", e); }
  try { renderWishlistItems("all"); } catch (e) { console.error("renderWishlistItems error:", e); }
  try { initWishlistFilters(); } catch (e) { console.error("initWishlistFilters error:", e); }
  try { initCountdownTimer(); } catch (e) { console.error("initCountdownTimer error:", e); }
  try { initScrollAnimations(); } catch (e) { console.error("initScrollAnimations error:", e); }
  try { initBackToTop(); } catch (e) { console.error("initBackToTop error:", e); }
  try { initShareFunctionality(); } catch (e) { console.error("initShareFunctionality error:", e); }
  try { initCalendarGenerator(); } catch (e) { console.error("initCalendarGenerator error:", e); }
  try { initCongratulationsForm(); } catch (e) { console.error("initCongratulationsForm error:", e); }
});

// Expose functions globally where needed
window.openSupportModal = openSupportModal;
window.renderSupportItems = renderSupportItems;
window.initMomentsCarousel = initMomentsCarousel;

/**
 * Discourage casual saving of personal gallery photos in the browser.
 */
function initPhotoProtection() {
  const protectedPhotos = ".photo-speaks-img, .moments-carousel-img";
  let hoveredPhoto = null;

  document.addEventListener("contextmenu", event => {
    if (event.target instanceof Element && event.target.closest(protectedPhotos)) {
      event.preventDefault();
    }
  });

  document.addEventListener("dragstart", event => {
    if (event.target instanceof Element && event.target.closest(protectedPhotos)) {
      event.preventDefault();
    }
  });

  document.addEventListener("pointermove", event => {
    hoveredPhoto = event.target instanceof Element
      ? event.target.closest(protectedPhotos)
      : null;
  });

  document.addEventListener("keydown", event => {
    if (
      hoveredPhoto &&
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "s"
    ) {
      event.preventDefault();
    }
  });
}

/**
 * Synchronize static WhatsApp links from SITE_DATA
 */
function syncContactLinks() {
  const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
  if (!data || !data.contact) return;

  const waNumber = data.contact.whatsappNumber || "2348107144535";
  const generalWaBtns = document.querySelectorAll('a[href*="wa.me/"]');
  generalWaBtns.forEach(btn => {
    if (btn.href.includes("2348000000000")) {
      btn.href = btn.href.replace("2348000000000", waNumber);
    }
  });
}

/**
 * Render the 13 Simplified Support Cards on support.html
 * Contains ONLY: Image, Name, and WhatsApp "Support with this Item" button
 * Guarantees immediate 100% visibility on desktop and mobile.
 */
function renderSupportItems() {
  const container = document.getElementById("support-grid");
  if (!container) return;

  const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
  const items = (data && data.supportItems) ? data.supportItems : [];

  if (items.length === 0) return;

  container.innerHTML = items.map(item => {
    const waUrl = (typeof generateWhatsAppSupportUrl === "function") 
      ? generateWhatsAppSupportUrl(item.name) 
      : (typeof window.generateWhatsAppSupportUrl === "function"
          ? window.generateWhatsAppSupportUrl(item.name)
          : `https://wa.me/2348107144535?text=${encodeURIComponent("Hello Blessing, I would love to support you with " + item.name + ". Please let me know how I can proceed.")}`);

    return `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
        <div class="support-card">
          <div class="support-card-img-box">
            <img 
              src="${item.image}" 
              alt="${escapeHtml(item.imageAlt || item.name)}" 
              class="support-card-img"
              loading="lazy"
              onerror="handleImgFallback(this, '${escapeHtml(item.name)}')"
            />
          </div>
          <div class="support-card-body">
            <h3 class="support-card-title">${escapeHtml(item.name)}</h3>
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="support-btn-wa"
              aria-label="Support with ${escapeHtml(item.name)} on WhatsApp"
            >
              <i class="bi bi-whatsapp text-gold me-2"></i>
              <span>Support with this Item</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* --------------------------------------------------------------------
   1. NAVBAR & NAVIGATION INTERACTIONS
   -------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector(".navbar-custom");
  if (!navbar) return;

  const navLinks = document.querySelectorAll(".nav-link-custom, .navbar-nav .btn-accent-gold");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  let bsCollapse = null;

  if (navbarCollapse && typeof bootstrap !== "undefined" && bootstrap.Collapse) {
    try {
      bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
    } catch (e) {
      console.warn("Bootstrap collapse skipped:", e);
    }
  }

  // Add scrolled class on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    updateActiveNavLink();
  });

  // Auto-close mobile menu when a nav link is clicked
  if (navbarCollapse && bsCollapse) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });
  }

  // Scrollspy logic
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const currentLink = document.querySelector(`.nav-link-custom[href="#${id}"]`);

      if (scrollPosition >= top && scrollPosition < top + height) {
        document.querySelectorAll(".nav-link-custom").forEach(l => l.classList.remove("active"));
        if (currentLink) currentLink.classList.add("active");
      }
    });
  }
}

/* --------------------------------------------------------------------
   2. MOMENTS ALONG THE WAY - RESPONSIVE IMAGE CAROUSEL
   - Shows ~3 photos at a time on desktop
   - Shows 1 photo at a time on mobile (with preview)
   - Left/Right arrow navigation
   - Pagination dots
   - Touch/swipe navigation
   - Accommodates additional photographs dynamically from data.js
   - No captions underneath
   -------------------------------------------------------------------- */
function initMomentsCarousel() {
  const viewport = document.getElementById("momentsCarouselViewport");
  const track = document.getElementById("momentsCarouselTrack");
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const dotsContainer = document.getElementById("momentsCarouselDots");

  if (!viewport || !track) return;

  const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
  const photos = (data && data.momentsGallery) ? data.momentsGallery : [];

  if (photos.length === 0) return;

  // Render slides dynamically into the track
  track.innerHTML = photos.map((item, idx) => `
    <div class="moments-carousel-slide" data-slide-index="${idx}">
      <div class="moments-carousel-card">
        <img 
          src="${item.image}" 
          alt="${escapeHtml(item.imageAlt || 'Nursing journey memory ' + (idx + 1))}" 
          class="moments-carousel-img"
          loading="lazy"
          draggable="false"
          onerror="handleImgFallback(this, 'Journey Memory ${idx + 1}')"
        />
      </div>
    </div>
  `).join("");

  let currentIndex = 0;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width >= 992) return 3;
    if (width >= 576) return 2;
    return 1;
  }

  function getMaxIndex() {
    const visible = getVisibleCount();
    return Math.max(0, photos.length - visible);
  }

  function renderDots() {
    if (!dotsContainer) return;
    const maxIdx = getMaxIndex();
    const totalDots = maxIdx + 1;

    dotsContainer.innerHTML = Array.from({ length: totalDots }, (_, i) => `
      <button 
        type="button" 
        class="moments-carousel-dot${i === currentIndex ? ' active' : ''}" 
        data-dot-index="${i}" 
        aria-label="Go to slide group ${i + 1}"
      ></button>
    `).join("");

    const dots = dotsContainer.querySelectorAll(".moments-carousel-dot");
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const targetIdx = parseInt(dot.getAttribute("data-dot-index"), 10);
        goToSlide(targetIdx);
      });
    });
  }

  function updateCarousel() {
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) currentIndex = maxIdx;
    if (currentIndex < 0) currentIndex = 0;

    const slides = track.querySelectorAll(".moments-carousel-slide");
    if (!slides.length) return;

    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = 24; // 1.5rem in px
    const offset = currentIndex * (slideWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    // Update arrows
    if (prevBtn) prevBtn.disabled = (currentIndex === 0);
    if (nextBtn) nextBtn.disabled = (currentIndex >= maxIdx);

    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".moments-carousel-dot");
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
      });
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    if (currentIndex < getMaxIndex()) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  // Touch & Swipe gestures for mobile
  viewport.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentTranslate = e.touches[0].clientX - startX;
  }, { passive: true });

  viewport.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    const threshold = 40; // minimum swipe distance
    if (currentTranslate < -threshold) {
      nextSlide();
    } else if (currentTranslate > threshold) {
      prevSlide();
    }
    currentTranslate = 0;
  });

  // Mouse drag support for desktop
  viewport.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    viewport.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentTranslate = e.clientX - startX;
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    viewport.style.cursor = "grab";
    const threshold = 50;
    if (currentTranslate < -threshold) {
      nextSlide();
    } else if (currentTranslate > threshold) {
      prevSlide();
    }
    currentTranslate = 0;
  });

  // Handle Window Resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      renderDots();
      updateCarousel();
    }, 150);
  });

  // Initial render
  renderDots();
  updateCarousel();
}

/* --------------------------------------------------------------------
   3. COUNTDOWN TIMER (Confirmed Date: 25th November 2026)
   -------------------------------------------------------------------- */
function initCountdownTimer() {
  const daysEl = document.getElementById("countdown-days");
  const hoursEl = document.getElementById("countdown-hours");
  const minutesEl = document.getElementById("countdown-minutes");
  const secondsEl = document.getElementById("countdown-seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
  const dateStr = (data && data.event && data.event.targetCountdownDate) 
    ? data.event.targetCountdownDate 
    : "2026-11-25T00:00:00";

  // Use local time for 25 November 2026
  const targetDate = new Date(dateStr).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minutesEl.innerText = "00";
      secondsEl.innerText = "00";
      const noteEl = document.getElementById("countdown-status-note");
      if (noteEl) noteEl.innerText = "Induction day is here! All glory to God!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, "0");
    hoursEl.innerText = String(hours).padStart(2, "0");
    minutesEl.innerText = String(minutes).padStart(2, "0");
    secondsEl.innerText = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* --------------------------------------------------------------------
   4. SCROLL REVEAL ANIMATIONS
   -------------------------------------------------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-on-scroll:not(.revealed)");
  if (!elements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add("revealed"));
  }
}

/* --------------------------------------------------------------------
   5. BACK TO TOP BUTTON
   -------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* --------------------------------------------------------------------
   6. SHARING FUNCTIONALITY (Web Share API with Clipboard Fallback)
   -------------------------------------------------------------------- */
function initShareFunctionality() {
  const shareBtn = document.getElementById("btnShareWebsite");
  const copyBtn = document.getElementById("btnCopyLink");

  const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
  const shareData = {
    title: (data && data.contact && data.contact.shareTitle) || "Beautiful in His Time — Adewumi Blessing Mary's Nursing Induction",
    text: (data && data.contact && data.contact.shareText) || "Join me in celebrating God's faithfulness at my Nursing Induction Ceremony on 25th November 2026!",
    url: window.location.href
  };

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== "AbortError") {
            copyToClipboard(window.location.href, "Website link copied to clipboard!");
          }
        }
      } else {
        copyToClipboard(window.location.href, "Website link copied to clipboard!");
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      copyToClipboard(window.location.href, "Website link copied to clipboard!");
    });
  }
}

/* --------------------------------------------------------------------
   7. CALENDAR & EVENT REMINDER (25th November 2026)
   -------------------------------------------------------------------- */
function initCalendarGenerator() {
  const btnGoogle = document.getElementById("btnAddToCalendar");
  const btnCopyEvent = document.getElementById("btnCopyEventDetails");

  if (btnGoogle) {
    btnGoogle.addEventListener("click", (e) => {
      e.preventDefault();
      const title = encodeURIComponent("Adewumi Blessing Mary - Nursing Induction Ceremony");
      const details = encodeURIComponent("Celebrating Adewumi Blessing Mary (RN, RM, RPHN, BNSc) at her Nursing Induction Ceremony. Theme: Beautiful in His Time.");
      const location = encodeURIComponent("College of Health Sciences, LAUTECH, Ogbomoso, Oyo State");
      // Full-day event on 25 November 2026
      const dates = "20261125T090000/20261125T140000";
      const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
      window.open(gcalUrl, "_blank", "noopener,noreferrer");
    });
  }

  if (btnCopyEvent) {
    btnCopyEvent.addEventListener("click", () => {
      const text = `Event: Nursing Science Induction Ceremony\nCelebrant: Adewumi Blessing Mary (RN, RM, RPHN, BNSc)\nConfirmed Date: 25th November 2026\nVenue: College of Health Sciences, LAUTECH, Ogbomoso, Oyo State\nTheme: Beautiful in His Time`;
      copyToClipboard(text, "Event details copied to clipboard!");
    });
  }
}

/* --------------------------------------------------------------------
   8. CONGRATULATIONS & PRAYER MESSAGE SENDER
   -------------------------------------------------------------------- */
function initCongratulationsForm() {
  const sendBtn = document.getElementById("btnSendPrayer");
  const nameInput = document.getElementById("guestName");
  const messageInput = document.getElementById("guestMessage");

  if (sendBtn && messageInput) {
    sendBtn.addEventListener("click", () => {
      const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
      const waNumber = (data && data.contact && data.contact.whatsappNumber) || "2348107144535";
      const guestName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "A well-wisher";
      const guestMessage = messageInput.value.trim();

      if (!guestMessage) {
        showToast("Please enter a short congratulatory message or prayer.");
        messageInput.focus();
        return;
      }

      const fullMessage = `Hello Blessing, this is ${guestName}.\n\nCongratulations on your Nursing Induction! 🎉\n\n"${guestMessage}"\n\nMay God make everything beautiful in your time!`;
      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(fullMessage)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
}

/* --------------------------------------------------------------------
   9. WISHLIST DYNAMIC RENDERING (For legacy / commented reference)
   -------------------------------------------------------------------- */
function renderWishlistItems(filterCategory = "all") {
  const container = document.getElementById("wishlist-grid");
  if (!container) return;

  const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
  const items = (data && data.wishlist) ? data.wishlist : [];

  const filtered = filterCategory === "all" 
    ? items 
    : items.filter(item => item.category === filterCategory);

  if (filtered.length === 0) return;

  container.innerHTML = filtered.map(item => `
    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
      <div class="wishlist-card">
        <div class="wishlist-img-box">
          <img 
            src="${item.image}" 
            alt="${item.imageAlt || item.name}" 
            class="wishlist-img"
            loading="lazy"
            onerror="handleImgFallback(this, '${escapeHtml(item.name)}')"
          />
        </div>
        <div class="wishlist-card-body">
          <h3 class="wishlist-item-title">${escapeHtml(item.name)}</h3>
          <button 
            type="button" 
            class="wishlist-btn-support" 
            onclick="openSupportModal('${item.id}')"
          >
            <i class="bi bi-gift-fill text-gold"></i>
            <span>Support with This Item</span>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function initWishlistFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderWishlistItems(category);
    });
  });
}

function openSupportModal(itemId) {
  const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
  if (!data || !data.wishlist) return;

  const item = data.wishlist.find(i => i.id === itemId);
  if (!item) return;

  const modalElement = document.getElementById("supportModal");
  if (!modalElement) return;

  const waNumber = data.contact.whatsappNumber || "2348107144535";
  const whatsappMsg = `Hello Blessing, I would love to support you with ${item.name}. Please let me know how I can proceed.`;
  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  const titleEl = document.getElementById("modalItemTitle");
  if (titleEl) titleEl.innerText = item.name;

  const waBtn = document.getElementById("modalWhatsAppBtn");
  if (waBtn) waBtn.href = whatsappUrl;

  const modalInstance = new bootstrap.Modal(modalElement);
  modalInstance.show();
}

/* --------------------------------------------------------------------
   10. UTILITY FUNCTIONS (Clipboard & Toast)
   -------------------------------------------------------------------- */
function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(successMessage);
  } catch (err) {
    showToast("Press Ctrl+C to copy");
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "custom-toast";
    toast.innerHTML = `<i class="bi bi-check-circle-fill"></i><span id="globalToastText"></span>`;
    document.body.appendChild(toast);
  }

  const textEl = document.getElementById("globalToastText");
  if (textEl) textEl.innerText = message;

  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3200);
}

function escapeHtml(string) {
  if (!string) return "";
  const str = String(string);
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
