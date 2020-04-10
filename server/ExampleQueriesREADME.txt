query showAllLogos {
  logos {
    _id
    text
    color
    fontSize
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