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
exports.ListUsersQueryDto = void 0;
const class_validator_extended_1 = require("@byndyusoft/class-validator-extended");
const nest_swagger_1 = require("@byndyusoft/nest-swagger");
const class_validator_1 = require("class-validator");
exports.ListUsersQueryDto = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _userIds_decorators;
    let _userIds_initializers = [];
    let _names_decorators;
    let _names_initializers = [];
    let _emails_decorators;
    let _emails_initializers = [];
    let _pageSize_decorators;
    let _pageSize_initializers = [];
    let _pageToken_decorators;
    let _pageToken_initializers = [];
    return _a = class ListUsersQueryDto {
            constructor() {
                this.userIds = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _userIds_initializers, void 0));
                this.names = __runInitializers(this, _names_initializers, void 0);
                this.emails = __runInitializers(this, _emails_initializers, void 0);
                this.pageSize = __runInitializers(this, _pageSize_initializers, 10);
                this.pageToken = __runInitializers(this, _pageToken_initializers, "0");
            }
        },
        (() => {
            _userIds_decorators = [(0, class_validator_extended_1.TransformToArray)(), (0, class_validator_1.IsNumberString)({ no_symbols: true }, { each: true }), (0, class_validator_1.IsOptional)()];
            _names_decorators = [(0, class_validator_extended_1.TransformToArray)(), (0, class_validator_1.IsString)({ each: true }), (0, class_validator_1.IsOptional)()];
            _emails_decorators = [(0, class_validator_extended_1.TransformToArray)(), (0, class_validator_1.IsEmail)(undefined, { each: true }), (0, class_validator_1.IsOptional)()];
            _pageSize_decorators = [(0, class_validator_extended_1.TransformToNumber)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(100), (0, nest_swagger_1.ApiPropertyOptional)()];
            _pageToken_decorators = [(0, class_validator_1.IsNumberString)({ no_symbols: true }), (0, nest_swagger_1.ApiPropertyOptional)()];
            __esDecorate(null, null, _userIds_decorators, { kind: "field", name: "userIds", static: false, private: false, access: { has: obj => "userIds" in obj, get: obj => obj.userIds, set: (obj, value) => { obj.userIds = value; } } }, _userIds_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _names_decorators, { kind: "field", name: "names", static: false, private: false, access: { has: obj => "names" in obj, get: obj => obj.names, set: (obj, value) => { obj.names = value; } } }, _names_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _emails_decorators, { kind: "field", name: "emails", static: false, private: false, access: { has: obj => "emails" in obj, get: obj => obj.emails, set: (obj, value) => { obj.emails = value; } } }, _emails_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _pageSize_decorators, { kind: "field", name: "pageSize", static: false, private: false, access: { has: obj => "pageSize" in obj, get: obj => obj.pageSize, set: (obj, value) => { obj.pageSize = value; } } }, _pageSize_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _pageToken_decorators, { kind: "field", name: "pageToken", static: false, private: false, access: { has: obj => "pageToken" in obj, get: obj => obj.pageToken, set: (obj, value) => { obj.pageToken = value; } } }, _pageToken_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
