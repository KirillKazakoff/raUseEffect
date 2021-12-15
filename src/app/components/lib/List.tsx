import React from 'react';
import Ul from '../primitives/Ul';
import { FlexProps } from '../primitives/Flex';

type ListProps = FlexProps & { detailsHandler: (id: string) => void };

export function List({ children, detailsHandler }: ListProps) {
    const onUlClick = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLElement;

        if (target.classList.contains('user')) {
            detailsHandler(target.id);
        }
    };

    return (
        <Ul flexDirection='column' onClick={onUlClick}>
            {children}
        </Ul>
    );
}
