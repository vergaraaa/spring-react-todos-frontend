import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTodoFromUser } from '../api/TodoApiService';
import { useAuthContext } from '../security/AuthContext';
import { Formik, Form, Field } from 'formik';

export const TodoComponent = () => {

    const { id } = useParams();
    const { username } = useAuthContext();

    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState("")
    
    useEffect(() => {    
        getTodoFromUser(username, id) 
            .then((res) => { 
                setDescription(res.data.description);
                setTargetDate(res.data.targetDate);
            })
            .catch((error) => error);
    }, []);
    
    const onSubmit = (values) => {
        console.log(values);
    }

  return (
    <div className='container'>
        <h1>Enter Todo Details</h1>
        <div>
            <Formik initialValues={{
                description,
                targetDate,
            }} enableReinitialize={true} onSubmit={onSubmit}>
                {
                    (props) => (
                        <Form>
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
