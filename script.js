// Initialize the map centered on MKU Thika
const map = L.map('map').setView([-1.045962, 37.085314], 20);


// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// MKU Thika locations (with your image paths)
const locations = [
    { name: "Bookshop", lat: -1.047035, lng: 37.085743, images: ["https://via.placeholder.com/300x200?text=Bookshop"], description: "Campus bookstore." },
    { name: "Alumni Plaza", lat: -1.046601, lng: 37.085578, images: ["https://via.placeholder.com/300x200?text=Alumni"], description: "Alumni gathering spot." },
    { name: "Medical 1", lat: -1.046408, lng: 37.085432, images: ["https://via.placeholder.com/300x200?text=Medical1"], description: "Medical facility 1." },
    { name: "Medical 2", lat: -1.046787, lng: 37.085200, images: ["https://via.placeholder.com/300x200?text=Medical2"], description: "Medical facility 2." },
    { name: "Swimming Pool", lat: -1.046658, lng: 37.084965, images: ["https://via.placeholder.com/300x200?text=Pool"], description: "Recreational swimming." },
    { name: "Lady's Hostel", lat: -1.046377, lng: 37.084854, images: ["https://via.placeholder.com/300x200?text=Hostel"], description: "Female student housing." },
    { name: "BL5", lat: -1.046360, lng: 37.085115, images: ["https://via.placeholder.com/300x200?text=BL5"], description: "Lecture block 5." },
    { name: "Library", lat: -1.046061, lng: 37.085421, images: ["https://via.placeholder.com/300x200?text=Library"], description: "Main library." },
    { name: "Villa", lat: -1.045989, lng: 37.085132, images: ["https://via.placeholder.com/300x200?text=Villa"], description: "Residential villa." },
    { name: "Table Tennis", lat: -1.046174, lng: 37.084695, images: ["https://via.placeholder.com/300x200?text=TableTennis"], description: "Indoor sports area." },
    { name: "Basketball Court", lat: -1.045920, lng: 37.084798, images: ["https://via.placeholder.com/300x200?text=Basketball"], description: "Outdoor court." },
    { name: "MLT Mart", lat: -1.045747, lng: 37.085348, images: ["https://via.placeholder.com/300x200?text=Mart"], description: "Mini shopping mart." },
    { name: "MLT", lat: -1.045666, lng: 37.085145, images: ["https://via.placeholder.com/300x200?text=MLT"], description: "Multi-purpose lecture theater." },
    { name: "Mwai Kibaki", lat: -1.045474, lng: 37.085761, images: ["https://via.placeholder.com/300x200?text=MwaiKibaki"], description: "Named building or hall." },
    { name: "Tennis Court", lat: -1.045174, lng: 37.085229, images: ["https://via.placeholder.com/300x200?text=Tennis"], description: "Outdoor tennis area." },
    { name: "CC", lat: -1.045062, lng: 37.084998, images: ["https://via.placeholder.com/300x200?text=CC"], description: "Computing center." },
    { name: "Blaze", lat: -1.044689, lng: 37.084949, images: ["https://via.placeholder.com/300x200?text=Blaze"], description: "Student lounge or cafe." },
    { name: "FLT Garden", lat: -1.044988, lng: 37.084782, images: ["https://via.placeholder.com/300x200?text=Garden"], description: "Relaxation garden." },
    { name: "FLT", lat: -1.045065, lng: 37.084607, images: ["https://via.placeholder.com/300x200?text=FLT"], description: "Faculty of Law theater." },
    { name: "Mosque", lat: -1.044056, lng: 37.084519, images: ["https://via.placeholder.com/300x200?text=Mosque"], description: "Place of worship." },
    { name: "CT", lat: -1.043884, lng: 37.084976, images: ["https://via.placeholder.com/300x200?text=CT"], description: "Central theater." },
    { name: "Student Center", lat: -1.043510, lng: 37.084724, images: ["https://via.placeholder.com/300x200?text=StudentCenter"], description: "Student services hub." },
    { name: "Indoor Arena", lat: -1.043618, lng: 37.084314, images: ["https://via.placeholder.com/300x200?text=Arena"], description: "Indoor sports facility." },
    { name: "Men's Hostel", lat: -1.043300, lng: 37.084284, images: ["https://via.placeholder.com/300x200?text=MensHostel"], description: "Male student housing." },
    { name: "Indoor Arena Office", lat: -1.043451, lng: 37.083975, images: ["https://via.placeholder.com/300x200?text=ArenaOffice"], description: "Arena admin office." },
    { name: "Men's Hostel Kitchen", lat: -1.043260, lng: 37.083817, images: ["https://via.placeholder.com/300x200?text=Kitchen"], description: "Hostel dining area." },
    { name: "Staff Quarters", lat: -1.043526, lng: 37.083590, images: ["https://via.placeholder.com/300x200?text=StaffQuarters"], description: "Staff residences." },
    { name: "Men's Hostel 2", lat: -1.043216, lng: 37.083590, images: ["https://via.placeholder.com/300x200?text=Hostel2"], description: "Additional male hostel." },
    { name: "CTA Annex", lat: -1.043003, lng: 37.084493, images: ["https://via.placeholder.com/300x200?text=CTAnnex"], description: "Theater extension." },
    { name: "Laundry", lat: -1.042961, lng: 37.084429, images: ["https://via.placeholder.com/300x200?text=Laundry"], description: "Laundry services." },
    { name: "Men's Hostel Villa", lat: -1.042839, lng: 37.084142, images: ["https://via.placeholder.com/300x200?text=HostelVilla"], description: "Villa-style hostel." },
    { name: "Main Hall", lat: -1.046466, lng: 37.084778, images: ["https://via.placeholder.com/300x200?text=Wall"], description: "Campus boundary." },
    { name: "Foot Bridge", lat: -1.044527, lng: 37.084765, images: ["https://via.placeholder.com/300x200?text=Bridge"], description: "Pedestrian bridge." },
    { name: "Gate C", lat: -1.044583, lng: 37.084628, images: ["https://via.placeholder.com/300x200?text=GateC"], description: "Entry gate C." },
    { name: "Gate Mwai Kibaki", lat: -1.045176, lng: 37.085831, images: ["https://via.placeholder.com/300x200?text=GateMwai"], description: "Mwai Kibaki gate." },
    { name: "Main Gate", lat: -1.046867, lng: 37.085939, images: ["https://via.placeholder.com/300x200?text=MainGate"], description: "Primary entrance." },
    { name: "Gate B", lat: -1.046655, lng: 37.086038, images: ["https://via.placeholder.com/300x200?text=GateB"], description: "Entry gate B." },
    { name: "CT Gate", lat: -1.044239, lng: 37.084694, images: ["https://via.placeholder.com/300x200?text=CTGate"], description: "Central theater gate." },
    { name: "Mosque Gate", lat: -1.044128, lng: 37.084285, images: ["https://via.placeholder.com/300x200?text=MosqueGate"], description: "Mosque entry." }
];

// Add text labels
locations.forEach(location => {
    const label = L.marker([location.lat, location.lng], {
        icon: L.divIcon({
            className: 'location-label',
            html: location.name,
            iconSize: [100, 20],
            iconAnchor: [50, 10]
        })
    }).addTo(map);
    label.bindPopup(createPopup(location));
});

// Popup content with image slider
function createPopup(location) {
    const images = location.images.map((src, index) => 
        `<img src="${src}" class="${index === 0 ? 'active' : ''}">`).join('');
    return `
        <div class="popup-card">
            <h3>${location.name}</h3>
            <div class="slider">${images}</div>
            <p>${location.description}</p>
            <button onclick="changeSlide('${location.name}', -1)">Prev</button>
            <button onclick="changeSlide('${location.name}', 1)">Next</button>
        </div>
    `;
}

// Image slider logic
function changeSlide(locationName, direction) {
    const location = locations.find(loc => loc.name === locationName);
    const popup = document.querySelector('.leaflet-popup-content .slider');
    const images = popup.querySelectorAll('img');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

// Autocomplete search setup
const startInput = document.getElementById('start-search');
const destInput = document.getElementById('dest-search');
const singleInput = document.getElementById('single-search');
const startSuggestions = document.getElementById('start-suggestions');
const destSuggestions = document.getElementById('dest-suggestions');
const singleSuggestions = document.getElementById('single-suggestions');
const resultDiv = document.getElementById('result');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const useMyLocationCheckbox = document.getElementById('use-my-location');
const getLocationBtn = document.getElementById('get-location-btn');

function showSuggestions(input, suggestionsDiv, value) {
    suggestionsDiv.innerHTML = '';
    if (value.length < 1) {
        suggestionsDiv.style.display = 'none';
        return;
    }
    const matches = locations.filter(loc => loc.name.toLowerCase().includes(value.toLowerCase()));
    matches.forEach(loc => {
        const div = document.createElement('div');
        div.textContent = loc.name;
        div.onclick = () => {
            input.value = loc.name;
            suggestionsDiv.style.display = 'none';
        };
        suggestionsDiv.appendChild(div);
    });
    suggestionsDiv.style.display = matches.length ? 'block' : 'none';
}

startInput.oninput = () => showSuggestions(startInput, startSuggestions, startInput.value);
destInput.oninput = () => showSuggestions(destInput, destSuggestions, destInput.value);
singleInput.oninput = () => showSuggestions(singleInput, singleSuggestions, singleInput.value);

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!startSuggestions.contains(e.target) && e.target !== startInput) startSuggestions.style.display = 'none';
    if (!destSuggestions.contains(e.target) && e.target !== destInput) destSuggestions.style.display = 'none';
    if (!singleSuggestions.contains(e.target) && e.target !== singleInput) singleSuggestions.style.display = 'none';
});

// Toggle sidebar on mobile
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-visible');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== menuToggle && sidebar.classList.contains('sidebar-visible')) {
        sidebar.classList.remove('sidebar-visible');
    }
});

// Geolocation logic
let userLocation = null;
let userMarker = null;

useMyLocationCheckbox.addEventListener('change', () => {
    if (useMyLocationCheckbox.checked) {
        getLocationBtn.style.display = 'block';
        startInput.disabled = true;
        startInput.value = "My Location";
    } else {
        getLocationBtn.style.display = 'none';
        startInput.disabled = false;
        startInput.value = "";
        if (userMarker) {
            map.removeLayer(userMarker);
            userMarker = null;
        }
        userLocation = null;
    }
});

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                userLocation = { lat, lng, name: "My Location" };
                if (userMarker) {
                    map.removeLayer(userMarker);
                }
                userMarker = L.marker([lat, lng]).addTo(map).bindPopup("My Location");
                map.setView([lat, lng], 17);
                resultDiv.textContent = "Location set! Select a destination.";
            },
            (error) => {
                console.error("Geolocation error:", error);
                alert("Unable to get your location. Please ensure location services are enabled and try again.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Variable to store the current line
let currentLine = null;

// Calculate distance, walking time, and draw animated line
function calculateDistance() {
    let startLoc;
    if (useMyLocationCheckbox.checked && userLocation) {
        startLoc = userLocation;
    } else {
        startLoc = locations.find(loc => loc.name.toLowerCase() === startInput.value.toLowerCase());
    }
    const destLoc = locations.find(loc => loc.name.toLowerCase() === destInput.value.toLowerCase());
    
    if (!startLoc || !destLoc) {
        resultDiv.textContent = "Please select valid start and destination locations!";
        return;
    }

    // Haversine formula for distance (in meters)
    const R = 6371000;
    const lat1 = startLoc.lat * Math.PI / 180;
    const lat2 = destLoc.lat * Math.PI / 180;
    const deltaLat = (destLoc.lat - startLoc.lat) * Math.PI / 180;
    const deltaLng = (destLoc.lng - startLoc.lng) * Math.PI / 180;

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    // Walking time (5 km/h = 1.39 m/s)
    const walkingSpeed = 1.39;
    const timeSeconds = distance / walkingSpeed;
    const minutes = Math.round(timeSeconds / 60);

    // Display result
    resultDiv.textContent = `Distance: ${distance.toFixed(0)} m | Walk: ~${minutes} min`;

    // Center map between start and destination
    const bounds = L.latLngBounds([startLoc.lat, startLoc.lng], [destLoc.lat, destLoc.lng]);
    map.fitBounds(bounds, { padding: [50, 50] });

    // Remove previous line if exists
    if (currentLine) {
        map.removeLayer(currentLine);
    }

    // Animate the line
    const startPoint = [startLoc.lat, startLoc.lng];
    const endPoint = [destLoc.lat, destLoc.lng];
    let progress = 0;
    const steps = 50;
    const coords = [];

    function animateLine() {
        if (progress <= steps) {
            const lat = startPoint[0] + (endPoint[0] - startPoint[0]) * (progress / steps);
            const lng = startPoint[1] + (endPoint[1] - startPoint[1]) * (progress / steps);
            coords.push([lat, lng]);
            
            if (currentLine) {
                map.removeLayer(currentLine);
            }
            currentLine = L.polyline(coords, {
                className: 'animated-line',
                color: '#003087',
                weight: 4,
                dashArray: '10'
            }).addTo(map);

            progress++;
            requestAnimationFrame(animateLine);
        }
    }

    animateLine();
}

// Find a single location
function findLocation() {
    const loc = locations.find(loc => loc.name.toLowerCase() === singleInput.value.toLowerCase());
    if (!loc) {
        alert("Location not found!");
        return;
    }
    map.setView([loc.lat, loc.lng], 18);
    L.popup()
        .setLatLng([loc.lat, loc.lng])
        .setContent(createPopup(loc))
        .openOn(map);
}

// Enter key triggers actions
startInput.addEventListener('keypress', (e) => { if (e.key === 'Enter' && !useMyLocationCheckbox.checked) destInput.focus(); });
destInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') calculateDistance(); });
singleInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') findLocation(); });