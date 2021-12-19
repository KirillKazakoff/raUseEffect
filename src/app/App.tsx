import '../css/defaultStyle.css';
import React, { useEffect, useState } from 'react';
import { Details } from './components/lib/Details';
import { ListItem } from './components/lib/ListItem';
import { Box } from './components/primitives/Box';
import { Flex } from './components/primitives/Flex';
import { List } from './components/lib/List';
import { Text } from './components/primitives/Text';
import { UserType } from './data/types';

const usersUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

export default function App() {
    const [users, setUsers] = useState<UserType[]>([]);

    const [currentUser, setCurrentUser] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(usersUrl)
            .then((res) => res.json())
            .then((res) => {
                setUsers(res);
                setLoading(false);
            })
            .catch((err) => setError(err.message));
    }, []);

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

    if (error) return <Text>{error}</Text>;
    if (loading) return <Text>Loading...</Text>;

    return (
        <Box variant='layout'>
            <Flex gap='40px'>
                <List setCurrentUser={setCurrentUser}>{usersHtml}</List>
                {currentUser ? <Details id={currentUser} /> : null}
            </Flex>
        </Box>
    );
}
