//AssignButton
const assignButton = document.querySelector(".assign");
//assigNedItems
const assignedItems = document.querySelector(".assigned-items");
// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

//Footer
const footer = document.querySelector("footer");

//Clear Input Function
const clearInput = function () {
  guestInput.value = "";
};

//AddtoList function

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
  }

  clearInput();
});

function updateGuestCount() {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length >= 8) {
    guestInputLabel.classList.add("hide");
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestFull.classList.remove("hide");
    footer.classList.remove("hide");
  }
}

function assignItems() {
  const potluckItems = [
    "potato salad",
    "hummus",
    "cookies",
    "spring rolls",
    "yogurt",
    "sushi rolls",
    "lasagnas",
    "chicken masala",
    "spaghetti",
    "rice machboos",
    "chicken biryani",
    "rice murtabak"
  ];

  let allGuests = document.querySelectorAll(".guest-list li");

  console.log(allGuests);

  for (let guest of allGuests) {
    // console.log(guest);
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);

    console.log(guest);
    assignButton.disabled = true;
  }
}

assignButton.addEventListener("click", function () {
  assignItems();
});
