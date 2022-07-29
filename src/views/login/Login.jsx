import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Modall } from '../../components/modal/Modall'
import firebaseApp from '../../config/firebase/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(firebaseApp);

const login = (values) => {
  signInWithEmailAndPassword(auth, values.email, values.password).then(u => { }).catch((error) => {
    console.log(error);
  })

}

export const Login = () => {

  const onFinish = (values) => {

    login(values)
  };

  return (
    <>
      <Form
        name='normalLogin'
        className='login '
        initialvalues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1>Login</h1>
        <Form.Item
          type="email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input className='item' prefix={<UserOutlined className='site-form-item-icon ' placeholder='username' />} />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input className='item' prefix={<LockOutlined className='site-form-item-icon' type='password' placeholder='password' />} />
        </Form.Item>

        <Form.Item>
          <Form.Item
            name='remember'
            valuePropName='checked' noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item >
          <Row >
            <Col span={6} offset={2} >
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Col>
            <Col span={8} offset={6}>

              Or <a href="/register" >register now!</a>
            </Col>
          </Row>
        </Form.Item>
      </Form>
      {/*  <Modall visible={visible} setVisible={setVisible} /> */}
    </>
  )
}

