const models = require("../models");
const cloudinary = require("cloudinary").v2;
const config = require("../../config");
const photoHelpers = require("./photoHelpers");
const { raw } = require("body-parser");
const profileConfig = {
  folder: config.cloudinary.profileFolder,
};

class PhotoServices {
  async getOne({ id }) {
    const result = await models.Photo.findOne({ where: { id } });

    return {
      status: 400,
      msg: "Photo Info fetched Sucessfully",
      data: result,
    };
  }

  async create(rawPhoto) {
    console.log(rawPhoto);
    /* Check if the raw photo is null, if proven then return a error with a status 400 */
    let uploadedPhoto = {
      photoUrl: null, //photo.secure_url,
      photoId: null, //photo.public_id,
    };

    if (rawPhoto) {
      /* Validate if the raw photo is actual photo, if not then return error */
      if (!photoHelpers.isImage(rawPhoto)) {
        return {
          status: 400,
          msg: "Please upload a image format",
        };
      }

      /* After the validations upload the photo to cloudinary using upload method see this link for more info about upload method https://cloudinary.com/documentation/photo_upload_api_reference
       */
      const photo = await cloudinary.uploader.upload(
        rawPhoto.tempFilePath,
        profileConfig
      );

      uploadedPhoto = {
        photoUrl: photo.secure_url,
        photoId: photo.public_id,
      };
    }

    console.log("Uploaded", uploadedPhoto);

    /* after the successful photo upload its returning a object with a property of secure_url and public_id which we need and save to photo model database */
    const result = await models.Photo.create(uploadedPhoto);

    return {
      status: 200,
      msg: "Photo Uploaded Successfully",
      data: result.id,
    };
  }

  async delete(photoId) {
    /* Destroy the existing photo from cloudinary see this link for more info about destroying photo https://cloudinary.com/documentation/photo_upload_api_reference#destroy_method*/
    const photoResult = await cloudinary.uploader.destroy(photoId);

    if (photoResult.result !== "ok")
      return {
        status: 400,
        msg: "Profile photo not deleted",
      };

    return {
      status: 200,
      msg: "Profile photo succesfully deleted",
    };
  }

  async update({ photoId, rawPhoto }) {
    if (!photoId) {
      return this.create(rawPhoto);
    }

    const photo = await models.Photo.findByPk(photoId);

    if (!photo.get({ plain: true }))
      return {
        status: 400,
        msg: "Photo info. not found",
      };

    let uploadedPhoto = {
      photoUrl: photo.photoUrl, //photo.secure_url,
      photoId: photo.photoId, //photo.public_id,
    };

    if (rawPhoto) {
      // if (photo.photoId) {
      //   const deletePhoto = await this.delete(photo.photoId);
      //   if (deletePhoto.status === 400) return deletePhoto;
      // }

      const newPhoto = await cloudinary.uploader.upload(
        rawPhoto.tempFilePath,
        profileConfig
      );

      uploadedPhoto = {
        photoUrl: newPhoto.secure_url,
        photoId: newPhoto.public_id,
      };
    }

    const result = await models.Photo.update(uploadedPhoto, {
      where: { id: photo.id },
    });

    return {
      status: 200,
      msg: "Profile photo succesfully updated",
    };
  }
}

module.exports = new PhotoServices();
