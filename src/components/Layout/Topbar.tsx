import React from 'react'

import classes from './styles.module.scss'
import { TopbarProps as Props } from '../../types'
import { Button } from 'evergreen-ui'

const Topbar: React.FC<Props> = ({ actions, title }) => (
  <div className={classes.topbar}>
    <h2>{title}</h2>
    
    <ul>
      {actions.map(tab => (
        <li>
          <Button
            iconAfter={tab.iconName}
            disabled={tab.isDisabled}
            isLoading={tab.isLoading}
            appearance={tab.appearance}
          >
            {tab.label}
          </Button>
        </li>
      ))}
    </ul>
  </div>
)

export default Topbar