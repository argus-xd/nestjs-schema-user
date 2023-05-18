"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const nest_swagger_1 = require("@byndyusoft/nest-swagger");
const common_1 = require("@nestjs/common");
const infrastructure_1 = require("../infrastructure/index");
exports.UsersController = (() => {
    let _classDecorators = [(0, nest_swagger_1.ApiTags)("Users"), (0, common_1.Controller)({
            path: "users",
            version: "1",
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _createUser_decorators;
    let _listUsers_decorators;
    let _getUserById_decorators;
    let _updateUser_decorators;
    let _deleteUser_decorators;
    var UsersController = _classThis = class {
        constructor(service) {
            this.service = (__runInitializers(this, _instanceExtraInitializers), service);
        }
        createUser(body) {
            return this.service.createUser(body);
        }
        listUsers(query) {
            return this.service.listUsers(query);
        }
        getUserById(params) {
            return this.service.getUserById(params);
        }
        updateUser(params, query, body) {
            return this.service.updateUser(params, query, body);
        }
        deleteUser(params, query) {
            return this.service.deleteUser(params, query);
        }
    };
    __setFunctionName(_classThis, "UsersController");
    (() => {
        _createUser_decorators = [(0, infrastructure_1.ApiCommonResponses)(common_1.HttpStatus.BAD_REQUEST), (0, common_1.Post)("/")];
        _listUsers_decorators = [(0, infrastructure_1.ApiCommonResponses)(common_1.HttpStatus.BAD_REQUEST), (0, common_1.Get)("/")];
        _getUserById_decorators = [(0, infrastructure_1.ApiCommonResponses)(common_1.HttpStatus.BAD_REQUEST, common_1.HttpStatus.NOT_FOUND), (0, common_1.Get)("/:userId")];
        _updateUser_decorators = [(0, infrastructure_1.ApiCommonResponses)(common_1.HttpStatus.BAD_REQUEST, common_1.HttpStatus.NOT_FOUND, common_1.HttpStatus.CONFLICT), (0, common_1.Patch)("/:userId")];
        _deleteUser_decorators = [(0, infrastructure_1.ApiCommonResponses)(common_1.HttpStatus.BAD_REQUEST, common_1.HttpStatus.NOT_FOUND, common_1.HttpStatus.CONFLICT), (0, common_1.Delete)("/:userId")];
        __esDecorate(_classThis, null, _createUser_decorators, { kind: "method", name: "createUser", static: false, private: false, access: { has: obj => "createUser" in obj, get: obj => obj.createUser } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listUsers_decorators, { kind: "method", name: "listUsers", static: false, private: false, access: { has: obj => "listUsers" in obj, get: obj => obj.listUsers } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUserById_decorators, { kind: "method", name: "getUserById", static: false, private: false, access: { has: obj => "getUserById" in obj, get: obj => obj.getUserById } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateUser_decorators, { kind: "method", name: "updateUser", static: false, private: false, access: { has: obj => "updateUser" in obj, get: obj => obj.updateUser } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteUser_decorators, { kind: "method", name: "deleteUser", static: false, private: false, access: { has: obj => "deleteUser" in obj, get: obj => obj.deleteUser } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        UsersController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersController = _classThis;
})();
