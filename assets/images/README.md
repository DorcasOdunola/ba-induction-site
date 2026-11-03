# Placeholder Images & Photography Guide

This folder and the `assets/js/data.js` file manage the photography used across the **"Beautiful in His Time"** Nursing Induction Celebration Website.

---

## 1. Current Placeholder Photography

All temporary photographs currently linked in `assets/js/data.js` are curated from Unsplash (royalty-free):

| Section | Role / Description | Current Placeholder Source |
| :--- | :--- | :--- |
| **Hero Section** | Elegant professional portrait of young woman | Unsplash (`photo-1573496359142-b8d87734a5a2`) |
| **My Story Collage 1** | Stethoscope & clinical practice | Unsplash (`photo-1584515979956-d9f6e5d09982`) |
| **My Story Collage 2** | Graduation & academic celebration | Unsplash (`photo-1523240795612-9a054b0db644`) |
| **My Story Collage 3** | Hospital environment / clinical wards | Unsplash (`photo-1519494026892-80bbd2d6fd0d`) |
| **My Story Collage 4** | Scrubs / compassionate patient care | Unsplash (`photo-1584515933487-779824d29309`) |
| **Wishlist Item 1** | Black heel shoes (Size 41) | Unsplash (`photo-1543163521-1bf539c55dd2`) |
| **Wishlist Item 2** | Shoulder-length straight wig | Unsplash (`photo-1522337360788-8b13dee7a37e`) |
| **Wishlist Item 3** | Emerald green scrubs | Unsplash (`photo-1584515933487-779824d29309`) |
| **Wishlist Item 4** | Medical diagnostic equipment | Unsplash (`photo-1584515979956-d9f6e5d09982`) |
| **Wishlist Item 5** | Supportive ward sneakers (Size 41) | Unsplash (`photo-1595950653106-6c9ebd614d3a`) |
| **Wishlist Item 6** | Ready-to-wear gown (Size 12) | Unsplash (`photo-1566174053879-31528523f8ae`) |
| **Wishlist Item 7** | Smart wristwatch | Unsplash (`photo-1523275335684-37898b6baf30`) |
| **Wishlist Item 8** | Studio photography session | Unsplash (`photo-1516035069371-29a1b244cc32`) |

---

## 2. Replacing with Blessing's Actual Photographs

When Blessing's actual photos are ready:

### Step 1: Place Image Files in this Directory
Copy Blessing's photos into this folder (`assets/images/`), for example:
- `assets/images/blessing-hero-portrait.jpg`
- `assets/images/blessing-journey-1.jpg`
- `assets/images/blessing-journey-2.jpg`
- `assets/images/blessing-studio.jpg`

### Step 2: Update Image Paths in `assets/js/data.js`
Open `assets/js/data.js` and update the respective image properties:

```javascript
// Example in assets/js/data.js:
images: {
  heroPortrait: "assets/images/blessing-hero-portrait.jpg",
  heroPortraitAlt: "Portrait of Adewumi Blessing Mary (RN, RM, RPHN, BNSc)",
  // ...
}
```

And in `SITE_DATA.wishlist`:
```javascript
{
  id: "item-8",
  name: "Studio Photography Session",
  image: "assets/images/blessing-studio.jpg",
  // ...
}
```

---

## 3. Recommended Dimensions & Aspect Ratios

- **Hero Portrait:** `900 x 1125 px` (4:5 vertical portrait aspect ratio). High resolution with face well-centered.
- **Story Collage Images:** `800 x 800 px` (1:1 square aspect ratio).
- **Wishlist Product Cards:** `800 x 600 px` (4:3 horizontal aspect ratio).

---

## 4. Fallback Protection

Every `<img>` element includes an automatic `onerror="handleImgFallback(this, 'Label')"` handler configured in `data.js`. If an image link ever breaks or the visitor is offline, the site will automatically render a customized branded SVG placeholder with the item title and theme colors (`#173B70` and `#D1AD61`), preventing any broken image icons.
