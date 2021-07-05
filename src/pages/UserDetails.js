import React from "react";
import App from "../component/base/App";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import {Avatar, Card, Col, Row, Spin,message} from "antd";

class UserDetails extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {},
            loading: false
        }

    }

    componentDidMount() {
        if (this.props.match.params.username) {
            this.fetchUserData(this.props.match.params.username)
        }
    }

    fetchUserData(username) {
        const that = this;
        this.setState({
            loading: true
        })
        axios.get('https://api.github.com/users/' + username).then(function (response) {
            that.setState({
                userDetails: response.data,
                loading: false
            })
        }).catch(function (error) {
            message.error("User not found!");
            that.setState({
                loading: false
            });
            that.props.history.push('/')
        })
    }

    render() {
        const {userDetails, loading} = this.state;
        return <App>
            <Link to={"/"}><h3> Go Back</h3></Link>
            <Spin spinning={loading}>
                <Card>
                    <Row>
                        <Col span={8}>
                            <Avatar src={userDetails.avatar_url} size={150}/>
                        </Col>
                        <Col>
                            <a href={userDetails.html_url}><h1>{userDetails.name} <small>@{userDetails.login}</small>
                            </h1></a>
                            <Row gutter={[32, 32]}>
                                <Col><h4>{userDetails.followers} Followers</h4></Col>
                                <Col><h4>{userDetails.following} Following</h4></Col>
                                <Col><h4>{userDetails.public_gists} Gist</h4></Col>
                                <Col><h4>{userDetails.public_repos} Repositories</h4></Col>
                            </Row>
                            <h5>{userDetails.location}</h5>
                        </Col>
                    </Row>
                </Card>
            </Spin>
        </App>
    }
}

export default withRouter(UserDetails)