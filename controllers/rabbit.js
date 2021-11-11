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
exports.rabbit_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: rabbit detail: ' + req.params.id); 
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