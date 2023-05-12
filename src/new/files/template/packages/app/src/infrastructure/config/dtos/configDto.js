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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const httpConfigDto_1 = require("./httpConfigDto");
const loggerConfigDto_1 = require("./loggerConfigDto");
const pgConfigDto_1 = require("./pgConfigDto");
exports.ConfigDto = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _configEnv_decorators;
    let _configEnv_initializers = [];
    let _pg_decorators;
    let _pg_initializers = [];
    let _http_decorators;
    let _http_initializers = [];
    let _logger_decorators;
    let _logger_initializers = [];
    return _a = class ConfigDto {
            constructor() {
                this.configEnv = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _configEnv_initializers, void 0));
                this.pg = __runInitializers(this, _pg_initializers, void 0);
                this.http = __runInitializers(this, _http_initializers, void 0);
                this.logger = __runInitializers(this, _logger_initializers, void 0);
            }
        },
        (() => {
            _configEnv_decorators = [(0, class_validator_1.IsString)()];
            _pg_decorators = [(0, class_transformer_1.Type)(() => pgConfigDto_1.PgConfigDto), (0, class_validator_1.IsDefined)(), (0, class_validator_1.ValidateNested)()];
            _http_decorators = [(0, class_transformer_1.Type)(() => httpConfigDto_1.HttpConfigDto), (0, class_validator_1.IsDefined)(), (0, class_validator_1.ValidateNested)()];
            _logger_decorators = [(0, class_transformer_1.Type)(() => loggerConfigDto_1.LoggerConfigDto), (0, class_validator_1.IsDefined)(), (0, class_validator_1.ValidateNested)()];
            __esDecorate(null, null, _configEnv_decorators, { kind: "field", name: "configEnv", static: false, private: false, access: { has: obj => "configEnv" in obj, get: obj => obj.configEnv, set: (obj, value) => { obj.configEnv = value; } } }, _configEnv_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _pg_decorators, { kind: "field", name: "pg", static: false, private: false, access: { has: obj => "pg" in obj, get: obj => obj.pg, set: (obj, value) => { obj.pg = value; } } }, _pg_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _http_decorators, { kind: "field", name: "http", static: false, private: false, access: { has: obj => "http" in obj, get: obj => obj.http, set: (obj, value) => { obj.http = value; } } }, _http_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _logger_decorators, { kind: "field", name: "logger", static: false, private: false, access: { has: obj => "logger" in obj, get: obj => obj.logger, set: (obj, value) => { obj.logger = value; } } }, _logger_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
