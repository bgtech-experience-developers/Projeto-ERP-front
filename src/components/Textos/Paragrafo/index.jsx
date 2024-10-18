import { Text } from "./style";

export const Paragrafo = ({textProp, cursorProp}) => {
    return <Text cursor = {cursorProp}>{textProp}</Text>
}