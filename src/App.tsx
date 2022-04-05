import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClientProvider } from "react-query";
import { CartProvider } from './context/Cart';

import Routes from './routes';
import { queryClient } from './services';

function App(): JSX.Element {
  return (
    <MantineProvider>
      <CartProvider>
        <NotificationsProvider>
          <QueryClientProvider client={queryClient}>
              <Routes />
          </QueryClientProvider>
        </NotificationsProvider>
      </CartProvider>
    </MantineProvider>
  )
}

export default App
