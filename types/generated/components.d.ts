import type { Schema, Attribute } from '@strapi/strapi';

export interface AuthorsAuthors extends Schema.Component {
  collectionName: 'components_authors_authors';
  info: {
    displayName: 'Authors';
    icon: 'write';
    description: '';
  };
  attributes: {
    admin_user: Attribute.Relation<
      'authors.authors',
      'oneToOne',
      'admin::user'
    >;
  };
}

export interface ContentBody extends Schema.Component {
  collectionName: 'components_content_bodies';
  info: {
    displayName: 'ArticleBodyText';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    Text: Attribute.Blocks;
  };
}

export interface ContentBreakingFeed extends Schema.Component {
  collectionName: 'components_content_breaking_feeds';
  info: {
    displayName: 'BreakingFeed';
  };
  attributes: {
    BreakingTime: Attribute.DateTime & Attribute.Required;
    BreakingText: Attribute.Text;
    BreakingMedia: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    BreakingTweet: Attribute.String;
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

export interface ContentRelatedArt extends Schema.Component {
  collectionName: 'components_content_related_arts';
  info: {
    displayName: 'RelatedArt';
    icon: 'book';
  };
  attributes: {
    related_article: Attribute.Relation<
      'content.related-art',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface ContentRelatedArticle extends Schema.Component {
  collectionName: 'components_content_related_articles';
  info: {
    displayName: 'RelatedArticle';
    icon: 'book';
    description: '';
  };
  attributes: {
    article_number: Attribute.BigInteger &
      Attribute.SetMinMax<
        {
          min: '1';
          max: '10000000';
        },
        string
      >;
  };
}

export interface ContentTags extends Schema.Component {
  collectionName: 'components_content_tags';
  info: {
    displayName: 'Tags';
    icon: 'grid';
  };
  attributes: {
    tags: Attribute.Relation<'content.tags', 'oneToMany', 'api::tag.tag'>;
  };
}

export interface ContentTwitterLink extends Schema.Component {
  collectionName: 'components_content_twitter_links';
  info: {
    displayName: 'Twitter Link';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    Url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'authors.authors': AuthorsAuthors;
      'content.body': ContentBody;
      'content.breaking-feed': ContentBreakingFeed;
      'content.file': ContentFile;
      'content.related-art': ContentRelatedArt;
      'content.related-article': ContentRelatedArticle;
      'content.tags': ContentTags;
      'content.twitter-link': ContentTwitterLink;
    }
  }
}
