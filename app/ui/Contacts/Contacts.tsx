import type React from 'react';
import type { TContact } from '@shared/model';
import { Contact } from '../Contact/Contact';
import styles from './Contacts.module.css';

interface Props {
  contacts: TContact[];
}
const Contacts: React.FC<Props> = ({ contacts }) => {
  return (
    <div className={styles.container}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
