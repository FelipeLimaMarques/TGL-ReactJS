import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    min-height: 788px;
    max-height: 100%;
    margin: 0;
    padding: 100px 200px 0px 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1149px) and (max-height: 1367px){
         padding: 100px 100px 199px 100px;
    }

    @media (max-width: 1025px) and (max-height: 1025px){
        padding: 100px 0px 199px 0px;
    }

    @media (max-width: 768px) and (max-height: 1024px){
        flex-direction: column;
        padding-bottom: 89px;
        margin-top: 76px;
    }

    @media (max-width: 768px) and (max-height: 1023px) {
        padding: 20px 0;
    }
`;

export default StyledDiv;