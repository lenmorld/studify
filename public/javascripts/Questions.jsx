import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Question from './Question';

const Questions = ({}) => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
            axios.get('http://localhost:3000/cards').then(res => {
            // debugger;
            setQuestions(res.data);
        })
    }, []);
    // NOTE: dont forget [] or it is an infinite fetch!

        return (<div>
        {
            questions.map(question => <Question key={question.id} question={question} />)
        }
    </div>);
}

export default Questions;