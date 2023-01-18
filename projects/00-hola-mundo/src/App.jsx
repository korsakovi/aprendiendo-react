import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  return (
    <div className="App">
      <TwitterFollowCard name="korsakovi" initialIsFollowing>
        Jacobo García Matamoros
      </TwitterFollowCard>
      <TwitterFollowCard name="midudev">
        Miguel Angel Durán
      </TwitterFollowCard>
      <TwitterFollowCard name="ElonMask">
          Elon Mask
      </TwitterFollowCard>  
    </div>
    )
}