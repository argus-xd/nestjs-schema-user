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
exports.LoggerConfigDto = void 0;
const pino_logger_factory_1 = require("@byndyusoft/pino-logger-factory");
const class_validator_1 = require("class-validator");
exports.LoggerConfigDto = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _level_decorators;
    let _level_initializers = [];
    let _pretty_decorators;
    let _pretty_initializers = [];
    return _a = class LoggerConfigDto {
            constructor() {
                this.level = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _level_initializers, void 0));
                this.pretty = __runInitializers(this, _pretty_initializers, void 0);
            }
        },
        (() => {
            _level_decorators = [(0, class_validator_1.IsEnum)(pino_logger_factory_1.LogLevel)];
            _pretty_decorators = [(0, class_validator_1.IsBoolean)()];
            __esDecorate(null, null, _level_decorators, { kind: "field", name: "level", static: false, private: false, access: { has: obj => "level" in obj, get: obj => obj.level, set: (obj, value) => { obj.level = value; } } }, _level_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _pretty_decorators, { kind: "field", name: "pretty", static: false, private: false, access: { has: obj => "pretty" in obj, get: obj => obj.pretty, set: (obj, value) => { obj.pretty = value; } } }, _pretty_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
