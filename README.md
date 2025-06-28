# MKU Thika Interactive Campus Map

An interactive map tool created for the Mount Kenya University (Thika Campus). This command-line and browser-based hybrid application visualizes the campus map using Leaflet, calculates walking distances and allows geolocation features.

---

##  Features

-  Autocomplete search for campus locations
-  Popups with image sliders for each location
-  Geolocation support via browser APIs
-  Distance & estimated walking time calculator
-  Animated path rendering between two locations
-  Mobile-friendly sidebar toggle

---

##  Requirements

- A **modern web browser** (Chrome, Firefox, Edge)

---

##  Setup Instructions

1. **Clone this repository**

   ```bash
   git clone https://github.com/your-username/mku-campus-map.git
   cd mku-campus-map
   ```

2. **Run the script**

   Since this app interacts with browser-specific APIs (like Leaflet and Geolocation), it's best viewed in a browser. Create a basic HTML wrapper:

   ```html
   <!-- Save this as index.html -->
   <!DOCTYPE html>
   <html>
   <head>
       <title>MKU Campus Map</title>
       <meta charset="utf-8">
       <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
       <link rel="stylesheet" href="styles.css" />
       <style>#map { height: 100vh; }</style>
   </head>
   <body>
       <div id="map"></div>
       <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
     
       <script src="./script.js"></script>
   </body>
   </html>
   ```

4. **Open `index.html` in your browser**  
   - You can double-click it  
   - Or run with **Live Server** in VS Code  
   - Or host using a local server like `npx serve`

---

##  Project Structure

```
├── script.js           # The full map logic and interactivity
├── index.html          # (You create this to view the map)
```

---

##  Notes

- All map rendering and logic are handled in JavaScript (`script.js`).
- Leaflet is used via CDN; no external installation is needed.
- No backend or database is used; everything runs in the browser.

---

##  Developed By

**Faith Munuhe**   
Mount Kenya University

---


