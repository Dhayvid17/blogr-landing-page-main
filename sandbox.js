let magicText = document.querySelector(".magic-text");
const hiddenBar = document.querySelector(".hidden-bar");
let magicTextTwo = document.querySelector('.magic-text-ii');
const hiddenBarTwo = document.querySelector(".hidden-bar-ii");
let magicTextThree = document.querySelector('.magic-text-iii');
const hiddenBarThree = document.querySelector('.hidden-bar-iii');

let click = document.querySelector(".arrow");
const clickTwo = document.querySelector('.arrow-ii');
const clickThree = document.querySelector('.arrow-iii');

const mobileClick = document.querySelector('.mobile-arrow');
const mobileClickTwo = document.querySelector(".mobile-arrow-ii");
const mobileClickThree = document.querySelector(".mobile-arrow-iii");


magicText.addEventListener("click", function(e) {

   //  e.preventDefault();

    if(hiddenBar.style.display === "none"){
       hiddenBar.style.display = "block"
    } else {
       hiddenBar.style.display = "none";
        }

    if(click.classList.contains("arrow")){
       click.classList.remove("arrow")
    } else{
       click.classList.add("arrow")
        } 
        
    if(mobileClick.classList.contains("mobile-arrow")){
      mobileClick.classList.remove("mobile-arrow")
    } else {
      mobileClick.classList.add("mobile-arrow")
    }
});


 
magicTextTwo.addEventListener("click", function(e) {

    e.preventDefault();

    if(hiddenBarTwo.style.display === "none"){
       hiddenBarTwo.style.display = "block"
    } else {
       hiddenBarTwo.style.display = "none";
        }

    if(clickTwo.classList.contains("arrow-ii")){
       clickTwo.classList.remove("arrow-ii")
    } else{
       clickTwo.classList.add("arrow-ii")
        }
    if(mobileClickTwo.classList.contains("mobile-arrow-ii")){
       mobileClickTwo.classList.remove("mobile-arrow-ii")
    } else {
       mobileClickTwo.classList.add("mobile-arrow-ii")
        }
});

magicTextThree.addEventListener("click", function(e) {

    e.preventDefault();

    if(hiddenBarThree.style.display === "none"){
       hiddenBarThree.style.display = "block"
    } else {
       hiddenBarThree.style.display = "none";
        }

    if(clickThree.classList.contains('arrow-iii')){
      clickThree.classList.remove('arrow-iii')
    } else {
      clickThree.classList.add('arrow-iii')
       }

  if(mobileClickThree.classList.contains("mobile-arrow-iii")){
      mobileClickThree.classList.remove("mobile-arrow-iii")
   } else {
      mobileClickThree.classList.add("mobile-arrow-iii")
      }
});


const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const hiddenContainer = document.querySelector(".nav-container");

hamburgerIcon.addEventListener('click', function(){

   if(hamburgerIcon.style.display === "none"){
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = 'none'
      hiddenContainer.style.display = "none"
   } else {
      hamburgerIcon.style.display = "none"
      closeIcon.style.display = 'block'
      hiddenContainer.style.display = "block"
   }
});

closeIcon.addEventListener('click', function(){
   if(closeIcon.style.display === "none"){
      closeIcon.style.display = "block"
      hamburgerIcon.style.display = 'none'
      hiddenContainer.style.display = "block"
   } else{
      closeIcon.style.display = "none"
      hamburgerIcon.style.display = "block"
      hiddenContainer.style.display = "none"
   }
});



//  console.log(magicTexts);

// magicTexts.forEach( magicText => {
//     magicText.addEventListener('click',() => {
        
//     if(hiddenBar.style.display === "none"){
//         hiddenBar.style.display = "block"
//      } else {
//         hiddenBar.style.display = "none";
//          }
//     });
// });


