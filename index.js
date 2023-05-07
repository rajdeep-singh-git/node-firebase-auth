const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

let auth = admin.auth();
// auth.getUserByEmail("rajdeep.singh@ditstek.com").then(data => {
//     console.log(JSON.stringify(data, null, 2))
// })

// auth.createUser({
//     displayName: "Demo",
//     email: "demo@gmail.com",
//     phoneNumber: "+919722279333",
//     password: "abcdef",
// }).then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// })

auth.listUsers()
    .then((result) => {
        result.users.forEach((userRecord) => {
            let { email, phoneNumber, displayName } = userRecord
            console.log(JSON.stringify({ email, phoneNumber, displayName }, null, 2));
        });
    })
    .catch((error) => {
        console.log('Error fetching users:', error);
    });

auth.updateUser("wfy94WrlKPRec4IQSlwCFdHaT893", { disabled: false }).then(console.log)