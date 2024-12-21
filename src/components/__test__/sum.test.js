import sum from "../sum";

test("Should be check sum of  a + b", () => {
    const result = sum(2, 3);
    //Assertion
    expect(result).toBe(5);


})