var inputElem = document.querySelector(".input");
var addButtonElem = document.querySelector(".addButton");
var showButtonElem = document.querySelector(".showButton");

var selectAreaElem = document.querySelector(".row6a");
var errorMessage = document.querySelector(".error");
var regListElem = document.querySelector(".regList");

var factoryInstance = regNumbers();

function clearError() {
    setTimeout(function addedNumberplate(){
        errorMessage.innerHTML = "";
    }, 2000);
}

function addedNumberplate() {

    var input = factoryInstance.getRegNumbers(inputElem.value);
    //console.log(factoryInstance.getAll());
    
    if (input === "") {
        errorMessage.innerHTML = "Please type in numberplate.";
        clearError();
        return;
    }

    var newPlate = document.createElement("div");
    newPlate.classList.add("numberPlate");

    // newPlate.textContent = factoryInstance.getAll();
    // regListElem.appendChild(newPlate);
  //  newPlate.classList.add("hide");
    
    var newNumber = document.createElement("div");
    var newNumber = document.createTextNode(factoryInstance.getAll());
    regListElem.appendChild(newPlate);
    newPlate.appendChild(newNumber);

}

function showNumberplate() {
/// get array from the factory function 
var array = factoryInstance.getAll();
var tempList = [];
console.log(tempList);
console.log(array);
console.log(selectAreaElem.value);

for(var i =0; i<array.length ; i++){
  var regInArray = array[i];
  if(regInArray.startsWith("CA") === selectAreaElem.value){
    tempList.push(regInArray);
  }
}



//then loop and only bring back the one matching the dropdown value

//     if(selectAreaElem.value = "CK"){
//         return loc.startsWith("CK");
//     }

//     else if(selectAreaElem.value = "CJ"){
//         return loc.startsWith("CJ");
//     }

//     else if(selectAreaElem.value = "CA"){
//         return loc.startsWith("CA");
//     }

}

addButtonElem.addEventListener('click', addedNumberplate);
showButtonElem.addEventListener('click', showNumberplate);
