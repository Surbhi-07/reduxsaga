import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { userDataRequest } from './actions';


const App = () => {
  const users = useSelector((state) => state.userDataRequests.users)
  const dispatch = useDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(userDataRequest())}>API call</button>
      <table border ="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, index)=>(
                            <tr key = {index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

    </div>
  )
}
export default App;
