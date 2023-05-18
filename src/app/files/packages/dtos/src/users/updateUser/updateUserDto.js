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
exports.UpdateUserDto = void 0;
const class_validator_extended_1 = require("@byndyusoft/class-validator-extended");
const nest_swagger_1 = require("@byndyusoft/nest-swagger");
const createUser_1 = require("../createUser/index");
exports.UpdateUserDto = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _atLeastOneDefined_decorators;
    let _atLeastOneDefined_initializers = [];
    return _a = class UpdateUserDto extends (0, nest_swagger_1.PartialType)(createUser_1.CreateUserDto) {
            constructor() {
                super(...arguments);
                this.atLeastOneDefined = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _atLeastOneDefined_initializers, void 0));
            }
        },
        (() => {
            _atLeastOneDefined_decorators = [(0, nest_swagger_1.ApiHideProperty)(), (0, class_validator_extended_1.AtLeastOneDefined)()];
            __esDecorate(null, null, _atLeastOneDefined_decorators, { kind: "field", name: "atLeastOneDefined", static: false, private: false, access: { has: obj => "atLeastOneDefined" in obj, get: obj => obj.atLeastOneDefined, set: (obj, value) => { obj.atLeastOneDefined = value; } } }, _atLeastOneDefined_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
