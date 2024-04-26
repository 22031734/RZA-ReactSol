function ani() {
    document.getElementById('flashcard').className = 'test anim';
}

var button = document.getElementById('togglehide');

function hideBooking() {
    var hide = document.getElementById('hide');
    hide.array.forEach(element => {
        if (element.style.display !== 'none') {
            element.style.display = 'none';
        }
        else {
            element.style.display = 'block';
        }
    }
);    
};

function saveinputs() {
    let CheckIn = document.getElementById("checkin").value
    
    let CheckOut = document.getElementById("checkout").value

    let Adult = document.getElementById("Adult").value

    let Child = document.getElementById("Child").value

    sessionStorage.setItem("Adult", Adult)
    sessionStorage.setItem("Child", Child)
    sessionStorage.setItem("CheckIn", CheckIn)
    sessionStorage.setItem("CheckOut", CheckOut)
}