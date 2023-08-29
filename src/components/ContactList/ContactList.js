import { BtnDelete, List, ListItem, Name, Phone, Wrapper } from "./ContactList.styled"


export const ContactList = ({contacts}) =>{
   return (
      <Wrapper>
         <List>
            {contacts.map(el=> 
               <ListItem key={el.id}>
                  <Name>{el.name}</Name>
                  <Phone>{el.phone}</Phone>
                  <BtnDelete>Delete</BtnDelete>
               </ListItem>)}
         </List>
      </Wrapper>
   )
}