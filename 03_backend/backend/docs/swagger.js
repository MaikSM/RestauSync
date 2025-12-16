"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = exports.swaggerUi = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
// Configuración de Swagger
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Restausync API',
        version: '1.0.0',
        description: 'API RESTful para el sistema de gestión de restaurante Restausync',
        contact: {
            name: 'JEBC-DeV',
            email: 'jebcdev@example.com'
        },
    },
    servers: [
        {
            url: 'http://localhost:4003/api/v1',
            description: 'Servidor de desarrollo',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ['./src/modules/**/*.routes.ts', './src/modules/**/*.controller.ts'], // Rutas donde buscar las anotaciones JSDoc
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.swaggerSpec = swaggerSpec;
