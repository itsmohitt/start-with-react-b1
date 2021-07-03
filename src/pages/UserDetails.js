import React from "react";
import App from "../component/base/App";
import {withRouter} from "react-router-dom";

 class UserDetails extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        if(this.props.match.params.username){

        }
    }

     render() {
        return <App>
            <h2>{this.props.match.params.username} Details</h2>
        </App>
    }
}
export default withRouter(UserDetails)