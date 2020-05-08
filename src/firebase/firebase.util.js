import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalProps) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const date = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                date,
                ...additionalProps
            });
        } catch (error) {
            console.log('unexpected error happend', error.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const convertWithRouteName = (sections) => {
    return sections.map(({title, ...item}) => ({linkUrl: encodeURI('shop/' + title.toLowerCase()), ...item}))
}

export const removeIdFromResponse = (collection) => {
    return Object.keys(collection).filter(key => {
        return key !== "_id"
    }).reduce((accumulator, key) =>  {
        accumulator[key] = collection[key]
        return accumulator
    }, {})
}