const Generator = require("yeoman-generator");
module.exports = class extends Generator {
   initializing() {
      this.log("Creating RC Admin...");
   }
   async prompting() {
      const { registry } = await this.prompt([{
         name: 'registry',
         message: 'Which registry would you like to create?'
      }]);
      this.registry = registry;
      const {sample} = await this.prompt([{
         name : "sample",
         message : "Enter the hosted endpoint of the registry to fetch data"
      }]);
      this.sample = sample;
      const {endpoints} = await this.prompt([{
         name : "endpoints",
         message : "Enter the endpoints : ( Separate with commas )"
      }]);
      this.endpoints = endpoints;
   }
   // async prompting() {

   // }
   writing() {
      this.log(this.registry);
      this.fs.copyTpl([
         this.templatePath('**')
         // `!**/src/components/**`,
         ],
         this.destinationRoot(), 
         { 
            registry : this.registry,
            endpoints : this.endpoints,
            sample: this.sample
         }
      )
   }
}