import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AutocompletePage } from "./features";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AutocompletePage />
    </QueryClientProvider>
  );
};

export default App;
