import React, {Component, Fragment} from 'react'
import Photo from '../images/profilePicture.jpg'
import '../HomeView.css'
class HomeView extends Component {
render() {
    return (
        <Fragment>
            <img src={Photo} alt="head shot of joseph" class='profilePicture'/>
            <h1>Joseph Trettevik</h1>
        </Fragment>
    );
}
}

export default HomeView