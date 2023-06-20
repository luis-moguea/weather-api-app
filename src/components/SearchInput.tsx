import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { updateCity } from "../redux/state";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = () => {
  const dispatch = useDispatch();
  const city = useSelector(
    (state: { city: { city: string } }) => state.city.city
  );

  console.log(city);

  const handleSubmit = () => {
    const input = document.querySelector("input");
    if (input) {
      const newCity = input.value;
      dispatch(updateCity(newCity));
    }
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <InputGroup
          marginTop="10px"
          borderRadius={20}
          boxShadow="none"
          borderColor="transparent"
          color="white"
          backgroundColor="blackAlpha.500"
          justifyContent="center"
          alignItems="center"
          width="200px"
        >
          <InputRightElement
            borderRadius={20}
            children={<BsSearch />}
            onClick={handleSubmit}
            cursor="pointer"
          />
          <Input
            borderRadius={20}
            type="text"
            placeholder="Type a city..."
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
