"use client";
import { useEffect } from "react";

function Users() {
    useEffect(() => {
        alert("cargo");
    }, []);

    return <div>Users</div>;
}

export default Users;
