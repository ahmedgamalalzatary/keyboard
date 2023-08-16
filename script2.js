document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll("li");
    const inputField = document.getElementById("input");
    let isUpperCase = false; // Start with lowercase mode
    let isShiftPressed = false; // Track Shift key state
    let isCapsLock = false; // Track caps lock state

    keys.forEach(key => {
        key.addEventListener("click", function() {
            // Remove the clicked class from all keys
            keys.forEach(key => key.classList.remove("clicked"));

            // Add the clicked class to the clicked key
            this.classList.add("clicked");

            // Check if the clicked key is the "Esc" key
            if (this.textContent === "Esc") {
                // Clear the input field
                inputField.value = "";
            } else if (this.textContent === "Shift") {
                // Toggle the Shift key state
                isShiftPressed = !isShiftPressed;
                if (!isShiftPressed) {
                    isUpperCase = false; // Turn off uppercase mode when Shift is released
                }
            } else if (this.textContent === "Caps") {
                // Toggle the Caps Lock state
                isCapsLock = !isCapsLock;
                isUpperCase = isCapsLock; // Set uppercase state to Caps Lock state
            } else if (this.textContent === "Back") {
                // Remove the last character from the input field
                inputField.value = inputField.value.slice(0, -1);
            } else if (this.classList.contains("space")) {
                // Add a space to the input field
                inputField.value += " ";
            } else {
                // Determine the case of the letter based on the Shift, uppercase, and caps lock state
                const letter = (isUpperCase || isShiftPressed || isCapsLock) ? this.textContent.toUpperCase() : this.textContent.toLowerCase();
                inputField.value += letter;
            }
        });
    });
});
