# Beautiful in His Time &mdash; Nursing Induction Celebration Website

A responsive, personal celebration website built for **Adewumi Blessing Mary (RN, RM, RPHN, BNSc)** as she prepares for her Nursing Induction Ceremony in November 2026.

Designed around the theme:  
> **"Beautiful in His Time: My Nursing Journey"** &mdash; *Ecclesiastes 3:11*

This website communicates faith, gratitude, resilience, purpose, elegance, and celebration. It serves as a testimony of God's faithfulness and invites family, church members, fellow alumni, and well-wishers to share in this significant milestone.

---

## 1. Visual Identity & Brand Direction

- **Dominant Background (White):** `#FFFFFF` / Soft Ivory `#FCFAF6`
- **Headings & Key Elements (Deep Blue):** `#173B70` (Dark Navy `#0E2343`)
- **Accents & Highlights (Gold):** `#D1AD61` (Warm Gold `#BF9B50`, Soft Tint `#FBF7EE`)
- **Typography:**
  - Headings: *Cormorant Garamond* & *Playfair Display* (Editorial serifs)
  - Body & UI: *Plus Jakarta Sans* (Crisp, modern, readable sans-serif)

---

## 2. Technology Stack

- **HTML5** &mdash; Semantic markup, accessible structure, Open Graph tags.
- **CSS3** &mdash; Custom stylesheet (`assets/css/style.css`), CSS variables, mobile-first layouts, smooth transitions.
- **Bootstrap 5.3.3** (via CDN) &mdash; Grid and responsive utilities.
- **Bootstrap Icons 1.11.3** (via CDN) &mdash; Vector icons for medical, faith, and navigation cues.
- **Vanilla JavaScript** &mdash; Clean separation of data (`data.js`) and application logic (`main.js`). No external frontend frameworks or heavy dependencies.

---

## 3. Project Architecture: Two Separate Pages

The project is structured into two dedicated pages within the same workspace:

```
Sister blessing/
│
├── index.html                   # PAGE 1: Main Public Celebration Website
├── support.html                 # PAGE 2: Separate Support Page (Direct URL only)
│
├── assets/
│   ├── css/
│   │   └── style.css            # Custom brand styles & responsive design
│   ├── js/
│   │   ├── data.js              # Central content, configuration & fallback logic
│   │   └── main.js              # Interactivity, countdown, WhatsApp helper, animations
│   └── images/
│       └── README.md            # Photography guide & image replacement instructions
│
└── README.md                    # Project documentation
```

---

## 4. Page 1: Main Celebration Website (`index.html`)

This is the public-facing celebration page. It shares Blessing's inspiring testimony without displaying specific support items or financial needs:

1. **Navigation Bar**
   - Brand identity: *"Beautiful in His Time &bull; Adewumi Blessing Mary"*.
   - Section links: `Home`, `My Story`, `Photo Speaks`, `The Induction`, and `Contact`.
   - *"The Ceremony"* button linking to the event section.
   - **No navigation link to the support page.**

2. **Hero Section**
   - Main heading: *"Beautiful in His Time"* &amp; Subtitle: *"My Nursing Journey"*.
   - Celebrant: **Adewumi Blessing Mary**.
   - Verified credentials badges: **RN** (Registered Nurse), **RM** (Registered Midwife), **RPHN** (Public Health Nurse), **BNSc** (Bachelor of Nursing Science).
   - Inspiring introductory message.
   - CTAs: *"Discover My Journey"* and *"Photo Speaks"*.
   - Large portrait frame with gold accents and induction badge.

3. **Scripture Banner**
   - Anchored on Ecclesiastes 3:11: *"He has made everything beautiful in its time."*

4. **My Story Section**
   - Personal narrative of leaving a former academic course to answer the calling into Nursing Science at LAUTECH.
   - Christian emphasis preserved: testimony of God's guidance, resilience, and grace.
   - 4-Phase Milestone Cards: *The Calling*, *The Bold Leap*, *Clinical Rigour*, and *Quadruple Qualification*.
   - 4-quadrant photo collage highlighting clinical training, ward postings, and academic achievement.

5. **Photo Speaks Section**
   - Features **4 selected photographs** from Blessing's nursing journey.
   - Each photo has an image presentation with a short caption directly underneath.
   - Clearly identified editable placeholder captions ready for Blessing's actual memories.

6. **Moments Along the Way (Interactive Carousel Photo Gallery)**
   - Converted into a smooth, responsive **carousel slider** without captions.
   - Shows 3 photographs simultaneously on desktop, 2 on tablet, and 1 card with peek on mobile.
   - Equipped with previous/next navigation buttons, dynamic pagination indicator dots, and full touch swipe / mouse drag gestures.
   - Dynamically populated from `SITE_DATA.momentsGallery` in `data.js` (currently 8 curated photos, easily expandable) with automatic SVG fallback.

7. **Induction Details Section**
   - Formal event invitation card with classic corner ornaments.
   - **Confirmed Date:** **25th November 2026**.
   - Venue: *College of Health Sciences, LAUTECH, Ogbomoso, Oyo State*.
   - Functional Countdown Timer ticking down toward the confirmed ceremony date (25th November 2026).
   - *"Add Reminder to Calendar"* (Google Calendar integration configured for 25th November 2026).
   - *"View Venue on Map"* (Google Maps location link).
   - *"Copy Event Details"* with instant toast notification.

8. **Wishlist Section (Commented Out)**
   - The entire wishlist section and support modal are safely commented out in HTML for future reference.
   - Support items and financial categories are not displayed anywhere on this public page.

9. **Appreciation Section**
   - Warm thank-you message to family, mentors, church community, and well-wishers.

10. **Connect & Share Section (WhatsApp Only)**
    - All inquiries and contacts direct strictly to WhatsApp.
    - Direct WhatsApp contact button (+2348107144535) preloaded with:
      > *"Hello Blessing, I visited your Beautiful in His Time website and would love to connect with you."*
    - Venue location card for LAUTECH College of Health Sciences.
    - Quick "Send a Congratulatory Prayer" box that formats and sends heartfelt prayers straight to WhatsApp.
    - Website sharing button via native **Web Share API** with clipboard fallback.
    - **All email addresses, icons, and mailto links have been completely removed.**

11. **Footer**
    - Professional closing statement, copyright 2026, and Back-to-Top floating button.

---

## 5. Page 2: Dedicated Support Page (`support.html`)

A completely separate page with its own URL, accessed directly rather than linked from the main navigation:

- **Page Title:** *"Ways to Support My Journey"*
- **Subtitle:** *"As I prepare for this special milestone, there are a few things that would make this journey even more memorable. If you would like to be part of this celebration, I would be deeply grateful for your support in any way you can."*
- **Simple Return Link:** Header link *"← Back to Main Website"* returning to `index.html`.
- **Card Design:** Each card contains **ONLY**:
  1. Item image
  2. Item name
  3. "Support with this Item" button (opens WhatsApp in a new tab)
  *(No descriptions, specifications, sizes, prices, estimated costs, or category badges).*
- **13 Support Items:**
  1. Black Heel Shoes *(Updated with an elegant, completely black women's heel shoe)*
  2. Shoulder-Length Straight Wig
  3. Emerald Green Nursing Scrubs
  4. Stethoscope and Sphygmomanometer
  5. Ready-to-Wear Gown *(Updated with a modest, decent, sophisticated formal gown)*
  6. Smart Wristwatch
  7. Nursing Licence Fee
  8. Graduation Fee
  9. Send-Forth Project Fee
  10. Photography
  11. Guest Feeding
  12. Jotter Souvenir
  13. Celebratory Cake

---

## 6. WhatsApp Support Integration

- **WhatsApp Number:** `+2348107144535` (URL format: `https://wa.me/2348107144535?text=...`)
- **Dynamically Generated Message:**
  Each button opens a WhatsApp conversation with a personalised message:
  > *"Hello Blessing, I would love to support you with the [Item Name]. Please let me know how I can proceed."*
  (e.g., *"Hello Blessing, I would love to support you with the Nursing Licence Fee. Please let me know how I can proceed."*)
- All buttons open in a **new browser tab** (`target="_blank" rel="noopener noreferrer"`).
- **No payment gateway, checkout system, or bank details are displayed.**

---

## 7. How to Run / View

Because this website uses standard HTML5, CSS3, and Vanilla JavaScript, no build step or node installation is needed:

1. **Main Public Celebration:** Open `index.html` in any browser.
2. **Support Page:** Open `support.html` directly in any browser.
3. **Local Server (Optional):**
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Then visit:
   - Main page: `http://localhost:8000/index.html`
   - Support page: `http://localhost:8000/support.html`
