const COLUMNS = [
  {
    Header: "Name",
    accessor: "person.name",
    Cell: ({ row: { original } }) => {
      return (
        <div style={{ display: "flex", flex: "row" }}>
          <img
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "100%",
              padding: "0",
              marginLeft: "4px",
            }}
            src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"
          />
          <p>{original.person.name}</p>
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
