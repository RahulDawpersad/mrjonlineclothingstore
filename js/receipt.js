  // Retrieve the receipt HTML from localStorage
  const receiptHTML = localStorage.getItem("receiptHTML"); // Global Variable
    
  // Display the receipt in the receipt container
  if (receiptHTML) {
      document.getElementById("receipt-container").innerHTML = receiptHTML;
      // Clear the receipt from localStorage
    //   localStorage.removeItem('receiptHTML');
  }

   // Add this event listener to clear the receipt when leaving the page
//    window.addEventListener('beforeunload', function() {
//     localStorage.removeItem('receiptHTML');
// });

  // Declare variables for the print and download buttons
  const printButton = document.getElementById("print-receipt");
  const downloadButton = document.getElementById("download-receipt");

  // Create a function using the addEventListener handler for printing
  printButton.addEventListener("click", function () {
      printButton.style.display = "none";
      downloadButton.style.display = "none";

      window.print(receiptHTML);
  });

          // Function to trigger the download
         downloadButton.addEventListener('click', function(){
            const receiptHTML = localStorage.getItem("receiptHTML");

            if (receiptHTML) {
                // Create a Blob from the HTML content
                const blob = new Blob([receiptHTML], { type: "text/html" });

                // Create a URL for the Blob
                const url = URL.createObjectURL(blob);

                // Create an invisible link element for downloading
                const downloadLink = document.createElement("a");
                downloadLink.href = url;
                downloadLink.download = "receipt.html";

                // Trigger a click event on the link to start the download
                downloadLink.click();

                // Clean up by revoking the URL object
                URL.revokeObjectURL(url);

                localStorage.removeItem('receiptHTML');
            }
         }
    )
     // Attach an event listener to the download button
     downloadButton.addEventListener("click", downloadButton);  
 


  // PreLoader
setTimeout(function(){
$('.wrapper').fadeToggle();
}, 2600);