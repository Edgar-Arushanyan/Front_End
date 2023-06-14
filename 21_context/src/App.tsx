import React  from 'react';
import './App.css';
import { IUser, UserContext } from './utils/utils';
import UserOrder from './components/UserOrder';


function App() {
// Создаёи массив и типизируем его для последующей передачи дочерним элемнетам
  const users: IUser[] = [
    { id: 1, name: 'John Doe'},
    { id: 2, name: 'Jane Smith'},
    { id: 3, name: 'Mike Johnson'},
  ];

return (
  <UserContext.Provider value={users}>
  {/*Provider в атрибуте value передаёт информацию users всем дорним элементам */}
    {/*Любой адлженный компонент имеет доступ по передаваемой информации */}
    
      <h1> User App</h1>
      <div>
        <UserOrder /> {/*ребенок */}
      </div>
    </UserContext.Provider>
);

}
  
export default App;

