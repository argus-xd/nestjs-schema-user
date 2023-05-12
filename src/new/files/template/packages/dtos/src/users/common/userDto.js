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
exports.UserDto = void 0;
const class_validator_extended_1 = require("@byndyusoft/class-validator-extended");
const class_validator_1 = require("class-validator");
exports.UserDto = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _userId_decorators;
    let _userId_initializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _userVersion_decorators;
    let _userVersion_initializers = [];
    return _a = class UserDto {
            constructor() {
                this.userId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _userId_initializers, void 0));
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.email = __runInitializers(this, _email_initializers, void 0);
                this.userVersion = __runInitializers(this, _userVersion_initializers, void 0);
            }
        },
        (() => {
            _userId_decorators = [(0, class_validator_1.IsNumberString)({ no_symbols: true })];
            _name_decorators = [(0, class_validator_1.IsString)()];
            _email_decorators = [(0, class_validator_1.IsEmail)()];
            _userVersion_decorators = [(0, class_validator_extended_1.TransformToNumber)(), (0, class_validator_1.IsInt)()];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: obj => "userId" in obj, get: obj => obj.userId, set: (obj, value) => { obj.userId = value; } } }, _userId_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } } }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _userVersion_decorators, { kind: "field", name: "userVersion", static: false, private: false, access: { has: obj => "userVersion" in obj, get: obj => obj.userVersion, set: (obj, value) => { obj.userVersion = value; } } }, _userVersion_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
