import React, { useState } from "react";
import { Container, Input, List, ListItem, MatchedText } from "./styles";

interface AutoCompleteProps {
  data: string[];
  onSelect: (value: string) => void;
  isLoading: boolean;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  data,
  onSelect,
  isLoading,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [showList, setShowList] = useState(false);

  const toggleList = () => setShowList(!showList);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const filteredData = await filterData(inputValue);
    setFilteredData(filteredData);
  };

  const handleSelect = (value: string) => {
    setInputValue(value);
    onSelect(value);

    setFilteredData([]);
    toggleList();
  };

  const filterData = async (inputValue: string) => {
    // Simulating a REST call by using a setTimeout to add a delay
    // There's alaready an API call to serve data but I didn't find a decent mock API to filter while typing :(:
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        const filteredData = data.filter((item) =>
          item.toLowerCase().includes(inputValue.toLowerCase())
        );
        resolve(filteredData);
      }, 500);
    });
  };

  return (
    <Container>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={isLoading ? "Loading. Please wait" : "Start to type..."}
        disabled={isLoading}
        onFocus={() => toggleList()}
      />
      {showList && (
        <List>
          {filteredData.map((item, index) => (
            <ListItem key={index} onClick={() => handleSelect(item)}>
              <MatchedText>{item.slice(0, inputValue.length)}</MatchedText>
              {item.slice(inputValue.length)}
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};
