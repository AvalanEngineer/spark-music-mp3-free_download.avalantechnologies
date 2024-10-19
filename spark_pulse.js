"use strict";

function handleDownload() {
    const url = "./spark_pulse.apk"; // File URL

    // Create a hidden <a> element to trigger download
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'Spark Pulse.apk'; // Download filename

    document.body.appendChild(a); // Add to DOM
    a.click(); // Trigger download
    document.body.removeChild(a); // Clean up
}

function init() {
   
}

init();
