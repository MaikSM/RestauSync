import swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

// Cargar la especificación OpenAPI desde el archivo YAML
const swaggerSpec = yaml.load(
  fs.readFileSync(path.join(__dirname, '../../docs/openapi.yaml'), 'utf8')
) as any;

export { swaggerUi, swaggerSpec };