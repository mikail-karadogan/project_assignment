let brandsBtn = [
    {
        id : 1,
        name : "weebly",
        photo : "./photo/brands/Vector.png"
    },
    {
        id : 2,
        name : "tesla",
        photo : "./photo/brands/tesla-9-1.png"
    },
    {
        id : 3,
        name : "tnw",
        photo : "./photo/brands/the-next-web-tnw-1.png"
    },
    {
        id : 4,
        name : "cpanel",
        photo : "./photo/brands/cpanel-1.png"
    }
];

let content = [
    {
        id : 1,
        name : "weebly",
        photo : "./photo/contents/weebly.jpg",
        text : "burası weebly içeriği",
        author : "weebly author",
        rank : "weebly Chief Marketing Officer"
    },
    {
        id : 2,
        name : "tesla",
        photo : "./photo/contents/tesla.jpeg",
        text : "burası tesla içeriği",
        author : "tesla author",
        rank : "tesla Chief Marketing Officer"
    },
    {
        id : 3,
        name : "tnw",
        photo : "./photo/contents/Rectangle-3.png",
        text : "Like Neo from the Matrix, the world opens up and you start to see everything in 1’s and 0’s",
        author : "Edward S. Hisey",
        rank : "Chief Marketing Officer"
    },
    {
        id : 4,
        name : "cpanel",
        photo : "./photo/contents/cpanel.jpeg",
        text : "burası cpanel içeriği",
        author : "cpanel author",
        rank : "cpanel Chief Marketing Officer"
    }
];

function getbrandsBtn(){
    let btns ="";
    
    brandsBtn.filter(i => { 
        btns +=`
        <li class='nav-item'>
            <div class='brand-btn'>
                <button onClick = "getSelectedBrandsBtn(${i.id})" class='btn brand-btn__item'><img src='${i.photo}' alt='brand-logo' class='brand-btn__item__photo'></button>
            </div>
        </li>`
    })
    const allSelect = `
        <li class="nav-item me-0">
            <div class="view-all-btn">
                <button class="view-all-btn__item btn">View all <i class="fas fa-long-arrow-alt-right"></i></button>
            </div>
        </li>`
    const btnsField = document.querySelector(".navbar-nav");
    btnsField.innerHTML = btns + allSelect;
    getSelectedBrandsBtn()
};

function getSelectedBrandsBtn(id=3){
    let selectedBtn = document.querySelectorAll(".brand-btn__item")[id-1];
    let btn = document.querySelectorAll(".brand-btn__item");
    btn.forEach(i=> i.classList.remove("brand-btn__item--active"));
    selectedBtn.classList.add(`brand-btn__item--active`);
    setContent(id);
};

function setContent(id){
    let selectedContent = {};
    content.filter(i => {id == i.id ? selectedContent = i : ""});
    let photo = document.querySelector(".content-page__photo__item");
    let description = document.querySelector(".text-description");
    let author = document.querySelector(".text-author");
    let rank = document.querySelector(".text-rank");

    photo.src = selectedContent.photo;
    description.innerHTML = selectedContent.text;
    author.innerHTML = selectedContent.author;
    rank.innerHTML = selectedContent.rank;
};

getbrandsBtn();
