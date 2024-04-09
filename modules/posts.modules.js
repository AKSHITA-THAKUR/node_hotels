
async function createPost( db , postData) {
    try {
        const post = await postsCollection.insertOne(postData);
        return post;
    }
    catch(err){
        console.log(err);
    }
}