import React from "react";
import { RouteComponentProps } from "react-router";

export default function Blog(props: RouteComponentProps<{
    name:string
}>): JSX.Element{
    const { name } = props.match.params;
    const querys = new URLSearchParams(props.location.search);
    const queryName = querys.get("queryName")
    return (
        <>
            <h2>Blog</h2>
            { name && (<h5>{name}</h5>) }

            
            { queryName && (<h5>{queryName}</h5>) }
        </>
    )
}