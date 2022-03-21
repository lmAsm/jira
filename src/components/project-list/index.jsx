import React, { useState } from 'react';
import {List} from './list';
import {SearchPanel} from "./search-panel";
export const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    return (
        <React.Fragment>
            <SearchPanel param={param} setParam={setParam} />
            <List/>
        </React.Fragment>
    );
};