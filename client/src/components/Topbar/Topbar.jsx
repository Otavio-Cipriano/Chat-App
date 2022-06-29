import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { IoExit } from 'react-icons/io5'

import { useUser } from '../../context/UserProvider'

export default function Topbar() {
  const { user, room } = useUser()
  return (
    <div className='border border-secondary p-3 rounded'>
      <Row className='justify-content-between ps-2 pe-2 align-items-center'>
        <Col><span>{room}</span> - <span>{user}</span></Col>
        <Col className='d-flex justify-content-end' lg="1"><IoExit className='h3'/></Col>
      </Row>
    </div>
  )
}
