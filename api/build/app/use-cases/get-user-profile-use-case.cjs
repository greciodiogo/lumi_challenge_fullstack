"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app/use-cases/get-user-profile-use-case.ts
var get_user_profile_use_case_exports = {};
__export(get_user_profile_use_case_exports, {
  GetUserProfileUseCase: () => GetUserProfileUseCase
});
module.exports = __toCommonJS(get_user_profile_use_case_exports);

// src/shared/core/errors/app-error.ts
var AppError = class extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
    Error.captureStackTrace(this, this.constructor);
  }
};

// src/shared/core/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends AppError {
  constructor() {
    super("Resource not found", 404);
  }
};

// src/app/use-cases/get-user-profile-use-case.ts
var GetUserProfileUseCase = class {
  constructor(clientsRepository) {
    this.clientsRepository = clientsRepository;
  }
  async execute(data) {
    const client = await this.clientsRepository.findById(data.id);
    if (!client) {
      throw new ResourceNotFoundError();
    }
    return { client };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetUserProfileUseCase
});
