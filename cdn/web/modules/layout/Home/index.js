import { Layout } from 'antd'
import React, {Component} from 'react'
const { Header, Footer, Sider, Content } = Layout

export default class Index extends Component{
	render () {
		return (
			<Layout>
		        <Header>Header</Header>
		        <Content>{this.props.children}</Content>
		        <Footer>Footer</Footer>
		    </Layout>
		)
	}
}