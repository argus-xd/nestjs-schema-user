import { join, Path, strings } from '@angular-devkit/core';
import {
    apply, chain,
    mergeWith,
    move,
    Rule, SchematicContext,
    Source,
    template, Tree,
    url,
} from '@angular-devkit/schematics';
import { basename, parse } from 'path';

import {normalize} from 'path';
import {AppOptions} from "./index.schema";

export function main(options: AppOptions): Rule {

    return chain([
        /**
         * Функция-обработчик, которая будет вызываться при выполнении генератора.
         * @param tree Дерево файлов проекта.
         * @param context Контекст выполнения генератора.
         * @returns Возвращает дерево файлов проекта с добавленным компонентом.
         */
        (tree: Tree, context: SchematicContext) => {
            // Сначала копируем шаблон.
            const templateSource = apply(url('./files'), [
                template({
                    ...strings,
                    ...options,
                }),
                move(normalize('./'))
            ]);
            // Возвращаем модифицированное дерево файлов.
            return mergeWith(templateSource)(tree, context);
        }
    ]);


}

//
// import { join, Path, strings } from '@angular-devkit/core';
// import {
//     apply,
//     branchAndMerge,
//     chain,
//     filter,
//     mergeWith,
//     move,
//     noop,
//     Rule,
//     SchematicContext,
//     SchematicsException,
//     template,
//     Tree,
//     url,
// } from '@angular-devkit/schematics';
// import { isNullOrUndefined } from 'util';
// import { normalizeToKebabOrSnakeCase } from '../utils/formatting';
// import {
//     DeclarationOptions,
//     ModuleDeclarator,
// } from '../utils';
// import { ModuleFinder } from '../utils';
// import { Location, NameParser } from '../utils';
// import { mergeSourceRoot } from '../utils';
// import { ServiceOptions } from './service.schema';
// import {DecoratorOptions} from "./index.schema";
//
// export function main(options: ServiceOptions): Rule {
//     return (tree: Tree, context: SchematicContext) => {
//         return branchAndMerge(
//             chain([
//                 mergeWith(generate(options)),
//             ]),
//         )(tree, context);
//     };
// }
//
// function generate(options: ServiceOptions) {
//     return (context: SchematicContext) =>{
//         return apply(url('./files'), [
//             template({
//                 ...strings,
//                 ...options,
//             }),
//             move(options.path),
//         ])(context);
//     }
// }