import React, {Component} from 'react';
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Button, Block} from 'components';

class RegisterForm extends Component {
  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    const success = true;
    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат вам нужно зарегистрироваться</p>
        </div>
        <Block>
          {!success ? (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{remember: true}}
              onFinish={this.onFinish}
            >
              <Form.Item name="username">
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Ваше имя"
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

              <Form.Item name="repeatPassword">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Повторите пароль"
                  size="large"
                />
              </Form.Item>

              <Form.Item name="email">
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="E-mail"
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" size="large">
                  Зарегистрироваться
                </Button>
              </Form.Item>
              <Link className="auth__register-link" to="/login">
                Авторизоваться
              </Link>
            </Form>
          ) : (
            <div className="auth__success-block">
              <div>
                <InfoCircleTwoTone />
              </div>

              <h2>Подтвердите свой аккаунт</h2>
              <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
            </div>
          )}
        </Block>
      </div>
    );
  }
}

export default RegisterForm;
