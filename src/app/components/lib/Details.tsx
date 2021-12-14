import React from 'react';
import { nanoid } from 'nanoid';
import { Text } from '../primitives/Text';
import { Flex } from '../primitives/Flex';
import Heading from '../primitives/Heading';
import Image from '../primitives/Image';
import { BoxProps } from '../primitives/rebassTypes';
import { Box } from '../primitives/Box';
import { DetailsType } from '../../data/initContent';
import { ListItem } from './ListItem';

type DetailProps = BoxProps & { contentData: DetailsType };

export function Details({ contentData }: DetailProps) {
    if (!contentData) return null;

    const { name, avatar, details } = contentData;

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
