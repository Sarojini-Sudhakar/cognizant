function validatePhone() {
  const phone = document.getElementById('phone').value;
  if (!/^\d{10}$/.test(phone)) alert('Enter a valid 10-digit phone number');
}
function displayFee(val) {
  document.getElementById('feeDisplay').innerText = 'Fee: ' + val;
}
function countChars() {
  const text = document.getElementById('feedbackText').value;
  document.getElementById('charCount').innerText = text.length;
}
document.getElementById('registerForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('confirmation').value = 'Registration submitted!';
};
function savePreference() {
  const selected = document.getElementById('eventType').value;
  localStorage.setItem('preferredEvent', selected);
}
function clearPreferences() {
  localStorage.clear();
  sessionStorage.clear();
  alert('Preferences cleared!');
}
window.onload = function() {
  const saved = localStorage.getItem('preferredEvent');
  if (saved) document.getElementById('eventType').value = saved;
};
function findEvents() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError, {
      enableHighAccuracy: true, timeout: 10000
    });
  } else {
    document.getElementById('locationStatus').innerText = "Geolocation not supported.";
  }
}
function showPosition(position) {
  document.getElementById('locationStatus').innerText = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
}
function showError(error) {
  if (error.code === error.PERMISSION_DENIED) {
    alert("Permission denied.");
  } else if (error.code === error.TIMEOUT) {
    alert("Request timed out.");
  }
}
window.onbeforeunload = function() {
  return "Are you sure you want to leave? Your form may be unfinished.";
};
