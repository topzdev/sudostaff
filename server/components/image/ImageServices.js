const ImageModel = require("./ImageModel");
const cloudinary = require("cloudinary").v2;
const config = require("../../config");
const imageHelpers = require("./imageHelpers");
const profileConfig = {
  folder: config.cloudinary.profileFolder,
};

class ImageServices {
  async getOne({ id }) {
    const result = await ImageModel.findOne({ where: { id } });

    return {
      status: 400,
      msg: "Image Info fetched Sucessfully",
      data: result,
    };
  }

  async create(rawImage) {
    /* Check if the raw image is null, if proven then return a error with a status 400 */
    if (!rawImage)
      return {
        status: 400,
        msg: "No profile image provided",
      };

    /* Validate if the raw image is actual image, if not then return error */
    if (!imageHelpers.isImage(rawImage)) {
      return {
        status: 400,
        msg: "Please upload a image format",
      };
    }

    /* After the validations upload the image to cloudinary using upload method see this link for more info about upload method https://cloudinary.com/documentation/image_upload_api_reference
     */
    const image = await cloudinary.uploader.upload(
      rawImage.tempFilePath,
      profileConfig
    );

    /* after the successful image upload its returning a object with a property of secure_url and public_id which we need and save to image model database */
    const uploadedImage = {
      imageUrl: image.secure_url,
      imageId: image.public_id,
    };

    const result = await ImageModel.create(uploadedImage);

    return {
      status: 200,
      msg: "Image Uploaded Successfully",
      data: result.id,
    };
  }

  async delete(imageId) {
    const image = await ImageModel.findOne({ where: { id: imageId } });

    console.log(image);

    if (!image)
      return {
        status: 400,
        msg: "No image existing",
      };

    /* Destroy the existing image from cloudinary see this link for more info about destroying image https://cloudinary.com/documentation/image_upload_api_reference#destroy_method*/

    const imageResult = await cloudinary.uploader.destroy(image.imageId);

    if (imageResult.result !== "ok")
      return {
        status: 400,
        msg: "Profile image not deleted",
      };

    /* After destroying the image from cloudinary we need to delete also the image record from database */
    const result = await ImageModel.destroy({ where: { id: image.id } });

    if (!result) {
      return {
        status: 400,
        msg: "Profile image not deleted",
      };
    }

    return {
      status: 200,
      msg: "Profile image succesfully deleted",
    };
  }

  async update({ imageId, rawImage }) {
    if (!rawImage)
      return {
        status: 400,
        msg: "No profile image provided",
        data: null,
      };

    console.log(imageId, rawImage);

    /*Check if imageId is avaialble(its means that there is a image uploaded) if exist then delete it first before upload a new image*/
    if (imageId) {
      const deleteResult = await this.delete(imageId);

      /* If deleting image is failed then return the error*/
      if (deleteResult.status !== 200) return deleteResult;
    }

    /* After deleting the image from the image model upload a new image and return the whatever result that create method has*/
    return await this.create(rawImage);
  }
}

module.exports = new ImageServices();
