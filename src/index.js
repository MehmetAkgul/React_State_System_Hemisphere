import React from "react";
import ReactDom from 'react-dom';
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    // state başlattığımız nokta.
    state = {
        latitude: null,
        longitude: null,
        errorMessage: '',
    }


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude:   position.coords.latitude,
                    longitude:  position.coords.longitude,
                })
            },
            (error) => {
                this.setState({
                    errorMessage: error.message,
                })
            },
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
    }

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>{this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <div><HemisphereDisplay latitude={this.state.latitude}/></div>
        } else {
            return <div>Loading...</div>
        }
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
)