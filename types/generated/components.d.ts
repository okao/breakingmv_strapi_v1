import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminUserCreator extends Schema.Component {
  collectionName: 'components_admin_user_creators';
  info: {
    displayName: 'creator';
  };
  attributes: {
    users_permissions_user: Attribute.Relation<
      'admin-user.creator',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

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
    description: '';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentQoute extends Schema.Component {
  collectionName: 'components_content_qoutes';
  info: {
    displayName: 'Qoute';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    quote: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 25;
      }>;
    quote_by: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 50;
      }>;
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

export interface ReactionsReactions extends Schema.Component {
  collectionName: 'components_reactions_reactions';
  info: {
    displayName: 'Reactions';
    icon: 'doctor';
  };
  attributes: {
    happy: Attribute.BigInteger & Attribute.DefaultTo<'0'>;
    sad: Attribute.BigInteger & Attribute.DefaultTo<'0'>;
    angry: Attribute.BigInteger & Attribute.DefaultTo<'0'>;
    wow: Attribute.BigInteger & Attribute.DefaultTo<'0'>;
    in_love: Attribute.BigInteger & Attribute.DefaultTo<'0'>;
  };
}

export interface StoryChapterContent extends Schema.Component {
  collectionName: 'components_story_chapter_contents';
  info: {
    displayName: 'chapter_content';
    icon: 'feather';
  };
  attributes: {
    chapter_text: Attribute.Blocks;
    chapter_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface StoryStoryChapter extends Schema.Component {
  collectionName: 'components_story_story_chapters';
  info: {
    displayName: 'StoryChapter';
    icon: 'write';
    description: '';
  };
  attributes: {
    Chapter: Attribute.String & Attribute.Required;
    ChapterDate: Attribute.Date & Attribute.Required;
    chapter_contents: Attribute.Component<'story.chapter-content', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'admin-user.creator': AdminUserCreator;
      'authors.authors': AuthorsAuthors;
      'content.body': ContentBody;
      'content.breaking-feed': ContentBreakingFeed;
      'content.file': ContentFile;
      'content.qoute': ContentQoute;
      'content.related-art': ContentRelatedArt;
      'content.related-article': ContentRelatedArticle;
      'content.tags': ContentTags;
      'content.twitter-link': ContentTwitterLink;
      'reactions.reactions': ReactionsReactions;
      'story.chapter-content': StoryChapterContent;
      'story.story-chapter': StoryStoryChapter;
    }
  }
}
