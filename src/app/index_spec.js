"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const collectionPath = path.join(__dirname, '../collection.json');
describe('hello', () => {
    it('works', async () => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        const tree = await runner.runSchematicAsync('hello', {}, schematics_1.Tree.empty()).toPromise();
        expect(tree.files).toEqual([]);
    });
});
