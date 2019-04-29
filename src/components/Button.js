import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    renderButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
                </LanguageContext.Consumer>
            </button>
        );
    };

    render() {

        // Step 4
        //  Get value from the Context by using Consumer component.
        //  If we want to get data from the data stored in Context, we need to
        //  pass a function as a child of the Context.Consumer component.
        //  A child (function) will be called with whatever value is inside of
        //  our "pipe", so we can implement some logic inside of here.
        //
        //  We will make use of consumer anytime that we want to get information
        //  out of multiple different context objects inside of a single
        //  component.
        //
        //  Using this.context in conjunction with that contextType property is
        //  only used any time we are accessing a single context object inside
        //  a component.
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }

}

export default Button;