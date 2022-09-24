import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
export const Profile = () => {
  const dispatch = useDispatch();

  const { customers } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCustomersAction());
  }, [dispatch]);

  return (
    <Layout>
      <h4 className="py-5">Customer management</h4>

      <Table striped hover bordered>
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {customers.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                {item.fName} {item.lName}
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};
