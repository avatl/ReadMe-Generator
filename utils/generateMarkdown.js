// function to generate markdown for README
function generateMarkdown(data) {
  return (`
  
  ### ${data.title}
  
  # Welcome to ${data.title}:

  ## Description
  ${data.description}

  ## Table of Contents
  Navigate through the README Using the Table of Contents: 

  [Installation](#Installation)
  
  [Usage](#Usage)
  
  [License](#License)
  
  [Contributions](#Contributing)
  
  [Badges](#Badges)
  
  [Tests](#Tests)
  
  [Questions](#Questions)
      
  ### Installation
  ${data.instructions}
    
  ### Usage
  ${data.usage}
    
  ### License
  ${data.license}
   
  ### Contributing
  ${data.contributors}
   
  ### Badges
    
  ### Tests
  ${data.tests}
    
  ### Questions

  [Link to Creator Github](https://github.com/${data.username})
    `)
}

module.exports = generateMarkdown;
