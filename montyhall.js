const doorContainer = document.getElementById("doorContainer");
// const doorCountSlider = document.getElementById("doorCount");
const doorCountDisplay = document.getElementById("output");
// slider
const doorCountSlider = document.getElementById("slider");
// const output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    initializeDoors();  // Update doors based on slider input
};

let selectedDoor = null;
let coinDoor = null;
let doors = [];

// Coin animation HTML structure
const coinAnimationHTML = `
  <div class="animation-container">
    <div class="y-axis-container">
      <div class="container">
        <div class="flash"></div>
        <div class="coin side">
          <div class="shine" style="transform:rotate(-30deg);"></div>
        </div>
        <div class="side-coin"></div>
        <div class="coin">
          <div class="dai">
            <div class="inner-dai">
              <div class="inner-inner-dai"></div>
            </div>
            <div class="cutout"></div>
            <div class="dai-shadow"></div>
          </div>
          <div class="shine"></div>
        </div>
      </div>
    </div>
    <div class="shadow"></div>
  </div>
`;

// Initialize doors
function initializeDoors() {
    doorContainer.innerHTML = "";
    selectedDoor = null;
    doors = [];

    const numberOfDoors = doorCountSlider.value;
    doorCountDisplay.textContent = numberOfDoors;
    coinDoor = Math.floor(Math.random() * numberOfDoors);

    // Generate each door
    for (let i = 0; i < numberOfDoors; i++) {
        const backDoor = document.createElement("div");
        backDoor.className = "backDoor";

        if (i === coinDoor) {
            // Add coin animation HTML for the coin door only
            backDoor.innerHTML = coinAnimationHTML;
        }

        const door = document.createElement("div");
        door.className = "door";

        // Append door inside backDoor
        backDoor.appendChild(door);
        doorContainer.appendChild(backDoor);

        // Add click event listener to each door
        door.addEventListener("click", () => handleDoorSelection(i));

        doors.push(backDoor);
    }
}

// Handle door selection
function handleDoorSelection(index) {
    if (selectedDoor === null) {
        // First door selection
        selectedDoor = index;

        // Open all non-coin, non-selected doors
        doors.forEach((door, i) => {
            if(i == selectedDoor && i == coinDoor){
                
            }
            else if (i !== selectedDoor && i !== coinDoor) {
                door.querySelector(".door").classList.add("doorOpen");
            }
        });
    } 
    else {
        // If one of the remaining two doors is clicked again, open both remaining doors
        doors[selectedDoor].querySelector(".door").classList.add("doorOpen");
        doors[coinDoor].querySelector(".door").classList.add("doorOpen");
    }
}

// Listen for slider input to update doors
doorCountSlider.addEventListener("input", initializeDoors);

// Initialize on page load
initializeDoors();


