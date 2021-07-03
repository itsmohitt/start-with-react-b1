import React from "react";
import {Layout} from "antd";

const {Header, Footer, Sider, Content} = Layout;

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <Layout>
            <Header>Header </Header>
            <Content style={{padding: 20}}>
                {this.props.children}
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    }
}
export default App;