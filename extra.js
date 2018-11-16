function writeTable(R, C, r0, c0) {
  let allArr = [];
  let allR = [];
  let cell = 0;
  let totalArr = [];
  let sizeArr = Math.max(R, C) + 2;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      allR.push(cell);
      cell++;
    }
    console.log(allR);
    allArr.push(allR);
    allR = [];
  }

  totalArr.push([r0, c0]);

  if (c0 !== 0) {
    c0 += 1;
    totalArr.push([r0, c0]);
  }

  if (r0 !== 0) {
    r0 += 1;
    totalArr.push([r0, c0]);
  }


  for (let i = 2; i <= sizeArr; i += 2) {

    for (let j = 1; j <= i; j++) {
      c0 -= 1;
      if (typeof allArr[r0] != "undefined" && typeof allArr[r0][c0] != "undefined") {
        totalArr.push([r0, c0]);
      }
    }

    for (let j = 1; j <= i; j++) {
      r0 -= 1;
      if (typeof allArr[r0] != "undefined" && typeof allArr[r0][c0] != "undefined") {
        totalArr.push([r0, c0]);
      }
    }

    for (let j = 0; j <= i; j++) {
      c0 += 1;
      if (typeof allArr[r0] != "undefined" && typeof allArr[r0][c0] != "undefined") {
        totalArr.push([r0, c0]);
      }
    }

    for (let j = 0; j <= i; j++) {
      r0 += 1;
      if (typeof allArr[r0] != "undefined" && typeof allArr[r0][c0] != "undefined") {
        totalArr.push([r0, c0]);
      }
    }
  }

  console.log('TotalArr =>', totalArr);

}

writeTable(5, 6, 1, 4);
writeTable(1, 4, 0, 0);