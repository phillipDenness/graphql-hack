import { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo';
import query from './query'

const addUser = gql`
    mutation makeUser($name: String!) {
        makeUser(name: $name) {
            id,
            name,
            car {
                make
            }
        }
    }
`;

function AddUser() {

    const [name, setName] = useState('');

    const resetFields = () => {
        setName('');
    };

    const nameChanged = ({ target: { value }}) => {
        setName(value);
    };

    return (
        <Mutation
            mutation={addUser}
            refetchQueries={[{query: query}]}
            awaitRefetchQueries={true}
        >
            {(makeUser, { loading, error}) =>
                (<form onSubmit={evt => {
                    evt.preventDefault();
                    makeUser({
                        variables: {
                            name: name
                        }
                    });
                    resetFields();
            }}>
                <label>
                    <span>Name</span>
                    <input type={'text'}
                    value={name}
                    onChange={nameChanged}/>
                </label>
                <div>
                    <button>Add User</button>
                </div>
                {loading && <p>Adding user...</p>}
                {error && <p>Error!</p>}
            </form>
                )}
        </Mutation>)
}

export default AddUser
