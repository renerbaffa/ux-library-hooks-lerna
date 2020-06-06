import React from 'react'
import { LanguageContext } from 'contexts/LanguageContext'
import { EN } from 'constants/languages'

function LanguageProvider(props) {
  const [language, setLanguage] = React.useState(EN)
  const memoizedSetLanguage = React.useCallback(language => setLanguage(language), [])

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: memoizedSetLanguage }}
      {...props}
    />
  )
}

export { LanguageProvider }
