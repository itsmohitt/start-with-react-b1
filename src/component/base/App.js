import React from "react";
import {Layout} from "antd";

const {Header, Footer, Sider, Content} = Layout;

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <Layout>
            <Header>Header</Header>
            <Content style={{padding: 20,minHeight:'calc(100vh - 135px)'}}>
                {this.props.children}
            </Content>
            <Footer>Copyright 2021</Footer>
        </Layout>
    }
}
export default App;