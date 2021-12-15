import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Text } from '../primitives/Text';
import { Flex } from '../primitives/Flex';
import Heading from '../primitives/Heading';
import Image from '../primitives/Image';
import { BoxProps } from '../primitives/rebassTypes';
import { DetailsType } from '../../data/types';
import { ListItem } from './ListItem';

const dataBaseUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data';
type DetailProps = BoxProps & { id: string };

export function Details({ id }: DetailProps) {
    const [currentDetails, setCurrentDet] = useState<DetailsType>();

    useEffect(() => {
        fetch(`${dataBaseUrl}/${id}.json`)
            .then((res) => res.json())
            .then((res) => setCurrentDet(res));
    }, [id]);

    if (!currentDetails) return null;
    const { name, avatar, details } = currentDetails;

    const detailsListHtml = Object.entries(details).map(([key, value]) => (
        <ListItem key={nanoid()} p={2} border='primary'>
            <Text>{`${key}: ${value}`}</Text>
        </ListItem>
    ));

    return (
        <Flex flexDirection='column'>
            <Image
                backgroundImage={`url(${avatar})`}
                minWidth='300px'
                minHeight='300px'
                backgroundSize='cover'
                backgroundRepeat='no-repeat'
            />
            <ListItem p={2} border='primary' borderTop='none'>
                <Heading fontSize='25px'>{name}</Heading>
            </ListItem>
            {detailsListHtml}
        </Flex>
    );
}
