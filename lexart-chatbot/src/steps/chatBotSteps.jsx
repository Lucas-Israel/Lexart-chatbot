import Loan from '../components/Loan';
import Help from '../components/Help';
import LoanCondition from '../components/LoanCondition';
import GoodBye from '../components/GoodBye';

const chat = [
  {
    id: '1',
    message: 'Hello, how are you?',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: ({steps}) => {
      const message = steps['2'].message.toLowerCase();
      if(message.includes('bye')) return 'bye before name';
      if(message.includes('hello') || message.includes('i want') || message.includes('good')) return '3';
      return "confused"
    }
  },
  
  //reply if it can't understand user's first input
  {
    id: 'confused',
    message: "I don't understand. We could start with a simple hello.",
    trigger: '2',
  },
  {
    id: '3',
    message: "First, what is your name?",
    trigger: '4'
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

  //end before asking name
  {
    id: 'bye before name',
    message: 'Goodbye',
    end: true
  },

  //CSV end
  {
    id: 'bye',
    asMessage: true,
    component: <GoodBye />,
    end: true
  }
]



export default {chat}