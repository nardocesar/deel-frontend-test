import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AutoComplete } from "../../components";
import { usePokemon } from "../../providers/hooks/api";

const fallbackData = ["Apple", "Banana", "Cherry", "Date"];

const queryClient = new QueryClient();

export const AutocompletePage: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  const { data, isLoading } = usePokemon();

  return (
    <QueryClientProvider client={queryClient}>
      <AutoComplete
        data={data || fallbackData}
        onSelect={handleSelect}
        isLoading={isLoading}
      />
      <p>Selected value: {selectedValue}</p>
    </QueryClientProvider>
  );
};
