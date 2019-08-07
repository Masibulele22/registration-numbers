function regNumbers() {
    var enteredNumberplates = [];

    function getRegNumbers(input) {
        if (!enteredNumberplates.includes(input)) {
            enteredNumberplates.push(input);
        }
        //      return input
    }

    function filterRegNumbers(loc) {
        var newEnteredNumberplates = [];
        if (enteredNumberplates !== undefined) {
            for (i = 0; i < enteredNumberplates.length; i++) {

                if (enteredNumberplates[i].startsWith(loc)) {
                    newEnteredNumberplates.push(enteredNumberplates[i]);
                }
            }

            return newEnteredNumberplates
        }
    }

    function getAll() {
        return enteredNumberplates
    }

    // console.log(enteredNumberplates)
    return {
        getRegNumbers,
        filterRegNumbers,
        getAll
    }
}