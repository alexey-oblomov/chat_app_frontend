import React from 'react';
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Button, Block} from 'components';
import {validateField} from 'utils/helpers';

const success = false;

const RegisterForm = props => {
  const {values, touched, errors, handleChange, handleBlur, handleSubmit} = props;

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
            onSubmit={handleSubmit}
          >
            <Form.Item
              name="email"
              validateStatus={validateField('email', touched, errors)}
              help={!touched.email ? '' : errors.email}
              hasFeedback
            >
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item name="username">
              <Input
                id="fullname"
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="Ваше имя"
              />
            </Form.Item>

            <Form.Item
              name="password"
              validateStatus={validateField('password', touched, errors)}
              help={!touched.password ? '' : errors.password}
              hasFeedback
            >
              <Input
                id="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="large"
                type="password"
                placeholder="Пароль"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item name="repeatPassword">
              <Input
                id="password2"
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="large"
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large" onClick={handleSubmit}>
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
};

export default RegisterForm;
