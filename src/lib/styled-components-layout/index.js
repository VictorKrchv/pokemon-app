import { css } from "styled-components"

const is = (value) => typeof value !== "undefined"
const prop = (value) => (is(value) ? value : "initial")

export const mixins = (props) => css`
  color: ${prop(props.color)};
  align-content: ${prop(props.alignContent)};
  align-items: ${prop(props.align)};
  flex-basis: ${prop(props.basis)};
  flex-grow: ${prop(props.grow)};
  flex-shrink: ${prop(props.shrink)};
  justify-content: ${prop(props.justify)};
  order: ${prop(props.order)};
  padding: ${prop(props.padding)};
  margin: ${prop(props.margin)};
  width: ${prop(props.width)};
`