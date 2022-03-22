import React from 'react';

export const SearchPanel = ({param, setParam, setUsers, users }) => {
    return (
        <form action=''>
            <input value={param.name} onChange={e => setParam({ ...param, name: e.target.value })} />
            <select value={param.personId} onChange={e => setParam({ ...param, personId: e.target.value })}>
                <option>负责人</option>
                {
                    users.map(user => <option key={user.id}>{user.name}</option>)
                }
            </select>
        </form>
    );
};
