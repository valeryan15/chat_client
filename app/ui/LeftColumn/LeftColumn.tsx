import { useState } from 'react';
import Contacts from '@app/ui/Contacts/Contacts';
import { contactsData } from '@shared/model';

export function LeftColumn() {
  const [contacts] = useState(contactsData);
  return (
    <div>
      <div>search block</div>
      <Contacts contacts={contacts} />
    </div>
  );
}
