import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '@app/ui/ErrorRoute/ErrorPage';
import { ChatView, ChatEmpty, ChatError } from '@pages/ChatView';
import { chatViewLoader } from '@pages/ChatView/api/chat-view-loader';
import { Layout } from '@app/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
        errorElement: <ChatError />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
