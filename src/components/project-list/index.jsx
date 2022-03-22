import React, { useState, useEffect } from 'react';
import {List} from './list';
import {SearchPanel} from "./search-panel";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        console.log('useEffect111=== ', param);
        fetch(`${apiUrl}/projects`).then(async response => {
            if (response.ok) {
                setList(await response.json());
            }
        });
    }, [param]);

    useEffect(() => {
        console.log('useEffect222=== ', param);
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json());
            }
        });
    }, []);
    return (
        <React.Fragment>
            <SearchPanel param={param} setParam={setParam} users={users} setUsers={setUsers} />
            <List list={list} users={users} />
        </React.Fragment>
    );
};
