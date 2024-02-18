import { useTelegram } from '../../hooks/useTelegram';
import {React, useCallback, useEffect, useState} from 'react';
import './Form.css';
 
import  './Form.css';
export const Form = ()=> {

const [country, setCountry] = useState('');
        const [city, setCity] = useState('');
        const [subject, setSubject] = useState('');
        const {tg} = useTelegram();
  
        return(
          <div className='container'>
          <h3>Введите ваши данные:</h3>
          <input
          className='input'
          type='text'
          placeholder='Город'
          />
          <input
          className='input'
          type='text'
          placeholder='Улица'
          />
          <select className='select'>
             <option value={'legal'}>Физ.лицо</option>
             <option value={'legal'}>Юр.лицо</option>
             </select>
             </div>
        );
}


    