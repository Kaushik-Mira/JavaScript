// Celebration data
const celebrations = [{ date: "01-27", name: "Happy Independence Day" }];

// Function to check if today matches a celebration date
function checkCelebrations() {
  // Get today's date in MM-DD format
  const today = new Date();
  const todayString =
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);

  // Check if there's a celebration today
  const celebration = celebrations.find(
    (celebration) => celebration.date === todayString
  );

  if (celebration) {
    // Show notification if a celebration is found
    showNotification(celebration.name);
  }
}

// Function to show browser notification
function showNotification(message) {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notifications.");
  } else if (Notification.permission === "granted") {
    // If the user has already granted permission
    new Notification(message);
  } else if (Notification.permission !== "denied") {
    // Ask for permission
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(message);
      }
    });
  }
}

// Run the celebration check function
checkCelebrations();
