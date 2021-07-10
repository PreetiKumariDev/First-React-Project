import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';
import Header from './Header';


class SocialProfile extends Component {
    render() {
        const { link, image} = this.props.SocialProfile;

        return(
            <span>
                <a href={link}><img src={image} alt='social-profile' style={{width:20, height: 20, margin: 10}}/></a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return(
            <div>
                <Header/>
                <h2>Connect with me</h2>
                <div>
                    {
                       SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                           return<SocialProfile key={SOCIAL_PROFILE.id} SocialProfile={SOCIAL_PROFILE}/>;
                       }) 
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;