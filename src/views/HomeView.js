import React, {Component, Fragment} from 'react'
import Photo from '../images/profilePicture.jpg'
import '../HomeView.css'
import '../containers/ProjectCard.js'
import ProjectCard from '../containers/ProjectCard.js'


class HomeView extends Component {

projectInfo = { 
    'biggerFish': {
        'title': 'Bigger Fish',
        'stack': 'React.js|JavaScript|Ruby on Rails|Semantic-UI',
        'description': 'This app using google maps tools to match volunteer delivery drivers with donors that want to donate parishable food.'
    },
    'geocachingApp': {
        'title': 'Geocaching App',
        'stack': 'React.js|JavaScript|Ruby on Rails|Semantic-UI',
        'description': 'Displays nearby geocaches and allows users to create their own.'
    },
    'tasker': {
        'title': 'Tasker',
        'stack': 'JavaScript|Ruby on Rails|CSS',
        'description': 'A time management app that allows users to add tasks to "To Do," "Working," or "Done," and move them between those lists.'
    }
}

render() {
    return (
        <Fragment>
            <img src={Photo} alt="head shot of joseph" class='profilePicture'/>
            <h1>Joseph Trettevik</h1>
            <p>Full Stack Software Engineer / React.js / JavaScript / Ruby on Rails</p>
            <br/>
            <p>Full stack software engineer with a passion for solving puzzles. Experience in React, JavaScript, and Ruby on Rails, and strong skills in problem solving and writing algorithms that help tech companies develop new product features. From my work as a Marine Chemist, I know how to troubleshoot problems when you can’t directly see a system’s inner workings, and I use this in my approach to software development. </p>
            <ProjectCard cardInfo={this.projectInfo.biggerFish}/>
            <ProjectCard cardInfo={this.projectInfo.geocachingApp}/>
            <ProjectCard cardInfo={this.projectInfo.tasker}/>
        </Fragment>
    );
}
}

export default HomeView