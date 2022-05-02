import React, { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Button,
} from 'antd';
import { onRegister } from '../../config/service-firebase';

const { Option } = Select;



const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export const Register = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        onRegister(values)
        console.log(values);
    }

    return (
        <>
            <Form
                className='register'
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <div className='main'>
                    <h1>Register</h1>
                    <Form.Item
                        type="email"
                        name="email"
                        label="E-mail"
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
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback

                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="rol"
                        label="rol"
                        rules={[{ required: true, message: 'Please select role!' }]}
                    >
                        <Select placeholder="select your gender">
                            <Option value="admin">Admin</Option>
                            <Option value="user">User</Option>

                        </Select>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" >
                            Register
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </>

    );
};

