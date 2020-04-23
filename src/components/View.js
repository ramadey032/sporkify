import React, {useState, useEffect} from 'react'
import { deleteStream } from '../services/deleteStream';
import { fetchStreams } from '../services/fetchStream';

function View() {
   const [streamList, setStreamList] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetchStreams();
            setStreamList(response.data);
        })();
    }, []);



    return (
        <table>
            <thead>
            <tr>
                <th>User ID</th>
                <th>Title</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {streamList.length > 0 ? (
                streamList.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.completed?'completed': ''}</td>
                    <td>
                        <button className="button muted-button">Delete</button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan={3}>No Data</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

export default View;
