export default data => {
  let parsed = {};

  for (const key in data) {
    if (data[key] !== "" && data[key] !== undefined) parsed[key] = data[key];
  }
  console.log("[PARSED DATA]: ", parsed);
  return parsed;
};
