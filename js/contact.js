// Loader
setTimeout(function(){
    $('.wrapper').fadeOut();
}, 3000)

$('.brise-upload > label').find('input').change(function() {
    var file = this.files;
$('.brise-upload > label').text('Selected file: ' + file[0].name);
})

// Function Submit
btnSubmit.addEventListener('click', function(){
   fname.value = '';

})

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("brise-form");
    const formData = document.getElementById("formData");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.querySelector("#fname").value;
      const email = form.querySelector("#email").value;
      const phone = form.querySelector("#phone").value;
      const message = form.querySelector("textarea").value;
  
      // Create a new row in the table to display the form data
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${message}</td>
      `;
  
      // Append the new row to the table
      formData.appendChild(newRow);
  
      // Reset the form
      form.reset();
    });
  });
  

  //ON-SCROLL EFFECT
//create the intersection observer
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {   //it can observe multiple entries at the same time
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }else{
          entry.target.classList.remove('show');
      }
  });
});
//grab all the elements that have that specific class.
const hiddenElements = document.querySelectorAll('.hidden');

//tell it what to observe
hiddenElements.forEach((el)=> observer.observe(el)); //Tell the observer to observe
