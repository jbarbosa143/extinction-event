const item = document.querySelectorAll('#linethrough');

for(const li of item){
    li.addEventListener('click', function (event){
        console.log(event);
        const clickedLi = event.target;
        clickedLi.style.textDecoration = 'line-through';
    });
}

// =========================
const ulItem = document.querySelectorAll('#more');

for(const ulLi of ulItem){
    ulLi.addEventListener('click',function (event){
        const clickedItem =event.target;
        clickedItem.style.opacity = '.1';
    });  
}
// ===============================
const img = document.querySelectorAll('#row');

for(const pic of img){
    pic.addEventListener('click', function(event){
        const clicked = event.target;
        clicked.style.width = '0px';
    })
}
// ================================
