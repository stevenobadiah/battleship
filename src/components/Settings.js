import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Redirect from 'react-router-dom'
import { withRouter, useHistory } from 'react-router-dom'

function Settings() {
  const { register, handleSubmit, formState: { errors } } = useForm();  
  const history = useHistory();

  const [count, setCount] = useState(0)
  const [settings, setSettings] = useState([])
  useEffect(() => {
    if (count > 0) {
      window.localStorage.setItem('savedSettings', JSON.stringify(settings));
      history.push({
        pathname: '/',
        //MAYBE CHANGE THIS LINE TO HOOK SETTINGS
        //state: { settings: data }
        state: { savedSettings: settings }
      })
    }
  }, [settings])

/*
  function submitForm (e) {
      e.preventDefault();
      setSubmitable(true)
  }

  const settingsUpdate = useRef(false)
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => {
      if (settingsUpdate.current && submitted === true) {
        history.push({
            pathname: '/game',
            state: { firstName: firstName }
            //state: { firstName: firstName, difficulty: difficulty}
        })
      } else {
          settingsUpdate.current = true;
      }
  }, [submitted])
*/

  return (
    <form onSubmit={handleSubmit((data) => {
        console.log(data);
        setCount(count + 1)
        setSettings(data);
      })}
    >

      <label htmlFor="firstName">First Name:</label>
      <input {...register('firstName', { required: 'This is required', minLength: { value: 2, message: 'You must type a longer name' }, maxLength: { value: 20, message: 'You must type a shorter name' } })} id='firstName' />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="age">Age:</label>
      <input type='number' {...register('age', { valueAsNumber: true, min: { value: 0, message: "You're negative years old??" }, max: { value: 120, message: "You may be breaking world records, but you're not breaking my app!" } })} id='age' />
      {errors.age && <p>{errors.age.message}</p>}

      <label htmlFor="difficulty">Difficulty:</label>
      <select {...register('difficulty')} id='difficulty'>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      
      <input type="submit" />
    </form>
  );
}

export default withRouter(Settings);