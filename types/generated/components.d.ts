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

export interface ContentRelatedArticle extends Schema.Component {
  collectionName: 'components_content_related_articles';
  info: {
    displayName: 'RelatedArticle';
    icon: 'book';
  };
  attributes: {
    article: Attribute.Relation<
      'content.related-article',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface ContentTwitterLink extends Schema.Component {
  collectionName: 'components_content_twitter_links';
  info: {
    displayName: 'Twitter Link';
    icon: 'twitter';
  };
  attributes: {
    Url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.body': ContentBody;
      'content.file': ContentFile;
      'content.related-article': ContentRelatedArticle;
      'content.twitter-link': ContentTwitterLink;
    }
  }
}
