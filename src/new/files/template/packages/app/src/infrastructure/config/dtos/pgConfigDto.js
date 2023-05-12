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
exports.PgConfigDto = void 0;
const class_validator_1 = require("class-validator");
exports.PgConfigDto = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _writeConnectionString_decorators;
    let _writeConnectionString_initializers = [];
    let _readConnectionString_decorators;
    let _readConnectionString_initializers = [];
    let _connectionTimeout_decorators;
    let _connectionTimeout_initializers = [];
    let _poolSize_decorators;
    let _poolSize_initializers = [];
    return _a = class PgConfigDto {
            constructor() {
                this.writeConnectionString = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _writeConnectionString_initializers, void 0));
                this.readConnectionString = __runInitializers(this, _readConnectionString_initializers, void 0);
                this.connectionTimeout = __runInitializers(this, _connectionTimeout_initializers, void 0);
                this.poolSize = __runInitializers(this, _poolSize_initializers, void 0);
            }
        },
        (() => {
            _writeConnectionString_decorators = [(0, class_validator_1.IsString)()];
            _readConnectionString_decorators = [(0, class_validator_1.IsString)()];
            _connectionTimeout_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0)];
            _poolSize_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1)];
            __esDecorate(null, null, _writeConnectionString_decorators, { kind: "field", name: "writeConnectionString", static: false, private: false, access: { has: obj => "writeConnectionString" in obj, get: obj => obj.writeConnectionString, set: (obj, value) => { obj.writeConnectionString = value; } } }, _writeConnectionString_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _readConnectionString_decorators, { kind: "field", name: "readConnectionString", static: false, private: false, access: { has: obj => "readConnectionString" in obj, get: obj => obj.readConnectionString, set: (obj, value) => { obj.readConnectionString = value; } } }, _readConnectionString_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _connectionTimeout_decorators, { kind: "field", name: "connectionTimeout", static: false, private: false, access: { has: obj => "connectionTimeout" in obj, get: obj => obj.connectionTimeout, set: (obj, value) => { obj.connectionTimeout = value; } } }, _connectionTimeout_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _poolSize_decorators, { kind: "field", name: "poolSize", static: false, private: false, access: { has: obj => "poolSize" in obj, get: obj => obj.poolSize, set: (obj, value) => { obj.poolSize = value; } } }, _poolSize_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
