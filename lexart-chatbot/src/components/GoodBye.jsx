import PropTypes from 'prop-types';
import { CSVLink } from "react-csv";

export default function GoodBye({ steps }) {
  const name = steps['4'].message;

  const data = [
    {userName: name, date: new Date().toLocaleString().replace(',', '')}
  ]

  return (
    <div>
      <p>
        GoodBye {name}, I will be creating a CSV file of our conversation for posteriority.
      </p>

      <CSVLink filename={"chat-bot.csv"} data={data}>
        Download me.
      </CSVLink>
    </div>
  )
}

GoodBye.propTypes = {
  steps: PropTypes.shape({
    '4': PropTypes.shape({
      message: PropTypes.string
    })
  })
}

