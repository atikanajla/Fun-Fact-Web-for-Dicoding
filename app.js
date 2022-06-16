
// site navigation
const barsBtn = document.getElementById('bars-btn');
const timesBtn = document.getElementById('times-btn');
const nav = document.querySelector('.nav');

// slider
let currentItem = 0;
const sliderContainer = document.querySelector('.slider_container');
const slideImage = document.querySelector('.slider__image')
const slideBtn = document.querySelector('.slider_button')
const slideTitle = document.querySelector('.slider__title')
const slideDesc = document.querySelector('.slider__desc')

//slider navigation
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slidePag = document.querySelector('.slide__pag');

//comment
const commentUI = document.querySelector('.comment__list');
const commentForm = document.querySelector('.comment__form');
const commentCounter = document.querySelector('.comment__title span');
const formAlert = document.querySelector('.form-alert');
let commentList = [
    {
        name : "ani",
        email: 'ani@gmail.com',
        comment : "Wow, saya sangat terkejut wkwkwkwk",
    },
    {
        name : "budi",
        email: 'budi@gmail.com',
        comment : "Beberapa orang terpendek di dunia ada di Indonesia",
    },
];

// -----------------------------
//  site navigation toggle button
// -----------------------------

barsBtn.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

timesBtn.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

// -----------------------------
//  Slider
// -----------------------------
window.addEventListener("DOMContentLoaded", function(){
    slide(currentItem);
    slidePagination(currentItem);
    comments();
    countComment();
    setSlideBtnHeight();
})

function slide(itemNumber){
    const item = data[itemNumber];
    slideImage.src = item.image;
    slideTitle.textContent = item.title;
    slideDesc.textContent = item.desc;
}

//prev button
prevBtn.addEventListener("click", function(){
    currentItem --
    if(currentItem < 0){
        currentItem = data.length - 1;
    }
    slide(currentItem);
    slidePagination(currentItem);
    setSlideBtnHeight();
})
//next button
nextBtn.addEventListener("click", function(){
    currentItem ++
    if(currentItem > data.length - 1){
        currentItem = 0;
    }
    slide(currentItem);
    slidePagination(currentItem);
    setSlideBtnHeight();
})

//slide pagination
function slidePagination(n){
    let circleItem = ""
    data.forEach((item, index) =>{
        if(index === n){
            circleItem += '<i class="fas fa-circle"></i>';
        }else{
            circleItem += '<i class="far fa-circle"></i>';

        }
    })
    
    slidePag.innerHTML = circleItem;
}

function setSlideBtnHeight(){
    slideBtn.style.height = `${slideImage.clientHeight}px`;
}

prevBtn.parentElement.addEventListener("mouseover", function(){
    prevBtn.style.backgroundColor = 'var(--transparent-el-hover)';
    nextBtn.style.backgroundColor = 'var(--transparent-el-hover)';
})
prevBtn.parentElement.addEventListener("mouseout", function(){
    prevBtn.style.backgroundColor = 'var(--transparent-el)';
    nextBtn.style.backgroundColor = 'var(--transparent-el)';
})

// -----------------------------
//  comment
// -----------------------------
function comments(){
    let comment = '';
    commentList.forEach(item =>{
        comment += 
        `<div class="comment__item">
            <a href= "mailto:${item.email}">
                <h3>${item.name}</h3>
            </a>
            <p>${item.comment}</p>
        </div>`;

        commentUI.innerHTML = comment;
    })
}

function addComment(name, email, comment){
    return commentList = [...commentList, {name, email, comment}]
}

commentForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let name = document.querySelector('.username').value;
    let email = document.querySelector('.email').value;
    let comment = document.querySelector('.comment-input').value;

    if(name == "" || email == "" || comment == ""){
        showAlert();
    }else{
        addComment(name, email, comment);
        comments();
        countComment();
        clearForm();
    }

})

function clearForm(){
    document.querySelector('.username').value = "";
    document.querySelector('.email').value = "";
    document.querySelector('.comment-input').value = "";
}

function countComment(){
    if(commentList.length === 0){
        return commentCounter.textContent = "Belum Ada ";
    }
    return commentCounter.textContent = commentList.length;
}

function showAlert(){
    formAlert.textContent = "Field tidak boleh kosong."
}
// -----------------------------
//  footer
// -----------------------------
document.getElementById('year').textContent = new Date().getFullYear(); 