import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

type typeRoutesItem = {
	type: "item";
	path: string;
	label: string;
	element: React.ReactNode[];
};
type typeRoutes =
	| typeRoutesItem
	| {
			type: "sub";
			label: string;
			subItems: typeRoutesItem[];
	  };
// const mapRoutes: typeMapRoutes[] = [{
// 	path: "login"
// }];
// const arrayRoutes: typeRoutes[] = [{
// 	type: 'sub',
// 	label:"User",
// 	subItems: [{
// 		type: "item",
// 		path: "/users",
// 		label: "User",

// 	}]
// }];
export default function App() {
	const [collapsed, setCollapsed] = useState(true);
	const onCollapse = (collapsed: boolean) => {
		setCollapsed(collapsed);
	};

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
				<div className='text-white p-2'>
					<span>Chào admin</span>
				</div>
				<Menu theme='dark' mode='inline'>
					<SubMenu key='sub1' icon={<UserOutlined />} title='User'>
						<Menu.Item key='1'>Alll User</Menu.Item>
						<Menu.Item key='2'>User blocked</Menu.Item>
						<Menu.Item key='3'>User active</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout className='site-layout'>
				<Header className='site-layout-background' style={{ padding: 0 }} />
				<Content style={{ margin: "0 16px" }}>
					{/* <Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb> */}
					<div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
						main
					</div>
				</Content>
				{/* <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
			</Layout>
		</Layout>
	);
}
