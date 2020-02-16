import React, {Component, Fragment} from 'react'
import Photo from '../images/profilePicture.jpg'
import '../HomeView.css'
class HomeView extends Component {
render() {
    return (
        <Fragment>
            <img src={Photo} alt="head shot of joseph" class='profilePicture'/>
            <h1>Joseph Trettevik</h1>
            <p>Full Stack Software Engineer / React.js / JavaScript / Ruby on Rails</p>
            <br/>
            <p>Full stack software engineer with a passion for solving puzzles. Experience in React, JavaScript, and Ruby on Rails, and strong skills in problem solving and writing algorithms that help tech companies develop new product features. From my work as a Marine Chemist, I know how to troubleshoot problems when you can’t directly see a system’s inner workings, and I use this in my approach to software development. </p>
        </Fragment>
    );
}
}

export default HomeView