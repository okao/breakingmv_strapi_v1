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

export interface BreakingContentBreakingArticleContents
  extends Schema.Component {
  collectionName: 'components_breaking_content_breaking_article_contents';
  info: {
    displayName: 'Breaking Article Contents';
    icon: 'bold';
  };
  attributes: {
    Body: Attribute.Component<'content.body'> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 10;
        },
        number
      >;
    Date: Attribute.DateTime & Attribute.Required;
  };
}

export interface ContentBody extends Schema.Component {
  collectionName: 'components_content_bodies';
  info: {
    displayName: 'Body';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    Text: Attribute.Blocks;
    File: Attribute.Component<'content.file'>;
    Twitter: Attribute.Component<'content.twitter-link'>;
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
      'breaking-content.breaking-article-contents': BreakingContentBreakingArticleContents;
      'content.body': ContentBody;
      'content.file': ContentFile;
      'content.related-article': ContentRelatedArticle;
      'content.tags': ContentTags;
      'content.twitter-link': ContentTwitterLink;
    }
  }
}
