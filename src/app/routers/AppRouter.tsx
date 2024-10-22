import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root } from "../ui/Root"
import { ErrorPage } from "../ui/ErrorRoute/ErrorPage"
import { ChatView, ChatEmpty, ChatError } from "pages/ChatView"
import { chatViewLoader } from "pages/ChatView/api/chat-view-loader"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ChatEmpty />,
      },
      {
        path: '/chat/:contactId',
        loader: chatViewLoader,
        element: <ChatView />,
        errorElement: <ChatError />
      }
    ]
  }
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}