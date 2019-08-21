describe("registrationNumbers", function () {
    it("should be able to take in numberplates and filter them to their respective towns", function () {
        
        var instance = RegNumbers();
        assert.equal(true, instance.addRegNumber("CA 1233"))

    });

});