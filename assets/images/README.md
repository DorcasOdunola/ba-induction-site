# Photography & Placeholder Images Guide

This folder and the `assets/js/data.js` file manage the photography used across the **"Beautiful in His Time"** Nursing Induction Celebration Website.

---

## 1. Main Website (`index.html`) Images

| Section | Role / Description | Current Placeholder Source |
| :--- | :--- | :--- |
| **Hero Section** | Elegant professional portrait of young woman | Unsplash (`photo-1573496359142-b8d87734a5a2`) |
| **My Story Collage 1** | Stethoscope & clinical practice | Unsplash (`photo-1584515979956-d9f6e5d09982`) |
| **My Story Collage 2** | Graduation & academic celebration | Unsplash (`photo-1523240795612-9a054b0db644`) |
| **My Story Collage 3** | Hospital environment / clinical wards | Unsplash (`photo-1519494026892-80bbd2d6fd0d`) |
| **My Story Collage 4** | Scrubs / compassionate patient care | Unsplash (`photo-1584515933487-779824d29309`) |
| **Photo Speaks 1** | Clinical ward postings & hospital rounds | Unsplash (`photo-1576091160399-112ba8d25d1d`) |
| **Photo Speaks 2** | Diagnostic examinations & clinical tools | Unsplash (`photo-1584515979956-d9f6e5d09982`) |
| **Photo Speaks 3** | Midwifery & maternal care | Unsplash (`photo-1584515933487-779824d29309`) |
| **Photo Speaks 4** | Class of 2026 graduation celebration | Unsplash (`photo-1523240795612-9a054b0db644`) |
| **Moments Carousel (19 Images)** | Actual Nursing Journey Photographs | Local files: `first.jpeg` through `nineteenth.jpeg` |

---

## 2. Separate Support Page (`support.html`) Images (13 Items)

| Item Name | Role / Description | Current Placeholder Source |
| :--- | :--- | :--- |
| **1. Black Heel Shoes** | Completely black women's heels | Unsplash (`photo-1515347619252-60a4bf4fff4f`) |
| **2. Shoulder-Length Straight Wig** | Sleek straight wig | Unsplash (`photo-1522337360788-8b13dee7a37e`) |
| **3. Emerald Green Nursing Scrubs** | Nurse in green scrubs with a stethoscope | Pexels (`5207099`) |
| **4. Stethoscope & Sphygmomanometer** | Medical professional using a stethoscope | Unsplash (`photo-1505751172876-fa1923c5c528`) |
| **5. Ready-to-Wear Gown** | Modest, decent formal gown | Unsplash (`photo-1595777457583-95e059d581b8`) |
| **6. Smart Wristwatch** | Smart clinical timepiece | Unsplash (`photo-1523275335684-37898b6baf30`) |
| **7. Nursing Licence Fee** | Healthcare worker holding a certificate | Pexels (`33836786`) |
| **8. Graduation Fee** | African woman celebrating in a graduation gown | Pexels (`6608226`) |
| **9. Send-Forth Project Fee** | University students conducting a medical lab study | Pexels (`40117751`) |
| **10. Photography** | Studio camera & lighting | Unsplash (`photo-1516035069371-29a1b244cc32`) |
| **11. Guest Feeding** | Nigerian cuisine served at a celebratory buffet | Pexels (`8166269`) |
| **12. Jotter Souvenir** | Spiral jotter and pen for custom event branding | Pexels (`5861189`) |
| **13. Celebratory Cake** | Elegant floral celebration cakes | Pexels (`29051739`) |

---

## 3. Replacing with Blessing's Actual Photographs

When Blessing's actual photos are ready:

### Step 1: Copy Image Files into `assets/images/`
Place the image files in this directory, for example:
- `assets/images/blessing-hero.jpg`
- `assets/images/blessing-speaks-1.jpg`
- `assets/images/blessing-speaks-2.jpg`
- `assets/images/blessing-gallery-1.jpg`
- `assets/images/item-heels.jpg`
- etc.

### Step 2: Update Image Paths in `assets/js/data.js` and `index.html` / `support.html`
Update the `image` properties in `SITE_DATA` in [`assets/js/data.js`](file:///c:/Users/USER/Desktop/Sister%20blessing/assets/js/data.js), or edit the `src` attributes in `index.html` and `support.html`.

---

## 4. Recommended Dimensions & Aspect Ratios

- **Hero Portrait:** `900 x 1125 px` (4:5 vertical portrait aspect ratio). High resolution with face well-centered.
- **Photo Speaks Cards:** `800 x 550 px` (16:11 aspect ratio).
- **Moments Gallery Items:** `800 x 600 px` (4:3 aspect ratio).
- **Support Product Cards:** `800 x 600 px` (4:3 aspect ratio).

---

## 5. Fallback Protection

Every `<img>` element includes an automatic `onerror="handleImgFallback(this, 'Label')"` handler configured in `data.js`. If an image link ever breaks or the visitor is offline, the site will automatically render a customized branded SVG placeholder with the item title and theme colors (`#173B70` and `#D1AD61`), preventing broken image icons.
