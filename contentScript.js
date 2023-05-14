function addCustomButton() {
    const sendButton = document.querySelector("td.gU.Up");
    if (sendButton) {

      const customButton = document.createElement("button");
      customButton.innerText = "Reply GPT";

      customButton.classList.add("custom-button");
      customButton.style.marginLeft = '8px';
      customButton.style.padding = '8px 16px';
      customButton.style.fontSize = '14px';
      customButton.style.fontWeight = 'bold';
      customButton.style.textAlign = 'center';
      customButton.style.border = 'none';
      customButton.style.borderRadius = '4px';
      customButton.style.backgroundColor = "#0b57d0";
      customButton.style.color = '#fff';
      customButton.style.cursor = 'pointer';

      // Add your custom logic when the button is clicked
      customButton.addEventListener("click", (e) => {
        e.preventDefault();
        // Your custom code here
        alert("Custom button clicked!");
      });

      sendButton.parentNode.insertBefore(customButton, sendButton.nextSibling);
      observer.disconnect();

    }
}
// Observe changes in the DOM and inject the custom button when necessary
const observer = new MutationObserver(() => {
    addCustomButton();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

// Listen for URL changes within Gmail using popstate event
window.addEventListener('popstate', () => {
    observer.disconnect();
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
});
