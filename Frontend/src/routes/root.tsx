export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>BattleBoard Menu</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search Participants"
                placeholder="Search"
                type="search"
                name=""
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Seiko</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Nagisa</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }