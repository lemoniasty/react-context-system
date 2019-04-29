import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    // Step 2
    //  Define contextType for the Component.
    //  In this way we hookup a context object to a class component.
    //  A contextType property is a very special property name. If we pass
    //  LanguageContext to a variable named differently, a Context is not going
    //  to work correctly!!!!!
    //  By specifying contextType, we gaining access to data stored in Context
    //  object by referencing to this.context property.
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english'
            ? 'Name'
            : 'Naam';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input type="text"/>
            </div>
        )
    }
}

export default Field;