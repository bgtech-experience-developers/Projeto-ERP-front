import { Text } from "./style";

export const Paragrafo = ({textProp, cursorProp, handleClick}) => {
    return <Text onClick={() => handleClick()} cursor = {cursorProp}>{textProp}</Text>
}