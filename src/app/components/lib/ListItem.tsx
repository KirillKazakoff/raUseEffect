import styled from 'styled-components';
import { boxCompose } from '../primitives/styledCompose';
import { BoxProps } from '../primitives/rebassTypes';

export const ListItem = styled.div<BoxProps>`
    &:nth-child(n + 2) {
        border-top: none;
    }
    ${boxCompose()};
`;
