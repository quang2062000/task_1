const controller =require('../controller/index')

module.exports = function(app){
    app.route('/company')
    .get(controller.getData)
    .post(controller.addData)
    .delete(controller.deleteData)
    .put(controller.updateData)
}