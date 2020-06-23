// select all check boxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// declare variable as the first aka previous click event
let lastCheck;

function updateChecks(e) {
    let inBetween = false;

    if (e.shiftKey && this.checked) {
        // when shift key pressed and checkbox clicked, iterate through the entire list
        checkboxes.forEach(checkbox => {
            // inBetween is initially set as false, once a checked box is found, inBetween is switched to true, until the next checked checkbox is found, then inBetween is set back to false
            // this allows for multiple checkboxes with the shift key either top-down or bottom-up
            if (checkbox === this || checkbox === lastCheck) {
                inBetween = !inBetween;
            }

            // inBetween is set to true between the two chosen checked boxes, which will check all boxes in between 
            if (inBetween == true) {
                checkbox.checked = true;
            }
        });
    }

    // the first click event
    lastCheck = this;
}

// listen for click event
// .forEach() because querySelectorAll returns a node list that does support the property of addEventListener
checkboxes.forEach(checkbox => checkbox.addEventListener('click', updateChecks));