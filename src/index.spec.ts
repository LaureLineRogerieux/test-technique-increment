import { solution } from ".";

test("1", () => {
  expect(solution(0, 1)).toEqual(100);
});

test(" 2", () => {
  expect(solution(0, 2)).toEqual(200);
});

test(" 3", () => {
  expect(solution(100, 1)).toEqual(200);
});

test(" 4", () => {
  expect(solution(200, 1)).toEqual(300);
});

test(" 5", () => {
  expect(solution(900, 1)).toEqual(910);
});

test(" 6", () => {
  expect(solution(800, 2)).toEqual(910);
});

test(" 7", () => {
  expect(solution(110, 1)).toEqual(210);
});

test(" 8", () => {
  expect(solution(810, 2)).toEqual(920);
});

test(" 9", () => {
  expect(solution(980, 2)).toEqual(991);
});

test(" 10", () => {
  expect(solution(990, 2)).toEqual(992);
});
