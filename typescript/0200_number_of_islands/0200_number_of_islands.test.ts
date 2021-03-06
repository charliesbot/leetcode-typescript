import { numIslands } from "./0200_number_of_islands";
import { numIslandsBFS } from "./0200_number_of_islands.bfs";

test("numberOfIslandsDFS1", () => {
  const input = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  expect(numIslands(input)).toBe(1);
});

test("numberOfIslandsDFS2", () => {
  const input = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  expect(numIslands(input)).toBe(3);
});

test("numberOfIslandsBFS1", () => {
  const input = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  expect(numIslandsBFS(input)).toBe(1);
});

test("numberOfIslandsBFS2", () => {
  const input = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  expect(numIslandsBFS(input)).toBe(3);
});
