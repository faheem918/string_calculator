const add = require("../src/calculator");

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("handles newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  test("throws an exception for a single negative number", () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
  });

  test("throws an exception for multiple negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed: -2, -4"
    );
  });

  test("ignores numbers larger than 1000", () => {
    expect(add("2,1001,6")).toBe(8);
  });

  test("supports delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test("supports multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("supports multiple delimiters of different lengths", () => {
    expect(add("//[***][%%]\n1***2%%3")).toBe(6);
  });
});
