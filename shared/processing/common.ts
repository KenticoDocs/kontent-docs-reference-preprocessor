import {
  IPreprocessedData,
  ISystemAttributes,
  IWrappedItem
} from 'cloud-docs-shared-code/reference/preprocessedModels';
import { ContentItem, Elements } from 'kentico-cloud-delivery';

import { insertDataIntoBlob } from '../utils/insertDataIntoBlob';
import { getFromLinkedItems } from '../utils/processElements';

import RichTextField = Elements.RichTextElement;

type ProcessableObject = ContentItem | ContentItem[] | RichTextField;

type GetData<ProcessedDataModel extends ISystemAttributes> = (
  item: ProcessableObject,
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
) => IWrappedItem<ProcessedDataModel>[];

type GetDataObject<ProcessedDataModel> = (
  item: ProcessableObject,
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
) => ProcessedDataModel;

export const processItems = <DataModelResult extends ISystemAttributes>(getData: GetData<DataModelResult>) => (
  item: ProcessableObject,
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
): void => {
  const data = getData(item, dataBlob, linkedItems);
  insertDataIntoBlob(data, dataBlob);
};

export const getItemsDataFromRichText = <KCItem extends ContentItem, PreprocessedItem extends ISystemAttributes>(
  getDataObject: GetDataObject<PreprocessedItem>
) => (
  field: RichTextField,
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
): IWrappedItem<PreprocessedItem>[] =>
  field.linkedItemCodenames.map(codename => {
    const item: KCItem = getFromLinkedItems<KCItem>(codename, linkedItems);

    return getWrappedData(getDataObject(item, dataBlob, linkedItems), item);
  });

export const getItemsDataFromLinkedItems = <KCItem extends ContentItem, PreprocessedItem extends ISystemAttributes>(
  getDataObject: GetDataObject<PreprocessedItem>
) => (
  items: ContentItem[],
  dataBlob: IPreprocessedData,
  linkedItems: ContentItem[]
): IWrappedItem<PreprocessedItem>[] =>
  items.map(item => getWrappedData(getDataObject(item, dataBlob, linkedItems), item));

const getWrappedData = <Data extends ISystemAttributes>(dataObject: Data, item: ContentItem): IWrappedItem<Data> => ({
  codename: item.system.codename,
  data: dataObject
});

export const getSystemProperties = ({ system: { type, id } }: ContentItem): ISystemAttributes => ({
  contentType: type,
  id
});
