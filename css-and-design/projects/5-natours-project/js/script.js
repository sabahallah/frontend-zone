function closeIcon(){
    var icon = document.getElementById("navi-toggle");
    if(icon.checked == false){
        icon.checked = true;
    }else {
        icon.checked = false;
    }
}

document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('popup_content');
    console.log("target:" + e.target);
    console.log("container.contains(e.target)" + container.contains(e.target));
    if (!container.contains(e.target)) {    
        closeModal();
    }
}.bind(this));


document.addEventListener('keyup', function (e) {
    if(e.which == 27){
        closeModal();
    }
}.bind(this));

function closeModal(){
    var mainContainer = document.getElementById('tours-link');
    mainContainer.click();
}
