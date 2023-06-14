import React, {useContext} from 'react';
import { UserContext } from '../utils/utils';
import SecondChild from './SecondChild';


const UserOrders: React.FC = () => {
    //Пользуемся контектстом в котором расположена информация о родительском компоненте
    const users = useContext(UserContext);
  return (    
    <>
        <h2>UserOrders</h2>
        {users.map(user => (
          <div key={user.id}>
            <h3>User: {user.name}</h3>
          </div>
        ))}
        <SecondChild />
    </>
  );
}
export default UserOrders;
