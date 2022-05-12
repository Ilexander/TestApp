function arrayMin(arr: object[]) {
  return arr.reduce(function (p, v) {
    return Object.assign({}, p < v ? p : v);
  });
}

function validate(re: any, email: string) {
  return re.test(String(email).toLowerCase());
}

export { arrayMin, validate };
