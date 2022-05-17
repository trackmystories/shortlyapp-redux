import AsyncStorage from '@react-native-async-storage/async-storage';

export const syncLocalAndRemote = data => {
  return async (dispatch, getState) => {
    const links = getState().total_links;
    // console.log(data.result, links);
    await writeUserData(data.result, links);
    await dispatch({type: 'ADD_LINK', data: data.result});
  };
};

export const writeUserData = async (data, links) => {
  // console.log(links.data);
  if (data) {
    await AsyncStorage.setItem(
      'key',
      JSON.stringify([
        ...links.data,
        {
          original_link: data.original_link,
          short_link: data.short_link,
        },
      ]),
    );
  }
};

export const setInitialState = data => {
  return async dispatch => {
    await dispatch({type: 'TOTAL_LINKS', data});
  };
};

export const deleteLink = data => {
  return async (dispatch, getState) => {
    const links = getState().total_links;
    await deleteDatabaseLink(data, links);

    await dispatch({type: 'REMOVE_LINK', data});
  };
};

export const deleteDatabaseLink = async (data, links) => {
  console.log(links.data);
  if (data) {
    await AsyncStorage.setItem(
      'key',
      JSON.stringify([
        ...links.data.filter(item => item.short_link !== data.short_link),
      ]),
    );
  }
};
