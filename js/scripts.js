// ⚡ DATASTRIVE INTERACTIVE ENGINE

// 1. SIMULATED LIVE ML METRICS (Changes values inside the UI panels dynamically)
document.addEventListener("DOMContentLoaded", () => {
    const accuracyElement = document.querySelector(".accuracy-val");
    
    // Simulate training model optimization fluctuations 
    setInterval(() => {
        if (accuracyElement) {
            const fluctuation = (99.2 + Math.random() * 0.6).toFixed(1);
            accuracyElement.textContent = `${fluctuation}%`;
        }
    }, 4000);
});

// 2. DASHBOARD LIVE CONTROL METRIC SWITCHER
const mockData = {
    cpu: {
        title: "Compute Cluster Capacity",
        heights: ["40%", "65%", "85%", "50%", "92%"]
    },
    throughput: {
        title: "Stream Input Data Logs (GB/s)",
        heights: ["88%", "95%", "72%", "81%", "99%"]
    },
    cost: {
        title: "API Token Efficiency (Query/Cent)",
        heights: ["20%", "35%", "42%", "58%", "61%"]
    }
};

const dashButtons = document.querySelectorAll(".dash-btn");
const metricTitle = document.getElementById("metric-title");
const chartBars = document.querySelectorAll("#chart .bar");

dashButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Remove active layouts from other selection tabs
        dashButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        
        // Grab the chosen dataset identity target
        const selectedMetric = button.getAttribute("data-metric");
        const currentData = mockData[selectedMetric];
        
        // Update Title text UI
        metricTitle.textContent = currentData.title;
        
        // Transform the dynamic Graph Bars heights matching the configuration values
        chartBars.forEach((bar, index) => {
            const targetHeight = currentData.heights[index];
            bar.style.setProperty('--height', targetHeight);
            bar.querySelector("span").textContent = targetHeight;
        });
    });
});

// 3. SECURE FORM SIMULATION WITH FEEDBACK UX
const contactForm = document.getElementById("ml-form");
const feedbackText = document.getElementById("form-feedback");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Stop standard browser reloading sequence
        
        const userEmail = document.getElementById("form-email").value;
        feedbackText.textContent = "Processing network pipeline keys...";
        feedbackText.className = "form-feedback";
        
        // Create an artificial artificial timeout waiting layout
        setTimeout(() => {
            feedbackText.textContent = `Success! Sandbox keys dispatched securely to ${userEmail}`;
            feedbackText.classList.add("success");
            contactForm.reset();
        }, 1500);
    });
}
