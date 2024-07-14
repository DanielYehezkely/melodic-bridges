import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const INSTRUMENTS_COLLECTION = 'instruments';
const GET_INSTRUMENTS_ERROR_MSG = 'Error getting instruments';

export const getInstruments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, INSTRUMENTS_COLLECTION));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(GET_INSTRUMENTS_ERROR_MSG);
  }
};