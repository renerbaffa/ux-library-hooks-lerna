import React from 'react'
import { LanguageProvider } from './language'

function withProviders(Component) {
  function AllProviders(props) {
    return (
      <LanguageProvider>
        <Component {...props} />
      </LanguageProvider>
    )
  }

  return AllProviders
}

export { withProviders }
