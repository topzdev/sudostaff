export default query => {
  let filtered = {};

  for (const key in query) {
    if (query[key] !== "" && query[key] !== undefined)
      filtered[key] = query[key];
  }
  console.log(new URLSearchParams(filtered).toString());
  return "?" + new URLSearchParams(filtered).toString();
};
