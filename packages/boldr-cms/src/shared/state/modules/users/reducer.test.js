import usersReducer from './reducer';

describe('Users Reducer', () => {
  it('Should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual({
      me: {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        location: '',
        avatarUrl: '',
        social: {},
        website: '',
        bio: '',
        role: '',
        roleId: '',
      },
      profile: {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        location: '',
        avatarUrl: '',
        social: {},
        website: '',
        bio: '',
        role: '',
        roleId: '',
      },
      isFetching: false,
      userlist: {
        all: {},
        ids: [],
      },
    });
  });
});
