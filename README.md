# Yet Another Hacker News (Clone)

Playground clone for Graphql, Typescript and web dev in general.

In addition, I used this site daily for consuming from hacker news.

## Requirements

- node 16 or greater
- npm 8 or greater

## Performance

The site is not as fast as the original one https://news.ycombinator.com. The main challenge is that the api for getting
comments is design for flexibility and not performance. By that it means that, comments are organized in a tree structure.
And to get all comments you will need to traverse all parents and their children's. This is solved recursively outside
graphql. Graphql can't handle it https://github.com/graphql/graphql-spec/issues/91.