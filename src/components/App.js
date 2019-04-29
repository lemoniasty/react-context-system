import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {

    state = {language: 'english'};

    onLanguageChange = language => {
        this.setState({language})
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
                </div>

                {/*
                    Step 3

                    When we want to change the value inside of our Context
                    object we have to create a component that is going to act
                    as a source of information. In this example is an App
                    component.

                    App component knows what language is currently selected
                    because it manages state inside of him.

                    When we want to communicate a state of the component down
                    to the nested children, we need to create a Provider
                    component. Thanks to Provider component we can update the
                    value inside of our Context object.

                    When we render our ContextProvider we need to assign a prop
                    named "value". This is a very special property name to a
                    provider. To the value prop, we pass the value that we want
                    to put inside a context object.

                    Every provider creates a different "pipe" of information
                    passed to the wrapped components.
                */}
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="red">
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }

}

export default App;