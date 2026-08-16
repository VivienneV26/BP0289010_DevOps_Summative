const statusButton = document.querySelector("#status-button");
const statusMessage = document.querySelector("#status-message");

statusButton.addEventListener("click", async () => {
  statusMessage.textContent = "Checking application status...";

  try {
    const response = await fetch("/health");
    const data = await response.json();

    statusMessage.textContent = `Application status: ${data.status}`;
  } catch (error) {
    statusMessage.textContent = "The health check could not be reached.";
  }
});
