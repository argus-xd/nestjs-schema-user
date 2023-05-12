"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const dependencies_1 = require("@schematics/angular/utility/dependencies");
const path_1 = require("path");
const child_process_1 = require("child_process");
function main() {
    return (0, schematics_1.chain)([
        (tree, context) => {
            const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
                (0, schematics_1.move)((0, path_1.normalize)('./'))
            ]);
            return (0, schematics_1.mergeWith)(templateSource)(tree, context);
        },
        (tree) => {
            const pkgPath = './packages/app/package.json';
            (0, dependencies_1.addPackageJsonDependency)(tree, {
                type: dependencies_1.NodeDependencyType.Default,
                name: '@nestjs/typeorm',
                version: "8.1.4",
                overwrite: true,
            }, pkgPath);
            (0, dependencies_1.addPackageJsonDependency)(tree, {
                type: dependencies_1.NodeDependencyType.Default,
                name: 'ᐸEntitiesᐳ',
                version: "workspace:*",
                overwrite: true,
            }, pkgPath);
            (0, child_process_1.spawnSync)('yarn', ['install']);
            return tree;
        },
    ]);
}
exports.main = main;
