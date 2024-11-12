// const doorContainer = document.getElementById("doorContainer");
// const doornumber = document.getElementById("doornumber")
// const doornumber1 = document.getElementById("doornumber1")
// // const doorCountSlider = document.getElementById("doorCount");
// const doorCountDisplay = document.getElementById("output");
// // slider
// const doorCountSlider = document.getElementById("slider");
// // const output = document.getElementById("output");
// const slider = document.getElementById("slider");



// output.innerHTML = slider.value;

// slider.oninput = function() {
//     output.innerHTML = this.value;
//     initializeDoors();  // Update doors based on slider input
// };

// let selectedDoor = null;
// let coinDoor = null;
// let doors = [];

// // Coin animation HTML structure
// const coinAnimationHTML = `
//   <div class="animation-container">
//     <div class="y-axis-container">
//       <div class="container">
//         <div class="flash"></div>
//         <div class="coin side">
//           <div class="shine" style="transform:rotate(-30deg);"></div>
//         </div>
//         <div class="side-coin"></div>
//         <div class="coin">
//           <div class="dai">
//             <div class="inner-dai">
//               <div class="inner-inner-dai"></div>
//             </div>
//             <div class="cutout"></div>
//             <div class="dai-shadow"></div>
//           </div>
//           <div class="shine"></div>
//         </div>
//       </div>
//     </div>
//     <div class="shadow"></div>
//   </div>
// `;

// // Initialize doors
// function initializeDoors() {
//     doorContainer.innerHTML = "";
//     selectedDoor = null;
//     doors = [];

//     const numberOfDoors = doorCountSlider.value;
//     doorCountDisplay.textContent = numberOfDoors;
//     coinDoor = Math.floor(Math.random() * numberOfDoors);
//     rd = Math.floor(Math.random() * numberOfDoors);
    
//     while (rd === coinDoor) {
//       rd = Math.floor(Math.random() * numberOfDoors);
//     } 
//     // Generate each door
//     for (let i = 0; i < numberOfDoors; i++) {
//         const backDoor = document.createElement("div");
//         backDoor.className = "backDoor";

//         if (i === coinDoor) {
//             // Add coin animation HTML for the coin door only
//             backDoor.innerHTML = coinAnimationHTML;
//         }

//         const door = document.createElement("div");
//         door.className = "door";

//         // Append door inside backDoor
//         backDoor.appendChild(door);
//         doorContainer.appendChild(backDoor);

//         // Add click event listener to each door
//         door.addEventListener("click", () => handleDoorSelection(i));

//         doors.push(backDoor);
//     }
// }

// // Handle door selection
// function handleDoorSelection(index) {
//     if (selectedDoor === null) {
//         // First door selection
//         selectedDoor = index;

//         // Open all non-coin, non-selected doors
//         doors.forEach((door, i) => {
//           if (selectedDoor === coinDoor) {
//               // Generate a random door index that is not selectedDoor or coinDoor
//               // let id;
//               // do {
//                   // id = Math.floor(Math.random() * numberOfDoors);
//               // } while (id === selectedDoor);
      
//               if (i !== rd && i !== coinDoor) {
//                   door.querySelector(".door").classList.add("doorOpen");
//               }
//           } else if (i !== selectedDoor && i !== coinDoor) {
//               door.querySelector(".door").classList.add("doorOpen");
//           }
//       });
//     } 
//     else {
//         // If one of the remaining two doors is clicked again, open both remaining doors
//         doors[selectedDoor].querySelector(".door").classList.add("doorOpen");
//         doors[coinDoor].querySelector(".door").classList.add("doorOpen");
//         doors[rd].querySelector(".door").classList.add("doorOpen");
//     }
// }

// // Listen for slider input to update doors
// doorCountSlider.addEventListener("input", initializeDoors);

// // Initialize on page load
// initializeDoors();

// document.querySelector('.refresh').addEventListener('click', function() {
//   // Toggle loading class
//   // this.classList.add('loading');
  
//   // Close all doors
//   doors.forEach((door) => {
//       door.querySelector(".door").classList.remove("doorOpen");
//   });
  
//   // Reset selected door and rerandomize coin door
//   selectedDoor = null;
//   coinDoor = Math.floor(Math.random() * doorCountSlider.value);
  
//   // Reinitialize doors with new settings
//   initializeDoors();

//   // Remove the loading class after 2 seconds
// });

// function updateSliderMax() {
//     if (window.innerWidth > 1000) {
//         slider.max = 21;
//     } else {
//         slider.max = 20;
//     }
// }

// // Initial check and on window resize
// updateSliderMax();
// window.addEventListener("resize", updateSliderMax);
function toggleText() {
  const container = document.querySelector('.textcontainer');
  container.classList.toggle('expanded');
}


// function updateDoorCount() {
//   const value = doorCountSlider.value;
//   const valueMinusOne = value - 1;

//   // Update the slider output
//   doorCountDisplay.innerHTML = value;

//   // Update all elements with the class 'doornumber'
//   const doorNumberSpans = document.querySelectorAll(".doornumber");
//   doorNumberSpans.forEach((span, index) => {
//       // Update span based on context, like switching between "value" and "valueMinusOne" where needed
//       span.innerHTML = index === 0 ? value : valueMinusOne;
//   });
// }

// // Initial setting for page load
// updateDoorCount();

// // Update on slider input change
// doorCountSlider.addEventListener("input", updateDoorCount);

document.addEventListener("DOMContentLoaded", () => {
  const doorContainer = document.getElementById("doorContainer");
  const doorCountDisplay = document.getElementById("output");
  const doorCountSlider = document.getElementById("slider");

  doorCountDisplay.innerHTML = doorCountSlider.value;

  doorCountSlider.oninput = function() {
      doorCountDisplay.innerHTML = this.value;
      initializeDoors();  // Update doors based on slider input
      updateDoorCount();
  };

  let selectedDoor = null;
  let coinDoor = null;
  let doors = [];

  // Coin animation HTML structure
  const coinAnimationHTML =  `
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

  function initializeDoors() {
      doorContainer.innerHTML = "";
      selectedDoor = null;
      doors = [];

      const numberOfDoors = doorCountSlider.value;
      doorCountDisplay.textContent = numberOfDoors;
      coinDoor = Math.floor(Math.random() * numberOfDoors);
      rd = Math.floor(Math.random() * numberOfDoors);
      
      while (rd === coinDoor) {
        rd = Math.floor(Math.random() * numberOfDoors);
      }

      for (let i = 0; i < numberOfDoors; i++) {
          const backDoor = document.createElement("div");
          backDoor.className = "backDoor";
          if (i === coinDoor) {
              backDoor.innerHTML = coinAnimationHTML;
          }

          const door = document.createElement("div");
          door.className = "door";
          backDoor.appendChild(door);
          doorContainer.appendChild(backDoor);

          door.addEventListener("click", () => handleDoorSelection(i));
          doors.push(backDoor);
      }
  }

  function handleDoorSelection(index) {
      if (selectedDoor === null) {
          selectedDoor = index;
          doors.forEach((door, i) => {
            if (selectedDoor === coinDoor) {
                if (i !== rd && i !== coinDoor) {
                    door.querySelector(".door").classList.add("doorOpen");
                }
            } else if (i !== selectedDoor && i !== coinDoor) {
                door.querySelector(".door").classList.add("doorOpen");
            }
        });
      } else {
          doors[selectedDoor].querySelector(".door").classList.add("doorOpen");
          doors[coinDoor].querySelector(".door").classList.add("doorOpen");
          doors[rd].querySelector(".door").classList.add("doorOpen");
      }
  }

  doorCountSlider.addEventListener("input", initializeDoors);

  function updateDoorCount() {
    const value = doorCountSlider.value;
    const valueMinusOne = value - 1;

    // Update the slider output
    doorCountDisplay.innerHTML = value;

    // Update spans in the paragraph dynamically
    const doorNumberElements = document.querySelectorAll(".door-number");
    const doorNumberMinusOneElements = document.querySelectorAll(".door-number-minus-one");

    doorNumberElements.forEach((span) => {
        span.innerHTML = value;
    });

    doorNumberMinusOneElements.forEach((span) => {
        span.innerHTML = valueMinusOne;
    });
}

  initializeDoors();
  updateDoorCount();

  document.querySelector('.refresh').addEventListener('click', function() {
      doors.forEach((door) => {
          door.querySelector(".door").classList.remove("doorOpen");
      });
      selectedDoor = null;
      coinDoor = Math.floor(Math.random() * doorCountSlider.value);
      initializeDoors();
  });

  window.addEventListener("resize", updateSliderMax);

  function updateSliderMax() {
      if (window.innerWidth > 1000) {
          slider.max = 21;
      } else {
          slider.max = 20;
      }
  }

  updateSliderMax();
  updateDoorCount();
});
