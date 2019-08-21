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
            return "Please enter a valid registration number"
        }

        if (!checkPlates(input)) {
            return "Please enter a valid registration number"
        }

        if (!enteredNumberplates.includes(input)) {
            enteredNumberplates.push(input);
            return true;        
        }
        return false;
    };

    function filterRegNumbers(loc) {

        var newEnteredNumberplates = [];

        if (enteredNumberplates !== undefined) {
            for (var i = 0; i < enteredNumberplates.length; i++) {

                if (enteredNumberplates[i].startsWith(loc)) {
                    newEnteredNumberplates.push(enteredNumberplates[i]);
                }
            }
            return newEnteredNumberplates
        }
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