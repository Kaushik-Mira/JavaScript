const celebrations = [{ date: "01-27", name: "Happy Independence Day" }];

// Function to get today's date in MM-DD format
function getTodayDate() {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = today.getDate().toString().padStart(2, "0");
  return `${month}-${day}`;
}

// Function to check if today's date matches any celebration
function checkCelebration() {
  const today = getTodayDate();
  const celebration = celebrations.find((c) => c.date === today);

  if (celebration) {
    // Show notification (you can replace this with actual notification code)
    alert(`It's ${celebration.name} today!`);
  } else {
    console.log("No celebration today.");
  }
}

// Call the function to check for celebrations
checkCelebration();
