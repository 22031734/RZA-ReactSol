function StoreInput() {
    let CheckIn = document.getElementById("checkin").value
    alert(CheckIn)
}

var Adult = sessionStorage.getItem("Adult")
var Child = sessionStorage.getItem("Child")
var Checkin = sessionStorage.getItem("CheckIn")
var Checkout = sessionStorage.getItem("CheckOut")

function replacevalues(Adult, Child, Checkin, Checkout) {
    document.getElementById("Adult").value = Adult
    document.getElementById("Child").value = Child
    document.getElementById("checkin").value = Checkin
    document.getElementById("checkout").value = Checkout
}

object.onload = replacevalues(Adult, Child, Checkin, Checkout)