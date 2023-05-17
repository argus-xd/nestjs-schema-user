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
exports.HttpConfigDto = void 0;
const class_validator_1 = require("class-validator");
exports.HttpConfigDto = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _port_decorators;
    let _port_initializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _swaggerServer_decorators;
    let _swaggerServer_initializers = [];
    let _defaultClientTimeout_decorators;
    let _defaultClientTimeout_initializers = [];
    return _a = class HttpConfigDto {
            constructor() {
                this.port = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _port_initializers, void 0));
                this.host = __runInitializers(this, _host_initializers, void 0);
                this.swaggerServer = __runInitializers(this, _swaggerServer_initializers, void 0);
                this.defaultClientTimeout = __runInitializers(this, _defaultClientTimeout_initializers, void 0);
            }
        },
        (() => {
            _port_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(65535)];
            _host_decorators = [(0, class_validator_1.IsIP)()];
            _swaggerServer_decorators = [(0, class_validator_1.IsString)()];
            _defaultClientTimeout_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0)];
            __esDecorate(null, null, _port_decorators, { kind: "field", name: "port", static: false, private: false, access: { has: obj => "port" in obj, get: obj => obj.port, set: (obj, value) => { obj.port = value; } } }, _port_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _host_decorators, { kind: "field", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } } }, _host_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _swaggerServer_decorators, { kind: "field", name: "swaggerServer", static: false, private: false, access: { has: obj => "swaggerServer" in obj, get: obj => obj.swaggerServer, set: (obj, value) => { obj.swaggerServer = value; } } }, _swaggerServer_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _defaultClientTimeout_decorators, { kind: "field", name: "defaultClientTimeout", static: false, private: false, access: { has: obj => "defaultClientTimeout" in obj, get: obj => obj.defaultClientTimeout, set: (obj, value) => { obj.defaultClientTimeout = value; } } }, _defaultClientTimeout_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
