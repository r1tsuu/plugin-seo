import type { Config } from 'payload/config';
import type { PluginConfig } from './types';
declare const seo: (pluginConfig: PluginConfig) => (config: Config) => Config;
export default seo;
