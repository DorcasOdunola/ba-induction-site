/**
 * ====================================================================
 * BEAUTIFUL IN HIS TIME - NURSING INDUCTION CELEBRATION WEBSITE
 * Main Application Logic
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Sync static contact links with data.js configuration
  syncContactLinks();
  
  // Initialize all interactive modules
  initNavbar();
  renderWishlistItems("all");
  initWishlistFilters();
  renderSupportItems();
  initCountdownTimer();
  initScrollAnimations();
  initBackToTop();
  initShareFunctionality();
  initCalendarGenerator();
  initCongratulationsForm();
});

// Expose openSupportModal and renderSupportItems to global window
window.openSupportModal = openSupportModal;
window.renderSupportItems = renderSupportItems;

/**
 * Synchronize static WhatsApp links and email links from SITE_DATA
 */
function syncContactLinks() {
  const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
  if (!data || !data.contact) return;

  const waNumber = data.contact.whatsappNumber;
  const generalWaBtns = document.querySelectorAll('a[href*="wa.me/"]');
  generalWaBtns.forEach(btn => {
    // If the link has placeholder 2348000000000, update it to the active number
    if (btn.href.includes("2348000000000")) {
      btn.href = btn.href.replace("2348000000000", waNumber);
    }
  });

  const emailLinks = document.querySelectorAll('a[href*="adewumiblessingmary@example.com"]');
  emailLinks.forEach(link => {
    link.href = link.href.replace("adewumiblessingmary@example.com", data.contact.email);
  });
}

/**
 * Render the 13 Simplified Support Cards on support.html
 * Contains ONLY: Image, Name, and WhatsApp "Support with this Item" button
 */
function renderSupportItems() {
  const container = document.getElementById("support-grid");
  if (!container) return;

  const data = typeof SITE_DATA !== "undefined" ? SITE_DATA : window.SITE_DATA;
  const items = (data && data.supportItems) ? data.supportItems : [];

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted">No support items listed at this time.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map((item, index) => {
    const waUrl = (typeof generateWhatsAppSupportUrl === "function") 
      ? generateWhatsAppSupportUrl(item.name) 
      : `https://wa.me/2348107144535?text=${encodeURIComponent("Hello Blessing, I would love to support you with " + item.name + ". Please let me know how I can proceed.")}`;
    
    const delayClass = (index % 4 !== 0) ? ` delay-${index % 4}` : "";

    return `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4 reveal-on-scroll${delayClass}">
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
              <i class="bi bi-whatsapp text-gold"></i>
              <span>Support with this Item</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Re-observe newly injected elements for scroll animations
  initScrollAnimations();
}



/* --------------------------------------------------------------------
   1. NAVBAR & NAVIGATION INTERACTIONS
   -------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector(".navbar-custom");
  const navLinks = document.querySelectorAll(".nav-link-custom, .navbar-nav .btn-accent-gold");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });

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
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        bsCollapse.hide();
      }
    });
  });

  // Scrollspy logic
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
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
   2. WISHLIST DYNAMIC RENDERING & FILTERING
   -------------------------------------------------------------------- */
function renderWishlistItems(filterCategory = "all") {
  const container = document.getElementById("wishlist-grid");
  if (!container) return;

  const items = SITE_DATA.wishlist || [];
  const filtered = filterCategory === "all" 
    ? items 
    : items.filter(item => item.category === filterCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted">No wishlist items found for this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="col-lg-3 col-md-6 col-sm-6 mb-4 reveal-on-scroll">
      <div class="wishlist-card">
        <div class="wishlist-img-box">
          <img 
            src="${item.image}" 
            alt="${item.imageAlt || item.name}" 
            class="wishlist-img"
            loading="lazy"
            onerror="handleImgFallback(this, '${escapeHtml(item.name)}')"
          />
          <span class="wishlist-category-badge">${escapeHtml(item.categoryLabel)}</span>
          ${item.priceBadge ? `<span class="wishlist-price-badge">${escapeHtml(item.priceBadge)}</span>` : ""}
        </div>
        <div class="wishlist-card-body">
          <h3 class="wishlist-item-title">${escapeHtml(item.name)}</h3>
          ${item.specs ? `<span class="wishlist-spec-tag"><i class="bi bi-tag-fill me-1"></i>${escapeHtml(item.specs)}</span>` : ""}
          <p class="wishlist-item-desc">${escapeHtml(item.description)}</p>
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

  // Re-observe newly injected elements for animations
  initScrollAnimations();
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

/**
 * Opens Support Modal with detailed info and direct WhatsApp action
 */
function openSupportModal(itemId) {
  const item = SITE_DATA.wishlist.find(i => i.id === itemId);
  if (!item) return;

  const modalElement = document.getElementById("supportModal");
  if (!modalElement) return;

  // Prefilled WhatsApp message
  const whatsappMsg = `Hello Blessing, I would love to support you with ${item.name}${item.specs ? ` (${item.specs})` : ""}. Please let me know how I can proceed.`;
  const whatsappUrl = `https://wa.me/${SITE_DATA.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  // Populate Modal Fields
  document.getElementById("modalItemTitle").innerText = item.name;
  document.getElementById("modalItemCategory").innerText = item.categoryLabel;
  document.getElementById("modalItemSpecs").innerText = item.specs ? `Specification: ${item.specs}` : "General Specification";
  document.getElementById("modalItemDesc").innerText = item.description;
  
  const priceRow = document.getElementById("modalItemPriceRow");
  if (item.price) {
    priceRow.innerHTML = `<strong>Estimated Cost:</strong> <span class="badge bg-gold-light text-blue-dark fs-6">${item.price}</span>`;
    priceRow.style.display = "block";
  } else {
    priceRow.style.display = "none";
  }

  const modalImg = document.getElementById("modalItemImg");
  modalImg.src = item.image;
  modalImg.alt = item.name;
  modalImg.onerror = () => handleImgFallback(modalImg, item.name);

  // Set action buttons
  const waBtn = document.getElementById("modalWhatsAppBtn");
  waBtn.href = whatsappUrl;

  const copyBtn = document.getElementById("modalCopyMsgBtn");
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(whatsappMsg).then(() => {
      showToast("Support message copied to clipboard!");
    }).catch(() => {
      showToast("Unable to copy automatically.");
    });
  };

  const modalInstance = new bootstrap.Modal(modalElement);
  modalInstance.show();
}

/* --------------------------------------------------------------------
   3. COUNTDOWN TIMER
   -------------------------------------------------------------------- */
function initCountdownTimer() {
  const daysEl = document.getElementById("countdown-days");
  const hoursEl = document.getElementById("countdown-hours");
  const minutesEl = document.getElementById("countdown-minutes");
  const secondsEl = document.getElementById("countdown-seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(SITE_DATA.event.targetCountdownDate).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minutesEl.innerText = "00";
      secondsEl.innerText = "00";
      const noteEl = document.getElementById("countdown-status-note");
      if (noteEl) noteEl.innerText = "Celebration period is here! All glory to God!";
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
   4. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
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
    // Fallback for older browsers
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

  const shareData = {
    title: SITE_DATA.contact.shareTitle,
    text: SITE_DATA.contact.shareText,
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
   7. CALENDAR & EVENT REMINDER
   -------------------------------------------------------------------- */
function initCalendarGenerator() {
  const btnGoogle = document.getElementById("btnAddToCalendar");
  const btnCopyEvent = document.getElementById("btnCopyEventDetails");

  if (btnGoogle) {
    btnGoogle.addEventListener("click", (e) => {
      e.preventDefault();
      // Google Calendar link for Nov 24, 2026 tentative induction
      const title = encodeURIComponent(SITE_DATA.event.calendarDetails.title);
      const details = encodeURIComponent(`${SITE_DATA.event.calendarDetails.description}\n\nNote: Exact date will be confirmed by LAUTECH.`);
      const location = encodeURIComponent(SITE_DATA.event.venue);
      const dates = "20261124T090000/20261124T140000";
      const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
      window.open(gcalUrl, "_blank", "noopener,noreferrer");
    });
  }

  if (btnCopyEvent) {
    btnCopyEvent.addEventListener("click", () => {
      const text = `Event: ${SITE_DATA.event.eventName}\nCelebrant: ${SITE_DATA.event.celebrantName}\nExpected Window: ${SITE_DATA.event.expectedWindow} (Date to be confirmed)\nVenue: ${SITE_DATA.event.venue}\nTheme: ${SITE_DATA.celebrant.theme}`;
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
      const guestName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "A well-wisher";
      const guestMessage = messageInput.value.trim();

      if (!guestMessage) {
        showToast("Please enter a short congratulatory message or prayer.");
        messageInput.focus();
        return;
      }

      const fullMessage = `Hello Blessing, this is ${guestName}.\n\nCongratulations on your Nursing Induction! 🎉\n\n"${guestMessage}"\n\nMay God make everything beautiful in your time!`;
      const url = `https://wa.me/${SITE_DATA.contact.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
}

/* --------------------------------------------------------------------
   9. UTILITY FUNCTIONS (Clipboard & Toast)
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
