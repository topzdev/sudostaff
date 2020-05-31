/*
  Check the mimetype by splitting the string and extact the word "image" or just check if the mimetype is containing "image" word.
  */
exports.isImage = (image) => {
  if (!image) return false;
  const split = image.mimetype.split("/");
  console.log(image.mimetype, split);
  return split[0] === "image" && image.mimetype.includes("image");
};
