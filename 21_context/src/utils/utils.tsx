import React, { createContext } from 'react';

export interface IUser {
    id: number;
    name: string;
  }
// Создаёт контектс в родительском компоненте с 
//помощью него будем передовать информацию дочерним элеиентам

export const UserContext = createContext<IUser[]>([]);
 
