// ==========================================================================
// 1. Welcome Message & Page Load Initialization
// ==========================================================================
window.onload = function() {
    updateClock();
    setInterval(updateClock, 1000); // Update clock every second
};


// ==========================================================================
// 2. Real-Time Date & Clock Feature
// ==========================================================================
function updateClock() {
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    
    const dateTimeElement = document.getElementById("dateTimeStr");
    if (dateTimeElement) {
        dateTimeElement.innerText = `${dateStr} - ${timeStr}`;
    }
}

// ==========================================================================
// 3. Dark / Light Mode Toggle
// ==========================================================================
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById("themeToggleBtn");
    
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
}

// ==========================================================================
// 5. Show/Hide Information Toggles
// ==========================================================================

// Toggle Read More section
function toggleBio() {
    const bio = document.getElementById("moreBio");
    const btn = document.getElementById("readMoreBtn");
    
    if (bio.style.display === "block") {
        bio.style.display = "none";
        btn.innerText = "Read More";
    } else {
        bio.style.display = "block";
        btn.innerText = "Read Less";
    }
}

// Toggle Education Section
function toggleEducation() {
    const edu = document.getElementById("educationInfo");
    
    if (edu.style.display === "none") {
        edu.style.display = "block";
    } else {
        edu.style.display = "none";
    }
}

