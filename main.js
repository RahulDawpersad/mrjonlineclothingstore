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

// shop button
const btnNext = document.getElementById('btn-next');
btnNext.addEventListener('click', function(){
    window.location.href = './components/store.html';
})


// About => About us page
const btnAbout = document.getElementById('btn-aboutus');
btnAbout.addEventListener('click', function(){
    window.location.href = './components/about.html';
})


// PreLoader
 setTimeout(function(){
     $('.center').fadeToggle();
 }, 3000);


