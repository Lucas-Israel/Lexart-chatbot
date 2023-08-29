import Loan from '../components/Loan';
import Help from '../components/Help';
import LoanCondition from '../components/LoanCondition';
import GoodBye from '../components/GoodBye';

const secondMessage = ({previousValue}) => {
  const message = (previousValue || '').toLowerCase();
  if (message.includes('goodbye')) {
    return 'I hope I can be of service in the future.'
  }

  if (message.includes('hello') || message.includes('good') || message.includes('i want')) {
    return 'First, what is your name?'
  }

  return "I don't understand, could you reform your question? We could start with a simple hello."
}

const chat = [
  {
    id: '1',
    message: 'Hello, how are you?',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: secondMessage,
    trigger: ({steps}) => {
      if (steps['3'].message.includes('I hope')) return 'bye'
      if (steps['3'].message.includes('First, ')) return '4'
      return '2'
    },
  },
  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '6'
  },
  {
    id: '6',
    message: 'Now we have to create a password for you, what will it be?',
    trigger: '7'
  },
  {
    id: '7',
    user: true,
    trigger: '8'
  },
  {
    id: '8',
    message: 'I could help you with a loan, if so, type loan.',
    trigger: '9'
  },
  {
    id: '9',
    user: true,
    trigger: ({steps}) => {
      if (steps['9'].value.toLowerCase().includes('bye')) return 'bye'
      if (steps['9'].value.toLowerCase().includes('loan')) return '10'
      return '11'
    }
  },
  {
    id: '10',
    options: [
      {value: 'Loan', label: 'Do you want to apply for a loan?', trigger: 'loan'},
      {value: 'Help', label: 'Help', trigger: 'help'},
      {value: 'Loan conditions', label: 'Loan conditions', trigger: 'conditions'},
      {value: 'GoodBye', label: 'Goodbye', trigger: 'bye'}
    ]
  },
  {
    id: '11',
    message: "I'm limited of how much I can help you with",
    trigger: '8'
  },
  {
    id: 'loan',
    component: <Loan />,
    trigger: '10'
  },
  {
    id: 'help',
    component: <Help />,
    trigger: '10'
  },
  {
    id:'conditions',
    component: <LoanCondition />,
    trigger: '10'
  },

  //end
  {
    id: 'bye',
    asMessage: true,
    component: <GoodBye />,
    end: true
  }
]



export default {chat}