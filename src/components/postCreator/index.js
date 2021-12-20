export const PostCreator = ({ setPost, submitHandler }) => {
    return (
        <form onSubmit={submitHandler}>
        <input onChange={(e) => setPost(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    );
};