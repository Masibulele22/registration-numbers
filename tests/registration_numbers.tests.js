describe("RegNumbers", function () {
    
    it("should be able to return true for capitalized valid numberplates from Cape Town, Bellville and Malmesbury", function () {

        let instance = RegNumbers();

        assert.equal(true, instance.checkPlates("CA 123-323"));
        assert.equal(true, instance.checkPlates("CY 143323"));
        assert.equal(true, instance.checkPlates("CK 127-323"));
        assert.equal(true, instance.checkPlates("CA 628 324"));
        assert.equal(true, instance.checkPlates("CY 632787"));
    });

    it("should be able to return false for capitalized invalid numberplates", function () {

        let instance = RegNumbers();

        assert.equal(false, instance.checkPlates("CL 1233"));
        assert.equal(false, instance.checkPlates("CX Y233"));
        assert.equal(false, instance.checkPlates("CBT Y233"));
        assert.equal(false, instance.checkPlates("CW 1233"));
    });

    it("should be able to alert the user to enter a valid registration number if there is an empty entry", function () {

        let instance = RegNumbers();

        assert.equal('Please enter a valid registration number!', instance.addRegNumber(""));

    });
    
    it("should be able to accept valid numberplates", function () {

        let instance = RegNumbers();

        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CA 123 123"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CK 123-456"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CY 123456"));
    });

    it("should be able to reject numberplates with an invalid location", function () {

        let instance = RegNumbers();

        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CL 1233"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CX 1233"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CW 1233"));
    });

    it("should be able to reject numberplates with special characters", function () {

        let instance = RegNumbers();

        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CA 123*((3"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CY 12%^33"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CK 123&*3"));
    });

    it("should be able to reject numberplates already added", function () {

        let instance = RegNumbers();

        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CL 1233", "CL 1233"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CX 1233", "CX 1233"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CW 1233", "CW 1233"));
    });

    it("should be able to reject empty numberplate inputs added", function () {

        let instance = RegNumbers();

        assert.equal("Please enter a valid registration number!", instance.addRegNumber(""));
    });

    it("should be able to filter all numberplates for Bellville", function () {

        let instance = RegNumbers();

        instance.addRegNumber("CY123343");
        instance.addRegNumber("CA123453");
        instance.addRegNumber("CY123987")
        assert.deepEqual(["CY 123343", "CY 123987"], instance.filterRegNumbers("CY"));
    });

});