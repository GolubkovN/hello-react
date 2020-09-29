import React, {useState} from 'react';
import PropTypes from 'prop-types';

const styles = {
    form: {
        marginTop: `2rem`,
        width: `100%`,
        display: `flex`,
    },
    input: {
        width: `70%`,
        padding: `5px 10px`,
        borderRadius: `5px`
    },
    button: {
        width: `30%`,
        height: `30px`,
        borderRadius: `5px`,
        color: `#000`,
        backgroundColor: `#fff`,
    }
}

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: evt => setValue(evt.target.value), 
        },
        clear: () => setValue(''),
        value: () => value,
    }
}

function AddTodo({onCreate}) {
    const input = useInputValue('');

    function submitHandler(evt) {
        evt.preventDefault();
        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input style={styles.input} {...input.bind}/>
            <button type='submit' style={styles.button}>Add New Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;