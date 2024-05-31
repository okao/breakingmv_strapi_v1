import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentBody extends Schema.Component {
  collectionName: 'components_content_bodies';
  info: {
    displayName: 'Body';
    icon: 'collapse';
  };
  attributes: {
    Text: Attribute.Blocks;
  };
}

export interface ContentFile extends Schema.Component {
  collectionName: 'components_content_files';
  info: {
    displayName: 'File';
    icon: 'apps';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.body': ContentBody;
      'content.file': ContentFile;
    }
  }
}
