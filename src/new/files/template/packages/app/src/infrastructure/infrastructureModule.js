"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureModule = void 0;
const nest_opentracing_1 = require("@byndyusoft/nest-opentracing");
const nest_swagger_1 = require("@byndyusoft/nest-swagger");
const nestjs_prom_1 = require("@digikare/nestjs-prom");
const common_1 = require("@nestjs/common");
const jaeger_client_1 = require("jaeger-client");
const aboutModule_1 = require("./about/aboutModule");
const clientsModule_1 = require("./clients/clientsModule");
const configModule_1 = require("./config/configModule");
const exceptionsModule_1 = require("./exceptions/exceptionsModule");
const healthCheckModule_1 = require("./healthCheck/healthCheckModule");
const loggerModule_1 = require("./logger/loggerModule");
const packageJsonModule_1 = require("./packageJson/packageJsonModule");
const config_1 = require("./config");
const packageJson_1 = require("./packageJson");
(0, nest_swagger_1.ApiTags)("Infrastructure")(nestjs_prom_1.PromController);
exports.InfrastructureModule = (() => {
    let _classDecorators = [(0, common_1.Module)({
            imports: [
                configModule_1.ConfigModule.forRoot(),
                packageJsonModule_1.PackageJsonModule,
                clientsModule_1.ClientsModule,
                nest_opentracing_1.OpenTracingModule.forRootAsync({
                    inject: [config_1.ConfigDto, packageJson_1.PackageJsonDto],
                    useFactory: (configDto, packageJson) => ({
                        tracer: (0, jaeger_client_1.initTracerFromEnv)({
                            serviceName: packageJson.name,
                        }, {
                            tags: {
                                version: packageJson.version,
                                env: configDto.configEnv,
                            },
                        }),
                        applyRoutes: ["/api/*"],
                        ignoreRoutes: [],
                        logBodies: true,
                    }),
                }),
                nest_opentracing_1.TracedHttpModule.registerAsync({
                    useFactory: () => ({
                        logBodies: true,
                    }),
                }),
                loggerModule_1.LoggerModule,
                aboutModule_1.AboutModule,
                nestjs_prom_1.PromModule.forRoot({
                    withExceptionFilter: false,
                    withHttpMiddleware: {
                        enable: true,
                    },
                }),
                healthCheckModule_1.HealthCheckModule,
                exceptionsModule_1.ExceptionsModule,
            ],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var InfrastructureModule = _classThis = class {
        constructor(logger) {
            this.logger = logger;
        }
        onApplicationShutdown(signal) {
            this.logger.log("Nest application stopped by %s", signal !== null && signal !== void 0 ? signal : "???", "NestApplication");
        }
    };
    __setFunctionName(_classThis, "InfrastructureModule");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        InfrastructureModule = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return InfrastructureModule = _classThis;
})();
