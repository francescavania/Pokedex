import styled from '@emotion/styled';

export const Container = styled.div`
    width: 48rem;
    margin:0 auto;
`;

export const ListContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
`
export const AlertContainer = styled.div`
    padding: 3rem;
    background-color:white;
    box-shadow: 0 4px 8px rgb(204 204 204);
    align-items:center;
    text-align:center;

    h1{
      font-size: 3rem;
      padding-bottom:0.5rem;
    }
    p{
      font-size: 1.4rem;
      padding-bottom:1rem;
    }
    img{
      max-width:12rem;
      padding-bottom:1rem;
    }
    input{
      width:100%;
      font-size:1.4rem;
      padding:0.5rem;
      background-color:white;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-bottom:1rem;
    }
`
export const AlertButton = styled.button`
    cursor: pointer;
    border:none;
    font-size: 1.4rem;
    border-radius:3px;
    font-weight:bold;
    color:white;
    background:${({cancel}) => (cancel ? 'red' : '#03ac0e')};
    padding:1rem 1.5rem;
    margin:0 1rem;
`