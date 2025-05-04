import { Col, Row } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import Search from 'antd/es/transfer/search'
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'


const Header = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}><WrapperTextHeader>QShop</WrapperTextHeader></Col>
                <Col span={12} >
                    <Search
                        placeholder="input search text"
                        // allowClear
                        enterButton="Search"
                        size="large"

                    />
                </Col>
                <Col span={6} style={{ display: "flex", gap: '20px' }}>

                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall  >Tài khoản </WrapperTextHeaderSmall>
                                <CaretDownOutlined></CaretDownOutlined>
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>

                        <ShoppingCartOutlined style={{ fontSize: '30px', color: "#fff" }} />
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>


                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default Header