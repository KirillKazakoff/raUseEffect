/* eslint-disable object-curly-spacing */
import '../css/defaultStyle.css';
import React, { useEffect, useState } from 'react';
import { Details } from './components/lib/Details';
import { ListItem } from './components/lib/ListItem';
import { Box } from './components/primitives/Box';
import { Flex } from './components/primitives/Flex';
import { List } from './components/lib/List';
import { Text } from './components/primitives/Text';
import { DetailsType, UserType } from './data/initContent';

const usersUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
const dataBaseUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data';

export default function App() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [currentDetails, setCurrentDet] = useState<DetailsType>();

    useEffect(() => {
        fetch(usersUrl)
            .then((res) => res.json())
            .then((res) => setUsers(res));
    }, []);

    const handler = async (id: string) => {
        const response = await fetch(`${dataBaseUrl}/${id}.json`);
        const details = await response.json();
        setCurrentDet(details);
    };

    const usersHtml = users.map((item) => (
        <ListItem
            key={item.id}
            p={2}
            border='primary'
            id={item.id.toString()}
            className='user'
        >
            {item.name}
        </ListItem>
    ));

    if (!users) return <Text>Loading</Text>;
    return (
        <Box variant='layout'>
            <Flex gap='40px'>
                <List detailsHandler={handler}>{usersHtml}</List>
                <Details contentData={currentDetails || null} />
            </Flex>
        </Box>
    );
}
