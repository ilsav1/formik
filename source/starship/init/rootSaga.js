import { watchFeed } from '../bus/feed/saga/watchers';

export function* rootSaga() {
    yield 'init saga';
    yield watchFeed()
}
