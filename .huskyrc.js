module.exports = 
{
  hooks: {
    "pre-commit": "gulp lint && eslint --fix ./*.js",
    "pre-push": "gulp lint && eslint --fix ./*.js"
  }
}