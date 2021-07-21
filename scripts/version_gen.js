const fs = require('fs');
const get_args = require('./arg_parser.js')

const json_file = '../package.json'

argMap = get_args.getArgMap()

fs.readFile(json_file, 'utf-8', function(err, data) {
    if (err) throw err;
 
    const old_json = JSON.parse(data)
    const new_json = { ...old_json,...argMap}
 
    fs.writeFile(json_file, JSON.stringify(new_json, null, "\t"), 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})
