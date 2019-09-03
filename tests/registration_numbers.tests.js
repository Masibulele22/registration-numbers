describe("RegNumbers", function () {
    
    it("should be able to return true for valid numberplates from Cape Town, Bellville and Malmesbury", function () {

        let instance = RegNumbers();

        assert.equal(true, instance.checkPlates("CA 1233"));
        assert.equal(true, instance.checkPlates("CK 1233"));
        assert.equal(true, instance.checkPlates("CY 1233"));
    });

    it("should be able to return false for invalid numberplates", function () {

        let instance = RegNumbers();

        assert.equal(false, instance.checkPlates("CL 1233"));
        assert.equal(false, instance.checkPlates("CX 1233"));
        assert.equal(false, instance.checkPlates("CW 1233"));
    });

    it("should be able to alert the user to enter a valid registration number if there is an empty entry", function () {

        let instance = RegNumbers();

        assert.equal('Please enter a valid registration number!', instance.addRegNumber(""));

    });
    
    it("should be able to accept valid numberplates", function () {

        let instance = RegNumbers();

        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CA 1233"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CK 1233"));
        assert.equal("Please enter a valid registration number!", instance.addRegNumber("CY 1233"));
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

});