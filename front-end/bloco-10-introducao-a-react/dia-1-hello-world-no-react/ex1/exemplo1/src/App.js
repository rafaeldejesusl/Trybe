import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};
const languages = ['Html', 'Css', 'Javascript', 'Jest', 'React'];

function App() {
  return (
    <div>
      <ol>
        {languages.map(language => Task(language))}
      </ol>
    </div>
  );
}

export default App;
