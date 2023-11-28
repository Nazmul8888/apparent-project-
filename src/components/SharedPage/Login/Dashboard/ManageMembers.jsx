import useAgreement from "../../../Hooks/useAgreement/useAgreement";


const ManageMembers = () => {
    const [agreement] = useAgreement();
    return (
        <div>
            <h1 className="text-2xl flex justify-center">Manage Members</h1>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Remove</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        agreement.map(item=><tr key={item._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
                 
                </div>
              </div>
            </td>
            <td>
              {item.email}
             
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
      }
      
      
  
      
    </tbody>
    
    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageMembers;