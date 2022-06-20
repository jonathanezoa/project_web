
var divPassword = document.getElementById('pass')
var button = document.querySelector('.bouton');

var vueIcon = document.querySelector("#vue")


listenerFunction = {
    clickIcon : () => {
        console.log("test")

        //vueIcon.className = "fa fa-unlock"
    }

}

setupListener = () => {
    vueIcon.addEventListener("click", listenerFunction.clickIcon)

}

setupListener()