import React, { Dispatch, SetStateAction } from 'react';
import { detailsList } from '../../logic/ContentList';
import { DetailsType } from '../../data/initContent';
import Ul from '../primitives/Ul';
import { FlexProps } from '../primitives/Flex';

type ListProps = FlexProps & { detailsHandler: Dispatch<SetStateAction<DetailsType>> };

export function List({ children, detailsHandler }: ListProps) {
    const onUlClick = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLElement;

        if (target.classList.contains('user')) {
            const newDetails = detailsList.getItem(target.id);
            detailsHandler(newDetails);
        }
    };

    return (
        <Ul flexDirection='column' onClick={onUlClick}>
            {children}
        </Ul>
    );
}
