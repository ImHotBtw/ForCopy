window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);




function keydown(event) {
    switch (event.keyCode) {
    }

if (event.keyCode == 49) { //Backward Double Split Press "1" Key
    split();

}


function split() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
}
