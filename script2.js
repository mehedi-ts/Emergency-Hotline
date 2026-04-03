function displayHistorySection(name, number) {
  const historyCon = document.getElementById("history-con");
  const time = new Date().toLocaleDateString();
  const hDiv = document.createElement("div");
  const noHistory = document.getElementById("no-history");
  if (noHistory) {
    noHistory.style.display = "none";
  }
  hDiv.innerHTML = `
    <div class="box flex justify-between shadow-sm rounded-sm p-1">
            <div class="">
              <h2 class="font-semibold">${name}</h2>
              <p>${number}</p>
            </div>
            <p>${time}</p>
          </div>
    `;
  historyCon.appendChild(hDiv);
}
document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("history-con").innerHTML = `<div
            id="no-history"
            class="h-full w-full flex items-center justify-center mt-16"
          >
            <p>No history</p>
          </div>`;
});
