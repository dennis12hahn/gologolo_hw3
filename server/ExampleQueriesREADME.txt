# A ! after a variable type means non-nullable

query ShowAllLogos {
  logos {
    _id
    text
    color
    fontSize
    backgroundColor
    borderColor
    borderRadius
    borderWidth
    padding
    margin
    lastUpdate
  }
}

# To use the following, make sure the query variables has something like this:
# {
#   "id": "sampleid"
# }
mutation DeleteLogoById($id: String!){
  removeLogo(id: $id) {
    _id
  }
}

mutation AddLogo($id:String!, $color:String!, )