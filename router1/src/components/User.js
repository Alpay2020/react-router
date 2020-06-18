import React from "react";
import {useParams} from "react-router-dom";

export default function User({name}) {
   const { id } = useParams();
    return (
        <h4>I am {id}</h4>
    )

}