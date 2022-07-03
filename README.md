# React-Admin RC Generator

## Setup and Installation

- Install Yeoman globally `npm install -g yo`
- Clone the repository ` git clone https://github.com/Harshil-Jani/generator-create-rc-admin.git`
- Get into the top directory `cd generator-create-rc-admin`
- Get required Node Modules `npm install`
- Link it with Yeoman `npm link`
- Go the any target directory where you want to create the admin.
- Check if the generator has been added or not. `yo --generators` It must output the name of generator which is `create-rc-admin`

## Testing

- Go to your target directory where you want the admin files to be generated. `mkdir test` and `cd test`.
- Now generate the files using the Yeoman generator for RC Admin. `yo create-rc-admin`.
- Now answer the required question. For testing purpose we have a Educational registry. Input **Education Registry**.
- For next part we have to define the endpoints of the API seperated by commas. For test input **students,teacher,institute**.
