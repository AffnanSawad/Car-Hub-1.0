

const Contact = () => {
    return (
        <div className="overflow-x-auto mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>cygan@gmail.com</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Support Technician</td>
              <td>hart22@gmail.com</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Manager</td>
              <td>brice1981@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Contact;