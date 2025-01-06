rating_buttons = document.getElementById("rating-buttons").getElementsByTagName("button");
submit_button = document.getElementById("rating-submit-button");
rating_section = document.getElementById("rating-section");
thank_you_section = document.getElementById("thank-you-section");
selected_rating_value_container = document.getElementById("out-of");

let selected_rating_value = null


for (let button of rating_buttons){
    button.addEventListener("click",function(event){
        change_rating(event);
    })
}

submit_button.addEventListener("click",function(event){
    submit_rating()
})


function change_rating(event){
    selected_rating = event.currentTarget;
    for(let button of rating_buttons){
    console.log(button)
    button.classList.remove("active")
    }
    selected_rating.classList.add("active")
    selected_rating_value = selected_rating.getAttribute("rating");
    console.log(selected_rating_value)
}

function submit_rating(){
    selected_rating_value_container.innerText = selected_rating_value
    rating_section.classList.add("hidden");
    thank_you_section.classList.remove("hidden");
}