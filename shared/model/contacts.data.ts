import { generateContacts } from '@shared/lib';
import type { TContact } from './types';

export const contactsData: TContact[] = generateContacts(10);
