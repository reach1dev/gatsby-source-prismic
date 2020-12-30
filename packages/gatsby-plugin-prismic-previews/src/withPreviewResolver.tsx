import * as React from 'react'
import * as gatsby from 'gatsby'
import { PrismicAPIDocument } from 'gatsby-source-prismic'

import { getComponentDisplayName } from './lib/getComponentDisplayName'

import {
  usePrismicPreviewResolver,
  UsePrismicPreviewResolverConfig,
} from './usePrismicPreviewResolver'

export interface WithPreviewResolverProps {
  previewIsLoading: boolean
  previewPath?: string
  previewDocument?: PrismicAPIDocument
}

type WithPreviewResolverConfig = UsePrismicPreviewResolverConfig

export const withPreviewResolver = <TProps extends gatsby.PageProps>(
  WrappedComponent: React.ComponentType<TProps>,
  config: WithPreviewResolverConfig,
): React.ComponentType<TProps> => {
  const WithPreviewResolver = (props: TProps): React.ReactElement => {
    const { isLoading, path, document } = usePrismicPreviewResolver(config)

    return (
      <WrappedComponent
        {...props}
        previewIsLoading={isLoading}
        previewPath={path}
        previewDocument={document}
      />
    )
  }
  WithPreviewResolver.displayName = `withPreviewResolver(${getComponentDisplayName(
    WrappedComponent,
  )})`

  return WithPreviewResolver
}
