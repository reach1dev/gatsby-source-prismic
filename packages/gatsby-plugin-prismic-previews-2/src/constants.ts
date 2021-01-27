import chalk from 'chalk'

export const GLOBAL_TYPE_PREFIX = 'Prismic'

export const DEFAULT_TOOLBAR = 'new'

export const DEFAULT_PROMPT_FOR_ACCESS_TOKEN = true

export const QUERY_PAGE_SIZE = 100

export const TYPE_PATHS_BASENAME_TEMPLATE = 'type-paths-store %s'

export const WINDOW_CONTEXTS_KEY = '__GATSBY_PLUGIN_PRISMIC_PREVIEWS_CONTEXTS__'

export const COOKIE_ACCESS_TOKEN_NAME =
  'gatsby-plugin-prismic-previews.%s.accessToken'

export const REPORTER_TEMPLATE = 'gatsby-plugin-prismic-previews(%s) - %s'

export const WROTE_TYPE_PATHS_TO_FS_MSG = 'Wrote type paths store to %s'

export const TYPE_PATHS_MISSING_NODE_MSG = `Type paths for this repository could not be found. Check that you have ${chalk.cyan(
  'gatsby-source-prismic',
)} configured with the same repository name and type prefix (if used) in ${chalk.cyan(
  'gatsby-node.js',
)}.`

export const TYPE_PATHS_MISSING_BROWSER_MSG =
  'The type paths store for this repository could not be found.'
