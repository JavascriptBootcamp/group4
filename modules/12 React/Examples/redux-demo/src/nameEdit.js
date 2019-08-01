import React from 'react';

const NameEditComponent = props => (
    <div>
        <label htmlFor="name-edit">Update Name:</label>
        <input type="text" id="name-edit" value={props.userName} onChange={e => props.onChange(e.target.value)} />
    </div>
);

export default NameEditComponent;