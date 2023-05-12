"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const path_1 = require("path");
function main(options) {
    return (0, schematics_1.chain)([
        (tree, context) => {
            const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
                (0, schematics_1.template)(Object.assign(Object.assign({}, core_1.strings), options)),
                (0, schematics_1.move)((0, path_1.normalize)('./'))
            ]);
            return (0, schematics_1.mergeWith)(templateSource)(tree, context);
        }
    ]);
}
exports.main = main;
