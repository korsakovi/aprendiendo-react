import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: 'Jacobo García',
    name: 'korsakovi',
    isFollowing: true
  },
  {
    userName: 'Miguel Angel García',
    name: 'midudev',
    isFollowing: false
  },
  {
    userName: 'Pablo Hernandez',
    name: 'pheralb',
    isFollowing: true
  },
  {
    userName: 'Tomás Cuenca',
    name: 'TMChein',
    isFollowing: false
  }
]

export function App() {

  return (
    <div className="App">
      {users.map(({name, userName, isFollowing}) => {
        //const { name, userName, isFollowing } = user;
        return(
          <TwitterFollowCard key={name} name={name} initialIsFollowing={isFollowing}>
          {userName}
        </TwitterFollowCard>)
      })}
    </div>
    )
}