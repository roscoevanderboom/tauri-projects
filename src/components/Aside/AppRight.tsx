import { Aside, MediaQuery, Text } from '@mantine/core'

export default function AppRight() {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Text>Noti</Text>
      </Aside>
    </MediaQuery>
  )
}
