import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Thu Jun 13 2019 13:54:14 GMT+0200 (GMT+02:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class ZapiResponse extends ContentItem {
    public headers: ContentItem[];
    public apiReference: Fields.TaxonomyField;
    public content: Fields.RichTextField;
    public description: Fields.RichTextField;
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'api_reference') {
                    return 'apiReference';
                }
                return fieldName;
            })
        });
    }
}