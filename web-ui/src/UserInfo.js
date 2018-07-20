import React from 'react'
import { Button, Header, List } from 'semantic-ui-react'

const UserInfo = ({ user, logoutUser }) => {
  return (
    <div>
      <Header as="h1">User Info</Header>
      <p>You are logged in using {user.loggedInProviderName}.</p>
      <List>
        {Object.keys(user.profile.data).map(key => {
          return (
            user.profile[key] && (
              <List.Item key={key}>
                <List.Header>{key}</List.Header>
                <List.Description>{user.profile[key]}</List.Description>
              </List.Item>
            )
          )
        })}
      </List>
      <Button
        primary
        onClick={() => {
          logoutUser()
        }}
      >
        Logout
      </Button>
    </div>
  )
}

export default UserInfo
