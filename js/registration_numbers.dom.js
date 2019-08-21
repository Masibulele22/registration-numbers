var inputElem = document.querySelector(".input");
var addButtonElem = document.querySelector(".addButton");
var resetButtonElem = document.querySelector(".resetButton");
var showButtonElem = document.querySelector(".showButton");

var bellvilleElem = document.querySelector(".bel");
var capeTownElem = document.querySelector(".cap");
var malmesburyElem = document.querySelector(".mal");

var selectAreaElem = document.querySelector(".row6a");
var errorMessage = document.querySelector(".error");
var regListElem = document.querySelector(".regList");

if (localStorage['numPlates'] !== undefined) {
    var storePlates = JSON.parse(localStorage['numPlates'])
}

else {
    storePlates = [];
}

let factoryInstance = RegNumbers(storePlates);

function addedNumberplate() {
    if (addButtonElem) {

        var inputValidator = factoryInstance.checkPlates(inputElem.value);
        regListElem.innerHTML = inputValidator;

        var inputVal = factoryInstance.addRegNumber(inputElem.value);
        regListElem.innerHTML = inputVal;
        
        var numPlates = factoryInstance.getAll();

        for (var i = 0; i < numPlates.length; i++) {
            var numPlates2 = numPlates[i];

            var newPlate = document.createElement("div");
            newPlate.classList.add("numberPlate");
            var newNumber = document.createElement("div");
            var newNumber = document.createTextNode(numPlates2);
            newPlate.appendChild(newNumber);
            regListElem.appendChild(newPlate);
        };
    };

    localStorage['numPlates'] = JSON.stringify(factoryInstance.getAll());

};

function showNumberplate() {
    var selectedArea = selectAreaElem.value;

    var townsSelected = [];

    if (selectedArea == "") {
        townsSelected = factoryInstance.getAll();
    }

    else {
        var loc = selectedArea;
        townsSelected = factoryInstance.filterRegNumbers(loc);

        regListElem.innerHTML = "";

        for (var i = 0; i < townsSelected.length; i++) {
            var town = townsSelected[i];

            var numList = document.createElement("div");
            numList.classList.add("numberPlate");
            var plateName = document.createElement("div");
            var plateName = document.createTextNode(town);
            regListElem.appendChild(numList);
            numList.appendChild(plateName);
        };
    }

};

resetButtonElem.addEventListener('click', function() { 
    localStorage.clear();
    window.location.reload();
});

addButtonElem.addEventListener('click', addedNumberplate);
showButtonElem.addEventListener('click', showNumberplate);
