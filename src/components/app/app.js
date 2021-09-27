import React from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const App = () => {

    const data = [
        {label: 'Once uppon a time', important: true, id: 'qwe'},
        {label: 'The King decided to gather an army', important: false, id: 'rty'},
        {label: 'He summoned his commander to the throne room', important: false, id: 'uio'}
    ];

    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList 
                posts={data}
                onDelete={ id => console.log(id)}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;