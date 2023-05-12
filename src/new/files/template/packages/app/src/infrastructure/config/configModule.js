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
exports.ConfigModule = void 0;
const os_1 = require("os");
const pino_logger_factory_1 = require("@byndyusoft/pino-logger-factory");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const dtos_1 = require("./dtos");
exports.ConfigModule = (() => {
    let _classDecorators = [(0, common_1.Module)({})];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ConfigModule = _classThis = class {
        static forRoot() {
            return {
                module: ConfigModule,
                global: true,
                providers: [
                    {
                        provide: dtos_1.ConfigDto,
                        useFactory: () => ConfigModule.configFactory(),
                    },
                ],
                exports: [dtos_1.ConfigDto],
            };
        }
        static async configFactory() {
            const config = ConfigModule.loadConfig();
            await ConfigModule.validateConfig(config);
            return config;
        }
        static loadConfig() {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const plainConfig = {
                configEnv: process.env.CONFIG_ENV,
                pg: {
                    writeConnectionString: process.env.PG_WRITE_CONNECTION_STRING,
                    readConnectionString: process.env.PG_READ_CONNECTION_STRING,
                    connectionTimeout: Number((_a = process.env.PG_CONNECTION_TIMEOUT) !== null && _a !== void 0 ? _a : "60000"),
                    poolSize: Number((_b = process.env.PG_POOL_SIZE) !== null && _b !== void 0 ? _b : "10"),
                },
                http: {
                    port: Number((_c = process.env.HTTP_PORT) !== null && _c !== void 0 ? _c : "8080"),
                    host: (_d = process.env.HTTP_HOST) !== null && _d !== void 0 ? _d : "0.0.0.0",
                    swaggerServer: (_e = process.env.SWAGGER_SERVER) !== null && _e !== void 0 ? _e : "/",
                    defaultClientTimeout: Number((_f = process.env.HTTP_DEFAULT_CLIENT_TIMEOUT) !== null && _f !== void 0 ? _f : "60000"),
                },
                logger: {
                    level: ((_g = process.env.LOGGER_LEVEL) !== null && _g !== void 0 ? _g : pino_logger_factory_1.LogLevel.info),
                    pretty: ((_h = process.env.LOGGER_PRETTY) !== null && _h !== void 0 ? _h : "false") === "true",
                },
            };
            return (0, class_transformer_1.plainToClass)(dtos_1.ConfigDto, plainConfig);
        }
        static async validateConfig(config) {
            const errors = await (0, class_validator_1.validate)(config, {
                whitelist: true,
                forbidNonWhitelisted: true,
            });
            if (errors.length > 0) {
                throw new Error(errors.map((x) => x.toString()).join(os_1.default.EOL));
            }
        }
    };
    __setFunctionName(_classThis, "ConfigModule");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ConfigModule = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ConfigModule = _classThis;
})();
