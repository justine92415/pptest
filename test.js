let dragSource = document.querySelectorAll(".choco-img");
let chocoItem = document.querySelector(".dropbox");

let dragTemp;
let total = document.querySelector(".customize-total");
let sum = 0;

total.innerHTML = `總計:${sum}元`;

dragSource.forEach((dragel) => {
    dragel.addEventListener("click", function (e) {
        console.log(e.target);
        console.log("click");
    });
    dragel.addEventListener("dragstart", function (e) {
        console.log(e.target);
        dragTemp = e.target.cloneNode(true);
        console.log(dragTemp);
    });
});

/* let dropTarget = document.querySelector(".customize-item");

dropTarget.addEventListener("dragover", (e) => {
    e.preventDefault();
});

dropTarget.addEventListener("drop", (e) => {
    console.log("dropped");
    if (dragTemp) {
        // e.target.appendChild(dragTemp);
        e.target.appendChild(dragTemp);
    }
}); */

let dropTarget = document.querySelectorAll(".dropbox");

console.log(dropTarget);

dropTarget.forEach(function (dropt) {
    dropt.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    dropt.addEventListener("drop", (e) => {
        console.log("droped");
        if (dragTemp) {
            console.log(+dragTemp.dataset.price);
            sum += +dragTemp.dataset.price;
            e.target.appendChild(dragTemp);
        }
        total.innerHTML = `總計:${sum}元`;
    });
});
