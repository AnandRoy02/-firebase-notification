export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //to make async call to DB(firestore).
        const firestore = getFirestore();
        const profile = getState().firebase.profile
        const authorid = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            //same as using project.title and project.content
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorid,
            createdAt: new Date()
        }).then(() => {
            // dispatch({ type: 'CREATE_PROJECT', project: project })
            //using ES6 as name and property name is same
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", err })
        })

    }
}