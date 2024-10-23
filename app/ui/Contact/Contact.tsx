import type React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Contact.module.css';
import type { ContactColumn } from '../../model/types';

interface Props {
  contact: ContactColumn;
}
export const Contact: React.FC<Props> = ({ contact }) => {
  return (
    <NavLink
      to={`/chat/${contact.id}`}
      className={({ isActive, isPending }) => {
        return [
          styles.contact,
          isActive ? styles.active : null,
          isPending ? styles.pending : null,
        ]
          .filter(Boolean)
          .join(' ');
      }}
    >
      {contact.name}
    </NavLink>
  );
};
