const PhotoModel = require("./PhotoModel");
const cloudinary = require("cloudinary").v2;
const config = require("../../config");
const photoHelpers = require("./photoHelpers");
const profileConfig = {
  folder: config.cloudinary.profileFolder,
};

class PhotoServices {
  async getOne({ id }) {
    const result = await PhotoModel.findOne({ where: { id } });

    return {
      status: 400,
      msg: "Photo Info fetched Sucessfully",
      data: result,
    };
  }

  async create(rawPhoto) {
    /* Check if the raw photo is null, if proven then return a error with a status 400 */
    if (!rawPhoto)
      return {
        status: 400,
        msg: "No profile photo provided",
      };

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

    /* after the successful photo upload its returning a object with a property of secure_url and public_id which we need and save to photo model database */
    const uploadedPhoto = {
      photoUrl: photo.secure_url,
      photoId: photo.public_id,
    };

    const result = await PhotoModel.create(uploadedPhoto);

    return {
      status: 200,
      msg: "Photo Uploaded Successfully",
      data: result.id,
    };
  }

  async delete(photoId) {
    const photo = await PhotoModel.findOne({ where: { id: photoId } });

    console.log(photo);

    if (!photo)
      return {
        status: 400,
        msg: "No photo existing",
      };

    /* Destroy the existing photo from cloudinary see this link for more info about destroying photo https://cloudinary.com/documentation/photo_upload_api_reference#destroy_method*/

    const photoResult = await cloudinary.uploader.destroy(photo.photoId);

    if (photoResult.result !== "ok")
      return {
        status: 400,
        msg: "Profile photo not deleted",
      };

    /* After destroying the photo from cloudinary we need to delete also the photo record from database */
    const result = await PhotoModel.destroy({ where: { id: photo.id } });

    if (!result) {
      return {
        status: 400,
        msg: "Profile photo not deleted",
      };
    }

    return {
      status: 200,
      msg: "Profile photo succesfully deleted",
    };
  }

  async update({ photoId, rawPhoto }) {
    if (!rawPhoto)
      return {
        status: 400,
        msg: "No profile photo provided",
        data: null,
      };

    console.log(photoId, rawPhoto);

    /*Check if photoId is avaialble(its means that there is a photo uploaded) if exist then delete it first before upload a new photo*/
    if (photoId) {
      const deleteResult = await this.delete(photoId);

      /* If deleting photo is failed then return the error*/
      if (deleteResult.status !== 200) return deleteResult;
    }

    /* After deleting the photo from the photo model upload a new photo and return the whatever result that create method has*/
    return await this.create(rawPhoto);
  }
}

module.exports = new PhotoServices();
