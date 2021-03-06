import { ContentItem, Elements } from 'kentico-cloud-delivery';

/**
 * Generated by 'kentico-cloud-model-generator-utility@2.1.0'
 * Timestamp: Thu Sep 05 2019 13:36:04 GMT+0200 (GMT+02:00)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiRequestBody extends ContentItem {
  public required: Elements.MultipleChoiceElement;
  public schema: Elements.RichTextElement;
  public example: Elements.TextElement;
  public description: Elements.RichTextElement;
  public apiReference: Elements.TaxonomyElement;
  public mediaType: Elements.MultipleChoiceElement;

  constructor() {
    super({
      propertyResolver: ((elementName: string) => {
        if (elementName === 'api_reference') {
          return 'apiReference';
        }
        if (elementName === 'media_type') {
          return 'mediaType';
        }
        return elementName;
      })
    });
  }
}
