const COLUMNS = [
  {
    Header: "Name",
    accessor: "person.name",
    Cell: ({ row: { original } }) => {
      return (
        <div style={{ display: "flex", flex: "row" }}>
          <img
            style={{
              height: "25px",
              width: "25px",
              borderRadius: "100%",
              padding: "0",
              marginRight: "6px",
            }}
            src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
            alt="profile"
          />
          <p
            style={{
              margin: "0",
              marginTop: "5px",
            }}
          >
            {original.person.name}
          </p>
        </div>
      );
    },
  },
  { Header: <strong>City</strong>, accessor: "city" },
  { Header: "Email", accessor: "email" },
  { Header: "JoiningDate", accessor: "joiningDate" },
  { Header: "Role", accessor: "role" },
];

export default COLUMNS;
