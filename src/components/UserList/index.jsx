import { UsersContext } from '../../contexts/UserContext';
import UserCard from '../UserCard';
import './style.css';
import { useContext } from 'react';

export default function UserList(props) {
  const { users } = useContext(UsersContext)
  
  return (
    <div className="cards_container">
      { users.map(user => <UserCard data={user} key={user.node_id}/>) }
    </div>
  );
}