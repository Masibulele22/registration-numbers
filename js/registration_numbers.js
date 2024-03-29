function RegNumbers(plates) {
    var enteredNumberplates = plates || [];
    //var filteredListOfRegistrations = [];

    function checkPlates(inputPlates) {

        if (inputPlates.startsWith("CA") ||
            inputPlates.startsWith("CK") ||
            inputPlates.startsWith("CY")
        ) {
            return true;
        }
        else {
            return false;
        }
    };

    function addRegNumber(typedRegNumbers) {
        var location = typedRegNumbers.charAt(0) + typedRegNumbers.charAt(1);
        var number = typedRegNumbers.slice(2);
        var input = location + " " + number;

        var regNumTest = new RegExp(/[A-Z/s!@#$%^&*()_+="';?.><,\/<>"+*]/g);
        var regResult = regNumTest.test(number);

        if (!checkPlates(input)) {
            return "Please enter a valid registration number!"
        }

        if (regResult === true) {
            return "Please enter a valid registration number!"
        }

        else if (regResult === false) {
            if (!enteredNumberplates.includes(input)) {
                enteredNumberplates.push(input);
                return "Numberplate successfully added";
            }
            return "Numberplate already added!";

        }

    };

    function filterRegNumbers(loc) {

        let filteredListOfRegistrations = [];
        console.log(filteredListOfRegistrations);

        if (loc == 'ALL') {
            return enteredNumberplates;
        }
        console.log(filteredListOfRegistrations);

        for (var i = 0; i < enteredNumberplates.length; i++) {

            if (enteredNumberplates[i].startsWith(loc)) {
                filteredListOfRegistrations.push(enteredNumberplates[i]);
            }
        }
         
        return filteredListOfRegistrations;
        
    };

    function getAll() {
        return enteredNumberplates
    };

    // function getFilteredNumbersplates() {
    //     return filteredListOfRegistrations
    // };

    return {
        checkPlates,
        addRegNumber,
        filterRegNumbers,
        getAll,
        //getFilteredNumbersplates
    };

};