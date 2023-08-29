import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 0 auto ${props => props.theme.spacing(8)};
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const Title = styled.h2`
   margin: ${props => props.theme.spacing(4)} auto ${props => props.theme.spacing(3)};
   font-size: 32px;
`

export const List = styled.ul`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 0;
   width: 100%;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: ${props => props.theme.spacing(3)};
  margin: 0;
  padding: ${props => props.theme.spacing(1)};
  /* width: 230px; */
   width: 100%;
  /* outline: 1px solid blue; */
`

export const Name = styled.span`
width: calc(100% / 2.2);
/* text-align: left; */
  /* outline: 1px solid green; */
`

export const Phone = styled.span`
/* text-align: left; */
  /* outline: 1px solid green; */
   /* font-weight: 700; */
`

export const BtnDelete = styled.button`
margin-left: auto;
font-size: 12px;
   padding: 0;
   /* ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};    */
   border: none;
   border-radius: ${({ theme }) => theme.radii.sm};
   /* ${props => props.theme.radii.sm}; */
   /* text-transform: capitalize;
   font-weight: 500; */
   color: ${({ theme }) => theme.colors.red};
`