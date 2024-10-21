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

// src/shared/core/factories/upload-files-factory.ts
var upload_files_factory_exports = {};
__export(upload_files_factory_exports, {
  uploadFilesFactory: () => uploadFilesFactory
});
module.exports = __toCommonJS(upload_files_factory_exports);

// src/shared/core/libs/prisma/index.ts
var import_client = require("@prisma/client");

// src/shared/core/config/env.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["dev", "test", "production"]).default("dev"),
  PORT: import_zod.z.coerce.number().default(3333),
  JWT_SECRET: import_zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("\u274C Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}
var env = _env.data;

// src/shared/core/libs/prisma/index.ts
var prisma = new import_client.PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query"] : []
});

// src/app/repositories/implements/prisma-clients-repository.ts
var PrismaClientsRepository = class {
  async create(data) {
    const client = await prisma.client.create({ data });
    return client;
  }
  async findById(id) {
    const client = await prisma.client.findUnique({
      where: { id },
      include: {
        invoices: {
          include: {
            billed_items: true,
            consumption_history: true
          }
        }
      }
    });
    return client || null;
  }
  async findByEmail(email) {
    const client = prisma.client.findUnique({ where: { email } });
    return client || null;
  }
  async findByClient(client_number) {
    const client = prisma.client.findUnique({ where: { client_number } });
    return client || null;
  }
  async findAll() {
    const clients = await prisma.client.findMany({
      where: {
        role: {
          not: "ADMIN"
        }
      },
      include: {
        invoices: {
          include: {
            billed_items: true,
            consumption_history: true
          }
        }
      }
    });
    return clients;
  }
};

// src/app/repositories/implements/prisma-invoices-repository.ts
var PrismaInvoicesRepository = class {
  async create(data) {
    const invoice = await prisma.invoice.create({
      data: {
        file_name: data.file_name,
        client: {
          connect: {
            id: data.client_id
          }
        },
        client_number: data.client_number,
        reference_month: data.reference_month,
        due_date: new Date(data.due_date),
        installation_number: data.installation_number,
        amount_due: data.amount_due,
        billed_items: {
          create: data.billed_items
        },
        consumption_history: {
          create: data.consumption_history
        }
      }
    });
    return invoice;
  }
  async findById(id) {
    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: {
        billed_items: true,
        consumption_history: true
      }
    });
    return invoice || null;
  }
  async findAll() {
    const invoices = await prisma.invoice.findMany({
      include: {
        billed_items: true,
        consumption_history: true
      }
    });
    return invoices;
  }
};

// src/app/use-cases/upload-pdf-invoice-use-case.ts
var UploadPdfInvoicesUseCase = class {
  constructor(clientsRepository, invoicesRepository) {
    this.clientsRepository = clientsRepository;
    this.invoicesRepository = invoicesRepository;
  }
  async execute({ invoices }) {
    const createdInvoices = [];
    const invoicesWithoutClient = [];
    for (const invoice of invoices) {
      const client = await this.clientsRepository.findByClient(
        invoice.client_number
      );
      if (client) {
        const createdInvoice = await this.invoicesRepository.create({
          ...invoice,
          client_number: client.client_number ?? "",
          client_id: client.id
        });
        createdInvoices.push(createdInvoice);
      } else {
        invoicesWithoutClient.push(invoice);
      }
    }
    return { createdInvoices, invoicesWithoutClient };
  }
};

// src/shared/core/factories/upload-files-factory.ts
var uploadFilesFactory = () => {
  const clientRepo = new PrismaClientsRepository();
  const invoiceRepo = new PrismaInvoicesRepository();
  const useCase = new UploadPdfInvoicesUseCase(clientRepo, invoiceRepo);
  return useCase;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  uploadFilesFactory
});
