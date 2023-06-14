import React, { useEffect, useState } from "react";

interface IUsers {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {},
    phone: string,
    website: string,
    company: {}

}

const userList: React.FC = () => {

    const [users, setUsers] = useState<IUsers[]>([]);
    useEffect(() => {
        console.log('Привет из useEffect. Я появился зжесь когда компонент отрисовался на странице ')

    }, []);
    return (
        <div></div>
    )
}

export default userList;