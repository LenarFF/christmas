const treeTriangle = [
  { x: 10, y: 654 },
  { x: 600, y: 654 },
  { x: 290, y: 13 },
];

const findHalfPlane = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x: number,
  y: number,
): number => (x1 - x) * (y2 - y1) - (x2 - x1) * (y1 - y);

export const checkToysInsideTree = (x: number, y: number): boolean => {
  const a = findHalfPlane(
    treeTriangle[0].x,
    treeTriangle[0].y,
    treeTriangle[1].x,
    treeTriangle[1].y,
    x,
    y,
  );
  const b = findHalfPlane(
    treeTriangle[1].x,
    treeTriangle[1].y,
    treeTriangle[2].x,
    treeTriangle[2].y,
    x,
    y,
  );
  const c = findHalfPlane(
    treeTriangle[2].x,
    treeTriangle[2].y,
    treeTriangle[0].x,
    treeTriangle[0].y,
    x,
    y,
  );

  return (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0);
};
