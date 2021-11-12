var rabbit = require('../models/rabbit'); 
 
//List of all rabbits 
exports.rabbit_list = async function(req, res) { 
    try{ 
        therabbits = await rabbit.find(); 
        res.send(therabbits); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific rabbit. 
exports.rabbit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await rabbit.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
 
// Handle Costume create on POST. 
exports.rabbit_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new rabbit(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.rabbit_type = req.body.rabbit_type; 
    document.size = req.body.size; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle rabbit delete form on DELETE. 
exports.rabbit_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: rabbit delete DELETE ' + req.params.id); 
}; 
 
// Handle rabbit update form on PUT. 
exports.rabbit_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: rabbit update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.rabbit_view_all_Page = async function(req, res) { 
    try{ 
        therabbit = await rabbit.find(); 
        res.render('rabbit', { title: 'rabbit Search Results', results: therabbit }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Costume update form on PUT.
exports.rabbit_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await rabbit.findById( req.params.id)
// Do updates of properties
if(req.body.costume_type)
toUpdate.costume_type = req.body.rabbit_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};