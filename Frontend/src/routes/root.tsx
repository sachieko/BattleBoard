import {
  Outlet,
  redirect,
  useNavigation,
  Form,
} from 'react-router-dom';

export default function Root() {
  const navigation = useNavigation();

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
              <Form
                method="post"
                action="boards/14/delete"
                onSubmit={(event) => {
                  if (
                    !confirm(
                      "Please confirm you want to delete this board!"
                    )
                  ) {
                    event.preventDefault();
                  }
                }}
                ><button type="submit">Delete</button></Form>
            </li>
            <li>
              <a href={`/contacts/2`}>Nagisa</a>
            </li>
          </ul>
        </nav>
      </div>
      <div 
        id="detail"
        className={navigation.state === 'loading' ? 'loading' : ''}
        >
          <Outlet />
        </div>
    </>
  );
}