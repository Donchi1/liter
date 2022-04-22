import React from 'react'
import { createElement } from 'react'
import { useSelector } from 'react-redux'
import { useMediaQuery } from '@material-ui/core'
import { MenuItemLink, getResources } from 'react-admin'
import LabelIcon from '@material-ui/icons/Label'

function CostomMenu({ onMenuClick, logout }) {
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'))
  const open = useSelector((state) => state.admin.ui.sidebarOpen)
  const resources = useSelector(getResources)
  return (
    <div>
      {resources.map((resource) => (
        <MenuItemLink
          key={resource.name}
          to={`/${resource.name}`}
          primaryText={
            (resource.options && resource.options.label) || resource.name
          }
          leftIcon={createElement(resource.icon)}
          onClick={onMenuClick}
          sidebarIsOpen={open}
        />
      ))}
      <MenuItemLink
        to="/users/userInfo"
        primaryText="UserInfo"
        leftIcon={<LabelIcon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
      />
      {isXSmall && logout}
    </div>
  )
}

export default CostomMenu
