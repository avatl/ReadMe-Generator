// function to generate markdown for README
function generateMarkdown(data) {
  return (`# ${data.title}
  
  # Welcome to ${data.title}:

  ### Description
    ${data.description}

  <h2> Table of Contents </h2>
  Navigate through the README Using the Table of Contents : 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributing)
    * [Badges](#badges)
    * [Tests](#tests)
    * [Questions](#questions)
      
  ## Installation
    ${data.instructions}
    
  ## Usage
    ${data.usage}
    
  ## License
    ${data.license}
   
  ## Contributing
    ${data.contributors}
   
  ## Badges
    
  ## Tests
    ${data.tests}
    
  ## Questions

  [Link to Creator Github](https://github.com/${data.username})
    `)
}

module.exports = generateMarkdown;
