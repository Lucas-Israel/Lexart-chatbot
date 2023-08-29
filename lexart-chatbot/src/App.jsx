import ChatBot from 'react-simple-chatbot';
import step from './steps/chatBotSteps'
import './App.css'

function App() {
  return (
    <>
      <ChatBot
        headerTitle="Chat-Bot"
        steps={step.chat}
      />
    </>
  )
}

export default App
