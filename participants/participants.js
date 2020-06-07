function RadioBtn1(){
    document.getElementById("numb").value = 1;
}

function RadioBtn2(){
    document.getElementById("numb").value = 2;
}

var index = 0;
function results(){
    index = index + 1;
    console.log(index);
    if(index > 1){
        const myNode = document.getElementById("card-wrap");
        while (myNode.lastElementChild) {
            myNode.removeChild(myNode.lastElementChild);
        }
    }

    // document.getElementById("card_wrap").removeChild(document.getElementById("card_wrap"));
    var view = document.createElement("div");
    view.id = "view-id";
    var name = document.getElementById("username").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("E-mail").value;

    if(document.getElementById("inlineRadio1").checked){
        radio = document.getElementById("inlineRadio1").value;
        document.getElementById("numb").value = 1;
    }
    else if(document.getElementById("inlineRadio2").checked){
        radio = document.getElementById("inlineRadio2").value;
    }
    else if(document.getElementById("inlineRadio3").checked){
        radio = document.getElementById("inlineRadio3").value;
    }
    else if(document.getElementById("inlineRadio4").checked){
        radio = document.getElementById("inlineRadio4").value;
    }

    if(document.getElementById("eventSelect").checked){
        eventSelect = document.getElementById("eventSelect").value;
    }

    var numb = document.getElementById("numb").value;

    // document.getElementById("preview_name").insertAdjacentText("beforeend", name);
    // document.getElementById("preview_mobile").insertAdjacentText("beforeend", mobile);
    // document.getElementById("preview_email").insertAdjacentText("beforeend", email);
    // document.getElementById("preview_regType").insertAdjacentText("beforeend", radio);
    // document.getElementById("preview_numPeople").insertAdjacentText("beforeend", numb);

    document.getElementById("card-wrap").insertAdjacentHTML("beforeend", "<p class='title'>Full Name: " + name 
    + "</p><p class='title'> Mobile: " + mobile 
    + "</p><p class='title'> Email ID: " + email 
    + "</p><p class='title'> Event Name: " + eventSelect
    + "</p><p class='title'> Registration type: " + radio
    + "</p><p class='title'> Number of people: " + numb )
    document.getElementById("card-wrap").appendChild(view);
}