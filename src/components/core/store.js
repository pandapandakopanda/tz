import gql from 'graphql-tag'



export const getRepo=()=>{
  const  REPOSITORIES = gql`
  query($name: String!){
    search(query: $name, last: 10, type: REPOSITORY) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
          }
        }
      }
    }
  }
`
return REPOSITORIES
}
