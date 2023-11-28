import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTodoFromUser, updateTodoFromUser } from '../api/TodoApiService';
import { useAuthContext } from '../security/AuthContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const TodoComponent = () => {

    const { id } = useParams();
    const { username } = useAuthContext();
    
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState("")
    
    useEffect(() => {    
        getTodoFromUser(username, id) 
            .then((res) => { 
                setDescription(res.data.description);
                setTargetDate(res.data.targetDate);
            })
            .catch((error) => error);
    }, [id]);
    
    const onSubmit = (values) => {
        const todo = {
            id,
            username,
            description: values.description,
            targetDate: values.targetDate,
            done: false,
        }

        updateTodoFromUser(username, id, todo)
            .then((res) => {
                navigate("/todos")
            })
            .catch((error) => console.log(error));
    }

    const validate = (values) => {
        let errors = {};

        if(values.description.length < 5) {
            errors.description = "Enter at least five characters."
        }

        if(values.targetDate == null) {
            errors.targetDate = "Enter a target date.";
        }

        return errors;
    }

  return (
    <div className='container'>
        <h1>Enter Todo Details</h1>
        <div>
            <Formik 
                initialValues={{
                    description,
                    targetDate,
                }} 
                enableReinitialize={true} 
                onSubmit={onSubmit}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                                name='description'
                                component='div'
                                className='alert alert-danger'
                            />
                            <ErrorMessage 
                                name='targetDate'
                                component='div'
                                className='alert alert-danger'
                            />
                            <fieldset className='form-group'>
                                <label htmlFor="description">Description</label>
                                <Field type="text" className="form-control" name="description" />
                            </fieldset>
                            <fieldset className='form-group'>
                                <label htmlFor="targetDate">Target date</label>
                                <Field type="date" className="form-control" name="targetDate" />
                            </fieldset>

                            <div>
                                <button className="btn btn-success my-3" type='submit'>Save</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    </div>
  )
}
