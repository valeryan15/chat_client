import { contactsData } from "shared/model/contacts.data"
import type { LoaderFunction } from "react-router-dom"
import type { TChatViewParams, TChatViewResponse } from "../model/types"

export const chatViewLoader: LoaderFunction<TChatViewParams> = ({
  params,
}): Promise<TChatViewResponse> => {
  const contact = contactsData.find(c => c.id === params.contactId)
  if (contact) {
    return Promise.resolve(contact)
  } else {
    throw new Error("Not found")
    // return Promise.reject('Not found')
  }
}
