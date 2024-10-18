const { username, password } = process.env;
export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.sqdma.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0`;
