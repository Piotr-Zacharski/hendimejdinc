import styled from 'styled-components'

const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
`;

const Image = () => {
    return (
        <div>
        <StyledImage src="/img/2.png" width="1000" height="1200"/>
        </div>
    )
}

export default Image
