import { ProjectProps } from "types/types"
export const sortAscending=(arr:ProjectProps[])=>{
arr.sort((a:ProjectProps,b:ProjectProps)=>{
    return b.year - a.year
})
}