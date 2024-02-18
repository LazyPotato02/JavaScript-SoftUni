describe("Tests for planYourTrip object", function() {
    describe("choosingDestination function", function() {
        it("should return a message for a ski resort destination in winter", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });
        it("should return a message to consider visiting during Winter for other seasons", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });
        it("should throw an error for an invalid year", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
        });
        it("should throw an error for a destination other than Ski Resort", function() {
            expect(() => planYourTrip.choosingDestination("Beach", "Summer", 2024)).to.throw("This destination is not what you are looking for.");
        });
    });

    describe("exploreOptions function", function() {
        it("should return updated activities array after removing an activity at specified index", function() {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal("Skiing, Winter Hiking");
        });
        it("should throw an error for invalid parameters", function() {
            expect(() => planYourTrip.exploreOptions("Invalid", "Invalid")).to.throw("Invalid Information!");
        });
        it("should throw an error if activityIndex is out of bounds", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 2)).to.throw("Invalid Information!");
        });
    });

    describe("estimateExpenses function", function() {
        it("should return budget-friendly message for total cost less than or equal to $500", function() {
            expect(planYourTrip.estimateExpenses(100, 4)).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
        });
        it("should return plan accordingly message for total cost greater than $500", function() {
            expect(planYourTrip.estimateExpenses(150, 4)).to.equal("The estimated cost for the trip is $600.00, plan accordingly.");
        });
        it("should throw an error for invalid parameters", function() {
            expect(() => planYourTrip.estimateExpenses("Invalid", "Invalid")).to.throw("Invalid Information!");
        });
        it("should throw an error if distance or fuel cost is zero or negative", function() {
            expect(() => planYourTrip.estimateExpenses(0, 4)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(100, -4)).to.throw("Invalid Information!");
        });
    });
});