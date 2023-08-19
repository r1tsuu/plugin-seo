import React from 'react';
import { Field } from 'payload/dist/admin/components/forms/Form/types';
import { PluginConfig } from '../types';
type PreviewFieldWithProps = Field & {
    pluginConfig: PluginConfig;
};
export declare const Preview: React.FC<PreviewFieldWithProps | {}>;
export declare const getPreviewField: (props: any) => JSX.Element;
export {};
