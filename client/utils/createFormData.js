export default (data, isUpdate) => {
  let formData = new FormData();
  console.log(data);
  for (const key in data) {
    if (isUpdate) {
      if (data[key] !== null) formData.append(key, data[key]);
    } else {
      if (data[key] !== null) formData.append(key, data[key]);
    }
  }

  return formData;
};
