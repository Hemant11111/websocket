const {getDeterministicPartitionKey, convertDataIntoHash} = require("../routes/key");


/**
 * All the test cases from separate file
 */

test('Testing without parameter', () => {
    expect(getDeterministicPartitionKey()).toStrictEqual("0");
})

test('Testing with null as parameter', () => {
    expect(getDeterministicPartitionKey()).toStrictEqual("0");
})

test('Testing with undefined as parameter', () => {
    expect(getDeterministicPartitionKey()).toStrictEqual("0");
})

test('Testing partitionKey', () => {
    expect(getDeterministicPartitionKey({partitionKey: "testing"})).toStrictEqual("testing");
})

function testForInputs(input) {
    expect(getDeterministicPartitionKey(input)).toStrictEqual(convertDataIntoHash(JSON.stringify(input)));
}

test('Testing partitionKey as null', () => {
    const input = {partitionKey: null};
    testForInputs(input);
})

test('Testing partitionKey as undefined', () => {
    const input = {partitionKey: undefined};
    testForInputs(input);
})

test('Testing string as parameter', () => {
    const input = "test";
    testForInputs(input);
})

test('Testing integer as parameter', () => {
    const input = 1;
    testForInputs(input);
})

test('Testing empty object as parameter', () => {
    const input = {};
    testForInputs(input);
})

test('Testing object as parameter', () => {
    const input = {foo: "bar"};
    testForInputs(input);
})