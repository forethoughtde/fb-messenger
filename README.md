# ReactJS Facebook messenger

The goal of this exercise is to learn how to use GraphQL queries and mutations using Apollo client.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md


### Step 2
```sh
 git checkout graphql-apollo
 ```

### Step 3
```sh
 npm i
 ```

## Exercise


### Part 1

```sh
 npm start
 ```

[http://localhost:3000/graphiql](http://localhost:3000/graphiql)

* Query a list of threads
* Query a conversation
* Send a new message
* How many threads in the system?
* How many types do we have in the system?

### Part 2

1. Fetch the threads using the threads query
2. Replace the threads query by threadsConnection
3. Fetch a conversation by using the conversationConnection query
4. Use the sendMessage mutation to send a message. Sending a message should:
    * Update the conversation to display the new message
    * Update the threads to display the new message

### Bonus

* Use the getSession query to log in a user instead of calling the REST API

## Links

*  [https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976](https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976)
* [https://www.apollographql.com/docs/react/advanced/caching.html#after-mutations](https://www.apollographql.com/docs/react/advanced/caching.html#after-mutations)
* [https://www.apollographql.com/docs/react/advanced/caching.html#writequery-and-writefragment](https://www.apollographql.com/docs/react/advanced/caching.html#writequery-and-writefragment)
* [http://graphql.org/learn/](http://graphql.org/learn/)
* [http://graphql.org/learn/thinking-in-graphs/](http://graphql.org/learn/thinking-in-graphs/)
* [https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b](https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b)
* [https://dev-blog.apollodata.com/graphql-explained-5844742f195e](https://dev-blog.apollodata.com/graphql-explained-5844742f195e)
* [https://facebook.github.io/relay/docs/thinking-in-graphql.html](https://facebook.github.io/relay/docs/thinking-in-graphql.html)
* [https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747](https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747)
* [https://github.com/apollographql/apollo-server](https://github.com/apollographql/apollo-server)
* [https://www.youtube.com/watch?v=PHabPhgRUuU](https://www.youtube.com/watch?v=PHabPhgRUuU)
* [https://facebook.github.io/relay/graphql/connections.htm](https://facebook.github.io/relay/graphql/connections.htm)
* [https://dev-blog.apollodata.com/introducing-launchpad-the-graphql-server-demo-platform-cc4e7481fcba](https://dev-blog.apollodata.com/introducing-launchpad-the-graphql-server-demo-platform-cc4e7481fcba)
* [https://dev-blog.apollodata.com/](https://dev-blog.apollodata.com/)
* [http://dev.apollodata.com](http://dev.apollodata.com)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
