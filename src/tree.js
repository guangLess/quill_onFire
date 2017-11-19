/* eslint-disable */

var TreeModel = require('tree-model'),
tree = new TreeModel(),

//root = tree.parse({name: 'a', children: [{name: 'b'}]});
//
root = tree.parse({
    id: 1,
    children: [
        {
            id: 11,
            children: [{id: 111}]
        },
        {
            id: 12,
            children: [{id: 121}, {id: 122}]
        },
        {
            id: 13
        }
    ]
});

console.log(root)