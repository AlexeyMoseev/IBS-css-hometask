let countInput = document.getElementsByClassName('count')[0];
let remove = document.getElementsByClassName('remove')[0];
let add = document.getElementsByClassName('add')[0];
let units = countInput.value.replace(/\d/g, '');
add.onclick = function(){
    countInput.value = parseInt(countInput.value)+1+units;
};
remove.onclick = function(){
    if(parseInt(countInput.value) > 1) {
        countInput.value = parseInt(countInput.value)-1+units;
    }
};