import { useState } from 'react';

export function TwitterFollowCard({ children, name, initialIsFollowing}) {

  const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : 'tw-followCard-button'
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  
  return(
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={`https://unavatar.io/${name}`} alt="El avatar de un negro" />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUserName">@{name}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}