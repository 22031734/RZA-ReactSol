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