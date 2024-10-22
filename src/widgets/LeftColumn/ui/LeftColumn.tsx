import { useState } from "react"
import Contacts from "./Contacts/Contacts"
import { contactsData } from "shared/model/contacts.data"

export function LeftColumn() {
  const [contacts] = useState(contactsData)
  return (
    <div>
      <div>search block</div>
      <Contacts contacts={contacts} />
    </div>
  )
}
