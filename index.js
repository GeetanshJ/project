const p = document.querySelector(".listing");

document.querySelector(".nav-bar-ham").addEventListener("click",()=>{
        p.classList.toggle("active");
})

// $(document).ready(() => {
//         $(".nav-bar-ham").click(() => {
//                 $(".listing").toggle();
//         });
// });