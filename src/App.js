import React, { Component } from 'react';
// import Projects from './Projects';
// import SocialProfiles from './SocialProfiles';
import Header from './Header';




class App extends Component {
    state = { displayBio: false };

    // constructor(){
    //     super();
    //     this.state = { displayBio: false };

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return(
            <div>
                <Header/>
                <h1>Hello!</h1>
                <p>My name is Preeti. I am a passionate Web Developer</p>
                <p>I am always looking to work on meaningful Projects</p>
                { 
                    this.state.displayBio ? (
                    <div>
                        <p>My favorite language is JavaScript and I find React very interesting as well.</p>
                        <p>Besides coding, I also love dogs and music</p>
                        <p>/*Handlers like onClick should not call a function with paranthesis leads to infinite loop as the function is called when the page loads and not on event */</p>
                        <button onClick={ this.toggleDisplayBio }>Show less</button>
                    </div>) : (
                    <div>
                        <button onClick={ this.toggleDisplayBio }>Read more</button>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default App;