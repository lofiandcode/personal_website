import React, {Component, Fragment} from 'react'
import Photo from '../images/profilePicture.jpg'
class HomeView extends Component {
render() {
    return (
        <Fragment>
            <img src={Photo} alt="head shot of joseph"/>
            <h1>Hello World!</h1>
        </Fragment>
    );
}
}

export default HomeView