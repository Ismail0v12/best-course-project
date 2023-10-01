import {classNames} from "./index";

describe("classNames", () => {
  test("test only with 1 param", () => {
    expect(classNames("class")).toBe("class");
  });
  test("test only with additional param", () => {
    const expected = "class class1 class2";
    expect(classNames("class", {}, ["class1", "class2"])).toBe(expected);
  });

  test("test only with mods", () => {
    const expected = "class hovered expected";
    expect(classNames("class", {hovered: true, expected: true}, [])).toBe(expected);
  });

  test("test only with mods false", () => {
    const expected = "class class1 expected";
    expect(classNames("class", {hovered: false, expected: true}, ["class1"])).toBe(expected);
  });

  test("test only with mods undefined", () => {
    const expected = "class class1 hovered";
    expect(classNames("class", {hovered: true, expected: undefined}, ["class1"])).toBe(expected);
  });

});