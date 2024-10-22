import type { TContact } from "shared/model/types"
import type React from "react"

interface Props {
  contact: TContact
}
const ChatContact: React.FC<Props> = ({contact}) => {
  return (
    <div>
      Contact name: {contact.name}
    </div>
  )
}

export default ChatContact