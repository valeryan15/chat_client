import { useLoaderData } from "react-router-dom"
import type { TChatViewResponse } from "../model/types"
import ChatContact from "pages/ChatView/ui/ChatContact/ChatContact"

export const ChatView = () => {
  const contact= useLoaderData() as TChatViewResponse
  if (!contact) {
    return
  }
  return <ChatContact contact={contact} />
}

