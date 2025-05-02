
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise';
function App() {
  const myelement = <h1>I Love JSX!</h1>
  const sum = 5 + 5;
  const myelement2 = <h1>JSX is {sum} times better with React!</h1>
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <div className="App">
      <p>Hello World !</p>
      {myelement}
      {myelement2}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <div>
      <h1>My Favorite Animals</h1>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      </div>
      <Exercise />
    </div>
  );
}

export default App;