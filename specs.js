var _ = require("./underscore.js");

//tests go here 

//describe
//it
//expect
//shouldEqual

describe('_', function() {

// write my tax calc tests below

it("should return average 5 when give 5,5", function() {
expect(_.average([5,5])).toEqual(5)
});

it("should return first", function() {
expect(_.first([1,2,3,4,5])).toEqual(1)
});

it("should return max", function() {
expect(_.max([1,2,3,4,5,99])).toEqual(99)
});

it("should return min", function() {
expect(_.min([1,2,3,4,5,99])).toEqual(1)
});

it("should return last", function() {
expect(_.last([1,2,3,4,5,99,3])).toEqual(3)
});

it("should return true if contains 5", function() {
expect(_.contains([1,2,3,4,5,99],5)).toEqual(true)
});

});