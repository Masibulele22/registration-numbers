function RegNumbers(plates) {
    var enteredNumberplates = plates || [];

    function checkPlates(inputPlates) {

        if (inputPlates.startsWith("CA") ||
            inputPlates.startsWith("CK") ||
            inputPlates.startsWith("CJ")
        ) {
            return true
        }
        else {
            return false;
        }
    };

    function addRegNumber(typedRegNumbers) {
        var location = typedRegNumbers.charAt(0) + typedRegNumbers.charAt(1);
        var number = typedRegNumbers.slice(2);
        var input = location + " " + number;

        if (input === "") {
            return "Please enter a valid registration number!"
        }

        if (!checkPlates(input)) {
            return "Please enter a valid registration number!"
        }

        if (!enteredNumberplates.includes(input)) {
            enteredNumberplates.push(input);
            return "Numberplate added";
        }
        return "Numberplate already added!";
    };

    function filterRegNumbers(loc) {

        //console.log(enteredNumberplates);
        
        let filteredListOfRegistrations = [];
        
        if (loc == 'ALL') {
            return enteredNumberplates;
        }
        
        for (var i = 0; i < enteredNumberplates.length; i++) {

            if (enteredNumberplates[i].startsWith(loc)) {
                filteredListOfRegistrations.push(enteredNumberplates[i]);
            }
        }
        
        //console.log(filteredListOfRegistrations);
       
        return filteredListOfRegistrations;
    };

    function getAll() {
        return enteredNumberplates
    };

    return {
        checkPlates,
        addRegNumber,
        filterRegNumbers,
        getAll
    };

};