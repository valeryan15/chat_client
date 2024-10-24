import type { TContact } from '@shared/model';

export function generateContacts(count: number = 1): TContact[] {
  const contacts: TContact[] = [];
  for (let i = 0; i < count; i++) {
    contacts.push({
      id: `id-${i}`,
      name: `test-name-${i}`,
    });
  }
  return contacts;
}
