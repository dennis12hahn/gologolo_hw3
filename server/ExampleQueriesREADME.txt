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
mutation DeleteLogoById($id: String!) {
  removeLogo(id: $id) {
    _id
  }
}

# Example query variables
#{
#  "text": "test",
#  "color": "#000000",
#  "fontSize": 12,
#  "backgroundColor": "#AAAAAA",
#  "borderColor": "#FFFFFF",
#  "borderRadius": 50,
#  "borderWidth": 30,
#  "padding": 3,
#  "margin": 9
#}
mutation AddLogo($text: String!, $color: String!, $fontSize: Int!,
								 $backgroundColor: String!, $borderColor: String!,
								 $borderRadius: Int!, $borderWidth: Int!, $padding: Int!,
								 $margin: Int!) {
	addLogo(text: $text, color: $color, fontSize: $fontSize,
  				backgroundColor: $backgroundColor, borderColor: $borderColor,
  				borderRadius: $borderRadius, borderWidth: $borderWidth, padding: $padding,
    			margin: $margin) {
    _id
  }

}

# Example query variables
#{
#  "id": "sampleID",
#  "text": "test",
#  "color": "#000000",
#  "fontSize": 12,
#  "backgroundColor": "#AAAAAA",
#  "borderColor": "#FFFFFF",
#  "borderRadius": 50,
#  "borderWidth": 30,
#  "padding": 3,
#  "margin": 9
#}
mutation UpdateLogo($id: String!, $text: String!, $color: String!, $fontSize: Int!,
								 $backgroundColor: String!, $borderColor: String!,
								 $borderRadius: Int!, $borderWidth: Int!, $padding: Int!,
								 $margin: Int!) {
	updateLogo(id: $id, text: $text, color: $color, fontSize: $fontSize,
  				backgroundColor: $backgroundColor, borderColor: $borderColor,
  				borderRadius: $borderRadius, borderWidth: $borderWidth, padding: $padding,
    			margin: $margin) {
    _id
  }

}