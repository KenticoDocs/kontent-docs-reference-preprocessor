import { ContentItem, Elements } from 'kentico-cloud-delivery';

import { CodeSample } from './code_sample';
import { ZapiParameter } from './zapi_parameter';

/**
 * Generated by 'kentico-cloud-model-generator-utility@2.1.0'
 * Timestamp: Thu Sep 05 2019 13:36:04 GMT+0200 (GMT+02:00)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiPathOperation extends ContentItem {
  public description: Elements.RichTextElement;
  public codeSamples: Elements.LinkedItemsElement<CodeSample>;
  public path: Elements.TextElement;
  public requestBody: Elements.RichTextElement;
  public apiReference: Elements.TaxonomyElement;
  public responses: Elements.RichTextElement;
  public pathOperation: Elements.TaxonomyElement;
  public deprecated: Elements.MultipleChoiceElement;
  public url: Elements.UrlSlugElement;
  public name: Elements.TextElement;
  public parameters: Elements.LinkedItemsElement<ZapiParameter>;

  constructor() {
    super({
      propertyResolver: ((elementName: string) => {
        if (elementName === 'code_samples') {
          return 'codeSamples';
        }
        if (elementName === 'request_body') {
          return 'requestBody';
        }
        if (elementName === 'api_reference') {
          return 'apiReference';
        }
        if (elementName === 'path_operation') {
          return 'pathOperation';
        }
        return elementName;
      })
    });
  }
}
