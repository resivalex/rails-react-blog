// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import type { Node } from 'react'

const Wrapper = styled.div`
  padding-bottom: 6px;
`

const Title = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
`

const Description = styled.div`
  color: #666;
  font-size: 14px;
`

type Props = {
  title: Node,
  description?: Node
}

export default class Term extends Component<Props> {
  render() {
    const { title, description } = this.props

    return (
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
    )
  }
}
