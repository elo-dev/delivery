// Modal
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector("#close-button");
const cancelButton = document.querySelector("#cancel-button");

cartButton.addEventListener("click" , toggleModal);
closeButton.addEventListener("click" , toggleModal);
cancelButton.addEventListener("click" , toggleModal);

function toggleModal(){
	modal.classList.toggle("is-open");
}

// Modal-Success
const modalSuccess = document.querySelector(".modal-success");
const checkout = document.querySelector("#checkout");
const closeButtonSuccess = document.querySelector("#close-button-success");
const cancelButtonSuccess = document.querySelector("#cancel-button-success");

closeButtonSuccess.addEventListener('click' , toggleModalSuccess);
cancelButtonSuccess.addEventListener('click' , toggleModalSuccess);
checkout.addEventListener('click' , toggleModalSuccess);

function toggleModalSuccess(){
	modal.classList.remove("is-open");
	modalSuccess.classList.toggle("is-open-success");
}

new WOW().init();