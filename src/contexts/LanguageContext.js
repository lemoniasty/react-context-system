// Step 1
//  Create a context object and export it.
//  We putting this into a separate file because we want to import Context
//  object into only the component files that we care about in our app.
import React from 'react';

// By setting defaultValue param, we indicate that we want to communicate with
// components by defaultValue and this.context option.
// This is one of the two methods of communications with the components by the
// Context (the second option is by the Producer/Consumer components).
// By setting defaultValue to 'English' we indicate to two child components
// that by default we have selected 'English' language.
export default React.createContext('english');