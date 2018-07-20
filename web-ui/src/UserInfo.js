import React from 'react'
import { Button, Header, List, Image } from 'semantic-ui-react'

const UserInfo = ({ user, logoutUser }) => {
  const { picture, ...data } = user.profile.data
  const dataKeys = Object.keys(data)
  return (
    <div>
      <Header as="h2">User Info</Header>
      <p>You are logged in using {user.loggedInProviderName}.</p>
      <List>
        {picture && (
          <List.Item key="picture">
            <Image src={picture} size="small" />
          </List.Item>
        )}
        {dataKeys.map(key => {
          return (
            data[key] && (
              <List.Item key={key}>
                <List.Header>{key}</List.Header>
                <List.Description>{data[key]}</List.Description>
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
