import { call, put } from 'redux-saga/effects';
import { fillStarships } from '../../actions';

export function* fetchStarshipsAsync() {
    try {
      // yield put(startFetching());
      let starships = yield fetch('https://swapi.co/api/starships/');
      starships = yield starships.json();
      yield put(fillStarships(starships.results));
    } catch (error) {
      console.log(error)
    } finally {
    }
}
