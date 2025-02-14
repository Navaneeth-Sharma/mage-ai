import BlockType from './BlockType';
import TransformerActionType from './TransformerActionType';
import { PipelineMetadataType } from './MetadataType';

export enum PipelineTypeEnum {
  PYTHON = 'python',
  PYSPARK = 'pyspark',
}

export const PIPELINE_TYPE_TO_KERNEL_NAME = {
  [PipelineTypeEnum.PYTHON]: 'python3',
  [PipelineTypeEnum.PYSPARK]: 'pysparkkernel',
};

export default interface PipelineType {
  actions?: TransformerActionType[];
  blocks?: BlockType[];
  id?: number;
  metadata?: PipelineMetadataType;
  name?: string;
  type?: PipelineTypeEnum;
  uuid?: string;
}
