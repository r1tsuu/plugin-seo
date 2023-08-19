import React from 'react';
import { Props as TextFieldType } from 'payload/dist/admin/components/forms/field-types/Text/types';
import { PluginConfig } from '../types';
type TextFieldWithProps = TextFieldType & {
    path: string;
    pluginConfig: PluginConfig;
};
export declare const MetaTitle: React.FC<TextFieldWithProps | {}>;
export declare const getMetaTitleField: (props: any) => JSX.Element;
export {};
