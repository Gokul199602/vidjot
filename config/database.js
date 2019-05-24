if(process.env.NODE_ENV === 'production')
{
    module.exports = {mongoURI: 'mongodb+srv://Gokul:gokulthepower@mycluster-s9xex.mongodb.net/test?retryWrites=true'}
} else
{
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}