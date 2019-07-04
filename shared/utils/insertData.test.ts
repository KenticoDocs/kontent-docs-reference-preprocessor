import { Operation } from '../external/models';
import { IPreprocessedData } from '../types/dataModels';
import { insertDataIntoBlob } from './insertData';

const getBlob = (): IPreprocessedData => ({
    items: {},
    operation: Operation.Initialize,
    zapiSpecificationCodename: 'some_api',
});

describe('insertDataIntoBlob', () => {
    it('inserts an array of items correctly into blob', () => {
        const blob = getBlob();
        const data = [{
            codename: 'item_codename',
            data: {
                contentType: 'zapi_category',
                id: '123456789',
                name: 'delete items',
            },
        }, {
            codename: 'another_codename',
            data: {
                contentType: 'zapi_category',
                id: '987654321',
                name: 'add items',
            },
        }];
        const expectedResult = {
            items: {
                another_codename: {
                    contentType: 'zapi_category',
                    id: '987654321',
                    name: 'add items',
                },
                item_codename: {
                    contentType: 'zapi_category',
                    id: '123456789',
                    name: 'delete items',
                },
            },
            operation: Operation.Initialize,
            zapiSpecificationCodename: 'some_api',
        };

        insertDataIntoBlob(data, blob);

        expect(blob).toEqual(expectedResult);
    });

    it('handles an empty items array', () => {
        const blob = getBlob();
        const data = [];
        const expectedResult = blob;

        insertDataIntoBlob(data, blob);

        expect(blob).toEqual(expectedResult);
    });
});