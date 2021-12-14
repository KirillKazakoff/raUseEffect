/* eslint-disable object-curly-spacing */
import '../css/defaultStyle.css';
import React, { useState } from 'react';
import { Details } from './components/lib/Details';
import { ListItem } from './components/lib/ListItem';
import { Box } from './components/primitives/Box';
import { Flex, FlexProps } from './components/primitives/Flex';
import { detailsList, usersList } from './logic/ContentList';
import { List } from './components/lib/List';

export default function App() {
    const [users, setUsers] = useState(usersList.data);
    const [currentDetails, setCurrentDet] = useState(detailsList.data[0]);

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

    return (
        <Box variant='layout'>
            <Flex gap='40px'>
                <List detailsHandler={setCurrentDet}>{usersHtml}</List>
                <Details contentData={currentDetails} />
            </Flex>
        </Box>
    );
}

// /* eslint-disable object-curly-spacing */
// import '../css/defaultStyle.css';
// import React, { Dispatch, SetStateAction, useState } from 'react';
// import { nanoid } from 'nanoid';
// import styled from 'styled-components';
// import { Box } from './components/primitives/Box';
// import { Flex, FlexProps } from './components/primitives/Flex';
// import { detailsList, usersList } from './logic/ContentList';
// import Ul from './components/primitives/Ul';
// import { BoxProps } from './components/primitives/rebassTypes';
// import { boxCompose } from './components/primitives/styledCompose';
// import { DetailsType } from './data/initContent';
// import Image from './components/primitives/Image';
// import { Text } from './components/primitives/Text';
// import Heading from './components/primitives/Heading';

// type ListProps = FlexProps & { detailsHandler: Dispatch<SetStateAction<string>> };

// export function List({ children, detailsHandler }: ListProps) {
//     const onUlClick = (e: React.SyntheticEvent) => {
//         const target = e.target as HTMLElement;

//         if (target.classList.contains('user')) {
//             console.log(target.id);
//             detailsHandler(target.id);
//         }
//     };

//     return (
//         <Ul flexDirection='column' onClick={onUlClick}>
//             {children}
//         </Ul>
//     );
// }

// const ListItem = styled.div<BoxProps>`
//     &:nth-child(n + 2) {
//         border-top: none;
//     }
//     ${boxCompose()};
// `;

// type DetailProps = BoxProps & { contentData: DetailsType };

// export function Details({ contentData }: DetailProps) {
//     if (!contentData) return null;

//     const { name, avatar, details } = contentData;

//     const detailsListHtml = Object.entries(details).map(([key, value]) => (
//         <ListItem key={nanoid()} p={2} border='primary'>
//             <Text>{`${key}: ${value}`}</Text>
//         </ListItem>
//     ));

//     return (
//         <Flex flexDirection='column'>
//             <Image
//                 backgroundImage={`url(${avatar})`}
//                 minWidth='300px'
//                 minHeight='300px'
//                 backgroundSize='cover'
//                 backgroundRepeat='no-repeat'
//             />
//             <ListItem p={2} border='primary' borderTop='none'>
//                 <Heading fontSize='25px'>{name}</Heading>
//             </ListItem>
//             {detailsListHtml}
//         </Flex>
//     );
// }

// export default function App() {
//     const [users, setUsers] = useState(usersList.data);
//     const [currentDetails, setCurrentDet] = useState(detailsList.data[0]);
//     const [currentUser, setCurrent] = useState('1');

//     const usersHtml = users.map((item) => (
//         <ListItem
//             key={item.id}
//             p={2}
//             border='primary'
//             id={item.id.toString()}
//             className='user'
//         >
//             {item.name}
//         </ListItem>
//     ));

//     console.log(currentUser);
//     const details = detailsList.getItem(currentU)
//     return (
//         <Box variant='layout'>
//             <Flex gap='40px'>
//                 <List detailsHandler={setCurrent}>{usersHtml}</List>
//                 <Details contentData={detailsList.getItem(currentUser)} />
//             </Flex>
//         </Box>
//     );
// }
