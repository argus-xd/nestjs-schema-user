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
exports.ClientModule = void 0;
const nest_http_client_1 = require("@byndyusoft/nest-http-client");
const common_1 = require("@nestjs/common");
const proper_url_join_1 = require("proper-url-join");
const qs_1 = require("qs");
const usersClient_1 = require("./usersClient");
exports.ClientModule = (() => {
    let _classDecorators = [(0, common_1.Global)(), (0, common_1.Module)({
            providers: [usersClient_1.UsersClient],
            exports: [usersClient_1.UsersClient],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ClientModule = _classThis = class {
        static registerAsync(options) {
            return nest_http_client_1.HttpClientModule.registerClientModule({ module: ClientModule }, options, (config) => (Object.assign(Object.assign({}, config), { baseURL: (0, proper_url_join_1.default)(config === null || config === void 0 ? void 0 : config.baseURL, "/api/v1"), paramsSerializer: (params) => qs_1.default.stringify(params, {
                    skipNulls: true,
                    arrayFormat: "repeat",
                }) })));
        }
    };
    __setFunctionName(_classThis, "ClientModule");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ClientModule = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ClientModule = _classThis;
})();
