// Fragen Section
const questionBtns = document.querySelectorAll(".question-btn");

questionBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let element = e.currentTarget.parentElement.parentElement;
        element.classList.toggle("show-text");
    });
});


// Reviews Section
const reviews = [
    {
      id: 1,
      name: 'Lena Hartmann',
      job: 'Marktleiterin',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.',
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Obsthändlerin',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. lorem ipsum dilin loronem konume.',
    },
    {
      id: 3,
      name: 'Duhan-Johannes Berg',
      job: 'Obsthändler',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      id: 4,
      name: 'Sven Anderson',
      job: 'Lehrer',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentReview = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentReview);
})

function showPerson(person){
    const review = reviews[person];
    img.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
}

nextBtn.addEventListener("click", function(){

    currentReview++;
    if(currentReview > reviews.length -1){
        currentReview = 0;
    }
    showPerson(currentReview);
});

prevBtn.addEventListener("click", function(){

    currentReview--;
    if(currentReview < 0){
        currentReview = reviews.length - 1;
    }
    showPerson(currentReview);
});


// Navbar Section
const menuBtn = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = function(){
    menuBtn.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}