let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

// console.log(imgs);

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
// manage imgs
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });


    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
    // console.log(document.querySelectorAll(this.dataset.cat));
}

