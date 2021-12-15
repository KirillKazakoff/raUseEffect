import React, { Dispatch, SetStateAction } from 'react';
import Ul from '../primitives/Ul';
import { FlexProps } from '../primitives/Flex';

type ListProps = FlexProps & { setCurrentUser: Dispatch<SetStateAction<string>> };

export function List({ children, setCurrentUser }: ListProps) {
    const onUlClick = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLElement;

        if (target.classList.contains('user')) {
            setCurrentUser(target.id);
        }
    };

    return (
        <Ul flexDirection='column' onClick={onUlClick}>
            {children}
        </Ul>
    );
}
