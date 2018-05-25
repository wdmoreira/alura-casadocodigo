/*/Cria uma função de conexão e a exporta. 
function createDBConnection(){
    return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'',
                database:'casadocodigo_nodejs'
          });

}

module.exports = function(){
    return createDBConnection();       
}
*/
function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from Livros',callback)
 }

 ProdutosDAO.prototype.salva = function(produto,callback){
    this._connection.query('insert into livros set ?',produto ,callback)
 }

module.exports = function(){
    return ProdutosDAO;

}