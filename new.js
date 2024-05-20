function fibb(n) {
  if (n === 1 || n === 0) {
    return n;
  } else {
    // console.log(n); print continuosly
    console.log(n);

    return fibb(n - 1) + fibb(n - 2);
  }
}
console.log(fibb(11));
