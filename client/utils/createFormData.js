export default (data, isUpdate) => {
  let formData = new FormData();

  for (const key in data) {
    if (isUpdate) {
      formData.append(key, data[key]);
    } else {
      if (data[key]) formData.append(key, data[key]);
    }
  }

  return formData;
};
