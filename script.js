console.log("hello js");

let totalFavoriteCount = 0;
let totalCopyCount = 0;
let totalCoinCount = 100;

const favoriteCountSet = document.getElementById("favoriteCountSet");
const copyCountSet = document.getElementById("copyCountSet");
const totalCoin = document.getElementById("totalCoin");

document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    // console.log(e.target.classList.contains  ("favorite"));

    const card = e.target.closest(".seba-card");

    const favBtn = e.target.closest(".favorite");
    const copyBtn = e.target.closest(".copy-btn");
    const callBtn = e.target.closest(".call-Btn");

    const serviceNumber = card.querySelector(".phone-number").innerText;
    const serviceName = card.querySelector(".serviceName").innerText;

    // const phoneNumberText = phoneNumber.innerText

    // console.log(phoneNumber);

    // favorite icon condition
    if (favBtn) {
      console.log("yes favorite clicked");

      if (favBtn.classList.contains("liked")) {
        totalFavoriteCount--;
        favBtn.classList.remove("liked", "fa-solid", "text-red-400");
        favBtn.classList.add("fa-regular");
      } else {
        totalFavoriteCount++;
        favBtn.classList.remove("fa-regular");
        favBtn.classList.add("liked", "fa-solid", "text-red-400");
      }

      console.log(totalFavoriteCount);

      favoriteCountSet.innerHTML = `${totalFavoriteCount}`;
    }

    // copy  btn condition
    if (copyBtn) {
      totalCopyCount++;

      navigator.clipboard
        .writeText(serviceNumber)
        .then(() => {
          console.log("Copied:", serviceNumber);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });

      copyCountSet.innerHTML = `${totalCopyCount} Copy`;
    }

    // call btn condition
    if (callBtn) {
      console.log("call btn click", serviceName);

      if (totalCoinCount < 20) {
        alert("Not enough coins to call");
        totalCoin.innerHTML = totalCoinCount;
        return;
      }

      alert(` 
              Service Details:
              Service Name: ${serviceName}
              Contact Number: ${serviceNumber}
              
              Thank you for using our service! `);

      totalCoinCount = totalCoinCount - 20;
      totalCoin.innerHTML = totalCoinCount;


    //   display history container
      displayHistorySection();
    }

});

function displayHistorySection() {}
