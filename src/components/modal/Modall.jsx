import React from 'react'
import { Modal } from 'antd'

export const Modall = ({ visible, setVisible }) => {





  return (
    <Modal
      title='ModalTest'
      visible={visible}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      onCancel={() => setVisible(!visible)}


    />


  )
}
