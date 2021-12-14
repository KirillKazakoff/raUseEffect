// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FlexProps } from '../primitives/Flex';
// import { flexCompose } from '../primitives/styledCompose';

// type StyledDivType = FlexProps & { active: boolean };

// const StyledList = styled.div<StyledDivType>`
//     ${flexCompose};
//     background-color: ${({ active, theme }) => (active ? theme.colors.primary : 'none')};
// `;

// export default function List() {
//     const [state, setState] = useState(false);
//     const onClick = () => {
//         setState((prev) => !prev);
//     };

//     return (
//         <StyledList active={state} onClick={onClick}>
//             Hello it s me
//         </StyledList>
//     );
// }
