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
  - Headings: *Cormorant Garamond* & *Playfair Display* (Luxurious editorial serifs)
  - Body & UI: *Plus Jakarta Sans* (Crisp, modern, readable sans-serif)

---

## 2. Technology Stack

- **HTML5** &mdash; Semantic markup, accessible structure, Open Graph tags.
- **CSS3** &mdash; Custom stylesheet (`assets/css/style.css`), CSS variables, mobile-first layouts, smooth transitions.
- **Bootstrap 5.3.3** (via CDN) &mdash; Grid, modal system, responsive utilities.
- **Bootstrap Icons 1.11.3** (via CDN) &mdash; Crisp vector icons for medical, faith, and navigation cues.
- **Vanilla JavaScript** &mdash; Clean separation of data (`data.js`) and application logic (`main.js`). No external frontend frameworks or heavy dependencies.

---

## 3. Project Structure

```
Sister blessing/
│
├── index.html                   # Main celebration single-page document
├── assets/
│   ├── css/
│   │   └── style.css            # Custom brand styles & responsive design
│   ├── js/
│   │   ├── data.js              # Central content, configuration & fallback logic
│   │   └── main.js              # Interactivity, countdown, modal, sharing, filters
│   └── images/
│       └── README.md            # Photography guide & image replacement instructions
│
└── README.md                    # Project overview & documentation
```

---

## 4. Key Sections & Features

1. **Navigation Bar**
   - Brand monogram and typography.
   - Smooth scrolling between sections (`#home`, `#story`, `#induction`, `#wishlist`, `#contact`).
   - Sticky navbar with backdrop blur and active scrollspy highlight.
   - Mobile menu with auto-collapse on item selection.
   - Prominent "View Wishlist" button.

2. **Hero Section**
   - Title: *"Beautiful in His Time"* &amp; Subtitle: *"My Nursing Journey"*.
   - Celebrant: **Adewumi Blessing Mary**.
   - Verified credential badges: **RN** (Registered Nurse), **RM** (Registered Midwife), **RPHN** (Registered Public Health Nurse), **BNSc** (Bachelor of Nursing Science).
   - Inspiring introductory message.
   - Two CTA buttons (*"Discover My Journey"* and *"View My Wishlist"*).
   - High-quality placeholder portrait with double gold accent border and induction badge.

3. **Scripture Banner**
   - Anchored on Ecclesiastes 3:11: *"He has made everything beautiful in its time."*

4. **My Story Section**
   - Personal narrative of leaving a former academic course to answer the calling into Nursing Science at LAUTECH.
   - Christian emphasis preserved: testimony of God's guidance, resilience, and grace.
   - 4-Phase Milestone Cards: *The Calling*, *The Bold Leap*, *Clinical Rigour*, and *Quadruple Qualification*.
   - Photo collage highlighting clinical practice, ward duties, and academic triumph.

5. **Induction Details Section**
   - Formal event invitation card with classic corner ornaments.
   - Clear, pulsating **"Date to be confirmed"** indicator badge.
   - Expected date window: *24th or 25th November 2026*.
   - Venue: *College of Health Sciences, LAUTECH, Ogbomoso, Oyo State*.
   - Functional Countdown Timer ticking down toward the anticipated November 2026 ceremony.
   - *"Add Reminder to Calendar"* (Google Calendar integration).
   - *"View Venue on Map"* (Google Maps location link).
   - *"Copy Event Details"* with instant toast notification.

6. **Wishlist Section**
   - Section heading: *"A Little Help Goes a Long Way"*.
   - Filterable categories: *All Items*, *Ceremony & Attire*, *Clinical Essentials*, *Studio & Keepsakes*.
   - 8 Specific Wishlist items:
     1. Black heel shoes (Size: 41)
     2. Shoulder-length straight wig
     3. Emerald green nursing scrubs (Personalised: Adewumi B.M)
     4. Medical equipment (Stethoscope & Sphygmomanometer)
     5. Ward sneakers (Size: 41, suitable for scrubs)
     6. Ready-to-wear gown (Dress size: 12)
     7. Smart wristwatch
     8. Studio photography (Estimated cost: ₦35,000)
   - No fake prices on unpriced items.
   - Support Modal & Direct WhatsApp pre-filled enquiry generator:
     > *"Hello Blessing, I would love to support you with [Item Name]. Please let me know how I can proceed."*
   - General financial token / custom blessing option.

7. **Appreciation Section**
   - Heartfelt thank-you message to family, mentors, church community, and well-wishers.

8. **Contact & Well-Wishes Section**
   - Direct WhatsApp contact button.
   - Venue and email inquiry cards.
   - Quick "Send a Congratulatory Prayer" box that formats and sends well-wishes straight to WhatsApp.
   - Website sharing button via native **Web Share API** with automatic clipboard copy fallback.

9. **Footer & Polish**
   - Professional closing statement, copyright 2026.
   - Floating "Back to Top" button that smoothly appears on scroll.
   - Image Fallback handler: dynamically generates branded SVG graphics if any image fails to load.

---

## 5. How to Customize Content

All editable information is centralized in **`assets/js/data.js`**:

### 1. Update WhatsApp Phone Number
Change `whatsappNumber` in `assets/js/data.js`:
```javascript
contact: {
  // Replace with Blessing's actual phone number in international format without '+' or spaces:
  whatsappNumber: "2348012345678",
  whatsappDisplay: "+234 801 234 5678",
  // ...
}
```

### 2. Update Induction Date Once Confirmed
When the faculty confirms the exact date (e.g. 25 November 2026 at 10:00 AM):
```javascript
event: {
  isDateConfirmed: true,
  dateBadgeText: "Date Confirmed",
  expectedWindow: "25th November 2026 &bull; 10:00 AM",
  targetCountdownDate: "2026-11-25T10:00:00",
  // ...
}
```

### 3. Replace Placeholder Images
Place Blessing's actual photos into `assets/images/` and update the paths in `assets/js/data.js` as detailed in [`assets/images/README.md`](file:///c:/Users/USER/Desktop/Sister%20blessing/assets/images/README.md).

---

## 6. How to Run / View

Because this website uses standard HTML5, CSS3, and Vanilla JavaScript, no build step or node installation is needed:

1. **Directly in any browser:**  
   Double click `index.html` or drag it into Chrome, Edge, Safari, or Firefox.

2. **Using a local web server (Recommended):**  
   From the project folder, run any local server, for example:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Node npx serve
   npx serve .
   ```
   Then open `http://localhost:8000` in your browser.
