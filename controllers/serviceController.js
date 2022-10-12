const asyncHandler = require("express-async-handler");
const Service = require("./../models/serviceSchema");

exports.getAllServices = asyncHandler(async (req, res) => {
  const allServices = await Service.find();

  allServices &&
    res.status(200).json({
      status: "success",
      results: allServices.length,
      data: { services: allServices },
    });
});

exports.getService = asyncHandler(async (req, res) => {
  const existingService = await Service.findById(req.params.id);

  existingService &&
    res
      .status(200)
      .json({ status: "success", data: { service: existingService } });
});

exports.createService = asyncHandler(async (req, res) => {});

exports.updateService = asyncHandler(async (req, res) => {
  const updatedService = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res
    .status(200)
    .json({ status: "success", data: { service: updatedService } });
});

exports.deleteService = asyncHandler(async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
