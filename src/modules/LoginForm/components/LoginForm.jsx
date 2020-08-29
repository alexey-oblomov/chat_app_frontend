import React, {Component} from 'react';
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Button, Block} from 'components';

class LoginForm extends Component {
  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={this.onFinish}
          >
            <Form.Item name="username">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Имя пользователя"
                size="large"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large">
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}

export default LoginForm;
