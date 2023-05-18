const cardFooter = document.getElementById("footer");
const socials = document.getElementById("socials");

    let offSocial = true;

function share() {
    
    if (offSocial) {
         /* switch on socials */
        socials.classList.remove("off");
        cardFooter.classList.add("off");
    offSocial = !offSocial;
    } else {
        /* switch off socials */
        cardFooter.classList.remove("off");
        socials.classList.add("off");
    offSocial = !offSocial;

    }
}