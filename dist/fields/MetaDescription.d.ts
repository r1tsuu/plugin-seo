import React from 'react';
import { TextareaField } from 'payload/dist/fields/config/types';
import { PluginConfig } from '../types';
type TextareaFieldWithProps = TextareaField & {
    path: string;
    pluginConfig: PluginConfig;
};
export declare const MetaDescription: React.FC<(TextareaFieldWithProps | {}) & {
    pluginConfig: PluginConfig;
}>;
export declare const getMetaDescriptionField: (props: any) => JSX.Element;
export {};
