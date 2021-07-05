import React from "react";
import {Button, Col, Input, message, Row} from 'antd';
import {withRouter} from "react-router-dom";
import App from "../component/base/App";


class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSearchClick = () => {
        let {username} = this.state;
        if (!username) {
            message.warning("Please Type username!");
        } else {
            this.props.history.push(`/${username}`);
        }

    }

    render() {
        const {username} = this.state;
        return <App>
            <Row justify="center">
                <Col span={16}>
                    <Input placeholder="Github Username Search..."
                           size={"large"}
                           style={{width: '100%'}}
                           value={username}
                           onChange={this.onUsernameChange}/>
                </Col>
                <Col span={2}>
                    <Button size={"large"} type={"primary"} onClick={this.onSearchClick}>Search</Button>
                </Col>
            </Row>
        </App>
    }
}

export default withRouter(Home)