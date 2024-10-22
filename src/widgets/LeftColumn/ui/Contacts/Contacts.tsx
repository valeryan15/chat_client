import type React from 'react';
import type { TContact } from 'shared/model/types';
import { Contact } from '../Contact/Contact';

interface Props {
  contacts: TContact[];
}
const Contacts: React.FC<Props> = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
