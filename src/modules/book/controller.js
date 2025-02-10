const { sendError, sendResponse } = require("../../helpers/responseHelper");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Book = prisma.book;

class Controller {
  static async index(req, res) {
    try {
      // Code
    } catch (error) {
      return sendError(res, 500, error.message);
    }
  }

  static async show(req, res) {
    try {
      // Code
    } catch (error) {
      return sendError(res, 500, error.message);
    }
  }

  static async store(req, res) {
    try {
      // Code
    } catch (error) {
      return sendError(res, 500, error.message);
    }
  }

  static async update(req, res) {
    try {
      // Code
    } catch (error) {
      return sendError(res, 500, error.message);
    }
  }

  static async destroy(req, res) {
    try {
      // Code
    } catch (error) {
      return sendError(res, 500, error.message);
    }
  }

  static async updateImage(req, res) {
    try {
      // Code
    } catch (error) {
      return sendError(res, 500, error.message);
    }
  }
}

module.exports = Controller;
