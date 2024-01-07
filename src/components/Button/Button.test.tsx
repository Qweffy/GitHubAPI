import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { Button } from './Button'

describe('<Button/>', () => {
  test('<Button> renders correctly', () => {
    render(<Button label={'hola'} onPress={() => console.log('hola')} />)
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
