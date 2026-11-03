/**
 * ====================================================================
 * BEAUTIFUL IN HIS TIME - NURSING INDUCTION CELEBRATION WEBSITE
 * Central Configuration & Content Data File
 * ====================================================================
 * 
 * Edit this file to update personal details, images, contact info,
 * event dates, and wishlist items. Everything is dynamically rendered.
 */

const SITE_DATA = {
  // ------------------------------------------------------------------
  // 1. CELEBRANT PROFILE
  // ------------------------------------------------------------------
  celebrant: {
    fullName: "Adewumi Blessing Mary",
    credentials: "RN, RM, RPHN, BNSc",
    credentialBreakdown: [
      { code: "RN", title: "Registered Nurse" },
      { code: "RM", title: "Registered Midwife" },
      { code: "RPHN", title: "Registered Public Health Nurse" },
      { code: "BNSc", title: "Bachelor of Nursing Science" }
    ],
    theme: "Beautiful in His Time",
    subTheme: "My Nursing Journey",
    institution: "College of Health Sciences, LAUTECH",
    graduationYear: "2026",
    scriptureAnchor: {
      verse: "Ecclesiastes 3:11",
      text: "He has made everything beautiful in its time."
    },
    heroIntro: "After years of perseverance, faith and determination, I am excited to celebrate another significant milestone in my journey into nursing. As I prepare for my induction, I invite you to share in this special moment with me."
  },

  // ------------------------------------------------------------------
  // 2. CONTACT & SUPPORT CONFIGURATION
  // ------------------------------------------------------------------
  contact: {
    // IMPORTANT: Replace with Blessing's actual WhatsApp phone number (with country code, no + or spaces)
    // Example: "2348012345678"
    whatsappNumber: "2348000000000", 
    whatsappDisplay: "+234 800 000 0000 (Placeholder)",
    email: "adewumiblessingmary@example.com", // Placeholder
    location: "Ogbomoso / Oyo State, Nigeria",
    shareTitle: "Beautiful in His Time — Adewumi Blessing Mary's Nursing Induction",
    shareText: "Join me in celebrating God's faithfulness as I prepare for my Nursing Induction Ceremony in November 2026!",
    shareUrl: window.location.href
  },

  // ------------------------------------------------------------------
  // 3. INDUCTION EVENT DETAILS
  // ------------------------------------------------------------------
  event: {
    eventName: "Nursing Science Induction Ceremony",
    celebrantName: "Adewumi Blessing Mary",
    // Current status: Date to be confirmed
    isDateConfirmed: false,
    dateBadgeText: "Date to be confirmed",
    expectedWindow: "24th or 25th November 2026",
    // Target date for countdown (tentatively set to 24 November 2026 09:00 AM)
    targetCountdownDate: "2026-11-24T09:00:00",
    venue: "College of Health Sciences, LAUTECH, Ogbomoso, Oyo State",
    venueShort: "LAUTECH College of Health Sciences, Ogbomoso",
    venueMapUrl: "https://www.google.com/maps/search/College+of+Health+Sciences+LAUTECH+Ogbomoso",
    calendarDetails: {
      title: "Adewumi Blessing Mary - Nursing Induction Ceremony",
      description: "Celebrating Adewumi Blessing Mary (RN, RM, RPHN, BNSc) at her Nursing Induction Ceremony. Theme: Beautiful in His Time.",
      location: "College of Health Sciences, LAUTECH, Ogbomoso, Oyo State"
    }
  },

  // ------------------------------------------------------------------
  // 4. PHOTOGRAPHY & PLACEHOLDER IMAGES
  // Note: All images use high-quality royalty-free placeholders until
  // Blessing's actual photographs are provided.
  // ------------------------------------------------------------------
  images: {
    // Hero Section: Professional, elegant portrait placeholder
    heroPortrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    heroPortraitAlt: "Placeholder portrait of an elegant young woman in professional attire",
    
    // Journey & Story collage placeholders
    journeyClinical: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    journeyGraduation: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    journeyHospital: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    journeyCompassion: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
  },

  // ------------------------------------------------------------------
  // 5. PERSONAL STORY NARRATIVE & MILESTONES
  // ------------------------------------------------------------------
  story: {
    heading: "A Journey of Faith, Resilience and Purpose",
    paragraphs: [
      "Becoming a nurse was a calling I simply could not ignore.",
      "My journey began in a completely different field of study, but along the way, I discovered that my true purpose lay in healthcare and patient advocacy. Guided by this conviction, I made the bold decision to set aside the years I had already invested in another course of study and begin again in Nursing Science.",
      "Taking that step required deep resilience, unwavering determination and strong faith in God. Standing today as a proud graduate on the verge of my induction, I can confidently say that every sacrifice has been worth it.",
      "My induction is, above all, a testament to God's mercy and faithfulness. It is a moment to give Him all the glory for sustaining me through every step of this journey.",
      "More than a professional milestone, this ceremony is a living reflection of how God's plans unfold when faith, determination and resilience align with His grace. Indeed, God leads."
    ],
    milestones: [
      {
        year: "The Calling",
        icon: "bi-heart-pulse-fill",
        title: "A Divine Redirection",
        description: "Recognising that my true purpose was in healthcare and patient healing, I chose to surrender my former academic path."
      },
      {
        year: "The Decision",
        icon: "bi-compass-fill",
        title: "A Bold Leap of Faith",
        description: "Starting afresh in Nursing Science at LAUTECH with unshakable determination, resilience, and prayer."
      },
      {
        year: "The Grind",
        icon: "bi-book-half",
        title: "Clinical Rigour & Dedication",
        description: "Tireless ward postings, intensive examinations, and compassionate patient care through every clinical rotation."
      },
      {
        year: "The Triumph",
        icon: "bi-mortarboard-fill",
        title: "Quadruple Qualification",
        description: "Attaining professional certifications: RN, RM, RPHN, and the prestigious Bachelor of Nursing Science degree."
      }
    ]
  },

  // ------------------------------------------------------------------
  // 6. WISHLIST ITEMS
  // Note: Only item #8 has a specified price (₦35,000).
  // No prices are invented for the other items.
  // ------------------------------------------------------------------
  wishlist: [
    {
      id: "item-1",
      category: "attire",
      categoryLabel: "Ceremony & Attire",
      name: "Black Heel Shoes",
      specs: "Size: 41",
      description: "Elegant black heeled shoes tailored for the induction ceremony, graduation procession, and professional ceremonies.",
      price: null,
      priceBadge: "Size: 41",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Pair of elegant black heeled shoes"
    },
    {
      id: "item-2",
      category: "attire",
      categoryLabel: "Ceremony & Attire",
      name: "Shoulder-Length Straight Wig",
      specs: "Sleek shoulder-length straight hair",
      description: "A refined, premium shoulder-length straight wig to complement the induction gown and formal photography styling.",
      price: null,
      priceBadge: "Ceremony Styling",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Sleek straight hair styling"
    },
    {
      id: "item-3",
      category: "clinical",
      categoryLabel: "Clinical Essentials",
      name: "Emerald Green Nursing Scrubs",
      specs: "Personalised: Adewumi B.M",
      description: "High-grade hospital scrub suit in elegant emerald green, custom-embroidered with the official name: Adewumi B.M.",
      price: null,
      priceBadge: "Personalised Scrub",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional medical nursing scrubs"
    },
    {
      id: "item-4",
      category: "clinical",
      categoryLabel: "Clinical Essentials",
      name: "Medical Diagnostic Equipment",
      specs: "Stethoscope & Sphygmomanometer",
      description: "Clinical-grade diagnostic tools essential for accurate patient assessments, blood pressure monitoring, and ward practice.",
      price: null,
      priceBadge: "Clinical Set",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Clinical stethoscope and diagnostic equipment"
    },
    {
      id: "item-5",
      category: "clinical",
      categoryLabel: "Clinical Essentials",
      name: "Supportive Ward Sneakers",
      specs: "Size: 41 (Suitable for scrubs)",
      description: "Lightweight, shock-absorbing, and all-day supportive sneakers designed specifically for active hospital ward shifts.",
      price: null,
      priceBadge: "Size: 41",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Comfortable athletic sneakers suitable for scrubs"
    },
    {
      id: "item-6",
      category: "attire",
      categoryLabel: "Ceremony & Attire",
      name: "Ready-to-Wear Gown",
      specs: "Dress Size: 12",
      description: "A tastefully tailored, modest, and celebratory ready-to-wear gown for the post-induction reception and thanksgiving banquet.",
      price: null,
      priceBadge: "Dress Size: 12",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Elegant formal ready to wear celebration gown"
    },
    {
      id: "item-7",
      category: "clinical",
      categoryLabel: "Clinical Essentials",
      name: "Smart Wristwatch",
      specs: "Pulse & timer function",
      description: "A precision smart digital timepiece indispensable for pulse checks, medication timing, and busy hospital clinical schedules.",
      price: null,
      priceBadge: "Clinical Utility",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Modern sleek smart wristwatch"
    },
    {
      id: "item-8",
      category: "keepsake",
      categoryLabel: "Studio & Keepsakes",
      name: "Studio Photography Session",
      specs: "Estimated Cost: ₦35,000",
      description: "A commemorative professional studio portrait session to preserve the joy, beauty, and memory of this milestone forever.",
      price: "₦35,000",
      priceBadge: "₦35,000 (Estimated)",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional camera in studio setting"
    }
  ],

  // ------------------------------------------------------------------
  // 7. APPRECIATION & SCRIPTURAL CLOSING
  // ------------------------------------------------------------------
  appreciation: {
    heading: "Thank You for Being Part of My Journey",
    message: "Every prayer, word of encouragement, thoughtful gift and act of support means so much to me. Thank you for celebrating this milestone and being part of my journey. May God bless you abundantly.",
    signature: "With heartfelt gratitude & prayers,",
    name: "Adewumi Blessing Mary"
  }
};

/**
 * Global Fallback Handler for Images
 * Generates an elegant SVG data-URI if an image link fails or is offline
 */
function handleImgFallback(imgElement, label) {
  imgElement.onerror = null; // Prevent infinite loop
  const width = imgElement.getAttribute("width") || 600;
  const height = imgElement.getAttribute("height") || 400;
  const text = label ? label.replace(/["']/g, '') : "Milestone Image";
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#173B70" />
        <stop offset="100%" stop-color="#0E2343" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bgGrad)" />
    <circle cx="300" cy="170" r="48" fill="rgba(209, 173, 97, 0.15)" stroke="#D1AD61" stroke-width="2"/>
    <path d="M288 170 L312 170 M300 158 L300 182" stroke="#D1AD61" stroke-width="3" stroke-linecap="round"/>
    <text x="300" y="250" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="600" fill="#FFFFFF" text-anchor="middle">${text}</text>
    <text x="300" y="278" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#D1AD61" text-anchor="middle">Beautiful in His Time</text>
  </svg>`;

  imgElement.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// Ensure global accessibility in all browser contexts
if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_DATA;
}

