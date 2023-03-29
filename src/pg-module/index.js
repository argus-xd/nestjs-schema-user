"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const dependencies_1 = require("@schematics/angular/utility/dependencies");
const path_1 = require("path");
const child_process_1 = require("child_process");
function main() {
    /**
     * Функция-обработчик, которая будет вызываться при выполнении генератора.
     * @param tree Дерево файлов проекта.
     * @param context Контекст выполнения генератора.
     * @returns Возвращает дерево файлов проекта с добавленным компонентом.
     */
    // Здесь мы можем использовать tree и context для выполнения генерации.
    // Например, добавление нового файла компонента в дерево tree:
    // const templateSource = apply(url('./files'), [
    //     move(normalize('./'))
    // ]);
    // // Возвращаем модифицированное дерево файлов.
    // return mergeWith(templateSource)(tree, context);
    return (0, schematics_1.chain)([
        // Сначала копируем шаблон.
        (tree, context) => {
            const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
                (0, schematics_1.move)((0, path_1.normalize)('./'))
            ]);
            // Возвращаем модифицированное дерево файлов.
            return (0, schematics_1.mergeWith)(templateSource)(tree, context);
        },
        // Затем добавляем свойство в package.json.
        (tree) => {
            const pkgPath = './packages/app/package.json';
            // const buffer = tree.read(pkgPath);
            // if (buffer === null) {
            //     throw new Error(`Could not read file '${pkgPath}'.`);
            // }
            // const pkg = JSON.parse(buffer.toString());
            // Object.assign(pkg['dependencies'],
            //     {
            //         '@nestjs/typeorm': '8.1.4',
            //         "ᐸEntitiesᐳ": "workspace:*",
            //     })
            // tree.overwrite(pkgPath, JSON.stringify(pkg, null, 2));
            //
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
//# sourceMappingURL=index.js.map