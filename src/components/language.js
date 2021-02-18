import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import styles from "../styles/languages.module.scss"

const languageName = {
  en: "EN",
  de: "DE",
  fr: "FR",
}

const Language = () => {
  return (
    <div className={styles.translation_flex}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <div
              role='button'
              tabIndex={0}
              key={language}
              onClick={() => changeLocale(language)}
              onKeyDown={() => changeLocale(language)}
              className={styles.translation_item}
              style={{
                color: currentLocale === language && `white`,
                border: currentLocale === language && `1px solid rgba(255, 255, 255, 0.637)`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </div>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language