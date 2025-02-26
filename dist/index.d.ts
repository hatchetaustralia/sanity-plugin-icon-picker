import { Plugin as Plugin_2 } from 'sanity';
import type { ReactElement } from 'react';

declare type ConfigurationIconObject = Omit<IconObject, 'provider'>;

declare type ConfigurationIconObjectArray = Array<ConfigurationIconObject>;

declare interface IconObject {
  provider: string;
  name: string;
  component: () => ReactElement;
  tags: string[];
}

export declare const iconPicker: Plugin_2<void>;

declare interface IconPickerOptions {
  providers?: string[];
  outputFormat?: string;
  filter?: (string | RegExp)[];
  configurations?: ProviderConfiguration[];
}

export declare const migrateIconName: (
  name: string,
  provider: string,
  format?: 'react'
) => string;

declare type Preview = Pick<IconObject, 'provider' | 'name'> & {
  options?: IconPickerOptions;
};

export declare const preview: ({
  provider,
  name,
  options,
}: Preview) => ReactElement | null;

declare interface ProviderConfiguration {
  title: string;
  provider: string;
  icons: (options?: IconPickerOptions) => ConfigurationIconObjectArray;
}

export {};
