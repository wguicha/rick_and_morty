const server = require('./src/app')
const {sequelize} = require('./src/DB_connection')

const PORT = 3001;

sequelize.sync({ force: true }).then(() => {
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
})
.catch((err) => console.log(err));