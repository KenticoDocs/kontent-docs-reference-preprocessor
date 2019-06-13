import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Thu Jun 13 2019 13:54:14 GMT+0200 (GMT+02:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class ZapiSchemaInteger extends ContentItem {
    public format: Fields.TextField;
    public commonSchemaPropertyElementsReadonly: Fields.MultipleChoiceField;
    public commonSchemaElementsExample: Fields.TextField;
    public commonSchemaElementsName: Fields.TextField;
    public maximum: Fields.NumberField;
    public acceptedValues: Fields.TextField;
    public commonSchemaPropertyElementsWriteonly: Fields.MultipleChoiceField;
    public default: Fields.NumberField;
    public commonSchemaElementsDescription: Fields.RichTextField;
    public commonSchemaPropertyElementsNullable: Fields.MultipleChoiceField;
    public minimum: Fields.NumberField;
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'common_schema_property_elements__readonly') {
                    return 'commonSchemaPropertyElementsReadonly';
                }
                if (fieldName === 'common_schema_elements__example') {
                    return 'commonSchemaElementsExample';
                }
                if (fieldName === 'common_schema_elements__name') {
                    return 'commonSchemaElementsName';
                }
                if (fieldName === 'accepted_values') {
                    return 'acceptedValues';
                }
                if (fieldName === 'common_schema_property_elements__writeonly') {
                    return 'commonSchemaPropertyElementsWriteonly';
                }
                if (fieldName === 'common_schema_elements__description') {
                    return 'commonSchemaElementsDescription';
                }
                if (fieldName === 'common_schema_property_elements__nullable') {
                    return 'commonSchemaPropertyElementsNullable';
                }
                return fieldName;
            })
        });
    }
}
