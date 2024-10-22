import type React from "react"
import type { TContact } from "shared/model/types"
import { Link } from "react-router-dom"

interface Props {
  contact: TContact
}
export const Contact: React.FC<Props> = ({ contact }) => {
  return <Link to={`/chat/${contact.id}`}>{contact.name}</Link>
}
