import { generateContacts } from "shared/lib/generateContacts"
import type { TContact } from "./types"

export const contactsData: TContact[] = generateContacts(10)
