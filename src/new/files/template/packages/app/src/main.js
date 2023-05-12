"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("source-map-support/register");
const nest_pino_1 = require("@byndyusoft/nest-pino");
const nest_swagger_1 = require("@byndyusoft/nest-swagger");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const helmet_1 = require("helmet");
const appModule_1 = require("./appModule");
const infrastructure_1 = require("./infrastructure");
function setupApp(app) {
    app.enableShutdownHooks();
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        prefix: "api/v",
    });
    app.use((0, helmet_1.default)());
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    app.useGlobalInterceptors(new nest_pino_1.LoggerErrorInterceptor());
}
function setupSwagger(app) {
    const config = app.get(infrastructure_1.ConfigDto);
    const packageJson = app.get(infrastructure_1.PackageJsonDto);
    const options = new nest_swagger_1.DocumentBuilder()
        .setTitle(packageJson.name)
        .setVersion(packageJson.version)
        .setDescription(packageJson.description)
        .addServer(config.http.swaggerServer)
        .build();
    nest_swagger_1.SwaggerModule.setup("api", app, nest_swagger_1.SwaggerModule.createDocument(app, options));
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(await appModule_1.AppModule.register(), new platform_express_1.ExpressAdapter(), {
        bufferLogs: true,
    });
    const logger = app.get(nest_pino_1.Logger);
    app.useLogger(logger);
    setupApp(app);
    setupSwagger(app);
    const config = app.get(infrastructure_1.ConfigDto);
    await app.listen(config.http.port, config.http.host);
    logger.log("Nest application listening on %s", await app.getUrl(), "NestApplication");
}
bootstrap().catch((error) => {
    console.error(error);
    process.exit(1);
});
