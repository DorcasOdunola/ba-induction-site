/**
 * ====================================================================
 * BEAUTIFUL IN HIS TIME - NURSING INDUCTION CELEBRATION WEBSITE
 * Central Configuration & Content Data File
 * ====================================================================
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
  // 2. CONTACT & SUPPORT CONFIGURATION (WhatsApp Only)
  // ------------------------------------------------------------------
  contact: {
    // Official WhatsApp phone number for Blessing Mary
    whatsappNumber: "2348107144535", 
    whatsappDisplay: "+234 810 714 4535",
    whatsappIntroMessage: "Hello Blessing, I visited your Beautiful in His Time website and would love to connect with you.",
    location: "College of Health Sciences, LAUTECH, Ogbomoso, Oyo State, Nigeria",
    shareTitle: "Beautiful in His Time — Adewumi Blessing Mary's Nursing Induction",
    shareText: "Join me in celebrating God's faithfulness as I prepare for my Nursing Induction Ceremony at LAUTECH on 25th November 2026!",
    shareUrl: typeof window !== "undefined" && window.location ? window.location.href : ""
  },

  // ------------------------------------------------------------------
  // 3. INDUCTION EVENT DETAILS (Confirmed: 25th November 2026)
  // ------------------------------------------------------------------
  event: {
    eventName: "Nursing Science Induction Ceremony",
    celebrantName: "Adewumi Blessing Mary",
    isDateConfirmed: true,
    confirmedDate: "25th November 2026",
    dateBadgeText: "Confirmed Date: 25th November 2026",
    // Countdown targets 25 November 2026 in local time (midnight start of day)
    targetCountdownDate: "2026-11-25T00:00:00",
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
  // ------------------------------------------------------------------
  images: {
    heroPortrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    heroPortraitAlt: "Placeholder portrait of an elegant young woman in professional attire",
    journeyClinical: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    journeyGraduation: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    journeyHospital: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    journeyCompassion: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
  },

  // ------------------------------------------------------------------
  // 5. PHOTO SPEAKS SECTION (4 Selected Photographs with Captions)
  // ------------------------------------------------------------------
  photoSpeaks: [
    {
      id: "speaks-1",
      tag: "Clinical Practice",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Clinical ward duties and learning rounds",
      caption: "Clinical Ward Postings – First clinical rounds, bedside vitals, and learning patient advocacy at LAUTECH Teaching Hospital."
    },
    {
      id: "speaks-2",
      tag: "Diagnostics",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Stethoscope examination and diagnostic equipment",
      caption: "Hands-on Diagnostics – Mastering vital diagnostic assessments, blood pressure monitoring, and bedside patient care skills."
    },
    {
      id: "speaks-3",
      tag: "Midwifery Care",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Compassionate nursing and maternal healthcare",
      caption: "Midwifery & Maternal Health Posting – Nurturing mothers and newborns with empathy, prayer, and professional care."
    },
    {
      id: "speaks-4",
      tag: "Class of 2026",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Academic milestone and achievement",
      caption: "Class of 2026 Milestones – Celebrating years of perseverance, shared sisterhood, and God's unwavering faithfulness."
    }
  ],

  // ------------------------------------------------------------------
  // 6. MOMENTS ALONG THE WAY (Carousel Photo Gallery - Without Captions)
  // Accommodates additional photographs seamlessly.
  // ------------------------------------------------------------------
  momentsGallery: [
    {
      id: "moment-1",
      image: "assets/images/first.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - clinical training"
    },
    {
      id: "moment-2",
      image: "assets/images/second.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - hospital posting"
    },
    {
      id: "moment-3",
      image: "assets/images/third.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - clinical collaboration"
    },
    {
      id: "moment-4",
      image: "assets/images/fourth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - laboratory sessions"
    },
    {
      id: "moment-5",
      image: "assets/images/fifth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - bedside care"
    },
    {
      id: "moment-6",
      image: "assets/images/sixth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - ward duty"
    },
    {
      id: "moment-7",
      image: "assets/images/seventh.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - clinical documentation"
    },
    {
      id: "moment-8",
      image: "assets/images/eight.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - clinical study"
    },
    {
      id: "moment-9",
      image: "assets/images/ninth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - nursing fellowship"
    },
    {
      id: "moment-10",
      image: "assets/images/tenth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - clinical rounds"
    },
    {
      id: "moment-11",
      image: "assets/images/eleventh.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - practical training"
    },
    {
      id: "moment-12",
      image: "assets/images/tweleth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - maternal health"
    },
    {
      id: "moment-13",
      image: "assets/images/thirteen.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - medical assessments"
    },
    {
      id: "moment-14",
      image: "assets/images/fourteenth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - patient care"
    },
    {
      id: "moment-15",
      image: "assets/images/fifteenth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - clinical environment"
    },
    {
      id: "moment-16",
      image: "assets/images/sixteen.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - academic dedication"
    },
    {
      id: "moment-17",
      image: "assets/images/seventeenth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - healthcare community"
    },
    {
      id: "moment-18",
      image: "assets/images/eighteenth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - graduation countdown"
    },
    {
      id: "moment-19",
      image: "assets/images/nineteenth.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing journey memory - milestone celebration"
    }
  ],

  // ------------------------------------------------------------------
  // 7. PERSONAL STORY NARRATIVE & MILESTONES
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
  // 8. 13 SUPPORT ITEMS (support.html)
  // Each card displays ONLY:
  // - Item image
  // - Item name
  // - "Support with this Item" button (WhatsApp link)
  // No prices, descriptions, specs, or badges.
  // ------------------------------------------------------------------
  supportItems: [
    {
      id: "support-1",
      name: "Black Heel Shoes",
      image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Pair of elegant black women's heel shoes"
    },
    {
      id: "support-2",
      name: "Shoulder-Length Straight Wig",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Sleek straight hair wig"
    },
    {
      id: "support-3",
      name: "Emerald Green Nursing Scrubs",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional emerald green nursing scrubs"
    },
    {
      id: "support-4",
      name: "Stethoscope and Sphygmomanometer",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Clinical stethoscope and sphygmomanometer blood pressure kit"
    },
    {
      id: "support-5",
      name: "Ward Sneakers",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Supportive ward sneakers for clinical duties"
    },
    {
      id: "support-6",
      name: "Ready-to-Wear Gown",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Elegant modest ready-to-wear gown for celebration"
    },
    {
      id: "support-7",
      name: "Smart Wristwatch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Smart wristwatch with timer and pulse tracking"
    },
    {
      id: "support-8",
      name: "Nursing Licence Fee",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional nursing council licence and credential registration"
    },
    {
      id: "support-9",
      name: "Graduation Fee",
      image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Academic graduation fee, gown and certificate processing"
    },
    {
      id: "support-10",
      name: "Send-Forth Project Fee",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nursing class send-forth commemorative project"
    },
    {
      id: "support-11",
      name: "Photography",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional studio photoshoot session"
    },
    {
      id: "support-12",
      name: "Feeding",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Celebration reception catering and banquet meal for guests"
    },
    {
      id: "support-13",
      name: "Jotter Souvenir",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Customised ceremony jotter souvenir and stationery"
    }
  ],

  // ------------------------------------------------------------------
  // 9. APPRECIATION & SCRIPTURAL CLOSING
  // ------------------------------------------------------------------
  appreciation: {
    heading: "Thank You for Being Part of My Journey",
    message: "Every prayer, word of encouragement, thoughtful gift and act of support means so much to me. Thank you for celebrating this milestone and being part of my journey. May God bless you abundantly.",
    signature: "With heartfelt gratitude & prayers,",
    name: "Adewumi Blessing Mary"
  }
};

/**
 * Dynamically generates the WhatsApp message and URL for any support item
 * Example:
 * "Hello Blessing, I would love to support you with the Nursing Licence Fee. Please let me know how I can proceed."
 */
function generateWhatsAppSupportUrl(itemName) {
  const waNumber = (typeof SITE_DATA !== "undefined" && SITE_DATA.contact) 
    ? SITE_DATA.contact.whatsappNumber 
    : "2348107144535";
  
  let itemPhrase;
  const lower = itemName.trim().toLowerCase();
  
  if (lower.startsWith("the ")) {
    itemPhrase = itemName.trim();
  } else if (lower === "photography" || lower === "feeding") {
    itemPhrase = itemName.trim();
  } else {
    itemPhrase = "the " + itemName.trim();
  }

  const message = `Hello Blessing, I would love to support you with ${itemPhrase}. Please let me know how I can proceed.`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Global Fallback Handler for Images
 * Generates an elegant SVG data-URI if an image link fails or is offline
 */
function handleImgFallback(imgElement, label) {
  imgElement.onerror = null;
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
  window.generateWhatsAppSupportUrl = generateWhatsAppSupportUrl;
  window.handleImgFallback = handleImgFallback;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { SITE_DATA, generateWhatsAppSupportUrl, handleImgFallback };
}
