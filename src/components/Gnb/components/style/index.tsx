import { css } from '@emotion/react'

interface Openable {
  open: boolean
}

export interface ParentGnbItemUlSubRoutesProps extends Openable {
  length: number
}

export interface ParentGnbItemLiProps extends Openable {}

export interface ChildGnbItemLiProps {
  active: boolean
}

export const commonTransition = css`
  transition: all ease 0.3s;
`

export const commonLinkStyle = css`
  display: block;
  padding: 25px;
  transition: background-color ease 0.3s;
`

export const commonLiStyle = css`
  display: block;
  height: 71px;
  border-top: 1px solid black;
  transition: background-color ease 0.3s;
  background-color: #444;
  color: #fff;
`
