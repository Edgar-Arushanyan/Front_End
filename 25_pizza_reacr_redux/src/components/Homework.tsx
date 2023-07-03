import React, { useEffect, useRef } from 'react'

const Homework = () => {
    // inputRef -ссылка на какой элемент её повесим до ттакого элемента и будем иметь доступ
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => { //загруженная страница сохраняется
        const saveValue = localStorage.getItem('myValue') 
        if (saveValue && inputRef.current) {
            inputRef.current.value = saveValue ;
            
        }
    }, []);

    const handleSave = () => {
        const value = inputRef.current?.value ? inputRef.current?.value : '';
        localStorage.setItem('myValue', value );
    }

  return (
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleSave}>Сохранить</button>
    </div>
  )
};

export default Homework;