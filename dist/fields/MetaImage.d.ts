import React from 'react';
import { Props as UploadFieldType } from 'payload/dist/admin/components/forms/field-types/Upload/types';
import { PluginConfig } from '../types';
type UploadFieldWithProps = UploadFieldType & {
    path: string;
    pluginConfig: PluginConfig;
};
export declare const MetaImage: React.FC<UploadFieldWithProps | {}>;
export declare const getMetaImageField: (props: any) => JSX.Element;
export {};
