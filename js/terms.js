setTimeout(function(){
    $('.wrapper').fadeToggle();
}, 2900);

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
